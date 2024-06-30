import ParagraphComponent from "../atoms/Paragraph";
import TitleProjects from "../atoms/TitlesArticles";
import { Paragraphs as ParagraphsData } from "@/constant/data";

const Projects = () => {
  return (
    <article className="flex flex-col  items-center  w-screen bgBlack px-12 mt-[-1rem]">
      <div className="items-left">
        <TitleProjects name="Projects" />
        {ParagraphsData.map(
          (
            item: ParagraphItem,
            index: number // Ajusta el tipo de 'index' a 'number'
          ) => (
            <div key={index} className="my-4">
              <ParagraphComponent
                title={item.title}
                paragraph={item.paragraph}
                src={item.image} // Pasa 'item.image' correctamente como 'src'
                alt={item.alt}
                skills={item.skills}
              />
            </div>
          )
        )}
      </div>
    </article>
  );
};

export default Projects;
