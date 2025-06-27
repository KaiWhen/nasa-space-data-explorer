import { Reveal } from "../ui/Reveal";
import { Footer } from "../layout/Footer";

const MoreSoon = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center items-center">
      <Reveal delay={0.3}>
        <div className="text-center p-8">
          <h1 className="text-6xl text-secondary md:text-8xl">More Soon...</h1>
        </div>
      </Reveal>
      <div className="absolute bottom-4 text-center text-[12px]">
        <Footer />
      </div>
    </div>
  );
};

export default MoreSoon;
