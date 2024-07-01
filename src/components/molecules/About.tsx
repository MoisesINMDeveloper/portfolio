import React from "react";
import TitleAbout from "../atoms/TitlesArticles";
import { AboutMe } from "@/constant/data";

const About = () => {
  return (
    <div className="p-4 flex flex-col ">
      <div className="md:w-3/4 lg:w-3/4">
        <div className="md:w-1/4 lg:w-1/4">
          <TitleAbout name="About" />
        </div>
      </div>
      <p className="text-GrayColor mt-4">{AboutMe.paragraphs}</p>
    </div>
  );
};

export default About;
