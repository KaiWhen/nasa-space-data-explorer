import React from "react";
import marsImage from "../../assets/images/mars2.png";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import SlideBox from "../animations/SlideBox/SlideBox";
import { Reveal } from "../ui/Reveal";

const Mars: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-center">
      <div className="max-w-[1400px] w-full flex flex-col lg:flex-row justify-between items-center lg:items-start px-8">
        <Reveal x={-50} y={0} duration={1} delay={0.3}>
          <a href="https://www.vecteezy.com/free-png/planet-mars">
            <img
              className="p-12 max-sm:hidden max-sm:p-0 w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[600px] lg:h-[600px] xl:w-[650px] xl:h-[650px] hover:scale-101 duration-500"
              src={marsImage}
              alt="Planet Mars PNGs by Vecteezy"
            />
          </a>
        </Reveal>
        <div className="flex flex-col justify-start items-start w-full lg:w-1/2 lg:pl-8">
          <div className="lg:py-8">
            <Reveal y={30} duration={0.5} delay={0.3}>
              <h1 className="text-4xl text-secondary mb-4 md:text-5xl lg:text-6xl">
                Mars
              </h1>
            </Reveal>
            <Reveal y={30} duration={0.5} delay={0.5}>
              <p className="text-zinc-300 text-sm">
                Mars, also known as the "Red Planet", is the fourth planet from
                the sun. Mars is a desert-like rocky planet with a thin
                atmosphere, primarily composed of carbon dioxide.
              </p>
              <p className="text-zinc-300 text-sm mt-2 lg:mt-4">
                NASA has sent four rover missions to Mars: Opportunity (2004),
                Spirit (2004), Curiosity (2012), and Perseverance (2021). These
                rovers have been exploring the Martian surface, conducting
                experiments, and sending back valuable data about the planet's
                geology, climate, and potential for past life.
              </p>
              <p className="text-zinc-300 text-sm mt-2 lg:mt-4">
                NASA also launched the InSight lander in 2018. Its purpose was
                to study the deep interior of Mars. It has been measuring
                seismic activity, heat flow, and other geological processes to
                help scientists understand the planet's formation and evolution.
                It also provided weather data such as atmospheric temperature,
                wind speed, wind direction, and atmospheric pressure.
              </p>
            </Reveal>
            <Reveal y={30} duration={0.5} delay={0.7}>
              <p className="text-secondary text-md font-semibold mt-2 lg:mt-4">
                Explore photos taken by the rovers and the latest weather data
                from Mars below.
              </p>
            </Reveal>

            <div className="mt-4 flex flex-col gap-4 lg:mt-6">
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
      </div>
      {/* Arrow */}
      <div className="absolute bottom-8">
        <IoIosArrowDown className="fill-white text-4xl animate-fade-in-out" />
      </div>
    </div>
  );
};

export default Mars;
