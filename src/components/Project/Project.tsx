// "use client";

// import { useState, useRef, useEffect } from "react";
// import {
//   motion,
//   useScroll,
//   useTransform,
//   AnimatePresence,
// } from "framer-motion";
// import { Github, Globe, ChevronLeft, ChevronRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";

// type Project = {
//   id: number;
//   name: string;
//   description: string;
//   image: string;
//   techStack: string[];
//   repoLink: string;
//   deployLink: string;
//   color: string;
// };

// const projects: Project[] = [
//   // Add project objects here
// ];

// const ProjectCard = ({ project }: { project: Project }) => {
//   const [isFlipped, setIsFlipped] = useState(false);
//   const { scrollYProgress } = useScroll();
//   const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

//   return (
//     <motion.div
//       className="w-full h-full perspective-1000 rounded-lg overflow-hidden shadow-lg"
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -50 }}
//       transition={{ duration: 0.5 }}
//       style={{ backgroundColor: project.color }}
//     >
//       <motion.div
//         className="relative w-full h-full transition-all duration-500 preserve-3d cursor-pointer"
//         animate={{ rotateY: isFlipped ? 180 : 0 }}
//         onClick={() => setIsFlipped(!isFlipped)}
//       >
//         {/* Front of the card */}
//         <div className="absolute w-full h-full backface-hidden rounded-lg overflow-hidden">
//           <motion.div
//             style={{ y }}
//             className="relative w-full h-64 overflow-hidden"
//           >
//             <Image
//               src={project.image}
//               alt={project.name}
//               layout="fill"
//               objectFit="cover"
//               className="transition-transform duration-300 hover:scale-105"
//             />
//           </motion.div>
//           <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
//             <h3 className="text-white text-xl font-bold">{project.name}</h3>
//           </div>
//         </div>

//         {/* Back of the card */}
//         <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white p-6 flex flex-col justify-between rounded-lg">
//           <div>
//             <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
//             <p className="text-gray-600 mb-4">{project.description}</p>
//             <div className="flex flex-wrap gap-2 mb-4">
//               {project.techStack.map((tech) => (
//                 <span
//                   key={tech}
//                   className="px-2 py-1 bg-gray-200 rounded-full text-sm"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </div>
//           <div className="flex justify-between">
//             <Button variant="outline" size="sm" asChild>
//               <a
//                 href={project.repoLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <Github className="w-4 h-4 mr-2" />
//                 Repository
//               </a>
//             </Button>
//             <Button variant="default" size="sm" asChild>
//               <a
//                 href={project.deployLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <Globe className="w-4 h-4 mr-2" />
//                 Live Demo
//               </a>
//             </Button>
//           </div>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default function CreativeProjectsDisplay() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     if (container) {
//       container.scrollTo({
//         left: currentIndex * container.offsetWidth,
//         behavior: "smooth",
//       });
//     }
//   }, [currentIndex]);

//   const nextProject = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
//   };

//   const prevProject = () => {
//     setCurrentIndex(
//       (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
//     );
//   };

//   return (
//     <div className="relative min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 overflow-hidden">
//       <h2 className="text-4xl font-bold text-center text-white mb-12">
//         My Projects
//       </h2>
//       <div
//         ref={containerRef}
//         className="flex overflow-x-hidden snap-x snap-mandatory"
//         style={{ scrollSnapType: "x mandatory", scrollBehavior: "smooth" }}
//       >
//         <AnimatePresence>
//           {projects.map((project, index) => (
//             <motion.div
//               key={project.id}
//               className="w-full flex-shrink-0 snap-center px-4 md:px-8"
//               style={{ scrollSnapAlign: "center" }}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//                 <div className="aspect-w-4 aspect-h-3 md:aspect-h-4 rounded-lg shadow-lg overflow-hidden">
//                   <ProjectCard project={project} />
//                 </div>
//                 <div className="text-white px-4">
//                   <h3 className="text-3xl font-bold mb-4">{project.name}</h3>
//                   <p className="text-gray-300 mb-6">{project.description}</p>
//                   <div className="flex flex-wrap gap-3 mb-6">
//                     {project.techStack.map((tech) => (
//                       <span
//                         key={tech}
//                         className="px-3 py-1 bg-gray-700 rounded-full text-sm"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                   <div className="flex space-x-4">
//                     <Button variant="outline" size="lg" asChild>
//                       <a
//                         href={project.repoLink}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <Github className="w-5 h-5 mr-2" />
//                         Repository
//                       </a>
//                     </Button>
//                     <Button variant="default" size="lg" asChild>
//                       <a
//                         href={project.deployLink}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <Globe className="w-5 h-5 mr-2" />
//                         Live Demo
//                       </a>
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </AnimatePresence>
//       </div>

//       {/* Navigation Buttons */}
//       <button
//         onClick={prevProject}
//         className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 focus:outline-none"
//         aria-label="Previous project"
//       >
//         <ChevronLeft className="w-6 h-6 text-white" />
//       </button>
//       <button
//         onClick={nextProject}
//         className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 focus:outline-none"
//         aria-label="Next project"
//       >
//         <ChevronRight className="w-6 h-6 text-white" />
//       </button>
//     </div>
//   );
// }
'use client'
import Image from "next/image";
import { motion } from "framer-motion";

// Define the project type
interface Project {
  name: string;
  description: string;
  image: string;
}

// Array of projects with type annotation
const projects: Project[] = [
  {
    name: "Project Name 1",
    description: "Short description of project 1",
    image: "/Images/project1.png",
  },
  {
    name: "Project Name 2",
    description: "Short description of project 2",
    image: "/Images/project2.png",
  },
  {
    name: "Project Name 3",
    description: "Short description of project 3",
    image: "/Images/project3.png",
  },
  // Add more projects as needed
];

// Props type for the Card component
interface CardProps {
  project: Project;
}

// Card component with props type defined
const Card: React.FC<CardProps> = ({ project }) => {
  return (
    <motion.div
      className="relative w-full h-auto p-4 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Card Image */}
      <div className="relative w-full h-64 overflow-hidden rounded-t-lg">
        <Image
          src={project.image}
          alt={project.name}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Card Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
        <h3 className="text-white text-xl font-bold">{project.name}</h3>
        <p className="text-white text-sm mt-2">{project.description}</p>
      </div>
    </motion.div>
  );
};

// ProjectCards component renders a grid of Card components
const ProjectCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {projects.map((project, index) => (
        <Card key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectCards;
