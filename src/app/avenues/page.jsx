import PageHeader from "@/components/PageHeader";
import React from "react";

const Avenues = () => {
  const avenues = [
    {
      imageUrl: "assets/images/avenue/community-service.jpg",
      title: "Community Service Avenue",
      subtitle: "subtitle",
      content:
        "We're dedicated to addressing pressing challenges such as hunger, poverty, and educational disparities. Uplifting marginalized communities through targeted programs and initiatives, we provide essential support and resources to enhance the quality of life for the most vulnerable populations. Through collective action and collaboration, we aim to create a more equitable and inclusive society, ensuring that every individual has the opportunity to thrive and succeed, regardless of their background, with compassion and empowerment.",
    },
    {
      imageUrl: "assets/images/avenue/international-service.jpg",
      title: "International Service Avenue",
      subtitle: "Subtitle",
      content:
        "We champion our nation's rich history, natural splendor, and precious culture, by leveraging the expansive network of the Rotaract movement, striving to showcase our country's heritage and promote global understanding. Through collaborative efforts, we aim to encourage cross-cultural exchange, celebrating the diversity of our world and uniting communities across borders, creating a more interconnected and understanding global community.",
    },
    {
      imageUrl: "assets/images/avenue/pr.jpg",
      title: "Public Relations Avenue",
      subtitle: "Subtitle",
      content:
        "We are dedicated to elevate awareness of our club to enhance our impact on local communities worldwide. Through strategic communication, we aim to strengthen relationships, build trust, and engage with diverse audiences. By effectively sharing our mission and initiatives, we inspire others to join us in creating positive change on a global scale. Together, we advance the goals and values of our Rotaract Club, encouraging collaboration and driving meaningful change for a brighter and more inclusive future for all.",
    },
    {
      imageUrl: "assets/images/avenue/en.jpg",
      title: "Environment Service Avenue",
      subtitle: "Subtitle",
      content:
        "We prioritize ecological responsibility, envisioning and implementing sustainable initiatives that benefit our community in the short and long term. Through proactive measures and organic activities, we strive to safeguard our environment, ensuring a healthier and more vibrant ecosystem for current and future generations. By taking a forward-thinking approach, we aim to create lasting positive impacts on our surroundings and promote a greener, more sustainable future.",
    },
    {
      imageUrl: "assets/images/avenue/club-service.jpg",
      title: "Club Service Avenue",
      subtitle: "Subtitle",
      content:
        "We prioritize promoting camaraderie among club members through events that emphasize connectivity, socializing, and strengthening our club's identity. These initiatives aim to cultivate a powerful community where members engage, collaborate, and build enduring bonds, enhancing the fellowship experience within Rotaract and beyond. By empowering a sense of belonging, we strive to create an inclusive environment where all members feel valued and supported.",
    },
    {
      imageUrl: "assets/images/avenue/professional-development.jpg",
      title: "Professional Development Avenue",
      subtitle: "Subtitle",
      content:
        "We empower members to broaden their understanding of various concepts and refine essential leadership and communication skills that are vital for success in professional settings and corporate environments. Through tailored programs and mentorship, we encourage continuous growth, equipping individuals with the tools and confidence needed to excel in their careers and positively impact their communities, paving the way for a brighter future for all.",
    },
  ];
    return (
    <>
      <PageHeader title="Avenues" />
      
      <div className="pt-[80px] pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate__animated animate__fadeIn">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Service Avenues</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the different paths through which we create impact and drive positive change in our communities and beyond.
            </p>
            <div className="w-32 h-1.5 bg-gradient-to-r from-pink-600 to-purple-600 mx-auto mt-8"></div>
          </div>
          
          <div className="space-y-20">
            {avenues.map((data, index) => (
              <div 
                key={index}
                className="animate__animated animate__fadeInUp"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2`}>
                  <div className="lg:w-2/5 relative overflow-hidden group">
                    <img 
                      src={data.imageUrl} 
                      alt={data.title}
                      className="h-full w-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-tr ${index % 2 === 0 ? 'from-pink-600/50' : 'from-purple-600/50'} to-transparent opacity-80 mix-blend-multiply`}></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="bg-white/90 px-6 py-3 rounded-full text-pink-600 font-bold text-sm uppercase tracking-wider">
                        {data.title.split(' ')[0]}
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
                    <div className="mb-2 text-sm font-semibold uppercase tracking-wider text-pink-500">{index % 2 === 0 ? 'Empowering Communities' : 'Creating Impact'}</div>
                    <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                      {data.title}
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {data.content}
                    </p>
                    <div className="mt-8">
                      <a 
                        href="#" 
                        className={`inline-flex items-center px-6 py-3 rounded-full ${index % 2 === 0 ? 'bg-pink-600' : 'bg-purple-600'} text-white font-semibold group hover:shadow-lg transition-all duration-300`}
                      >
                        Learn more
                        <svg 
                          className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>            ))}
          </div>
          
          <div className="mt-24 text-center animate__animated animate__fadeInUp">
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-3xl p-12 shadow-inner">
              <h3 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                Join Us in Making a Difference
              </h3>
              <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-8">
                Whether you're passionate about community service, international relations, or environmental sustainability, 
                there's a place for you in our club to contribute your skills and make an impact.
              </p>
              <a 
                href="/joinus" 
                className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Become a Member
                <svg 
                  className="ml-2 w-5 h-5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Avenues;
