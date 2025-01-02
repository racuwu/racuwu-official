import React from 'react';
import {BiTime, BiTag} from 'react-icons/bi';
import {format} from 'date-fns';

const fetchPosts = async () => {
    const response = await fetch(
        'https://racuwu-dev.azurewebsites.net/api/posts/search?tags=4&limit=100',
        {next: {revalidate: 3600}}
    );
    const data = await response.json();
    // Sort posts by date, with the newest first
    return data.data.posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
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
                <h1 className="text-5xl font-bold mb-4">{article.title}</h1>
                <div className="flex items-center gap-4 text-sm mb-2">
                    <span className="flex items-center gap-2">
                        <BiTime className="text-red-500"/>
                        {format(date, 'MMM dd, yyyy')}
                    </span>
                    {article.tags.map(tag => (
                        <span key={tag.id} className="flex items-center gap-2">
                            <BiTag className="text-red-500"/>
                            {tag.name}
                        </span>
                    ))}
                </div>
                <p className="text-lg text-gray-300">{article.excerpt}</p>
            </div>
        </div>
    );
};

const ArticleCard = ({article}) => {
    const date = new Date(article.publishedAt);

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
                        {format(date, 'MMM dd, yyyy')}
                    </span>
                    {article.tags.map(tag => (
                        <span key={tag.id} className="flex items-center gap-1">
                            <BiTag/>
                            {tag.name}
                        </span>
                    ))}
                </div>
                <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                <p className="text-gray-600 line-clamp-3">{article.excerpt}</p>
            </div>
        </div>
    );
};

const News = async () => {
    const posts = await fetchPosts();
    const [heroPost, ...otherPosts] = posts;

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-6 sm:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto  pt-16">
                {/* Hero Section */}
                <NewsHero article={heroPost}/>

                {/* Top Articles */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">

                    {otherPosts.slice(0, 2).map(post => (
                        <a href={`https://blog.racuwu.com/posts/${post.id}`}>
                            <ArticleCard key={post.id} article={post}/>
                        </a>
                    ))}
                </div>

                {/* Remaining Articles */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {posts.map(post => (
                        <a href={`https://blog.racuwu.com/post/${post.id}`}>
                            <ArticleCard key={post.id} article={post}/>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default News;
