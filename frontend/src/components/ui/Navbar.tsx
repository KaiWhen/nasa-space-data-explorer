import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface NavbarProps {
  initialScrollState?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ initialScrollState }) => {
  const [scrolled, setScrolled] = useState(initialScrollState ?? false);

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
        scrolled ? "w-full" : "w-[80%] mt-4"
      }`}
    >
      <div
        className={`flex justify-between items-center text-gray-50 bg-primary shadow-2xl transition-all duration-500 ease-in-out ${
          scrolled
            ? "h-[50px] md:h-[60px] rounded-none px-8"
            : "h-[40px] md:h-[50px] rounded-2xl px-4"
        }`}
      >
        <div className="flex flex-row mx-4 font-semibold">
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

        {/* Hamburger */}
      </div>
    </div>
  );
};

export default Navbar;
