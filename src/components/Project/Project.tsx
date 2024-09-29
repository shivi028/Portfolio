"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface Project {
  title: string;
  projectImg: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  demoUrl: string;
}

const projects: Project[] = [
  {
    title: "PROJECT ALPHA",
    projectImg: "/Images/tic_tac_toe.png",
    description:
      "A revolutionary app that changes the way we think about productivity.",
    techStack: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/project-alpha",
    demoUrl: "https://project-alpha-demo.com",
  },
  {
    title: "PROJECT L",
    projectImg: "/Images/tic_tac_toe.png",
    description:
      "A revolutionary app that changes the way we think about productivity.",
    techStack: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/project-l",
    demoUrl: "https://project-l-demo.com",
  },
  {
    title: "PROJECT C",
    projectImg: "/Images/tic_tac_toe.png",
    description:
      "A revolutionary app that changes the way we think about productivity.",
    techStack: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/project-c",
    demoUrl: "https://project-c-demo.com",
  },
  {
    title: "PROJECT B",
    projectImg: "/Images/tic_tac_toe.png",
    description:
      "A revolutionary app that changes the way we think about productivity.",
    techStack: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/project-b",
    demoUrl: "https://project-b-demo.com",
  },
  // Add more projects here
];

export default function ProjectCards() {
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <>
      <div className="md:min-h-[91.4vh] min-h-[92.9vh] flex flex-col items-center justify-center font-roboto bg-gradient-to-br from-red-200 via-rose-300 to-red-400 -pb-8">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold text-slate-700 mb-8"
        >
          PROJECTS
        </motion.h1>
        <div className="relative w-full max-w-2xl">
          {/* Left Arrow Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute -left-[10%] top-1/2 transform -translate-y-1/2 z-10 md:visible md:block hidden"
            onClick={prevProject}
          >
            <ChevronLeft className="h-8 w-8 text-slate-800 hover:text-rose-400" />
          </Button>

          <div className="m-4">
            <motion.div
              key={currentProject}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.4 }}
              className="bg-slate-800 rounded-lg shadow-lg p-6 "
            >
              <div className="flex flex-col sm:flex-row items-center mb-4">
                <div className="w-full sm:w-[350px] h-[280px] bg-gray-200 mb-4 sm:mb-0 flex items-center justify-center">
                  <Image
                    src={projects[currentProject].projectImg}
                    alt={projects[currentProject].title}
                    width={350}
                    height={280}
                  />
                </div>
                <div className="text-center sm:text-left">
                  <h2 className="text-2xl font-semibold text-pink-200">
                    {projects[currentProject].title}
                  </h2>
                  <p className="text-pink-100">
                    {projects[currentProject].description}
                  </p>
                </div>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-pink-100 mb-2">
                  Tech Stack:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {projects[currentProject].techStack.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="flex justify-between">
                <Button
                  variant="outline"
                  className="flex items-center bg-white w-[17%] hover:bg-gray-200"
                  onClick={() =>
                    window.open(projects[currentProject].githubUrl, "_blank")
                  }
                >
                  <Image
                    src={"/Images/github.svg"}
                    alt="GitHub"
                    height={35}
                    width={35}
                  />
                </Button>
                <Button
                  variant="default"
                  className="flex items-center bg-white hover:bg-gray-200 text-slate-800"
                  onClick={() =>
                    window.open(projects[currentProject].demoUrl, "_blank")
                  }
                >
                  <ExternalLink className="mr-2 h-4 w-4 text-slate-800" />
                  Live Demo
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Right Arrow Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute -right-[10%] top-1/2 transform -translate-y-1/2 z-10 md:visible md:block hidden"
            onClick={nextProject}
          >
            <ChevronRight className="h-8 w-8 text-slate-800 hover:text-rose-400" />
          </Button>

          {/* Bottom Arrow Button for Small Screens */}
          <div className="md:hidden flex justify-between w-full mt-4">
            <Button
              variant="ghost"
              size="icon"
              className="flex items-center"
              onClick={prevProject}
            >
              <ChevronLeft className="h-8 w-8 text-slate-800 hover:text-rose-400" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="flex items-center"
              onClick={nextProject}
            >
              <ChevronRight className="h-8 w-8 text-slate-800 hover:text-rose-400" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
