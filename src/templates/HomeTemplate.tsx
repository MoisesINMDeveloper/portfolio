import Title from "@/components/atoms/Title";
import About from "@/components/molecules/About";
import Projects from "@/components/molecules/Projects";

const HomeTemplate = () => {
  return (
    <main className="flex w-screen h-screen flex-col items-center justify-between gap-12 px-12 pt-12">
      <Title />
      <About />
      <Projects />
    </main>
  );
};

export default HomeTemplate;
