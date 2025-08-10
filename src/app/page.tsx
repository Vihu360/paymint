"use client";

import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { SmoothCursor } from "@/components/ui/smooth-cursor";

const page = () => {
  return (
    <div className="min-h-screen font-sans text-slate-300 overflow-x-hidden">
      <SmoothCursor
        springConfig={{
          damping: 50,
          stiffness: 800,
          mass: 0.1,
          restDelta: 0.00001,
        }}
      />{" "}
      <Navbar />
      <div
        className="w-full h-full"
        style={{
          backgroundColor: "#000",
          backgroundImage:
            "repeating-linear-gradient(-45deg, rgba(236, 72, 153, 0.15), rgba(236, 72, 153, 0.15) 1px, transparent 1px, transparent 25px)",
        }}
      >
        <main className="container mx-auto px-4 py-16 sm:py-24 lg:pt-40">
          <Hero />
        </main>
      </div>
    </div>
  );
};

export default page;
