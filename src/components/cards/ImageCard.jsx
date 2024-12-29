import React from 'react';
import Image from 'next/image';

const ImageCard = ({ imageUrl, url }) => {
    return (
        <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
            <div className="relative w-full h-[300px] bg-white overflow-hidden">
                <Image
                    src={imageUrl}
                    className="w-full h-full object-cover transition duration-500 ease-out group-hover:scale-110"
                    alt="Gallery Image"
                    width={384}
                    height={300}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            {url && (
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <a
                        href={url}
                        className="inline-flex items-center text-white text-sm font-medium"
                    >
                        <span>View More</span>
                        <svg
                            className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>
            )}
        </div>
    );
};

const GallerySection = ({ gallery }) => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16 animate__animated animate__fadeInUp">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                        <span className="block">Memory Fragments</span>
                        <span className="block mt-2 text-2xl md:text-3xl font-medium text-gray-600">
              Piecing Together Our Personal Histories
            </span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-purple-600 mx-auto mt-6" />
                </div>

                {/* Gallery Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate__animated animate__fadeInUp animate__delay-1s">
                    {gallery.map((data, index) => (
                        <div
                            key={index}
                            className="animate__animated animate__fadeIn"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <ImageCard
                                imageUrl={data.imageUrl}
                                url={data.url}
                            />
                        </div>
                    ))}
                </div>

                {/* Decorative Elements */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-gray-100 to-transparent" />
                    <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-gray-100 to-transparent" />
                </div>
            </div>
        </section>
    );
};

export default GallerySection;