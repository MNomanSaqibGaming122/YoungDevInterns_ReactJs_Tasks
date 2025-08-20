import React, { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import "./Projects.css";

const projectsData = [
  {
    title: "Pop Coin App",
    description:
      "A React Native app for mining Pop Coins with referral system and notifications.",
    link: "https://popers.site/",
    tech: ["React Native", "Firebase", "Framer Motion"],
  },
  {
    title: "Portfolio Website",
    description:
      "A modern responsive portfolio website built with React and Tailwind CSS.",
    link: "#",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "E-commerce App",
    description:
      "A full-featured e-commerce platform with cart, payment, and authentication.",
    link: "#",
    tech: ["React", "Redux", "Firebase"],
  },
];

const BookProjects = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <section
      id="projects"
      className="min-h-screen px-6 md:px-20 py-20 bg-gray-900 text-white"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-12 text-center">
        My Projects
      </h2>

      <div className="book-container">
        {projectsData.map((project, index) => {
          const isOpen = selectedIndex === index;
          return (
            <motion.div
              key={index}
              className={`book-page ${isOpen ? "open" : ""}`}
              onClick={() =>
                setSelectedIndex(selectedIndex === index ? null : index)
              }
              initial={{ y: 0 }}
              animate={{ zIndex: isOpen ? 10 : index }}
              transition={{ duration: 0.5 }}
            >
              {/* Front of page */}
              <motion.div
                className="page-front"
                initial={{ rotateY: 0 }}
                animate={{ rotateY: isOpen ? -180 : 0 }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
              </motion.div>

              {/* Back of page */}
              <motion.div
                className="page-back"
                initial={{ rotateY: 180 }}
                animate={{ rotateY: isOpen ? 0 : 180 }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="mb-4">
                  Click below to view the live project or repository
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-gray-900 px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-200 transition"
                >
                  View Project <FaExternalLinkAlt />
                </a>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default BookProjects;
