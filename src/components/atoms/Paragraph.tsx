import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import ImagePort from "./ImagePort";
import Skills from "./Skills";
import Link from "next/link";

const ParagraphComponent: React.FC<ParagraphComponentProps> = ({
  title,
  paragraph,
  src,
  alt,
  skills,
  url,
}) => {
  return (
    <div className="flex flex-col justify-center gap-4">
      <div className="flex flex-row items-center">
        {title && (
          <h1 className="text-white text-left text-xl pr-4">{title}</h1>
        )}
        {url && (
          <Link className="text-GreenColor" href={url} passHref>
            <FaExternalLinkAlt size={15} />
          </Link>
        )}
      </div>
      <ImagePort images={src} alt={alt} />
      <p className="text-GrayColor pt-4">{paragraph}</p>
      <Skills skills={skills} />
    </div>
  );
};

export default ParagraphComponent;
