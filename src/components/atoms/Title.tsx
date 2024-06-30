import Caption from "./Caption";
import SocialMedia from "./SocialMedia";

const Title = () => {
  return (
    <div>
      <div>
        <h1 className="text-white text-4xl font-bold">
          Moises <span className="text-[#00ff2a]">Israel</span>
        </h1>
        <h2 className=" text-white text-4xl ">
          FullStack <span className=" text-[#00ff2a]">Developer</span>
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        <Caption />
        <SocialMedia />
      </div>
    </div>
  );
};
export default Title;
