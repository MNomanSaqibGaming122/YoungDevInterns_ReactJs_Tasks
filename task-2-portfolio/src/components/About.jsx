import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaMobileAlt, FaDatabase } from "react-icons/fa";
import profileImg from "../assets/profile.png";
import "./About.css";

const aboutData = {
  title: "About Me",
  description:
    "I’m Noman, a passionate React Developer. I specialize in building modern, responsive, and user-friendly web and Android applications using React, Firebase, and cutting-edge technologies. I enjoy creating elegant UI/UX, optimizing performance, and turning ideas into real-world projects.",
  skills: [
    { icon: <FaReact />, name: "React & React Native" },
    { icon: <FaMobileAlt />, name: "Mobile Development" },
    { icon: <FaDatabase />, name: "Firebase & Backend" },
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 bg-gray-800 text-white relative overflow-visible"
    >
      <motion.div
        className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        
      </motion.div>

      <motion.div
        className="w-full md:w-1/2 flex flex-col justify-center max-w-xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-6 text-gradient"
          variants={itemVariants}
        >
          {aboutData.title}
        </motion.h2>

        <motion.p
          className="text-gray-300 mb-8 leading-relaxed"
          variants={itemVariants}
        >
          {aboutData.description}
        </motion.p>

        <motion.div className="flex flex-wrap gap-6" variants={itemVariants}>
          {aboutData.skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-3 bg-gray-700/50 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-2xl text-cyan-400">{skill.icon}</div>
              <span className="text-white font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
