import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Tooltip } from "react-tooltip";
import useFetch from "../../hooks/useFetch";
import type { APOD } from "../../types/apod";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Reveal } from "../animations/Reveal";

const Hero: React.FC = () => {
  const { data, error, loading } = useFetch<APOD>("/apod");

  return (
    <div
      id="home"
      className="hero-section w-full min-h-screen flex flex-col md:flex-row items-center justify-center"
    >
      <div className="max-w-7xl w-full flex flex-col md:flex-row justify-between items-center px-8 gap-8">
        {/* Heading */}

        <div className="flex flex-col mb-4">
          <Reveal x={-30} y={0} duration={0.5} delay={0}>
            <h1 className="px-4 text-5xl text-accent hover:scale-105 duration-500 md:text-6xl">
              NASA
            </h1>
          </Reveal>
          <Reveal x={-30} y={0} duration={0.5} delay={0.25}>
            <h1 className="px-4 text-5xl text-secondary hover:scale-105 duration-500 md:text-6xl">
              Space Data
            </h1>
          </Reveal>
          <Reveal x={-30} y={0} duration={0.5} delay={0.5}>
            <h1 className="px-4 text-5xl text-secondary hover:scale-105 duration-500 md:text-6xl">
              Explorer
            </h1>
          </Reveal>
        </div>

        {/* APOD Image */}
        <Reveal y={75} duration={1} delay={0.5}>
          <div className="flex flex-col justify-center items-center p-4 hover:scale-102 duration-500">
            {error ? (
              <div className="text-red-500">Error: could not load image.</div>
            ) : loading ? (
              <div className="rounded-lg max-h-[500px] max-w-[500px]">
                <Skeleton
                  count={1}
                  width={500}
                  height={500}
                  baseColor="#09090b"
                  highlightColor="#27272a"
                />
              </div>
            ) : (
              <a href="https://apod.nasa.gov/apod/" target="_blank">
                <img
                  src={data?.imageUrl}
                  alt="APOD"
                  className="rounded-lg shadow-xl max-h-[300px] outline-gray-50 outline-2 md:max-h-[400px]"
                  id="img_anchor"
                />
                <Tooltip anchorSelect="#img_anchor" float place="right-end">
                  {data?.title} by {data?.copyright}
                </Tooltip>
              </a>
            )}
            <p className="text-gray-50 py-2">Astronomy Picture of the Day</p>
          </div>
        </Reveal>
      </div>

      {/* Arrow */}
      <div className="absolute bottom-8">
        <IoIosArrowDown className="fill-white text-4xl animate-fade-in-out" />
      </div>
    </div>
  );
};

export default Hero;
