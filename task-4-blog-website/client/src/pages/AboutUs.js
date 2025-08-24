import React from 'react';
import './StaticPage.css'; // We'll create a shared CSS file

const AboutUs = () => {
  return (
    <div className="static-page-container">
      <h1>About This Blog</h1>

      <h2 className="page-subtitle">Our Mission</h2>
      <p>
        This blog is dedicated to the journey of learning and growing in the world of technology. Our mission is to demystify complex topics in web development, share real-world project experiences, and provide a transparent look into the life of a tech intern. We believe in learning in public and empowering the next generation of developers with practical knowledge and insights.
      </p>

      <h2 className="page-subtitle">About the Author</h2>
      <p>
        Hi, I'm <strong>Muhammad Noman Saqib</strong>, a passionate tech enthusiast and a current intern at YoungDev Interns. With a deep love for building things on the web, I created this blog to document my progress, share solutions to challenges I face, and connect with other like-minded individuals. My goal is to translate academic knowledge into real-world expertise, and this platform is a core part of that journey.
      </p>

      <h2 className="page-subtitle">About YoungDev Interns</h2>
      <p>
        This internship is made possible by <strong>YoungDev Interns</strong>, an organization committed to empowering tomorrow's developers today. YoungDev Interns offers a professionally curated journey for tech enthusiasts—undergraduates, recent graduates, and lifelong learners alike—to turn academic knowledge into practical, real-world expertise through immersive virtual programs.
      </p>
    </div>
  );
};

export default AboutUs;