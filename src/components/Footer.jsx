import React from "react";
import { Mail, Linkedin, MessageCircle, Send } from "lucide-react"; // Optional icons

export default function Footer() {
  return (
    <footer className="bg-[#121E3F] text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 border-b border-gray-700 pb-8">
        
        {/* Logo */}
        <div>
    {/* Logo */}
        <h1 className="text-4xl ml-0 md:ml-10 font-bold flex gap-1">
          <span className="text-white space-grotesk2">B</span>
          <span className="text-[#E0F1FF] space-grotesk2">U</span>
          <span className="text-[#C3E7FF] space-grotesk2">I</span>
          <span className="text-[#91D3F7] space-grotesk2">L</span>
          <span className="text-[#36A6DC] space-grotesk2">D</span>
          <span className="text-[#75B4C9] space-grotesk">o</span>
          <span className="text-[#C3E7FF] space-grotesk">r</span>
          <span className="text-[#E0F1FF] space-grotesk">a</span>
        </h1>        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-2 pb-2 pr-8 border-b-3 border-[#00CFFF] inline-block">
            Quick Links
          </h4>
          <ul className="space-y-1 mt-2 text-gray-300">
            <li><a href="#">Our Projects</a></li>
            <li><a href="#">Services</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-2 border-b-3 pb-2 pr-8 border-[#00CFFF] inline-block">
            Contact
          </h4>
          <ul className="space-y-2 mt-2 text-gray-300">
            <li className="flex items-center gap-2">
              <Send size={16} /> buildora@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle size={16} /> WhatsApp
            </li>
            <li className="flex items-center gap-2">
              <Linkedin size={16} /> LinkedIn
            </li>
            <li className="flex items-center gap-2">
              <span className="text-lg">𝕥</span> Tiktok
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Text */}
      <div className="mt-6 max-w-5xl mx-auto text-center text-sm text-gray-400">
        <p className="mb-2">
          At Buildora, we don’t just create websites — we build digital foundations. 
          Every line of code and every design block is part of something structured, solid, and made to last.
        </p>
        <p className="text-xs text-gray-500">
          <span className="text-blue-400">Copyright © 2025 Buildora</span>
        </p>
      </div>
    </footer>
  );
}
