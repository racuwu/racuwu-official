"use client";

import { useState } from 'react';
import { BiTrophy } from 'react-icons/bi';
import { AiOutlineStar } from 'react-icons/ai';
import { FiAward, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { GiMedal } from 'react-icons/gi';

const CategorySection = ({ title, items, isOpen, onToggle }) => (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden">
        <button
            onClick={onToggle}
            className="w-full p-4 flex items-center justify-between text-white hover:bg-white/5 transition-colors"
        >
            <span className="text-lg font-semibold">{title}</span>
            {isOpen ?
                <FiChevronUp className="w-5 h-5 text-pink-500" /> :
                <FiChevronDown className="w-5 h-5 text-pink-500" />
            }
        </button>
        <div className={`transition-all duration-300 ${isOpen ? 'max-h-[800px]' : 'max-h-0'}`}>
            <div className="p-4 grid gap-4 grid-cols-1 md:grid-cols-2">
                {items.map((item, index) => (
                    <div key={index} className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10 transition-all duration-300 hover:bg-white/10">
                        <span className="text-2xl">{item.icon}</span>
                        <p className="mt-2 text-sm text-gray-300">{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const Achievements = () => {
    const [openSection, setOpenSection] = useState('major');

    const achievements = {
        major: [
            { icon: "🏆", text: "Most Outstanding Cluster Project - Silver (Arogyam)" },
            { icon: "🏆", text: "Most Outstanding Initiative with Rotary Club - Silver (Daas)" },
            { icon: "🏆", text: "Most Outstanding Inter-Zonal Initiative - Bronze (Compagnia)" },
            { icon: "🏆", text: "Most Outstanding Professional Development - Merit (Innovitroz 2.0)" }
        ],
        nominees: [
            { icon: "🏆", text: "Club Service Initiative (Inclusivity and Diversity) - Aikya" },
            { icon: "🏆", text: "International Understanding Initiative (Meloverse 1.0 - Thaala)" },
            { icon: "🏆", text: "Basic Education and Literacy Initiative - Pillam" },
            { icon: "🏆", text: "Fundraiser in aid of Service - Pillam" },
            { icon: "🏆", text: "Annual Report - Rotaract Club of UWU-Badulla" }
        ],
        recognition: [
            { icon: "🏅", text: "Award of Appreciation - District Council Meeting (March)" },
            { icon: "🏅", text: "Rotaract District Citation - Gold Distinction" },
            { icon: "🏅", text: "Award of Appreciation - Brandin | The Next Level" },
            { icon: "🏅", text: "Award of Appreciation - V craft" }
        ],
        individual: [
            { icon: "🏆", text: "Most Outstanding Secretaries - Rtr. Gayathma & Rtr. Sachini" },
            { icon: "🏅", text: "Meritorious Leadership Award - Rtr. Thisal Walgampaya" },
            { icon: "🏅", text: "Spirit of the Service - Rtr. Gayathma Weerawanni" },
            { icon: "🏅", text: "President of the Month (December) - Rtr. Thisal" },
            { icon: "🏅", text: "Secretaries of the Month (September) - Rtr. Sachini & Rtr. Gayathma" }
        ]
    };

    return (
        <section className="relative overflow-hidden py-20">
            <div
                className="absolute inset-0 bg-cover bg-center bg-fixed"
                style={{
                    backgroundImage: "url('assets/images/bg/awards-covers-scaled.webp')",
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/95 to-black/90" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-start gap-12">
                    {/* Left Side - Main Achievement */}
                    <div className="lg:sticky lg:top-20 lg:flex-1 space-y-8 text-white animate__animated animate__fadeInLeft">
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                                <span className="block">Excellence in</span>
                                <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
                  Leadership & Service
                </span>
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500" />
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                            <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                                18+
                            </div>
                            <div className="mt-2 text-xl font-medium">Awards & Recognition</div>
                            <div className="mt-1 text-gray-300">2023 - 2024</div>
                            <p className="mt-4 text-gray-200">
                                An exceptional year of achievements, showcasing our dedication to service,
                                leadership development, and community impact.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: <BiTrophy size={24} />, label: "Major Awards", count: "4" },
                                { icon: <AiOutlineStar size={24} />, label: "Nominations", count: "5" },
                                { icon: <FiAward size={24} />, label: "Recognition", count: "4" },
                                { icon: <GiMedal size={24} />, label: "Individual", count: "5" }
                            ].map((stat, index) => (
                                <button
                                    key={index}
                                    onClick={() => setOpenSection(stat.label.toLowerCase())}
                                    className={`bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10 text-center transition-all duration-300 hover:bg-white/20 ${
                                        openSection === stat.label.toLowerCase() ? 'ring-2 ring-pink-500' : ''
                                    }`}
                                >
                                    <div className="flex justify-center text-pink-500">{stat.icon}</div>
                                    <div className="mt-2 text-2xl font-bold">{stat.count}</div>
                                    <div className="text-sm text-gray-300">{stat.label}</div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Awards Categories */}
                    <div className="lg:flex-1 w-full space-y-6 animate__animated animate__fadeInRight">
                        <CategorySection
                            title="Major Awards"
                            items={achievements.major}
                            isOpen={openSection === 'major'}
                            onToggle={() => setOpenSection(openSection === 'major' ? '' : 'major')}
                        />
                        <CategorySection
                            title="Nominations"
                            items={achievements.nominees}
                            isOpen={openSection === 'nominations'}
                            onToggle={() => setOpenSection(openSection === 'nominations' ? '' : 'nominations')}
                        />
                        <CategorySection
                            title="Special Recognition"
                            items={achievements.recognition}
                            isOpen={openSection === 'recognition'}
                            onToggle={() => setOpenSection(openSection === 'recognition' ? '' : 'recognition')}
                        />
                        <CategorySection
                            title="Individual Excellence"
                            items={achievements.individual}
                            isOpen={openSection === 'individual'}
                            onToggle={() => setOpenSection(openSection === 'individual' ? '' : 'individual')}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;