import type { NextPage } from "next";
import Carousel from "../components/Carousel";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import SkillsPanel from "@/components/skills-panel";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-zinc-900">
      {/* Primer contenedor */}
      <div className="w-full max-w-4xl mt-8">
        <Header />
      </div>

      {/* Segundo contenedor */}
      <div className="w-full max-w-4xl mt-4 ">
        <Carousel />
      </div>
      <div className="w-full">
        <Navbar />
      </div>
      <div className="w-full max-w-4xl mt-8">

        <SkillsPanel></SkillsPanel>
      </div>
    </div>

  );
};

export default Home;
