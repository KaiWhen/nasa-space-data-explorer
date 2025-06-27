import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface NavbarProps {
  initialScrollState?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ initialScrollState }) => {
  const [scrolled, setScrolled] = useState(initialScrollState ?? false);
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 0) {
        setScrolled(true);
      }
    };

    const heroElement = document.querySelector(".hero-section");

    if (heroElement) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setScrolled(entry.intersectionRatio < 0.9);
        },
        { threshold: [0, 0.9] },
      );

      observer.observe(heroElement);

      return () => {
        observer.disconnect();
      };
    } else {
      window.addEventListener("wheel", handleWheel, { passive: true });
      return () => {
        window.removeEventListener("wheel", handleWheel);
      };
    }
  }, []);

  return (
    <div
      className={`z-20 fixed inset-x-0 mx-auto transition-all duration-500 ease-in-out ${
        scrolled ? "w-full" : "w-[100%] md:w-[80%] mt-0 md:mt-4"
      }`}
    >
      <div
        className={`flex justify-between items-center text-gray-50 bg-primary shadow-2xl transition-all duration-500 ease-in-out ${
          scrolled
            ? "max-md:h-[60px] h-[50px] md:h-[60px] rounded-none px-4 md:px-8"
            : "max-md:h-[60px] h-[40px] md:h-[50px] rounded-none md:rounded-2xl px-4"
        }`}
      >
        <div className="flex flex-row mx-2 md:mx-4 font-semibold">
          <p>NOT</p>
          <p className="text-accent ml-1">NASA</p>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex text-sm mx-2">
          <li className="hover:text-accent duration-300">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-accent duration-300">
            <Link to="/rover-photos">Rover Photos</Link>
          </li>
          <li className="hover:text-accent duration-300">
            <Link to="/insight">InSight</Link>
          </li>
        </ul>

        <div
          className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center md:hidden z-10"
          onClick={handleClick}
        >
          <div
            className={`w-[50%] h-[2px] bg-secondary rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] ${
              nav ? "rotate-[-45deg]" : ""
            }`}
          ></div>
          <div
            className={`w-[50%] h-[2px] bg-secondary rounded-md transition-all duration-300 origin-center ${
              nav ? "hidden" : ""
            }`}
          ></div>
          <div
            className={`w-[50%] h-[2px] bg-secondary rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] ${
              nav ? "rotate-[45deg]" : ""
            }`}
          ></div>
        </div>

        {/* Mobile Menu */}
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center"
          }
        >
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="/">
              Home
            </Link>
          </li>
          <li className="py-6 text-4xl">
            {" "}
            <Link onClick={handleClick} to="/rover-photos">
              Rover Photos
            </Link>
          </li>
          <li className="py-6 text-4xl">
            {" "}
            <Link onClick={handleClick} to="/insight">
              Insight: Mars Weather
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
