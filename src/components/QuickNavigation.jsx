import React from 'react';

const NavigationGrid = () => {
    const navigationItems = [
        // {
        //     title: 'About Us',
        //     path: '/about',
        //     icon: 'https://img.icons8.com/fluency/48/info-circle.png',
        //     description: 'Learn about our mission and values'
        // },
        // {
        //     title: 'Avenues',
        //     path: '/avenues',
        //     icon: 'https://img.icons8.com/fluency/48/diversity.png',
        //     description: 'Explore our areas of service'
        // },
        {
            title: 'Board of Directors',
            path: '/bod',
            icon: 'https://img.icons8.com/fluency/48/conference-call.png',
            description: 'Meet our leadership team'
        },
        {
            title: 'Projects',
            path: '/projects',
            icon: 'https://img.icons8.com/fluency/48/task-planning.png',
            description: 'View our community initiatives'
        },

        {
            title: 'Club History',
            path: '/clubhistory',
            icon: 'https://img.icons8.com/fluency/48/time-machine.png',
            description: 'Our journey through the years'
        },
        {
        title: 'Blog',
        path: '/blog',
        icon: 'https://img.icons8.com/fluency/48/blog.png',
        description: 'Latest news and updates'
}
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900">
                        Quick Navigation
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-purple-600 mx-auto mt-4" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {navigationItems.map((item) => (
                        <a
                            key={item.path}
                            href={item.path}
                            className="group p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 flex items-start space-x-4"
                        >
                            <img
                                src={item.icon}
                                alt={`${item.title} icon`}
                                className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                            />
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-pink-600 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="mt-2 text-gray-600">
                                    {item.description}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NavigationGrid;