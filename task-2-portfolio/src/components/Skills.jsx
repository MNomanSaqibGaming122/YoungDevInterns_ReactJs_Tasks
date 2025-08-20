import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";

const skillsData = [
  { name: "React", level: 90 },
  { name: "React Native", level: 85 },
  { name: "JavaScript", level: 95 },
  { name: "Firebase", level: 80 },
  { name: "Tailwind CSS", level: 85 },
  { name: "Node.js", level: 75 },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen px-6 md:px-20 py-20 bg-gray-900 text-white"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-12 text-center">
        My Skills
      </h2>

      <div className="skills-container grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <span className="skill-name">{skill.name}</span>
            <div className="skill-bar bg-gray-700 rounded-full h-4 overflow-hidden mt-2">
              <motion.div
                className="skill-fill bg-gradient-to-r from-blue-400 to-cyan-400 h-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeInOut" }}
              ></motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
