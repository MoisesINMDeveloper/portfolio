import React from "react";
import ParagraphComponent from "../atoms/Paragraph";
import TitleProjects from "../atoms/TitlesArticles";
import { Paragraphs as ParagraphsData } from "@/constant/data";

const Projects = () => {
  return (
    <article className="flex flex-col items-center w-screen bgBlack px-12 pt-[1rem] mt-[-1rem]">
      <div className="items-left">
        <TitleProjects name="Projects" />
        {ParagraphsData.map((item, index) => (
          <div key={index} className="my-4">
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
    </article>
  );
};

export default Projects;
