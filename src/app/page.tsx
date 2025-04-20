import type { NextPage } from "next";
import Carousel from "@/components/carousel";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import SkillsPanel from "@/components/skills-panel";

const Home: NextPage = () => {
  return (
    <main className="flex flex-col items-center min-h-screen bg-zinc-900">
      {/* Primer contenedor */}
      <header className="w-full max-w-7xl mt-8">
        <Header />
      </header>

      {/* Segundo contenedor */}
      <section className="w-full max-w-7xl mt-4 ">
        <Carousel />
      </section>
      <nav className="w-full">
        <Navbar />
      </nav>
      <section className="w-full max-w-7xl mt-8">

        <SkillsPanel></SkillsPanel>
      </section>
    </main>

  );
};

export default Home;
