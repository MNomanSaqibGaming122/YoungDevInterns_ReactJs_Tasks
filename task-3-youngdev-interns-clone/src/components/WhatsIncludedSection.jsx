import './WhatsIncludedSection.css';
import whatsIncludedImage from '../assets/whatsinclude.png';
import { BsCheck } from 'react-icons/bs';

const WhatsIncludedSection = () => {
  const features = [
    'CE-Verified & Internationally Accredited Internship Certificate',
    'Official Onboarding Letter from YoungDev Interns',
    'Unique Intern ID with Access to Your Dedicated Portal',
    'Real-World Projects, Industry-Level Assignments & Capstone Challenge',
    'Personalized Career Counseling & Post-Internship Interview Prep',
    'Direct Placement Opportunities with YoungDev & Global Partners',
    'Top Performers Featured on YoungDev\'s Official Channels',
    'Choose from 45+ Cutting-Edge Tech Domains'
  ];

  return (
    <section className="whats-included-section">
      <div className="whats-included-header">
        <h2>What You'll Experience with YoungDev Interns</h2>
        <p>
          YoungDev Interns' Remote Internship isn't just another program— it's a professionally curated journey that prepares you for a thriving tech career. Over eight weeks you'll engage with live projects, gain credentialed recognition, and connect with mentors and hiring teams worldwide.
        </p>
      </div>
      <div className="whats-included-content">
        <div className="whats-included-left">
          <img src={whatsIncludedImage} alt="Internship details" />
        </div>
        <div className="whats-included-right">
          <ul>
            {features.map((feature, index) => (
              <li key={index}>
                <BsCheck className="feature-icon" /> 
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhatsIncludedSection;