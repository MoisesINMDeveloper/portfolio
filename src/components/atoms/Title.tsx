import React from "react";
import Caption from "./Caption";
import SocialMedia from "./SocialMedia";

const Title = () => {
  return (
    <div className="flex flex-col p-4 md:p-8 lg:p-12 lg:pl-4 items-start">
      <div>
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">
          Moises <span className="text-[#00ff2a]">Israel</span>
        </h1>
        <h2 className="text-white text-2xl md:text-3xl lg:text-4xl mt-2">
          FullStack <span className="text-[#00ff2a]">Developer</span>
        </h2>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <Caption />
        <div className="lg:hidden">
          <SocialMedia />
        </div>
      </div>
    </div>
  );
};

export default Title;
