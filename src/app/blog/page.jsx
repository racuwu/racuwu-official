import Link from 'next/link';

// Helper to extract meta info and content from article body
function parseArticle(raw) {
    // Extract meta info at the end of the article
    const metaRegex = /TP\[ARTICLE\][\s\S]*?TG\[(.*?)\][\s\S]*?WT\[(.*?)\][\s\S]*?PD\[(.*?)\]/;
    const metaMatch = raw.match(metaRegex);
    let articleContent = raw.replace(metaRegex, '').trim();
    const tag = metaMatch ? metaMatch[1] : '';
    const published = metaMatch ? metaMatch[3] : '';
    const writer = metaMatch ? metaMatch[2] : '';
    // Find first image
    const imgMatch = articleContent.match(/<img[^>]+src=["']([^"']+)["'][^>]*>/i);
    const cover = imgMatch ? imgMatch[1] : null;

    if (imgMatch) {
        articleContent = articleContent.replace(imgMatch[0], '').trim();
        articleContent = articleContent.replace(/^(<br\s*\/?>\s*)+/, '').trim();
    }

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
    return { content: articleContent, tag, published, writer, cover, excerpt };
}

async function fetchArticles() {
    try {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || process.env.VERCEL_URL || 'http://localhost:3000';
        const res = await fetch(`${baseUrl}/api/blogger`, { 
            cache: 'no-store',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        });
        
        if (!res.ok) {
            const errorData = await res.json().catch(() => ({}));
            console.error('Error fetching articles:', errorData);
            throw new Error('Failed to fetch articles');
        }
        
        const data = await res.json();
        const processedArticles = (data.posts || [])
            .filter(post => /TP\[ARTICLE\]/.test(post.content))
            .map(post => {
                const meta = parseArticle(post.content);
                return { id: post.id, title: post.title, ...meta };
            });
        return processedArticles;
    } catch (error) {
        console.error('Failed to fetch articles:', error);
        // Return empty array instead of throwing
        return [];
    }
}

export default async function BlogPage({ searchParams }) {
    const articles = await fetchArticles();
    const searchTerm = searchParams?.search || '';
    const sortBy = searchParams?.sort || 'latest';
    const selectedTag = searchParams?.tag || '';

    const tags = Array.from(new Set(articles.map(a => a.tag).filter(Boolean)));
    
    // Filter and sort articles
    const filteredArticles = articles
        .filter(article => {
            const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesTag = !selectedTag || article.tag === selectedTag;
            return matchesSearch && matchesTag;
        })
        .sort((a, b) => {
            switch (sortBy) {
                case 'oldest': return new Date(a.published) - new Date(b.published);
                case 'title': return a.title.localeCompare(b.title);
                default: return new Date(b.published) - new Date(a.published);
            }
        });

    const featuredArticle = articles[0];
    const getArticlesByTag = (tag) => articles.filter(a => a.tag === tag).slice(0, 4);

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
            {/* Hero Section with Featured Article */}
            {featuredArticle && (
                <section className="relative overflow-hidden bg-gradient-to-r from-pink-600 to-purple-600 text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16">
                            <div>
                                <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-4">
                                    Latest Article
                                </span>
                                <h1 className="text-5xl font-bold mb-6 leading-tight">{featuredArticle.title}</h1>
                                <p className="text-xl opacity-90 mb-8" dangerouslySetInnerHTML={{ __html: featuredArticle.excerpt }} />
                                <Link href={`/blog/${featuredArticle.id}`} className="inline-flex items-center px-8 py-4 bg-white text-pink-600 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                                    Read Article
                                    <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </div>
                            {featuredArticle.cover && (
                                <div className="relative">
                                    <img src={featuredArticle.cover} alt={featuredArticle.title} className="rounded-2xl shadow-2xl w-full h-80 object-cover" />
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            )}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Tag Carousels */}
                {tags.slice(0, 3).map(tag => {
                    const tagArticles = getArticlesByTag(tag);
                    if (tagArticles.length === 0) return null;
                    
                    return (
                        <section key={tag} className="mb-16">
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-3xl font-bold text-gray-900">{tag}</h2>
                                <Link href={`/blog?tag=${encodeURIComponent(tag)}`} className="text-pink-600 hover:text-pink-700 font-semibold">
                                    View all →
                                </Link>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {tagArticles.map(article => (
                                    <Link key={article.id} href={`/blog/${article.id}`} className="group">
                                        <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                            {article.cover && (
                                                <img src={article.cover} alt={article.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                                            )}
                                            <div className="p-4">
                                                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-pink-600 transition-colors">
                                                    {article.title}
                                                </h3>
                                                <p className="text-sm text-gray-500">{article.published}</p>
                                            </div>
                                        </article>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    );
                })}

                {/* All Articles Section */}
                <section>
                    <div className="mb-8">
                        <h2 className="text-4xl font-bold text-gray-900 mb-8">All Articles</h2>
                        
                        {/* Search and Filters */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-8 mb-10 border border-gray-100">
                            <form method="GET" className="space-y-6">
                                <div className="flex flex-col md:flex-row gap-4">
                                    {/* Search */}
                                    <div className="relative flex-grow">
                                        <input
                                            type="text"
                                            name="search"
                                            placeholder="Search articles..."
                                            defaultValue={searchTerm}
                                            className="w-full pl-12 pr-4 py-4 bg-gray-50 border-0 rounded-xl shadow-sm focus:ring-2 focus:ring-pink-400 transition-all duration-200"
                                        />
                                        <svg className="w-5 h-5 text-pink-400 absolute left-4 top-1/2 transform -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </div>

                                    {/* Tag Filter */}
                                    <div className="relative min-w-[180px]">
                                        <select
                                            name="tag"
                                            defaultValue={selectedTag}
                                            className="w-full appearance-none pl-4 pr-10 py-4 bg-gray-50 border-0 rounded-xl shadow-sm focus:ring-2 focus:ring-pink-400 transition-all duration-200"
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

                                    {/* Sort */}
                                    <div className="relative min-w-[180px]">
                                        <select
                                            name="sort"
                                            defaultValue={sortBy}
                                            className="w-full appearance-none pl-4 pr-10 py-4 bg-gray-50 border-0 rounded-xl shadow-sm focus:ring-2 focus:ring-pink-400 transition-all duration-200"
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
                                    <button type="submit" className="min-w-[120px] py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium">
                                        Filter
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Articles List */}
                    <div className="space-y-6">
                        {filteredArticles.map(article => (
                            <Link key={article.id} href={`/blog/${article.id}`} className="group ">
                                <article className="mb-8 bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        {article.cover && (
                                            <div className="md:col-span-1">
                                                <img src={article.cover} alt={article.title} className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                            </div>
                                        )}
                                        <div className={`p-6 ${article.cover ? 'md:col-span-2' : 'md:col-span-3'}`}>
                                            <div className="flex items-center gap-3 mb-3">
                                                {article.tag && (
                                                    <span className="px-3 py-1 bg-pink-100 text-pink-700 text-sm font-semibold rounded-full">
                                                        {article.tag}
                                                    </span>
                                                )}
                                                <time className="text-sm text-gray-500">{article.published}</time>
                                            </div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors">
                                                {article.title}
                                            </h3>
                                            <div className="text-gray-600 leading-relaxed mb-4 prose max-w-none" dangerouslySetInnerHTML={{ __html: article.excerpt }} />
                                            <div className="flex items-center text-pink-600 font-semibold">
                                                Read more
                                                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>

                    {filteredArticles.length === 0 && (
                        <div className="text-center py-16">
                            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                                <svg className="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
                            <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
}
