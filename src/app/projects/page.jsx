import PageHeader from "@/components/PageHeader";
import FeaturesCard from "@/components/cards/FeaturesCard";
import TwoLineTitle from "@/components/titles/TwoLineTitle";
import React from "react";

const Projects = () => {
  const ongoingproject = [
    {
      imageUrl: "assets/images/projects/featured/Webdevpro.jpg",
      title: "WebDevPro",
      subtitle: "Public Relations Avenue",
      content:
        "WebDevPro: University PR Hub empowers students with digital tools for effective communication. Through our development of official websites, blogs, and tailored learning programs, we cultivate essential public relations skills among university students. Our aim is to equip them with the expertise needed to thrive in the ever-evolving digital environment of today.",
    },
    {
      imageUrl: "assets/images/projects/featured/neverforget.jpg",
      title: "Never Forget",
      subtitle: "Public Relations Avenue",
      content:
        "One project that is done throughout the year under the public relations avenue is called never forget. The ‘Never Forget’ project, spearheaded by the public relations avenue of Rotaract Club of Uva Wellassa University – Badulla, is driven by the objective of implementing a comprehensive program that serves as a reminder for special days to the club’s members.",
    },
    {
      imageUrl: "assets/images/projects/featured/seyaroo2.0.png",
      title: "Seyaroo",
      subtitle: "Public Relations Avenue",
      content:
        "Seya Roo marks a wonderful initiative organized by the Public Relations and a Digital Service avenue of the Rotaract Club of Uva Wellassa University-Badulla with the aim of showcasing the photographic and editing talents of participants. The project guides Rotaractors towards a luminous future behind the lens, transforming them into photographic professionals",
    },
  ]
  const project = [
    {
      imageUrl: "/assets/images/projects/featured/thaalameloverser.png",
      title: "Meloverse",
      subtitle: "International Services Avenue",
      content:
        "Embark on an extraordinary musical journey with “Meloverse”, Where Music Unites Cultures! The Rotaract Club of Uva Wellassa University – Badulla, RID 3220, proudly presents “Meloverse”, a groundbreaking global initiative that celebrates the profound connection between cultures through the language of music. “Meloverse” unfolds through two captivating phases.",
    },
    {
      imageUrl: "/assets/images/projects/featured/Webdevpro.jpg",
      title: "WebDevPro",
      subtitle: "Public Relations Avenue",
      content:
        "WebDevPro: University PR Hub empowers students with digital tools for effective communication. Through our development of official websites, blogs, and tailored learning programs, we cultivate essential public relations skills among university students. Our aim is to equip them with the expertise needed to thrive in the ever-evolving digital environment of today.",
    },
    {
      imageUrl: "/assets/images/projects/featured/neverforget.jpg",
      title: "Never Forget",
      subtitle: "Public Relations Avenue",
      content:
        "One project that is done throughout the year under the public relations avenue is called never forget. The ‘Never Forget’ project, spearheaded by the public relations avenue of Rotaract Club of Uva Wellassa University – Badulla, is driven by the objective of implementing a comprehensive program that serves as a reminder for special days to the club’s members.",
    },
    {
      imageUrl: "/assets/images/projects/featured/handsofthambapanni.jpg",
      title: "Hands of Thambapanni",
      subtitle: "Public Relations Avenue",
      content:
        "Hands of Thambapanni is an innovative project aimed at showcasing and promoting Sri Lankan traditional industries through an online and social media platform commenced by the Rotaract Club of Uva Wellesa University Badulla. Hands of Thambapan is a vital project that addresses the need to support and uplet the Small and Medium Enterprises (SMEs) Lanka, particularly those involved in traditional industries",
    },
    {
      imageUrl: "/assets/images/projects/featured/seyaroo2.0.png",
      title: "Seyaroo",
      subtitle: "Public Relations Avenue",
      content:
        "Seya Roo marks a wonderful initiative organized by the Public Relations and a Digital Service avenue of the Rotaract Club of Uva Wellassa University-Badulla with the aim of showcasing the photographic and editing talents of participants. The project guides Rotaractors towards a luminous future behind the lens, transforming them into photographic professionals",
    },
    {
      imageUrl: "/assets/images/projects/featured/punchibandi.jpg",
      title: "Punchi Bandi",
      subtitle: "Community Servicess",
      content:
        "Punchi Bandi is a signature project that has been running for three consecutive years. Its primary objective is to promote maternal health and child care while addressing the Sustainable Development Goals of Zero Hunger, Good Health and Well–Being, Responsible Consumption and Production, and Quality Education. The project specifically focuses on the well-being of children and was carried out in the year 2022-2023.",
    },
    {
      imageUrl: "/assets/images/projects/featured/gamatahetak.jpg",
      title: "Gamata Hetak",
      subtitle: "Community Servicess",
      content:
        "Gamata Hetak is another significant project undertaken by the Community Service Avenue. It aims to develop a specific village, and in the given time frame, the focus was on the village of Bakamuna. Through this project, the avenue strives to improve the living conditions and overall well-being of the community in Bakamuna.",
    },
    {
      imageUrl: "/assets/images/projects/featured/black&white.jpg",
      title: "Black and White",
      subtitle: "Community Servicess",
      content:
        "Black and White is a project that focuses on prisoners in Badulla. This initiative aims to bring positive change and support to prisoners by addressing their needs and providing rehabilitation opportunities. By offering assistance and guidance, the project seeks to promote rehabilitation, reintegration, and a better future for the prisoners.",
    },
    {
      imageUrl: "/assets/images/projects/featured/cresco.jpg",
      title: "Hired 3.0 – Cresco",
      subtitle: "Community Servicess",
      content:
        "The Professional Development of Rotaract club of Uva Wellassa University successfully completed the 1st phase of the “Hired 3.0” – “Cresco” personal branding virtual workshop on 23rd of Aug 2023. The guest speaker for this workshop was Mr. Chathura Gunarathna Bandara, who is a lecturer in the Department of Export Agriculture at Uva Wellassa University of Sri Lanka.",
    },
    {
      imageUrl: "/assets/images/projects/featured/uwuinside.jpg",
      title: "UWU Inside Podcast",
      subtitle: "Public Relations Avenue",
      content:
        "The UWU Inside Podcast is about Uva Wellassa University. It covers various topics related to the university, including academic programs, student life, events, and more. Join us to stay updated and connected with the UWU community.",
      link: "/projects/insideuwu"
    },
    {
      imageUrl: "/assets/images/projects/featured/lush.jpg",
      title: "Lush",
      subtitle: "Community Service",
      content:
        "Lush is a project focused on environmental sustainability and community engagement. It aims to create green spaces and promote eco-friendly practices within the community.",
      link: "/projects/lush"
    },
  ];
    return (
    <>
      <PageHeader title="Projects" />

      <div className="flex flex-col items-center pt-[80px] bg-gradient-to-b from-gray-50 to-white pb-20">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate__animated animate__fadeIn">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Impact Initiatives</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the projects through which we create positive change and build a better future for our communities.
            </p>
            <div className="w-32 h-1.5 bg-gradient-to-r from-pink-600 to-purple-600 mx-auto mt-8"></div>
          </div>

          <div className="mb-20">
            <div className="relative overflow-hidden pb-8">
              <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-pink-50 to-transparent opacity-70 rounded-3xl"></div>
              <TwoLineTitle main="Ongoing Projects" sub="Making an impact today" />
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto py-8">
                {ongoingproject.map((data, index) => (
                  <div 
                    key={index} 
                    className="animate__animated animate__fadeInUp"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <FeaturesCard
                      imageUrl={data.imageUrl}
                      title={data.title}
                      subtitle={data.subtitle}
                      content={data.content}
                      link={data.link}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>          <div>
            <div className="relative overflow-hidden pb-8">
              <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-purple-50 to-transparent opacity-70 rounded-3xl"></div>
              <TwoLineTitle main="Featured Projects" sub="Our proud achievements" />
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto py-8">
                {project.map((data, index) => (
                  <div 
                    key={index} 
                    className="animate__animated animate__fadeInUp"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <FeaturesCard
                      imageUrl={data.imageUrl}
                      title={data.title}
                      subtitle={data.subtitle}
                      content={data.content}
                      link={data.link}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-24 text-center animate__animated animate__fadeInUp">
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-3xl p-12 shadow-inner">
              <h3 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                Have a Project Idea?
              </h3>
              <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-8">
                We're always looking for new ideas and partnerships to create more impact. 
                If you have a project idea or want to collaborate with us, we'd love to hear from you!
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Get in Touch
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

export default Projects;
