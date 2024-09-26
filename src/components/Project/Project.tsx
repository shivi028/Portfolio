"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Globe, ChevronRight, ChevronLeft } from "lucide-react";

interface Project {
  id: number;
  name: string;
  description: string;
  techStack: string[];
  githubLink: string;
  deploymentLink: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "Project Alpha",
    description:
      "A revolutionary app that changes the way we think about productivity.",
    techStack: ["React", "Node.js", "MongoDB"],
    githubLink: "https://github.com/username/project-alpha",
    deploymentLink: "https://project-alpha.com",
    image: "/Images/github.svg",
  },
  {
    id: 2,
    name: "Beta Boost",
    description:
      "Elevating user experiences through intuitive design and powerful functionality.",
    techStack: ["Vue.js", "Express", "PostgreSQL"],
    githubLink: "https://github.com/username/beta-boost",
    deploymentLink: "https://beta-boost.com",
    image: "/Images/github.svg",
  },
  {
    id: 3,
    name: "Gamma Glide",
    description:
      "Seamlessly connecting users with the information they need, when they need it.",
    techStack: ["Angular", "Django", "MySQL"],
    githubLink: "https://github.com/username/gamma-glide",
    deploymentLink: "https://gamma-glide.com",
    image: "/Images/github.svg",
  },
];

export default function ProjectCards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextProject = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY < 0) {
        setDirection(-1); // Scroll up
        prevProject();
      } else if (e.deltaY > 0) {
        setDirection(1); // Scroll down
        nextProject();
      }
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const variants = {
    enter: (direction: number) => ({
      y: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      y: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      y: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className="bg-gradient-to-r from-purple-700 to-indigo-800 min-h-screen py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <h2 className="text-4xl font-extrabold text-center text-white mb-12">
        My Projects
      </h2>
      <div className="relative w-full max-w-4xl">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              y: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute w-full"
          >
            <div className="bg-white rounded-lg shadow-xl overflow-hidden transform transition duration-500 hover:scale-105">
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover md:w-48"
                    src={projects[currentIndex].image}
                    alt={projects[currentIndex].name}
                  />
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    {projects[currentIndex].name}
                  </div>
                  <p className="mt-2 text-gray-500">
                    {projects[currentIndex].description}
                  </p>
                  <div className="mt-4">
                    <span className="text-gray-500 font-medium">
                      Tech Stack:{" "}
                    </span>
                    {projects[currentIndex].techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex space-x-4">
                    <a
                      href={projects[currentIndex].githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-800 transition duration-300 flex items-center"
                    >
                      <Github className="w-5 h-5 mr-2" />
                      GitHub
                    </a>
                    <a
                      href={projects[currentIndex].deploymentLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-800 transition duration-300 flex items-center"
                    >
                      <Globe className="w-5 h-5 mr-2" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        <button
          onClick={prevProject}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-full bg-white rounded-full p-2 shadow-lg text-indigo-600 hover:text-indigo-800 transition duration-300"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextProject}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-full bg-white rounded-full p-2 shadow-lg text-indigo-600 hover:text-indigo-800 transition duration-300"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
      <div className="mt-8 flex justify-center space-x-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1); // Set the direction based on index
              setCurrentIndex(index);
            }}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
