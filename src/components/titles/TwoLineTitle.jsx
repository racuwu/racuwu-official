const TwoLineTitle = (props) => {
    return (
        <div className="w-full flex flex-col items-center text-center px-6 sm:px-16 py-12 bg-gradient-to-b from-gray-50 to-white relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-20 -z-10" />

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight animate__animated animate__fadeIn animate__delay-1s">
                <span className="inline-block">{props.main}</span>
            </h1>

            {/* Divider */}
            <div className="w-1/4 sm:w-1/6 h-1 bg-gradient-to-r from-pink-600 to-purple-600 my-6" />

            {/* Subtitle */}
            <p className="text-lg sm:text-xl font-medium text-gray-600 capitalize animate__animated animate__fadeIn animate__delay-1.5s">
                {props.sub}
            </p>
        </div>
    );
};

export default TwoLineTitle;
