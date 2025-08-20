import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., emailJS, backend API)
    console.log(formData);
    alert("Message sent!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5 },
    }),
  };

  return (
    <section
      id="contact"
      className="min-h-screen px-6 md:px-20 py-20 bg-gray-900 text-white"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-12 text-center">
        Contact Me
      </h2>

      <motion.form
        className="contact-form max-w-2xl mx-auto flex flex-col gap-6"
        onSubmit={handleSubmit}
        initial="hidden"
        animate="visible"
      >
        {["name", "email", "phone"].map((field, index) => (
          <motion.input
            key={field}
            type={field === "email" ? "email" : "text"}
            name={field}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            value={formData[field]}
            onChange={handleChange}
            className="contact-input"
            custom={index}
            variants={inputVariants}
          />
        ))}

        <motion.textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="contact-input contact-textarea"
          custom={3}
          variants={inputVariants}
        />

        <motion.button
          type="submit"
          className="contact-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          custom={4}
          variants={inputVariants}
        >
          Send Message
        </motion.button>
      </motion.form>
    </section>
  );
};

export default Contact;
