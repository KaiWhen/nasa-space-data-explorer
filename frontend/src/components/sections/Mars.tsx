import React from "react";
import marsImage from "../../assets/images/mars2.png";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import SlideBox from "../animations/SlideBox/SlideBox";
import { Reveal } from "../ui/Reveal";

const Mars: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen px-4 py-30 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-8 lg:flex-row lg:items-center lg:justify-between">
        <Reveal x={-50} y={0} duration={1} delay={0.3}>
          <a
            href="https://www.vecteezy.com/free-png/planet-mars"
            className="block w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[560px]"
          >
            <img
              className="mx-auto h-auto w-full rounded-2xl object-contain drop-shadow-[0_0_30px_rgba(251,146,60,0.3)] transition-transform duration-500 hover:scale-[1.02]"
              src={marsImage}
              alt="Planet Mars PNGs by Vecteezy"
            />
          </a>
        </Reveal>

        <div className="w-full max-w-2xl lg:w-[52%]">
          <Reveal y={30} duration={0.5} delay={0.3}>
            <h1 className="mb-4 text-4xl text-secondary md:text-5xl lg:text-6xl">
              Mars
            </h1>
          </Reveal>

          <Reveal y={30} duration={0.5} delay={0.5}>
            <div className="space-y-4 text-zinc-300 text-sm md:text-base">
              <p>
                Mars, also known as the "Red Planet", is the fourth planet from
                the sun. Mars is a desert-like rocky planet with a thin
                atmosphere, primarily composed of carbon dioxide.
              </p>
              <p>
                NASA has sent four rover missions to Mars: Opportunity (2004),
                Spirit (2004), Curiosity (2012), and Perseverance (2021). These
                rovers have been exploring the Martian surface, conducting
                experiments, and sending back valuable data about the planet's
                geology, climate, and potential for past life.
              </p>
              <p>
                NASA also launched the InSight lander in 2018. Its purpose was
                to study the deep interior of Mars. It has been measuring
                seismic activity, heat flow, and other geological processes to
                help scientists understand the planet's formation and evolution.
                It also provided weather data such as atmospheric temperature,
                wind speed, wind direction, and atmospheric pressure.
              </p>
            </div>
          </Reveal>

          <Reveal y={30} duration={0.5} delay={0.7}>
            <p className="mt-4 text-secondary text-md font-semibold">
              Explore photos taken by the rovers and the latest weather data
              from Mars below.
            </p>
          </Reveal>

          <div className="mt-6 flex flex-col gap-4">
            <Reveal y={30} duration={0.5} delay={0.9}>
              <Link to={"/rover-photos"}>
                <SlideBox text="Rover Photos →" bg="mars-rover-bg" />
              </Link>
            </Reveal>

            <Reveal y={30} duration={0.5} delay={1.1}>
              <Link to={"/insight"}>
                <SlideBox text="InSight: Weather →" bg="insight-bg" />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <IoIosArrowDown className="fill-white text-4xl animate-fade-in-out" />
      </div>
    </div>
  );
};

export default Mars;
