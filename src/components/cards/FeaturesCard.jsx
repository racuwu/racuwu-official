import React from "react";
import Link from "next/link";

export default function FeaturesCard({ imageUrl, title, subtitle, content, link }) {
    return (
        <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 bg-white h-full flex flex-col">
            {/* Image with overlay */}
            <div className="relative overflow-hidden group">
                <img
                    src={imageUrl}
                    alt={`${title} image`}
                    className="h-64 w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 w-full p-4">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-pink-600 rounded-full mb-2">{subtitle}</span>
                </div>
            </div>
            
            {/* Content */}
            <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{title}</h3>
                <p className="text-gray-600 flex-1 mb-4 line-clamp-4">{content}</p>
                {link ? (
                    <Link href={link} className="mt-auto inline-flex items-center px-5 py-2.5 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 text-white font-medium group hover:shadow-lg transition-all duration-300">
                        Learn more
                        <svg 
                            className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Link>
                ) : (
                    <button className="mt-auto inline-flex items-center px-5 py-2.5 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 text-white font-medium group hover:shadow-lg transition-all duration-300">
                        View details
                        <svg 
                            className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>
                )}            </div>
        </div>
    );
}