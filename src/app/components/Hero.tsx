import React from "react";
import Circuit from "./Circuit";
import CentralLogo from "../Icons/CentralLogo";
import DLocalLogo from "../Icons/DLocalLogo";
import PayPalLogo from "../Icons/PayPalLogo";
import QuickBooksLogo from "../Icons/QuickBooks";


const ServiceIcon: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="w-14 h-14 bg-zinc-900 rounded-xl border border-zinc-800 flex items-center justify-center p-2">
    {children}
  </div>
);

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Graphics Canvas */}
      <div className="relative w-[1000px] h-[600px] scale-[0.6] sm:scale-[0.8] lg:scale-100 -mb-24 sm:-mb-16 md:-mb-8 -mt-32 sm:-mt-24 md:-mt-16">
        <div className="absolute inset-0 z-0">
          <Circuit />
        </div>

        {/* Service Logos - positioned precisely on the canvas */}
        {/* Left Side */}
        <div className="absolute top-[130px] left-[100px] -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:block">
          <ServiceIcon>
            <DLocalLogo />
          </ServiceIcon>
        </div>
        <div className="absolute top-[280px] left-[80px] -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:block">
          <ServiceIcon>
            <PayPalLogo />
          </ServiceIcon>
        </div>
        <div className="absolute top-[430px] left-[120px] -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:block">
          <ServiceIcon>
            <PayPalLogo />
          </ServiceIcon>
        </div>

        {/* Right Side */}
        <div className="absolute top-[130px] left-[900px] -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:block">
          <ServiceIcon>
            <QuickBooksLogo />
          </ServiceIcon>
        </div>
        <div className="absolute top-[280px] left-[920px] -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:block">
          <ServiceIcon>
            <PayPalLogo />
          </ServiceIcon>
        </div>
        <div className="absolute top-[430px] left-[880px] -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:block">
          <ServiceIcon>
            <PayPalLogo />
          </ServiceIcon>
        </div>

        {/* Central Logo */}
        <div className="absolute top-[300px] left-[500px] -translate-x-1/2 -translate-y-1/2 z-10">
          <CentralLogo />
        </div>
      </div>

      {/* Text Content */}
      <div className=" z-10 text-center max-w-3xl mx-auto -mt-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
          Say <span className="text-pink-400">Hello {" "}</span>to financial Integration in one click
        </h1>
        <p className="mt-6 text-lg md:text-xl text-slate-400 max-w-xl mx-auto">
          Embed financial connectivity into your product with an integration
          platform designed for speed and scale.
        </p>
       <button className="relative group mt-10 cursor-pointer px-8 py-3 bg-black/20 backdrop-blur-lg text-pink-400 text-sm font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-r hover:from-pink-400/30 hover:to-pink-500/40 hover:backdrop-blur-xl hover:text-black overflow-hidden shadow-lg shadow-black/20">
        {/* Glassmorphism overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-full opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
        
        {/* Hover glassmorphism overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-300/20 via-pink-400/30 to-pink-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm"></div>
        {/* Animated border */}
        <div className="absolute inset-0 rounded-full border-2 border-pink-500/30"></div>
        <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:opacity-0 transition-opacity duration-300">
          <div className="absolute inset-0 rounded-full border-2 border-pink-500 border-l-transparent border-b-transparent animate-spin opacity-80 group-hover:animate-none"></div>
        </div>
        
        {/* Static border on hover */}
        <div className="absolute inset-0 rounded-full border-2 border-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Button content */}
        <span className="relative z-10 flex items-center gap-2">
          BOOK A DEMO 
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            &raquo;
          </span>
        </span>
      </button>
      </div>
    </div>
  );
};

export default Hero;
