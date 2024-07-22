import PageHeader from "@/components/PageHeader";
import CardHorizontal from "@/components/cards/HorizontalCard";
import React from "react";

const Projects = () => {
  const project = [
    {
      imageUrl: "assets/images/news/bod.jpg",
      title: "Calling for the Next Generation of Wolves to Lead the Pack",
      subtitle:
        "Please note that this is only applicable for second-year Rotaractors.",
      content:
        "Calling Applications for the Board of Directors of Rotaract Club of Uva Wellassa University - Badulla 2024-25 A year has passed, and the time has come for the next pack of wolves to lead the Rotaract Pack to greater heights! We hereby call for applications for the Board of Directors of Rotaract Club of Uva Wellassa University - Badulla.",
      url: "https://forms.gle/PCmDVjZFGUoNn5Ng9",
      urlText: "Apply Now!",
    },
    {
      imageUrl: "assets/images/news/excoelect.jpg",
      title:
        "Congratulations to the next Alpha and his Executive Committee of the club",
      subtitle: "Executive Committee | RI Year 2024-25 Elect",
      content:
        "President Elect- Pavithre Wikramarathna, Joint Secretary Elect - Chandima Jayawardana , Joint Secretary Elect - Nethmini Karunarathne, Vice President Elect for Membership Development and Retention - Nethmini Wikramasinge, Vice President Elect for Projects - Hasanga Savindra, Vice President Elect for Projects - Kesara Jayasinghe, Treasurer Elect - Rushmi Rosario , Sergeant at Arms Elect - Lohitha Gimhan",
      url: "null",
      urlText: "",
    },

    {
      imageUrl: "assets/images/news/easterart.jpg",
      title: "SUBMISSIONS CLOSED",
      subtitle:
        "The time given for submissions to the Easter Art Competition is now officially finished.",
      content:
        "Submissions for the Easter Art Competition have officially closed, marking the end of a vibrant and creative period. We extend our heartfelt gratitude to all participants for sharing their cherished artworks. Your contributions have added color, joy, and inspiration to our event. Thank you for your enthusiasm and dedication. As we move forward, we eagerly anticipate the delightful task of reviewing and celebrating your masterpieces.",
      url: "null",
    },
  ];
  return (
    <>
      <PageHeader title="News" />

      {/* <div className="flex flex-col items-center justify-center pt-[80px]"> */}
        <div className="flex flex-col justify-center items-center pt-[80px] px-4">
          {project.map((data, index) => (
            <CardHorizontal
              key={index}
              imageUrl={data.imageUrl}
              title={data.title}
              subtitle={data.subtitle}
              content={data.content}
              url={data.url}
              urlText={data.urlText}
            />
          ))}
        </div>
      {/* </div> */}
    </>
  );
};

export default Projects;
