"use client";
import { BiHomeAlt } from "react-icons/bi";
import { MdOutlineMiscellaneousServices, MdOutlinePhoneEnabled } from "react-icons/md";
import { CgScreen } from "react-icons/cg";
import { TfiThought } from "react-icons/tfi";
import { useState, useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import LOGO from "../assets/LOGO.png";

export default function ResponsiveNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [isHomePage, setIsHomePage] = useState(false);

  useEffect(() => setIsHomePage(location.pathname === "/"), [location.pathname]);

  const navItems = useMemo(
    () => [
      { key: "home", label: "Home", icon: <BiHomeAlt />, type: "route", path: "/" },
      { key: "services", label: "Services", icon: <MdOutlineMiscellaneousServices />, type: "section", sectionId: "services" },
      { key: "portfolio", label: "Portfolio", icon: <CgScreen />, type: "route", path: "/projects" },
      { key: "why", label: "Why BUILDora?", icon: <TfiThought />, type: "section", sectionId: "why" },
      { key: "contact", label: "Contact us", icon: <MdOutlinePhoneEnabled />, type: "section", sectionId: "contact" },
    ],
    []
  );

  const mdNavItems = useMemo(() => navItems.filter((it) => it.key !== "why"), [navItems]);
  const smNavItems = mdNavItems;

  const handleNav = (item) => {
    setIsOpen(false);
    if (item.type === "route") {
      navigate(item.path);
      return;
    }
    if (!isHomePage) {
      navigate("/", { state: { scrollTo: item.sectionId } });
    } else {
      const el = document.getElementById(item.sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (location.state?.scrollTo && isHomePage) {
      const sectionId = location.state.scrollTo;
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
        navigate(location.pathname, { replace: true, state: {} });
      }, 100);
    }
  }, [location.state, isHomePage, navigate, location.pathname]);

  const Brand = ({ size = "md" }) => (
    <div className="cursor-pointer flex items-center gap-3" onClick={() => handleNav({ type: "route", path: "/" })}>
      <img src={LOGO} alt="Logo" className={size === "sm" ? "w-7 h-7 object-contain" : size === "xs" ? "w-6 h-6 object-contain" : "w-10 h-10 object-contain"} />
      <h1 className={size === "sm" ? "text-2xl font-bold flex gap-1" : "text-3xl font-bold flex gap-1"}>
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
  );

  return (
    <nav className="bg-[#1F2A44]/95 text-white h-[88px] px-5 sticky top-0 z-50 backdrop-blur-sm shadow-lg border-b border-white/10">
      <div className="hidden xl:block mx-auto px-[100px] h-full">
        <div className="grid grid-cols-12 gap-6 h-full items-center">
          <div className="col-span-3 flex items-center gap-4">
            <Brand />
          </div>
          <div className="col-span-9">
            <div className="px-20">
              <ul className="flex justify-between items-center text-[20px] font-normal font-sans">
                {navItems.map((it) => (
                  <li key={it.key} className="hover:text-blue-400 cursor-pointer transition-colors duration-200 py-2 whitespace-nowrap" onClick={() => handleNav(it)}>
                    <div className="flex flex-row justify-center items-center gap-2">{it.icon}{it.label}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:block xl:hidden mx-auto px-12 h-full">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center gap-3">
            <Brand />
          </div>
          <ul className="flex items-center space-x-6 text-[18px] font-normal font-sans">
            {navItems.map((it) => (
              <li key={it.key} className="hover:text-blue-400 cursor-pointer transition-colors duration-200 py-2 whitespace-nowrap" onClick={() => handleNav(it)}>
                <div className="flex flex-row justify-center items-center gap-2">{it.icon}{it.label}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="hidden md:block lg:hidden mx-auto px-8 h-full">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center gap-2">
            <Brand size="sm" />
          </div>
          <ul className="flex space-x-4 text-[16px] font-normal font-sans items-center">
            {mdNavItems.map((it) => (
              <li key={it.key} className="hover:text-blue-400 cursor-pointer transition-colors duration-200 py-2 flex items-center gap-2 whitespace-nowrap" onClick={() => handleNav(it)}>
                {it.icon}
                <span>{it.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="hidden sm:block md:hidden mx-auto px-6 h-full">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center gap-2">
            <Brand size="sm" />
          </div>
          <ul className="flex space-x-4 text-[16px] font-normal font-sans items-center">
            {smNavItems.map((it) => (
              <li key={it.key} className="hover:text-blue-400 cursor-pointer transition-colors duration-200 py-2 flex items-center gap-2 whitespace-nowrap" onClick={() => handleNav(it)}>
                {it.icon}
                <span>{it.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="sm:hidden mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center gap-2">
            <Brand size="sm" />
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-200" aria-label="Toggle menu">
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#1F2A44]/98 border-t border-white/10 transition-all duration-300 ease-in-out w-full shadow-2xl">
          <div className="mx-auto px-4 sm:px-6 py-4">
            <ul className="space-y-3 text-[16px] sm:text-[18px] font-normal font-sans">
              {navItems.map((it) => (
                <li key={it.key} className="hover:text-blue-400 cursor-pointer py-3 px-2 rounded-lg hover:bg-white/5 transition-all duration-200 flex items-center gap-3" onClick={() => handleNav(it)}>
                  {it.icon}
                  <span>{it.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
