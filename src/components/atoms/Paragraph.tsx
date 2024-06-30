import ImagePort from "./ImagePort";
import Skills from "./Skills";

const ParagraphComponent = ({
  title,
  paragraph,
  src,
  alt,
  skills,
}: ParagraphComponentProps) => {
  return (
    <div className="flex flex-col justify-center gap-4">
      {title && <h1 className="text-white text-left text-xl  pb-4">{title}</h1>}
      <ImagePort images={src} alt={alt} />
      <p className="text-GrayColor  pt-4">{paragraph}</p>
      <Skills skills={skills} />
    </div>
  );
};

export default ParagraphComponent;
