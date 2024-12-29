import React from "react";

export default function FeaturesCard({ imageUrl, title, content }) {
    return (
        <div className="overflow-hidden duration-300 bg-white">
            {/* Image with text on top */}
            <div className="relative">
                <img
                    src={imageUrl}
                    alt={`${title} image`}
                    className="h-96 w-full object-cover object-center transition-transform duration-500 hover:scale-125"
                />
                <div className="absolute bottom-0 left-0 w-full h-48 p-6 bg-gradient-to-t from-black/90 to-transparent text-white">
                    <h3 className="text-2xl font-semibold mb-3">{title}</h3>
                    <p className="text-gray-300 leading-relaxed">{content}</p>
                </div>
            </div>
        </div>
    );
}