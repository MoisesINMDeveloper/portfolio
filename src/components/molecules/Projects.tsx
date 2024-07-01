import React from "react";
import ParagraphComponent from "../atoms/Paragraph";
import TitleProjects from "../atoms/TitlesArticles";
import { Paragraphs as ParagraphsData } from "@/constant/data";

const Projects = () => {
  return (
    <div className="flex flex-col items-start w-full md:mt-12 lg:mt-14">
      <TitleProjects name="Projects" />
      {ParagraphsData.map((item, index) => (
        <div key={index} className="my-4 md:my-8 md:flex md:flex-col lg:my-12">
          <ParagraphComponent
            title={item.title}
            paragraph={item.paragraph}
            src={item.image}
            alt={item.alt}
            skills={item.skills}
            url={item.url}
          />
        </div>
      ))}
    </div>
  );
};

export default Projects;
