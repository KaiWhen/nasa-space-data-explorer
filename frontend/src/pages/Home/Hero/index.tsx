import React from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { Tooltip } from 'react-tooltip';
import useFetch from "../../../hooks/useFetch";
import type { APOD } from '../../../types/apod'

const Hero: React.FC = () => {
  const { data, error, loading } = useFetch<APOD>('/apod');

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="max-w-[1200px] w-full flex justify-between items-center px-8">
        {/* Heading */}
        <div className="flex flex-col">
          <h1 className="text-[64px] leading-[1.1] tracking-tight text-red-500 font-semibold hover:scale-105 duration-500">
            NASA
          </h1>
          <h1 className="text-[64px] leading-[1.1] tracking-tight text-gray-50 font-semibold hover:scale-105 duration-500">
            Space Data
          </h1>
          <h1 className="text-[64px] leading-[1.1] tracking-tight text-gray-50 font-semibold hover:scale-105 duration-500">
            Explorer
          </h1>
        </div>

        {/* APOD Image */}
        {
          error ? <div className='text-red-500'>Error: could not load image.</div> : 
          loading ? <div></div> :
          <div className="flex flex-col justify-center items-center hover:scale-102 duration-500">
            <img
              src={data?.imageUrl}
              alt="APOD"
              className="rounded-lg shadow-xl max-h-[500px] max-w-[500] outline-gray-50 outline-2"
              id="img_anchor"
            />
            <Tooltip anchorSelect='#img_anchor' float place='right-end'>
              {data?.title} by {data?.copyright}
            </Tooltip>
            <p className='text-gray-50 py-2'>Astronomy Picture of the Day</p>
          </div>
        }
      </div>

      {/* Arrow at bottom center */}
      <div className="absolute bottom-8">
        <IoIosArrowDown className="fill-white text-4xl animate-fade-in-out" />
      </div>
    </div>
  )
}

export default Hero