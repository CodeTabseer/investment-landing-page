"use client";

import { useState, useEffect } from "react";

const ImportantDisclaimer: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="relative h-screen flex items-center justify-center text-white text-center bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: "url('https://i.postimg.cc/BbkFPX0R/disclaimer.webp')",
      }}
    >
      <div
        className={`bg-white bg-opacity-50 p-6 rounded-lg transition-all duration-300 ${
          isScrolled ? "backdrop-blur-md" : ""
        }`}
      >
        <h1 className="text-4xl text-primary-light font-bold">
          Important Disclaimer
        </h1>
        <p className="mt-2 text-sm text-black md:text-base">
          INVESTING IN ANY BUSINESS INVOLVES RISKS. PLEASE MAKE YOUR INVESTMENT
          DECISION WITH A CLEAR UNDERSTANDING OF THESE RISKS.
        </p>
      </div>
    </div>
  );
};

export default ImportantDisclaimer;
