import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import profileImg from "../assets/profile.png";
import "./Hero.css";

const heroData = {
  name: "Muhammad Noman Saqib",
  title: "React Developer",
  description:
    "I build modern, responsive, and user-friendly Web/Android applications using React, Firebase, and cutting-edge technologies.",
  hireLink: "contact",
  resumeLink: "/resume.pdf",
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 bg-gray-900 text-white relative overflow-hidden"
    >
      <div className="hero-glow glow-blue" />
      <div className="hero-glow glow-purple" />
      <div className="hero-glow glow-pink" />

      <motion.div
        className="flex-1 text-center md:text-left z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 leading-tight"
          variants={itemVariants}
        >
          Hi, I’m{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            {heroData.name}
          </span>
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-4xl font-semibold mb-4 text-gray-300"
          variants={itemVariants}
        >
          {heroData.title}
        </motion.h2>

        <motion.p
          className="text-gray-400 max-w-lg mb-8 leading-relaxed mx-auto md:mx-0"
          variants={itemVariants}
        >
          {heroData.description}
        </motion.p>

        <motion.div
          className="flex gap-4 justify-center md:justify-start"
          variants={itemVariants}
        >
          <motion.a
            href={heroData.hireLink}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hero-button-primary"
          >
            Hire Me <FaArrowRight className="ml-2" />
          </motion.a>

          <motion.a
            href={heroData.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hero-button-secondary"
          >
            Resume <FiDownload className="ml-2" />
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        className="w-full md:flex-1 flex justify-center items-center mt-12 md:mt-0 z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="relative image-container">
          <motion.div
            className="rounded-full overflow-hidden shadow-2xl shadow-blue-500/30 w-full h-full"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <img
              src={profileImg}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="image-ring" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;