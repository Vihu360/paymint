"use client";

import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { SmoothCursor } from "@/components/ui/smooth-cursor";

const page = () => {
  return (
    <div className="min-h-screen font-sans text-slate-300 p-12 "
    style={{
  background: `
        radial-gradient(circle at 25% 25%, rgba(236, 72, 153, 0.2) 0%, transparent 30%),
        radial-gradient(circle at 75% 25%, rgba(59, 130, 246, 0.15) 0%, transparent 30%),
        radial-gradient(circle at 25% 75%, rgba(168, 85, 247, 0.15) 0%, transparent 30%),
        radial-gradient(circle at 75% 75%, rgba(236, 72, 153, 0.1) 0%, transparent 30%),
        repeating-radial-gradient(circle at 50% 50%, transparent 0px, transparent 20px, rgba(255, 255, 255, 0.03) 21px, rgba(255, 255, 255, 0.03) 22px),
        linear-gradient(135deg, #0c0d14 0%, #1a0b2e 50%, #0c0d14 100%)
      `
}}


    >
      <SmoothCursor
        springConfig={{
          damping: 50,
          stiffness: 800,
          mass: 0.1,
          restDelta: 0.00001,
        }}
      />
      <Navbar />
      <div
        className="w-full h-full rounded-[40px]"
        style={{
          backgroundColor: "#000",
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.1) 0%, transparent 50%),
            repeating-conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(99, 102, 241, 0.08) 60deg, transparent 120deg),
            repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(99, 102, 241, 0.03) 2px, rgba(99, 102, 241, 0.03) 4px)
          `,


        }}
      >
         <div 
          className="absolute inset-0 rounded-[40px] opacity-50"
          style={{
            background: `
              repeating-conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(236, 72, 153, 0.03) 60deg, transparent 120deg),
              repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(168, 85, 247, 0.02) 2px, rgba(168, 85, 247, 0.02) 4px)
            `
          }}
        ></div>
        <main className="container mx-auto px-4 py-10 sm:py-24 lg:pt-24">
          <Hero />
        </main>
      </div>
    </div>

  );
};

export default page;
