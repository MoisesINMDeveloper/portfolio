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
    <div className="bg-bgBlack flex flex-col md:flex-col justify-between gap-4 p-4 lg:flex-row ">
      <div className="flex flex-col lg:w-1/2">
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
        <p className="text-GrayColor   pt-4 ">{paragraph}</p>
        <Skills skills={skills} />
      </div>
      <div className="lg:w-1/2">
        <ImagePort images={src} alt={alt} />
      </div>
    </div>
  );
};

export default ParagraphComponent;
