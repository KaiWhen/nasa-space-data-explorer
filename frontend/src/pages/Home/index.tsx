import React from "react";
import Hero from "../../components/sections/Hero";
import StarfieldBackground from "../../components/ui/StarfieldBackground";
import Mars from "../../components/sections/Mars";
import Navbar from "../../components/layout/Navbar";
import MoreSoon from "../../components/sections/MoreSoon";

const HomePage: React.FC = () => {
  return (
    <div className="relative z-0 bg-black">
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
