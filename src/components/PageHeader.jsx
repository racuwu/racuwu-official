import React from 'react';

const PageHeader = ({ title }) => {
    return (
        <div className="relative min-h-[70vh] w-full overflow-hidden">
            {/* Top Wave */}
            <div className="absolute top-0 left-0 right-0 overflow-hidden">
                <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-16 fill-white" style={{ width: '110%', marginLeft: '-5%' }}>                    <defs>
                    <style>
                        {`
                            .topWave1 {
                                animation: topWaveFloat1 8s ease-in-out infinite;
                                transform-origin: center;
                            }
                            .topWave2 {
                                animation: topWaveFloat2 10s ease-in-out infinite reverse;
                                transform-origin: center;
                            }
                            .topWave3 {
                                animation: topWaveFloat3 12s ease-in-out infinite;
                                transform-origin: center;
                            }
                            @keyframes topWaveFloat1 {
                                0%, 100% { transform: translateX(0px) translateY(0px); }
                                25% { transform: translateX(8px) translateY(2px); }
                                50% { transform: translateX(-5px) translateY(1px); }
                                75% { transform: translateX(10px) translateY(3px); }
                            }
                            @keyframes topWaveFloat2 {
                                0%, 100% { transform: translateX(0px) translateY(0px); }
                                33% { transform: translateX(-12px) translateY(3px); }
                                66% { transform: translateX(8px) translateY(1px); }
                            }
                            @keyframes topWaveFloat3 {
                                0%, 100% { transform: translateX(0px) translateY(0px); }
                                20% { transform: translateX(6px) translateY(2px); }
                                40% { transform: translateX(-8px) translateY(1px); }
                                60% { transform: translateX(12px) translateY(3px); }
                                80% { transform: translateX(-4px) translateY(2px); }
                            }
                            .animate-fadeIn {
                                animation: fadeIn 1s ease-out forwards;
                            }
                            .animate-slideInLeft {
                                animation: slideInLeft 0.8s ease-out forwards;
                            }
                            .animate-slideInRight {
                                animation: slideInRight 0.8s ease-out forwards;
                            }
                            .animate-slideInDown {
                                animation: slideInDown 0.8s ease-out forwards;
                            }
                            .animate-slideInUp {
                                animation: slideInUp 0.8s ease-out forwards;
                            }
                            .animate-fadeInRight {
                                animation: fadeInRight 1s ease-out forwards;
                            }
                            .animate-float {
                                animation: float 6s ease-in-out infinite;
                            }
                            @keyframes fadeIn {
                                from { opacity: 0; }
                                to { opacity: 1; }
                            }
                            @keyframes slideInLeft {
                                from { transform: translateX(-50px); opacity: 0; }
                                to { transform: translateX(0); opacity: 1; }
                            }
                            @keyframes slideInRight {
                                from { transform: translateX(50px); opacity: 0; }
                                to { transform: translateX(0); opacity: 1; }
                            }
                            @keyframes slideInDown {
                                from { transform: translateY(-50px); opacity: 0; }
                                to { transform: translateY(0); opacity: 1; }
                            }
                            @keyframes slideInUp {
                                from { transform: translateY(50px); opacity: 0; }
                                to { transform: translateY(0); opacity: 1; }
                            }
                            @keyframes fadeInRight {
                                from { transform: translateX(30px); opacity: 0; }
                                to { transform: translateX(0); opacity: 1; }
                            }
                            @keyframes float {
                                0%, 100% { transform: translateY(0px); }
                                50% { transform: translateY(-10px); }
                            }
                            `}
                    </style>
                </defs>
                    <path className="topWave1" d="M-120,120V73.71c47.79-22.2,103.59-32.17,158-28,70.36,5.37,136.33,33.31,206.8,37.5C318.64,87.57,392.34,66.33,463,47.95c69.27-18,138.3-24.88,209.4-13.08,36.15,6,69.85,17.84,104.45,29.34C869.49,95,993,134.29,1080,67.53c87-66.76,213-45.23,300-12.53c87,32.7,174,65.4,280,52V120Z" opacity=".25"></path>
                    <path className="topWave2" d="M-120,120V104.19C-107,83.08,-92.36,63.14,-72.31,47.95,99.41,8.73,165,9,224.58,28.42c31.15,10.15,60.09,26.07,89.67,39.8,40.92,19,84.73,46,130.83,49.67,36.26,2.85,70.9-9.42,98.6-31.56,31.77-25.39,62.32-62,103.63-73,40.44-10.79,81.35,6.69,119.13,24.28s75.16,39,116.92,43.05c59.73,5.85,113.28-22.88,168.9-38.84,30.2-8.66,59-6.17,87.09,7.5,22.43,10.89,48,26.93,60.65,49.24c25.3,44.62,85.4,67.34,150.8,55.89,65.4-11.45,130.8-44.78,196.2-23.45V120Z" opacity=".5"></path>
                    <path className="topWave3" d="M-120,120V114.37C29.93,61,194.09,48.68,355.83,77.43c43,7.64,84.23,20.12,127.61,26.46,59,8.63,112.48-12.24,165.56-35.4C707.93,42.78,766,24.76,831.2,30c86.53,7,172.46,45.71,248.8,84.81c76.34,39.1,152.68,78.2,229.02,58.43c76.34-19.77,152.68-98.41,229.02-78.64V120Z"></path>
                </svg>
            </div>            {/* Beautiful Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700 mt-16">
                {/* Animated Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-pink-400/20 via-transparent to-purple-500/30 animate-pulse" />

                {/* Geometric Shapes */}
                <div className="absolute top-20 right-20 w-72 h-72 bg-white/5 rounded-full blur-xl animate-bounce" style={{ animationDuration: '3s' }} />
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-300/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s', animationDuration: '4s' }} />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-pink-300/5 to-purple-300/5 rounded-full blur-3xl animate-ping" style={{ animationDelay: '2s', animationDuration: '6s' }} />
            </div>{/* Content Container */}
            <div className="relative z-20 h-full flex items-center pt-20">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
                    <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[50vh]">                          
                        {/* Left Content */}
                        <div className="space-y-8 transform transition-all duration-1000 ease-out">
                            {/* Main Title */}
                            <div className="space-y-6 transform translate-y-0 hover:scale-64">
                                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tight transform transition-all duration-700 hover:text-pink-100 animate-fadeIn">
                                    {title}
                                </h1>

                                {/* Gradient Accent Line */}
                                <div className="w-32 h-2 bg-gradient-to-r from-yellow-400 via-pink-300 to-white rounded-full shadow-lg transform transition-all duration-500 hover:w-40 hover:shadow-pink-300/50 animate-slideInLeft" style={{ animationDelay: '1s' }} />
                            </div>
                        </div>                        {/* Right Visual Element */}
                        <div className="relative transform transition-all duration-1000 ease-out animate-fadeInRight" style={{ animationDelay: '1.5s' }}>
                            <div className="relative animate-float">
                                {/* Floating Cards */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="relative w-80 h-80">

                                        {/* Card 1 */}
                                        <div className="absolute top-0 left-0 w-60 h-40 bg-white/15 backdrop-blur-md rounded-2xl border border-white/20 p-6 transform rotate-6 hover:rotate-3 transition-all duration-500 hover:scale-105 hover:bg-white/20 animate-slideInDown" style={{ animationDelay: '2s' }}>
                                            <div className="h-full flex flex-col justify-between">
                                                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-xl transition-transform duration-300 hover:scale-110 animate-pulse" style={{ animationDelay: '2.5s' }}></div>
                                                <div className="space-y-2">
                                                    <div className="w-32 h-2 bg-white/40 rounded animate-slideInLeft" style={{ animationDelay: '3s' }}></div>
                                                    <div className="w-24 h-2 bg-white/30 rounded animate-slideInLeft" style={{ animationDelay: '3.2s' }}></div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Card 2 */}
                                        <div className="absolute top-20 right-0 w-60 h-40 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 p-6 transform -rotate-6 hover:-rotate-3 transition-all duration-500 hover:scale-105 hover:bg-white/25 animate-slideInRight" style={{ animationDelay: '2.3s' }}>
                                            <div className="h-full flex flex-col justify-between">
                                                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-pink-500 rounded-xl transition-transform duration-300 hover:scale-110 animate-bounce" style={{ animationDelay: '2.8s', animationDuration: '2s' }}></div>
                                                <div className="space-y-2">
                                                    <div className="w-28 h-2 bg-white/40 rounded animate-slideInRight" style={{ animationDelay: '3.1s' }}></div>
                                                    <div className="w-20 h-2 bg-white/30 rounded animate-slideInRight" style={{ animationDelay: '3.3s' }}></div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Card 3 */}
                                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-60 h-40 bg-white/25 backdrop-blur-md rounded-2xl border border-white/40 p-6 hover:scale-105 transition-all duration-500 hover:bg-white/30 animate-slideInUp" style={{ animationDelay: '2.6s' }}>
                                            <div className="h-full flex flex-col justify-between">
                                                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-xl transition-transform duration-300 hover:scale-110 animate-ping" style={{ animationDelay: '3.1s', animationDuration: '3s' }}></div>
                                                <div className="space-y-2">
                                                    <div className="w-36 h-2 bg-white/40 rounded animate-slideInUp" style={{ animationDelay: '3.4s' }}></div>
                                                    <div className="w-28 h-2 bg-white/30 rounded animate-slideInUp" style={{ animationDelay: '3.6s' }}></div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>            {/* Bottom Wave */}
            <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
                <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-16 fill-white transform rotate-180" style={{ width: '110%', marginLeft: '-5%' }}>
                    <defs>
                        <style>
                            {`
                            .wave1 {
                                animation: waveFloat1 6s ease-in-out infinite;
                                transform-origin: center;
                            }
                            .wave2 {
                                animation: waveFloat2 8s ease-in-out infinite reverse;
                                transform-origin: center;
                            }
                            .wave3 {
                                animation: waveFloat3 10s ease-in-out infinite;
                                transform-origin: center;
                            }
                            @keyframes waveFloat1 {
                                0%, 100% { transform: translateX(0px) translateY(0px); }
                                25% { transform: translateX(-10px) translateY(-3px); }
                                50% { transform: translateX(5px) translateY(-1px); }
                                75% { transform: translateX(-5px) translateY(-2px); }
                            }
                            @keyframes waveFloat2 {
                                0%, 100% { transform: translateX(0px) translateY(0px); }
                                33% { transform: translateX(8px) translateY(-2px); }
                                66% { transform: translateX(-12px) translateY(-4px); }
                            }
                            @keyframes waveFloat3 {
                                0%, 100% { transform: translateX(0px) translateY(0px); }
                                20% { transform: translateX(-8px) translateY(-1px); }
                                40% { transform: translateX(12px) translateY(-3px); }
                                60% { transform: translateX(-6px) translateY(-2px); }
                                80% { transform: translateX(10px) translateY(-1px); }
                            }
                            `}
                        </style>
                    </defs>
                    <path className="wave1" d="M-120,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C318.64,32.43,392.34,53.67,463,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C869.49,25,993-14.29,1080,52.47c87,66.76,213,45.23,300,12.53c87-32.7,174-65.4,280-52V0Z" opacity=".25"></path>
                    <path className="wave2" d="M-120,0V15.81C-107,36.92,-92.36,56.86,-72.31,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24c25.3-44.62,85.4-67.34,150.8-55.89,65.4,11.45,130.8,44.78,196.2,23.45V0Z" opacity=".5"></path>
                    <path className="wave3" d="M-120,0V5.63C29.93,59,194.09,71.32,355.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C707.93,77.22,766,95.24,831.2,90c86.53-7,172.46-45.71,248.8-84.81c76.34-39.1,152.68-78.2,229.02-58.43c76.34,19.77,152.68,98.41,229.02,78.64V0Z"></path>
                </svg>
            </div>
        </div>
    );
};

export default PageHeader;