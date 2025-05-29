// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import BlogHeader from '@/components/BlogHeader';
// import PageHeader from '@/components/PageHeader';
// import { FaArrowLeft, FaCalendarAlt, FaUser, FaTag, FaShareAlt } from 'react-icons/fa';

// function parseArticle(raw) {
//   const metaRegex = /TP\[(.*?)\][\s\S]*?TG\[(.*?)\][\s\S]*?WT\[(.*?)\][\s\S]*?PD\[(.*?)\]/;
//   const metaMatch = raw.match(metaRegex);
//   let articleContent = raw.replace(metaRegex, '').trim();
//   const tag = metaMatch ? metaMatch[2] : '';
//   const published = metaMatch ? metaMatch[4] : '';
//   const writer = metaMatch ? metaMatch[3] : '';
//   const imgMatch = articleContent.match(/<img[^>]+src=["']([^"']+)["'][^>]*>/i);
//   const cover = imgMatch ? imgMatch[1] : null;

//   if (imgMatch) {
//     articleContent = articleContent.replace(imgMatch[0], '').trim();
//     articleContent = articleContent.replace(/^(<br\s*\/?>\s*)+/, '').trim();
//   }

//   // Remove empty <p></p> tags
//   articleContent = articleContent.replace(/<p>\s*<\/p>/g, '').trim();

//   return { content: articleContent, tag, published, writer, cover };
// }

// async function getArticle(id) {
//       const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || process.env.VERCEL_URL || 'http://localhost:3000';

//   const res = await fetch(`${baseUrl}/api/blogger`, { cache: 'no-store' });
//   const data = await res.json();
//   const post = (data.posts || []).find(post => post.id === id && /TP\[ARTICLE\]/.test(post.content));
//   if (!post) return null;
//   const meta = parseArticle(post.content);
//   return {
//     id: post.id,
//     title: post.title,
//     ...meta,
//   };
// }

// export default async function ArticlePage({ params }) {
//   const { id } = params;
//   const article = await getArticle(id);
//   if (!article) {
//     return (
//       <>
//         <PageHeader title="Article Not Found" />
//         <div className="min-h-screen bg-gradient-to-r from-gray-50 to-white py-20">
//           <div className="max-w-4xl mx-auto px-6 sm:px-12 lg:px-16 text-center">
//             <div className="bg-white rounded-3xl shadow-xl p-12">
//               <h2 className="text-3xl font-bold text-gray-800 mb-4">Sorry, we couldn&apos;t find that article.</h2>
//               <p className="text-gray-600 mb-8">The article you&apos;re looking for may have been moved or deleted.</p>
//               <Link 
//                 href="/blog"
//                 className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
//               >
//                 <FaArrowLeft className="mr-2" />
//                 Back to Blog
//               </Link>
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   }
//     return (
//     <>       <BlogHeader 
//         title={article.title}
//         subtitle="Discover insights and stories from our community"
//         breadcrumbs={[
//           { label: 'Home', href: '/' },
//           { label: 'Blog', href: '/blog' },
//           { label: article.title }
//         ]}
//         publishDate={article.published}
//         author={article.writer}
//         readTime="5"
//         tags={article.tag ? [article.tag] : []}
//         coverImage={article.cover}
//       />
      
//       <div className="min-h-screen bg-gradient-to-r from-gray-50 to-white py-20">
//         <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-16">

//           {/* Article Header */}
//           <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-8 animate__animated animate__fadeInUp">
//             {article.cover && (
//               <div className="relative h-96 overflow-hidden">
//                 <Image
//                   src={article.cover}
//                   alt={article.title}
//                   fill
//                   style={{ objectFit: 'cover' }}
//                   className="transition-transform duration-500 hover:scale-105"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
//               </div>
//             )}
            
//             <div className="p-8 md:p-12">
//               <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-6 leading-tight">
//                 {article.title}
//               </h1>
              
//               {/* Article Meta */}
//               <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 pb-8 border-b border-gray-200">
//                 <div className="flex items-center">
//                   <FaUser className="mr-2 text-pink-600" />
//                   <span className="font-semibold">{article.writer}</span>
//                 </div>
//                 <div className="flex items-center">
//                   <FaCalendarAlt className="mr-2 text-pink-600" />
//                   <span>{article.published}</span>
//                 </div>
//                 {article.tag && (
//                   <div className="flex items-center">
//                     <FaTag className="mr-2 text-pink-600" />
//                     <span className="bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
//                       {article.tag}
//                     </span>
//                   </div>
//                 )}
//                 <button className="flex items-center text-pink-600 hover:text-purple-600 transition-colors duration-300 ml-auto">
//                   <FaShareAlt className="mr-2" />
//                   Share
//                 </button>
//               </div>
              
//               {/* Article Content */}
//               <div 
//                 className="prose prose-lg prose-pink max-w-none text-gray-800 leading-relaxed"
//                 style={{
//                   '--tw-prose-headings': 'rgb(219 39 119)',
//                   '--tw-prose-links': 'rgb(219 39 119)',
//                   '--tw-prose-bold': 'rgb(31 41 55)',
//                   '--tw-prose-quotes': 'rgb(107 114 128)',
//                 }}
//                 dangerouslySetInnerHTML={{ __html: article.content }} 
//               />
//             </div>
//           </div>

//           {/* Call to Action Section */}
//           <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center animate__animated animate__fadeInUp animate__delay-1s">
//             <h3 className="text-3xl font-bold mb-4">Enjoyed this article?</h3>
//             <p className="text-pink-100 mb-8 text-lg">
//               Stay updated with our latest news, projects, and insights. Join our community today!
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Link 
//                 href="/blog"
//                 className="px-8 py-4 bg-white text-pink-600 font-semibold rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
//               >
//                 Read More Articles
//               </Link>
//               <Link 
//                 href="/joinus"
//                 className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-pink-600 transition-all duration-300 transform hover:-translate-y-1"
//               >
//                 Join Our Club
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
import React from 'react';
import Link from 'next/link';
export default function ArticlePage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-gray-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-6 sm:px-12 lg:px-16 text-center">
          <div className="bg-white rounded-3xl shadow-xl p-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Article Not Found</h2>
            <p className="text-gray-600 mb-8">The article you&apos;re looking for may have been moved or deleted.</p>
            <Link 
              href="/blog"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
