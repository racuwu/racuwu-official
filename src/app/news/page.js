import React from 'react';
import {BiTime, BiTag} from 'react-icons/bi';
import {format} from 'date-fns';

// Helper to extract meta info and content from article body
function parseArticle(raw) {
    // Extract meta info at the end of the article
    const metaRegex = /TP\[NEWS\][\s\S]*?TG\[(.*?)\][\s\S]*?WT\[(.*?)\][\s\S]*?PD\[(.*?)\]/;
    const metaMatch = raw.match(metaRegex);
    const articleContent = raw.replace(metaRegex, '').trim();
    const tag = metaMatch ? metaMatch[1] : '';
    const writer = metaMatch ? metaMatch[2] : '';
    const publishedAt = metaMatch ? metaMatch[3] : '';
    
    // Find first image
    const imgMatch = raw.match(/<img[^>]+src=["']([^"']+)["']/i);
    const image = imgMatch ? imgMatch[1] : '';
    
    // Extract first meaningful paragraph with text
    const paragraphRegex = /<p[^>]*>(.*?)<\/p>/gi;
    let paragraphMatch;
    let excerpt = '';
    while ((paragraphMatch = paragraphRegex.exec(articleContent)) !== null) {
        const text = paragraphMatch[1].replace(/&nbsp;|<[^>]*>/g, '').trim();
        if (text) {
            if (excerpt) excerpt += ' ';
            excerpt += text;
            if (excerpt.length >= 100) {
                excerpt = excerpt.substring(0, 100);
                break;
            }
        }
    }
    excerpt += '...';
    return { content: articleContent, tag, writer, publishedAt, image, excerpt };
}

const fetchPosts = async () => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/api/blogger`, {
        cache: 'no-store',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    if (!response.ok) {
        throw new Error('Failed to fetch news');
    }

    const data = await response.json();
    const processedArticles = (data.posts || [])
        .filter(post => /TP\[NEWS\]/.test(post.content))
        .map(post => {
            const meta = parseArticle(post.content);
            return { id: post.id, title: post.title, ...meta };
        })
        .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
};

const NewsHero = ({article}) => {
    const date = new Date(article.publishedAt);

    return (
        <div className="relative h-[70vh] w-full mb-12">
            <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-75 rounded-lg"/>
            <div className="absolute bottom-8 left-8 text-white">
                <h1 className="text-6xl font-bold mb-4">{article.title}</h1>
                <div className="flex items-center gap-4 text-sm mb-2">
                    <span className="flex items-center gap-2">
                        <BiTime className="text-red-500"/>
                        {format(new Date(article.publishedAt), 'MMM dd, yyyy')}
                    </span>
                    {article.tag && (
                        <span className="flex items-center gap-2">
                            <BiTag className="text-red-500"/>
                            {article.tag}
                        </span>
                    )}
                    {article.writer && (
                        <span className="text-white/80">
                            By {article.writer}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

const ArticleCard = ({article}) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-transform">
            <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                    <span className="flex items-center gap-1">
                        <BiTime/>
                        {format(new Date(article.publishedAt), 'MMM dd, yyyy')}
                    </span>
                    {article.tag && (
                        <span className="flex items-center gap-1">
                            <BiTag/>
                            {article.tag}
                        </span>
                    )}
                </div>
                <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                <p className="text-gray-600 line-clamp-3">{article.excerpt}</p>
                {article.writer && (
                    <p className="text-sm text-gray-500 mt-2">
                        By {article.writer}
                    </p>
                )}
            </div>
        </div>
    );
};

const News = async ({ searchParams }) => {
    const posts = await fetchPosts();
    const searchTerm = searchParams?.search || '';
    const selectedTag = searchParams?.tag || '';
    const sortBy = searchParams?.sort || 'latest';

    const tags = Array.from(new Set(posts.map(a => a.tag).filter(Boolean)));
    
    // Filter and sort posts
    const filteredPosts = posts
        .filter(post => {
            const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesTag = !selectedTag || post.tag === selectedTag;
            return matchesSearch && matchesTag;
        })
        .sort((a, b) => {
            switch (sortBy) {
                case 'oldest': return new Date(a.publishedAt) - new Date(b.publishedAt);
                case 'title': return a.title.localeCompare(b.title);
                default: return new Date(b.publishedAt) - new Date(a.publishedAt);
            }
        });

    const [heroPost, ...otherPosts] = filteredPosts;

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-6 sm:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto pt-16">
                {/* Hero Section */}
                {heroPost && <NewsHero article={heroPost}/>}

                {/* Search and Filters */}
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-8 mb-10 border border-gray-100">
                    <form method="GET" className="space-y-6">
                        <div className="flex flex-col md:flex-row gap-4">
                            {/* Search */}
                            <div className="relative flex-grow">
                                <input
                                    type="text"
                                    name="search"
                                    placeholder="Search news..."
                                    defaultValue={searchTerm}
                                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border-0 rounded-xl shadow-sm focus:ring-2 focus:ring-red-400 transition-all duration-200"
                                />
                                <svg className="w-5 h-5 text-red-400 absolute left-4 top-1/2 transform -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>

                            {/* Tag Filter */}
                            {tags.length > 0 && (
                                <div className="relative min-w-[180px]">
                                    <select
                                        name="tag"
                                        defaultValue={selectedTag}
                                        className="w-full appearance-none pl-4 pr-10 py-4 bg-gray-50 border-0 rounded-xl shadow-sm focus:ring-2 focus:ring-red-400 transition-all duration-200"
                                    >
                                        <option value="">All Tags</option>
                                        {tags.map(tag => (
                                            <option key={tag} value={tag}>{tag}</option>
                                        ))}
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>
                                </div>
                            )}

                            {/* Sort */}
                            <div className="relative min-w-[180px]">
                                <select
                                    name="sort"
                                    defaultValue={sortBy}
                                    className="w-full appearance-none pl-4 pr-10 py-4 bg-gray-50 border-0 rounded-xl shadow-sm focus:ring-2 focus:ring-red-400 transition-all duration-200"
                                >
                                    <option value="latest">Latest First</option>
                                    <option value="oldest">Oldest First</option>
                                    <option value="title">Alphabetical</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </div>
                            </div>
                            
                            {/* Filter Button */}
                            <button type="submit" className="min-w-[120px] py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium">
                                Filter
                            </button>
                        </div>
                    </form>
                </div>

                {/* Featured Articles */}
                {otherPosts.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        {otherPosts.slice(0, 2).map(post => (
                            <a key={post.id} href={`/news/${post.id}`}>
                                <ArticleCard article={post}/>
                            </a>
                        ))}
                    </div>
                )}

                {/* Remaining Articles */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {otherPosts.slice(2).map(post => (
                        <a key={post.id} href={`/news/${post.id}`}>
                            <ArticleCard article={post}/>
                        </a>
                    ))}
                </div>

                {filteredPosts.length === 0 && (
                    <div className="text-center py-16">
                        <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                            <svg className="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">No news found</h3>
                        <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default async function NewsPage({ searchParams }) {
    return <News searchParams={searchParams} />;
}
