import TitleAbout from "../atoms/TitlesArticles";
import { AboutMe } from "@/constant/data";
const About = () => {
  return (
    <div>
      <TitleAbout name="About" />
      <p className="text-GrayColor  mt-4">{AboutMe.paragraphs}</p>
    </div>
  );
};

export default About;
