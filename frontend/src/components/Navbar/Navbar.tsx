import React, { useState } from 'react';
import { Link } from 'react-scroll';

// type Props = {}

const index = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center text-gray-50'>
      <div>
        <img src="" alt="logo" className="rounded-full" style={{width: '50px'}} />
      </div>

      {/* Menu */}
      <ul className='hidden md:flex'>
        <li>
            <Link to='hero' duration={500}>
                Home
            </Link>
        </li>
        <li>
            <Link to='rover' duration={500}>
                Mars Rover
            </Link>
        </li>
        <li>
            <Link to='idk' duration={500}>
                IDK
            </Link>
        </li>
      </ul>

      {/* Hamburger */}
      
    </div>
  )
};

export default index;