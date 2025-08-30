"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import LOGO from "../assets/LOGO.png"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#1F2A44] text-white px-6 py-4 shadow-md">
      <div className="max-w-full flex mt-2 mb-2 justify-between items-center">
        <div className="flex items-center gap-4">
          {/* Logo */}
          <Link to="/">
            <img
              src={LOGO}
              alt="Logo"
              className="w-10 cursor-pointer"
            />
          </Link>
          <Link to="/">
            <h1 className="text-3xl font-bold gap-1 hidden sm:flex md:hidden lg:flex cursor-pointer">
              <span className="text-white space-grotesk2">B</span>
              <span className="text-[#E0F1FF] space-grotesk2">U</span>
              <span className="text-[#C3E7FF] space-grotesk2">I</span>
              <span className="text-[#91D3F7] space-grotesk2">L</span>
              <span className="text-[#36A6DC] space-grotesk2">D</span>
              <span className="text-[#75B4C9] space-grotesk">o</span>
              <span className="text-[#C3E7FF] space-grotesk">r</span>
              <span className="text-[#E0F1FF] space-grotesk">a</span>
            </h1>
          </Link>
        </div>

        <ul className="hidden mr-20 md:flex text-[18px] space-x-10 l:space-x-20 xl:space-x-30 2xl:space-x-50 font-medium">
          <li className="hover:text-blue-400 cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-blue-400 cursor-pointer" onClick={() => {
            const el = document.getElementById("services");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}>Services</li>
          <li className="hover:text-blue-400 cursor-pointer">
            <Link to="/projects">Portfolio</Link>
          </li>
          <li className="hover:text-blue-400 cursor-pointer" onClick={() => {
            const el = document.getElementById("why");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}>Why BUILDora?</li>
          <li className="hover:text-blue-400 cursor-pointer" onClick={() => {
            const el = document.getElementById("contact");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}>Contact us</li>
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
          <li className="hover:text-blue-400 cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-blue-400 cursor-pointer" onClick={() => {
            const el = document.getElementById("services");
            if (el) el.scrollIntoView({ behavior: "smooth" });
            setIsOpen(false);
          }}>Services</li>
          <li className="hover:text-blue-400 cursor-pointer">
            <Link to="/projects">Portfolio</Link>
          </li>
          <li className="hover:text-blue-400 cursor-pointer" onClick={() => {
            const el = document.getElementById("why");
            if (el) el.scrollIntoView({ behavior: "smooth" });
            setIsOpen(false);
          }}>Why BUILDora?</li>
          <li className="hover:text-blue-400 cursor-pointer" onClick={() => {
            const el = document.getElementById("contact");
            if (el) el.scrollIntoView({ behavior: "smooth" });
            setIsOpen(false);
          }}>Contact us</li>
        </ul>
      )}
    </nav>
  );
}
