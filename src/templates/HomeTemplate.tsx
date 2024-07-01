import SocialMedia from "@/components/atoms/SocialMedia";
import Title from "@/components/atoms/Title";
import About from "@/components/molecules/About";
import Footer from "@/components/molecules/Footer";
import Projects from "@/components/molecules/Projects";

const HomeTemplate = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-black text-white">
      <div className="flex flex-col md:w-1/2 lg:w-1/2 p-4 md:p-8 lg:p-12 lg:sticky md:top-0 lg:h-screen">
        <div className="flex flex-col md:h-full">
          <Title />
          <About />
        </div>
        <div className="hidden lg:flex lg:flex-col ">
          <Footer />
        </div>
      </div>
      <div className="bg-bgBlack flex-1 p-4 md:h-full md:p-8 lg:p-12 md:overflow-y-auto">
        <Projects />
      </div>
      <div className=" md:hidden  ">
        <Footer />
      </div>
    </div>
  );
};

export default HomeTemplate;
