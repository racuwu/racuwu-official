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
  ];
  return <>
        <PageHeader title="Projects" />

  <div className="flex flex-col items-center pt-[80px]">
    <TwoLineTitle main="Ongoing Projects" sub="Our Projects" />
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1140px] py-8 mx-4">
  {ongoingproject.map((data, index) => (
            <FeaturesCard
              key={index}
              imageUrl={data.imageUrl}
              title={data.title}
              subtitle={data.subtitle}
              content={data.content}
            />
          ))}
    
  </div>
  <TwoLineTitle main="Featured Projects" sub="Our Projects" />
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1140px] py-8 mx-4">
  {project.map((data, index) => (
            <FeaturesCard
              key={index}
              imageUrl={data.imageUrl}
              title={data.title}
              subtitle={data.subtitle}
              content={data.content}
              link={data.link}
            />
          ))}
    
  </div>
  </div>
  </>;
};

export default Projects;
