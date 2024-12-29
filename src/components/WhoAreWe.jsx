import React from 'react';

const WhoWeAre = () => {
    return (
        <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
                {/* Left Content */}
                <div>
                    <h2 className="text-5xl font-extrabold text-gray-900 leading-tight tracking-wide">
                        Who We Are
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Connecting Communities, Driving Progress
                    </p>

                    <p className="mt-8 text-gray-700 leading-relaxed">
                        We are a professional voluntary movement that focuses on six avenues, <strong className="text-pink-600">Community Service, Club Service, Professional Development, International Service, Public Relations,</strong> and <strong className="text-pink-600">Environment Service</strong>. Our goal is to provide opportunities for young adults to develop leadership skills, promote global citizenship, and encourage community service.
                    </p>

                    <p className="mt-6 text-gray-700 leading-relaxed">
                        We organize and participate in service projects, fundraisers, and social events. Open to individuals from all backgrounds, we aim to make a difference in communities while fostering professional skills and meaningful connections.
                    </p>
                </div>

                {/* Right Visual Element */}
                <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg p-8 shadow-lg">
                    <div className="text-white space-y-6">
                        <blockquote className="text-2xl italic font-light leading-relaxed">
                            "The best way to find yourself is to lose yourself in the service of others."
                        </blockquote>
                        <p className="text-right font-medium text-lg">- Mahatma Gandhi</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;
