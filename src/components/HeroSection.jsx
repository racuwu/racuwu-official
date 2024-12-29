import React from 'react';

const HeroSection = () => {
    return (
        <div className="bg-gradient-to-b from-gray-50 to-white relative overflow-hidden py-12 md-py-32">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 ">
                <div className="flex flex-col lg:flex-row items-center gap-12">

                    {/* Text Content */}
                    <div className="flex-1 space-y-8">
                        <div className="space-y-4 animate__animated animate__fadeInLeft animate__delay-1s">
                            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
                                <span className="inline-block">Welcome to</span>
                                <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600">
                                    Rotaract Club
                                </span>
                            </h1>

                            <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-purple-600" />

                            <p className="text-xl md:text-2xl font-medium text-gray-600">
                                Uva Wellassa University - Badulla
                            </p>
                        </div>

                        <p className="text-lg text-gray-600 max-w-2xl animate__animated animate__fadeInUp animate__delay-1s">
                            Empowering youth through leadership, service, and community engagement. Join us in making a difference.
                        </p>

                        <div className="flex gap-4 animate__animated animate__fadeInUp animate__delay-2s">
                            <a href={"/joinus"} className="px-6 py-3 rounded-full bg-pink-600 text-white font-medium hover:bg-pink-700 transition-colors">
                                Join Now
                            </a>
                            <a href={"/about"} className="px-6 py-3 rounded-full border-2 border-gray-200 text-gray-600 font-medium hover:border-pink-600 hover:text-pink-600 transition-colors">
                                Learn More
                            </a>
                        </div>
                    </div>

                    <div className="flex-1 w-full animate__animated animate__fadeInRight animate__delay-1s group">
                        <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl transition-transform transform group-hover:shadow-[0_4px_30px_rgba(255,105,135,0.6)]">
                            <img
                                src="assets/images/bg/hero-racuwu-min.jpg"
                                alt="Rotaract Club Members"
                                className="object-cover w-full h-full"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent" />
                            <div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-4">
                                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl animate__animated animate__fadeIn animate__delay-2s transition-shadow hover:shadow-[0_4px_20px_rgba(255,105,135,0.6)]">
                                    <div className="text-2xl font-bold text-pink-600">500+</div>
                                    <div className="text-sm text-gray-600">Active Members</div>
                                </div>
                                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl animate__animated animate__fadeIn animate__delay-2s transition-shadow hover:shadow-[0_4px_20px_rgba(255,105,135,0.6)]">
                                    <div className="text-2xl font-bold text-pink-600">50+</div>
                                    <div className="text-sm text-gray-600">Annual Projects</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HeroSection;