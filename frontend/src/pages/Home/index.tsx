import React from "react";
import Hero from "../../components/home/Hero";
import StarfieldBackground from "../../components/animations/StarfieldBackground";
import Mars from "../../components/home/Mars";
import Navbar from "../../components/ui/Navbar";
import MoreSoon from "../../components/home/MoreSoon";

const HomePage: React.FC = () => {
  return (
    <div className="relative">
      <StarfieldBackground />
      <Navbar />
      <div className="z-10 relative h-screen overflow-y-scroll snap-y snap-mandatory md:snap-center">
        <section className="snap-start h-screen flex items-center justify-center">
          <Hero />
        </section>
        <section className="snap-start h-screen flex items-center justify-center">
          <Mars />
        </section>
        <section className="snap-start h-screen flex items-center justify-center">
          <MoreSoon />
        </section>
      </div>
    </div>
  );
};

export default HomePage;
