import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./Footer.css";

const socialLinks = [
  { icon:  <FaGithub style={{marginLeft: "0.5rem"}} />, link: "https://github.com/MNomanSaqibGaming122/YoungDevInterns_ReactJs_Tasks.git" },
  { icon: <FaLinkedin  style={{marginLeft: "1rem"}}/>, link: "https://www.linkedin.com/in/muhammadnomansaqib/" },
  { icon: <FaTwitter  style={{marginLeft: "1rem"}}/>, link: "https://twitter.com/yourusername" },
];

const Footer = () => {
  return (
    <footer className="footer bg-gray-900 text-white py-10 px-6 md:px-20 relative">
      <div className="footer-container flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
        <motion.div
          className="footer-logo text-2xl font-bold text-gradient"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          
        </motion.div>

        <motion.div
          className="footer-links flex gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a href="#home" className="footer-link" style={{marginLeft: "0.5rem"}}>Home</a>
          <a href="#about" className="footer-link" style={{marginLeft: "1rem"}}>About</a>
          <a href="#projects" className="footer-link" style={{marginLeft: "1rem"}}>Projects</a>
          <a href="#skills" className="footer-link" style={{marginLeft: "1rem"}}>Skills</a>
          <a href="#contact" className="footer-link" style={{marginLeft: "1rem"}}>Contact</a>
        </motion.div>

        <motion.div
          className="footer-social flex gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#3b82f6" }}
              whileTap={{ scale: 0.9 }}
              className="text-xl"
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="footer-copy mt-8 text-center text-gray-400 text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        style={{marginLeft: "0.5rem"}}
      >
        &copy; {new Date().getFullYear()} Noman. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
