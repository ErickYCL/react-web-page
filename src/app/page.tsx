import type { NextPage } from "next";
import Carousel from "../components/Carousel";
import Header from "@/components/header";
import Footer from "@/components/footer-socialmedia";
const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      {/* Primer contenedor */}
      <div className="w-full max-w-4xl mt-8">
        <Header />
      </div>

      {/* Segundo contenedor */}
      <div className="w-full max-w-4xl mt-8 flex-grow">
        <Carousel />
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>

  );
};

export default Home;
