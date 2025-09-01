import { motion } from "framer-motion";

import logo from "./assets/logo.png";

export default function SplashPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-[#1F2A44]">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", duration: 2 }}
        className="flex flex-col items-center"
      >
        {/* Logo bounce */}
        <motion.img
          src={logo}
          alt="Logo"
          className="w-34 h-34 mb-4"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
        />
      </motion.div>
    </div>
  );
}
