"use client";

import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import LOGO from "../assets/LOGO.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [isHomePage, setIsHomePage] = useState(false);

  useEffect(() => {
    setIsHomePage(location.pathname === "/");
  }, [location]);

  const handleSectionNavigation = (sectionId, scroll = true) => {
    if (!isHomePage) {
      navigate("/", { state: { scrollTo: scroll ? sectionId : null } });
    } else if (scroll) {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  const handleDirectNavigation = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  useEffect(() => {
    if (location.state?.scrollTo && isHomePage) {
      const sectionId = location.state.scrollTo;
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
        navigate(location.pathname, { replace: true, state: {} });
      }, 100); 
    }
  }, [location.state, isHomePage, navigate, location.pathname]);

  return (
    <nav className="bg-[#1F2A44] text-white px-6 py-4 shadow-md">
      <div className="max-w-full flex mt-2 mb-2 justify-between items-center">
        <div className="flex items-center gap-4">
          {/* Logo */}
          <div
            onClick={() => handleDirectNavigation("/")}
            className="cursor-pointer"
          >
            <img src={LOGO} alt="Logo" className="w-10" />
          </div>
          <div
            onClick={() => handleDirectNavigation("/")}
            className="cursor-pointer"
          >
            <h1 className="text-3xl font-bold gap-1 hidden sm:flex md:hidden lg:flex">
              <span className="text-white space-grotesk2">B</span>
              <span className="text-[#E0F1FF] space-grotesk2">U</span>
              <span className="text-[#C3E7FF] space-grotesk2">I</span>
              <span className="text-[#91D3F7] space-grotesk2">L</span>
              <span className="text-[#36A6DC] space-grotesk2">D</span>
              <span className="text-[#75B4C9] space-grotesk">o</span>
              <span className="text-[#C3E7FF] space-grotesk">r</span>
              <span className="text-[#E0F1FF] space-grotesk">a</span>
            </h1>
          </div>
        </div>

        <ul className="hidden mr-20 md:flex text-[18px] space-x-10 l:space-x-20 xl:space-x-30 2xl:space-x-50 font-medium">
          <li
            className="hover:text-blue-400 cursor-pointer"
            onClick={() => handleDirectNavigation("/")}
          >
            Home
          </li>
          <li
            className="hover:text-blue-400 cursor-pointer"
            onClick={() => handleSectionNavigation("services")}
          >
            Services
          </li>
          <li
            className="hover:text-blue-400 cursor-pointer"
            onClick={() => handleDirectNavigation("/projects")}
          >
            Portfolio
          </li>
          <li
            className="hover:text-blue-400 cursor-pointer"
            onClick={() => handleSectionNavigation("why")}
          >
            Why BUILDora?
          </li>
          <li
            className="hover:text-blue-400 cursor-pointer"
            onClick={() => handleSectionNavigation("contact")}
          >
            Contact us
          </li>
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X size={24} /> : <Menu size={30} />}
        </button>
      </div>

      {isOpen && (
        <ul className="md:hidden mt-4 mb-4 space-y-3 text-sm font-medium">
          <li
            className="hover:text-blue-400 cursor-pointer"
            onClick={() => handleDirectNavigation("/")}
          >
            Home
          </li>
          <li
            className="hover:text-blue-400 cursor-pointer"
            onClick={() => handleSectionNavigation("services")}
          >
            Services
          </li>
          <li
            className="hover:text-blue-400 cursor-pointer"
            onClick={() => handleDirectNavigation("/projects")}
          >
            Portfolio
          </li>
          <li
            className="hover:text-blue-400 cursor-pointer"
            onClick={() => handleSectionNavigation("why")}
          >
            Why BUILDora?
          </li>
          <li
            className="hover:text-blue-400 cursor-pointer"
            onClick={() => handleSectionNavigation("contact")}
          >
            Contact us
          </li>
        </ul>
      )}
    </nav>
  );
}
