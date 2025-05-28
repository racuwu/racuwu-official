import React from 'react';
import Image from 'next/image';

function parseArticle(raw) {
  const metaRegex = /TP\[(.*?)\][\s\S]*?TG\[(.*?)\][\s\S]*?WT\[(.*?)\][\s\S]*?PD\[(.*?)\]/;
  const metaMatch = raw.match(metaRegex);
  let articleContent = raw.replace(metaRegex, '').trim();
  const tag = metaMatch ? metaMatch[2] : '';
  const published = metaMatch ? metaMatch[4] : '';
  const writer = metaMatch ? metaMatch[3] : '';
  const imgMatch = articleContent.match(/<img[^>]+src=["']([^"']+)["'][^>]*>/i);
  const cover = imgMatch ? imgMatch[1] : null;

  if (imgMatch) {
    articleContent = articleContent.replace(imgMatch[0], '').trim();
    articleContent = articleContent.replace(/^(<br\s*\/?>\s*)+/, '').trim();
  }

  // Remove empty <p></p> tags
  articleContent = articleContent.replace(/<p>\s*<\/p>/g, '').trim();

  return { content: articleContent, tag, published, writer, cover };
}

async function getArticle(id) {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || process.env.VERCEL_URL || 'http://localhost:3000';

  const res = await fetch(`${baseUrl}/api/blogger`, { cache: 'no-store' });
  const data = await res.json();
  const post = (data.posts || []).find(post => post.id === id && /TP\[ARTICLE\]/.test(post.content));
  if (!post) return null;
  const meta = parseArticle(post.content);
  return {
    id: post.id,
    title: post.title,
    ...meta,
  };
}

export default async function ArticlePage({ params }) {
  const { id } = params;
  const article = await getArticle(id);
  if (!article) {
    return <div className="min-h-screen flex items-center justify-center text-2xl text-gray-500">Article not found.</div>;
  }
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-50 to-white py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-8 lg:px-0">
        {article.cover && (
          <div className="w-full h-80 mt-12 relative rounded-2xl mb-8 shadow-lg overflow-hidden">
            <Image
              src={article.cover}
              alt={article.title}
              layout="fill"
              objectFit="cover"
            />
          </div>
        )}
        <h1 className="text-4xl md:text-5xl font-extrabold text-pink-700 mb-4">{article.title}</h1>
        <div className="flex items-center text-gray-600 mt-4 mb-8">
          <div>
            <p className="font-semibold">by {article.writer}</p>
            <p className="text-sm">
              {article.published} on {article.tag}
            </p>
          </div>
        </div>
        <div className="prose prose-pink max-w-none text-gray-800 mb-8 -mt-16" dangerouslySetInnerHTML={{ __html: article.content }} />
      </div>
    </div>
  );
}
