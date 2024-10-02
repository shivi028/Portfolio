"use client";
import { SparklesIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React from "react";
import { Boxes } from "../ui/background-boxes";

const Hero = () => {
  return (
    <div className="w-[100vw] flex flex-col justify-center  mx-6 font-roboto min-h-[75vh] relative overflow-hidden -ml-1 -mr-4 pl-6">
      <div className="absolute inset-0 w-full h-full bg-[#f2d3d8] z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <div className="flex flex-col items-center lg:items-start">
        {" "}
        {/* Centering inner content */}
        {/* Hero Heading */}
        <div className="leading-8 z-30 relative text-center lg:text-left">
          {" "}
          {/* Center text on small screens */}
          <h1 className="head lg:text-[3rem] sm:text-4xl text-3xl w-full lg:w-[40%] lg:leading-[3.5rem] font-roboto font-bold relative">
            <span className="text-headcolor">Hi there.</span> I’m
            <span className="relative inline-block ml-2 p-1">
              Shivi
              <svg
                className="absolute -inset-1 w-full h-full m-1 animate-draw-rectangle"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                  fill="none"
                  stroke="#E85A71"
                  strokeWidth="4"
                  rx="8"
                />
              </svg>
            </span>
            , a Full Stack Developer and AI/ML Enthusiast.
          </h1>
        </div>
        <div className="lg:text-[1.3rem] text-xl relative sm:text-base mt-6 lg:font-extralight text-gray-700 z-30 text-center font-bold">
        Creative Designer focused on building interactive experiences with code.
        </div>
      </div>

      <div className="available-for-project relative flex gap-x-2 mt-8 font-roboto text-headcolor border rounded-xl border-headcolor w-full -ml-2 lg:ml-0 lg:w-[17%] px-1 py-1 font-bold items-center justify-center z-30 opacity-0 animate-fade-in ">
        <SparklesIcon className="w-5 h-5 text-headcolor font-bold" />
        <Link href={"/contact"} className="font-bold">
          Available For New Project
        </Link>
      </div>
    </div>
  );
};

export default Hero;
