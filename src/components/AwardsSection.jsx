import React from 'react';

const AwardsSection = () => {
    const awards = [
        {
            name: "Most Outstanding Club",
            description: "Club of the Year",
            year: "2021-2022",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12 7a8 8 0 1 1 0 16a8 8 0 0 1 0-16m0 2a6 6 0 1 0 0 12a6 6 0 0 0 0-12m0 1.5l1.322 2.68l2.958.43l-2.14 2.085l.505 2.946L12 17.25l-2.645 1.39l.505-2.945l-2.14-2.086l2.958-.43zM18 2v3l-1.363 1.138A9.935 9.935 0 0 0 13 5.049V2zm-7-.001v3.05a9.935 9.935 0 0 0-3.636 1.088L6 5V2z" />
                </svg>
            )
        },
        {
            name: "Wew Diyawara",
            description: "Most Sustainable Community Service Initiative",
            year: "2021-2022",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12 7a8 8 0 1 1 0 16a8 8 0 0 1 0-16m0 2a6 6 0 1 0 0 12a6 6 0 0 0 0-12m0 1.5l1.322 2.68l2.958.43l-2.14 2.085l.505 2.946L12 17.25l-2.645 1.39l.505-2.945l-2.14-2.086l2.958-.43zM18 2v3l-1.363 1.138A9.935 9.935 0 0 0 13 5.049V2zm-7-.001v3.05a9.935 9.935 0 0 0-3.636 1.088L6 5V2z" />
                </svg>
            )
        },
        {
            name: "Miridiya",
            description: "Most Outstanding Inter Regional Initiative",
            year: "2021-2022",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12 7a8 8 0 1 1 0 16a8 8 0 0 1 0-16m0 2a6 6 0 1 0 0 12a6 6 0 0 0 0-12m0 1.5l1.322 2.68l2.958.43l-2.14 2.085l.505 2.946L12 17.25l-2.645 1.39l.505-2.945l-2.14-2.086l2.958-.43zM18 2v3l-1.363 1.138A9.935 9.935 0 0 0 13 5.049V2zm-7-.001v3.05a9.935 9.935 0 0 0-3.636 1.088L6 5V2z" />
                </svg>
            )
        }
    ];

    return (
        <section className="relative overflow-hidden py-20">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-fixed"
                style={{
                    backgroundImage: "url('assets/images/bg/awards-covers-scaled.webp')",
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/85" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Left Side - Main Achievement */}
                    <div className="flex-1 space-y-8 text-white animate__animated animate__fadeInLeft">
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                                <span className="block">Excellence in</span>
                                <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
                                    Leadership & Service
                                </span>
                            </h2>

                            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500" />
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 animate__animated animate__fadeInUp animate__delay-1s">
                            <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">50+</div>
                            <div className="mt-2 text-xl font-medium">Awards & Recognition</div>
                            <div className="mt-1 text-gray-300">2013 - Present</div>
                            <p className="mt-4 text-gray-200">
                                A decade of excellence, leadership, and impactful community service recognized through numerous accolades and achievements.
                            </p>
                        </div>
                    </div>

                    {/* Right Side - Awards Grid */}
                    <div className="flex-1 w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate__animated animate__fadeInRight">
                            {awards.map((award, index) => (
                                <div
                                    key={index}
                                    className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-white transition-all duration-300 hover:bg-white/20 group"
                                >
                                    <div className="text-pink-500 group-hover:scale-110 transition-transform duration-300">
                                        {award.icon}
                                    </div>
                                    <div className="mt-4">
                                        <div className="text-lg font-semibold">{award.name}</div>
                                        <div className="text-sm text-gray-300 mt-1">{award.description}</div>
                                        <div className="text-sm text-pink-500 mt-2">{award.year}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AwardsSection;