import PageHeader from "@/components/PageHeader";
import CardHorizontal from "@/components/cards/HorizontalCard";
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
  return <>
        <PageHeader title="Avenues" />

  <div className="flex flex-col justify-center items-center pt-[80px] px-4">
  {avenues.map((data, index) => (
            <CardHorizontal
              key={index}
              imageUrl={data.imageUrl}
              title={data.title}
              // subtitle={data.subtitle}
              content={data.content}
            />
          ))}
    
  </div>
  </>;
};

export default Avenues;
