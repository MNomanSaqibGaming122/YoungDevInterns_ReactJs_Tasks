import Navbar from '../components/Navbar';
import './InternshipDomainsPage.css';

import gameDevLogo from '../assets/logos/game.png';
import jsLogo from '../assets/logos/js.png';
import seoLogo from '../assets/logos/seo.png';
import phpLogo from '../assets/logos/php.png';
import cyberLogo from '../assets/logos/cs.png';
import pythonLogo from '../assets/logos/py.jpeg';
import htmlLogo from '../assets/logos/html.png';
import sqlLogo from '../assets/logos/sql.png';

const domains = [
  'SQL Programming', 'C++ Programming', 'Python Programming', 'Java Programming', 'JavaScript Programming',
  'Data Science', 'Machine Learning', 'Deep Learning', 'Artificial Intelligence', 'Cybersecurity',
  'Ethical Hacking', 'Network Security', 'Cloud Computing', 'DevOps', 'Data Analytics',
  'UI/UX Design', 'Graphic Design', 'Digital Marketing', 'Search Engine Optimization', 'Content Writing',
  'Social Media Marketing', 'Software Testing/QA', 'Frontend Development', 'Backend Development', 'Full Stack Development',
  'Mobile App Development', 'Android Development', 'Game Development', 'Git & Version Control', 'Computer Networking',
  'HTML & CSS Development', 'Bootstrap Development', 'jQuery Development', 'Blogging', 'Flutter Development',
  'Microsoft Word Mastery', 'Microsoft Excel Mastery', 'Data Engineering', 'E-commerce Development', 'WordPress Development',
  'Shopify Development'
];

const logos = [
  gameDevLogo, jsLogo, seoLogo, phpLogo, cyberLogo, pythonLogo, htmlLogo, sqlLogo
];

const InternshipDomainsPage = () => {
  return (
    <>
      <Navbar />
      <div className="domains-page">
        <div className="domains-header">
          <h2>Our Internship Domains</h2>
          <p>
            YoungDev Interns offers 45+ cutting-edge internship domains—from software development and AI to digital marketing and UX design. Pick your passion below and begin your journey!
          </p>
        </div>

        <div className="domains-grid">
          {domains.map((domain, index) => (
            <button key={index} className="domain-button">{domain}</button>
          ))}
        </div>

        <div className="logo-scroller">
          <div className="scroller-track">
            {logos.map((logo, index) => <img key={`a-${index}`} src={logo} alt="tech logo" />)}
            {logos.map((logo, index) => <img key={`b-${index}`} src={logo} alt="tech logo" />)}
          </div>
        </div>
      </div>
      
    </>
  );
};

export default InternshipDomainsPage;