"use client";

import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import LOGO from "../assets/LOGO.png";

export default function ResponsiveNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [isHomePage, setIsHomePage] = useState(false);

  useEffect(() => {
    setIsHomePage(location.pathname === "/");
  }, [location.pathname]);

  const handleSectionNavigation = (sectionId, scroll = true) => {
    if (!isHomePage) {
      navigate("/", { state: { scrollTo: sectionId } });
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
    <nav className="bg-[#1F2A44] text-white h-[88px] px-5 shadow-md sticky top-0 z-50">
      {/* Desktop Layout - 1024px and above */}
      <div className="hidden xl:block mx-auto px-[100px] h-full">
        <div className="grid grid-cols-12 gap-6 h-full items-center">
          <div className="col-span-3 flex items-center gap-4">
            <div
              onClick={() => handleDirectNavigation("/")}
              className="cursor-pointer flex items-center gap-3"
            >
              <img src={LOGO} alt="Logo" className="w-10 h-10 object-contain" />
              <h1 className="text-3xl font-bold flex gap-1">
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

          <div className="col-span-9">
            <div className="px-20">
              <ul className="flex justify-between items-center text-[20px] font-normal font-sans">
                <li
                  className="hover:text-blue-400 cursor-pointer transition-colors duration-200 py-2"
                  onClick={() => handleDirectNavigation("/")}
                >
                  Home
                </li>
                <li
                  className="hover:text-blue-400 cursor-pointer transition-colors duration-200 py-2"
                  onClick={() => handleSectionNavigation("services")}
                >
                  Services
                </li>
                <li
                  className="hover:text-blue-400 cursor-pointer transition-colors duration-200 py-2"
                  onClick={() => handleDirectNavigation("/projects")}
                >
                  Portfolio
                </li>
                <li
                  className="hover:text-blue-400 cursor-pointer transition-colors duration-200 py-2"
                  onClick={() => handleSectionNavigation("why")}
                >
                  Why BUILDora?
                </li>
                <li
                  className="hover:text-blue-400 cursor-pointer transition-colors duration-200 py-2"
                  onClick={() => handleSectionNavigation("contact")}
                >
                  Contact us
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Large Tablet Layout - 768px to 1024px */}
      <div className="hidden lg:block xl:hidden mx-auto px-12 h-full">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center gap-3">
            <div
              onClick={() => handleDirectNavigation("/")}
              className="cursor-pointer flex items-center gap-3"
            >
              <img src={LOGO} alt="Logo" className="w-10 h-10 object-contain" />
              <h1 className="text-3xl font-bold flex gap-1">
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

          <ul className="flex space-x-6 text-[18px] font-normal font-sans">
            <li
              className="hover:text-blue-400 cursor-pointer transition-colors duration-200 py-2"
              onClick={() => handleDirectNavigation("/")}
            >
              Home
            </li>
            <li
              className="hover:text-blue-400 cursor-pointer transition-colors duration-200 py-2"
              onClick={() => handleSectionNavigation("services")}
            >
              Services
            </li>
            <li
              className="hover:text-blue-400 cursor-pointer transition-colors duration-200 py-2"
              onClick={() => handleDirectNavigation("/projects")}
            >
              Portfolio
            </li>
            <li
              className="hover:text-blue-400 cursor-pointer transition-colors duration-200 py-2"
              onClick={() => handleSectionNavigation("why")}
            >
              Why Us?
            </li>
            <li
              className="hover:text-blue-400 cursor-pointer transition-colors duration-200 py-2"
              onClick={() => handleSectionNavigation("contact")}
            >
              Contact
            </li>
          </ul>
        </div>
      </div>

      {/* Medium Tablet Layout - 640px to 768px */}
      <div className="hidden md:block lg:hidden mx-auto px-8 h-full">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center gap-2">
            <div
              onClick={() => handleDirectNavigation("/")}
              className="cursor-pointer flex items-center gap-2"
            >
              <img src={LOGO} alt="Logo" className="w-9  object-contain" />
              <h1 className="text-3xl font-bold flex gap-1">
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

          <ul className="flex space-x-4 text-[16px] font-normal font-sans">
            <li
              className="hover:text-blue-400 cursor-pointer transition-colors duration-200 py-2"
              onClick={() => handleDirectNavigation("/")}
            >
              Home
            </li>
            <li
              className="hover:text-blue-400 cursor-pointer transition-colors duration-200 py-2"
              onClick={() => handleSectionNavigation("services")}
            >
              Services
            </li>
            <li
              className="hover:text-blue-400 cursor-pointer transition-colors duration-200 py-2"
              onClick={() => handleDirectNavigation("/projects")}
            >
              Portfolio
            </li>
            <li
              className="hover:text-blue-400 cursor-pointer transition-colors duration-200 py-2"
              onClick={() => handleSectionNavigation("contact")}
            >
              Contact
            </li>
          </ul>
        </div>
      </div>

      {/* Small Tablet Layout - 480px to 640px */}
      <div className="hidden sm:block md:hidden mx-auto px-6 h-full">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center gap-2">
            <div
              onClick={() => handleDirectNavigation("/")}
              className="cursor-pointer flex items-center gap-2"
            >
              <img src={LOGO} alt="Logo" className="w-8 h-8 object-contain" />
              <h1 className="text-3xl font-bold flex gap-1">
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

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Layout - below 480px */}
      <div className="sm:hidden mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center gap-2">
            <div
              onClick={() => handleDirectNavigation("/")}
              className="cursor-pointer flex items-center gap-2"
            >
              <img src={LOGO} alt="Logo" className="w-7 h-7 object-contain" />
              <h1 className="text-2xl font-bold flex gap-1">
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

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - for small tablet and mobile */}
      {isOpen && (
        <div className="md:hidden bg-[#1F2A44] border-t border-white/10 transition-all duration-300 ease-in-out">
          <div className="mx-auto px-4 sm:px-6 py-4">
            <ul className="space-y-3 text-[16px] sm:text-[18px] font-normal font-sans">
              <li
                className="hover:text-blue-400 cursor-pointer py-3 px-2 rounded-lg hover:bg-white/5 transition-all duration-200"
                onClick={() => handleDirectNavigation("/")}
              >
                Home
              </li>
              <li
                className="hover:text-blue-400 cursor-pointer py-3 px-2 rounded-lg hover:bg-white/5 transition-all duration-200"
                onClick={() => handleSectionNavigation("services")}
              >
                Services
              </li>
              <li
                className="hover:text-blue-400 cursor-pointer py-3 px-2 rounded-lg hover:bg-white/5 transition-all duration-200"
                onClick={() => handleDirectNavigation("/projects")}
              >
                Portfolio
              </li>
              <li
                className="hover:text-blue-400 cursor-pointer py-3 px-2 rounded-lg hover:bg-white/5 transition-all duration-200"
                onClick={() => handleSectionNavigation("why")}
              >
                Why BUILDora?
              </li>
              <li
                className="hover:text-blue-400 cursor-pointer py-3 px-2 rounded-lg hover:bg-white/5 transition-all duration-200"
                onClick={() => handleSectionNavigation("contact")}
              >
                Contact us
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
