'use client';

import React from 'react';
import {
    FiDatabase,
    FiServer,
    FiMonitor,
    FiUsers,
    FiCode,
    FiFileText,
    FiGitBranch
} from 'react-icons/fi';

const DevelopmentShowcase = () => {
    const techStack = [
        {
            name: "Frontend",
            tech: "Next.js",
            hosting: "Netlify",
            icon: <FiMonitor className="w-8 h-8" />,
        },
        {
            name: "Backend",
            tech: "Express.js",
            hosting: "Azure App Service",
            icon: <FiServer className="w-8 h-8" />,
        },
        {
            name: "Database",
            tech: "MySQL",
            hosting: "Azure Database",
            icon: <FiDatabase className="w-8 h-8" />,
        },
    ];

    const teams = {
        current: {
            year: "2023/24",
            lead: "Ravindu Kavishka",
            role: "Avenue Co-Director",
            webTeam: {
                leads: ["Sayuru Sandaru", "Sanjeewa Liyanage"],
                developers: ["Dharani Samudrika", "Sandun Pushpika", "Devinda Wanasinghe"],
                content: ["Anupama Chamika", "Samudi Gunathilaka", "Tinishi Hewage"],
            },
        },
        previous: {
            year: "2022/23",
            lead: "Yasith Eranda",
            role: "Avenue Co-Director",
            webTeam: {
                leads: ["Ravindu Kavishka"],
                content: ["Dharani Samudrika", "Sammani Dias", "Chamodya Perera"],
            },
        },
    };

    const TeamSection = ({ title, data, gradient = false }) => (
        <div className={`rounded-xl overflow-hidden ${gradient ? 'bg-gradient-to-br from-slate-900 to-slate-800' : 'bg-white'} shadow-xl`}>
            <div className={`p-8 ${gradient ? 'text-white' : 'text-slate-800'}`}>
                <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold">{data.year}</h3>
                    <p className="text-lg opacity-90 mt-2">{data.lead} - {data.role}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {data.webTeam.leads && (
                        <TeamCard
                            title="Team Leads"
                            members={data.webTeam.leads}
                            icon={<FiUsers />}
                            gradient={gradient}
                        />
                    )}
                    {data.webTeam.developers && (
                        <TeamCard
                            title="Developers"
                            members={data.webTeam.developers}
                            icon={<FiCode />}
                            gradient={gradient}
                        />
                    )}
                    {data.webTeam.content && (
                        <TeamCard
                            title="Content Management"
                            members={data.webTeam.content}
                            icon={<FiFileText />}
                            gradient={gradient}
                        />
                    )}
                </div>
            </div>
        </div>
    );

    const TeamCard = ({ title, members, icon, gradient }) => (
        <div className={`rounded-lg p-6 ${gradient ? 'bg-white/5' : 'bg-slate-50'}`}>
            <div className="flex items-center gap-3 mb-4">
        <span className={`${gradient ? 'text-white' : 'text-slate-700'}`}>
          {icon}
        </span>
                <h4 className="text-lg font-semibold">{title}</h4>
            </div>
            <ul className="space-y-2">
                {members.map((member, index) => (
                    <li key={index} className="text-sm opacity-90">{member}</li>
                ))}
            </ul>
        </div>
    );

    return (
        <div className="min-h-screen bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto my-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">
                        Development Team
                    </h1>
                    <p className="text-lg text-slate-600">
                        Web Team of Public Relations and Digital Services Avenue
                        <br />
                        Rotaract Club of Uva Wellassa University
                    </p>
                </div>

                {/* Tech Stack */}
                <div className="mb-16">
                    <h2 className="text-2xl font-semibold text-slate-900 mb-8 text-center">
                        Technology Stack
                    </h2>
                    <div className="grid gap-8 md:grid-cols-3">
                        {techStack.map((tech, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div className="text-slate-700 mb-4">
                                        {tech.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                                        {tech.name}
                                    </h3>
                                    <p className="text-slate-700 font-medium mb-1">{tech.tech}</p>
                                    <p className="text-sm text-slate-500">Hosted on {tech.hosting}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CI/CD Info */}
                    <div className="bg-white rounded-xl shadow-lg p-8 text-center mt-4">
                        <div className="flex justify-center mb-4">
                            <FiGitBranch className="w-8 h-8 text-slate-700" />
                        </div>
                        <h2 className="text-xl font-semibold text-slate-900 mb-3">
                            Continuous Integration & Deployment
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Leveraging automated CI/CD pipelines to ensure efficient, reliable, and consistent updates across production environments.
                        </p>
                    </div>
                </div>

                {/* Current Team */}
                <div className="mb-16">
                    <h2 className="text-2xl font-semibold text-slate-900 mb-8 text-center">
                        Current Development Team
                    </h2>
                    <TeamSection data={teams.current} gradient={true} />
                </div>

                {/* Previous Team */}
                <div className="mb-16">
                    <h2 className="text-2xl font-semibold text-slate-900 mb-8 text-center">
                        Previous Development Team
                    </h2>
                    <TeamSection data={teams.previous} />
                </div>

            </div>
        </div>
    );
};

export default DevelopmentShowcase;