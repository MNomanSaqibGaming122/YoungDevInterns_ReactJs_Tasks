import React from 'react';
import Navbar from '../components/Navbar';
import './ApplyNowPage.css';

const ApplyNowPage = () => {
  const benefits = [
    'HEC-Verified & Internationally Accredited Certificate',
    'Official Onboarding Letter & Unique Intern ID',
    'Access to Dedicated Internship Portal',
    'Hands-on Projects, Assignments & Capstone Challenge',
    'Career Counseling & Interview Prep Workshops',
    'Direct Placement Opportunities with Global Partners',
    'Exposure to 45+ Specialized Tech Domains',
  ];

  const programDetails = [
    { label: 'Program Type:', value: '4-Weeks/6-Weeks/8-Weeks Remote Internship' },
    { label: 'Format:', value: 'Fully Remote' },
    { label: 'Registration:', value: 'Open Monthly Cohorts' },
    { label: 'Internship Starts:', value: 'Next Available Batch' },
    { label: 'Eligibility:', value: 'Undergraduates, Graduates & Tech Enthusiasts' },
  ];

  return (
    <>
      <Navbar />
      <main className="apply-now-page">
        <div className="info-card">
          <h2>Join Our Remote Internship Program</h2>
          <p className="description">
            YoungDev Interns' eight-week Remote Internship offers hands-on experience, career
            counseling, and interview prep sessions — all designed to open doors to remote and on-site
            placements worldwide.
          </p>
          <div className="details-grid">
            {programDetails.map((detail, index) => (
              <React.Fragment key={index}>
                <div className="detail-label">{detail.label}</div>
                <div className="detail-value">{detail.value}</div>
              </React.Fragment>
            ))}
          </div>
          <h3>Included Benefits</h3>
          <ul className="benefits-list">
            {benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>

        <div className="info-card">
          <h2>Empowering Tomorrow's Developers Today.</h2>
          <p className="description">
            Complete your internship with YoungDev Interns to unlock exclusive remote and on-site job opportunities.
            Build your portfolio, sharpen your skills, and launch your tech career on a global scale.
          </p>
        </div>

        <button className="register-now-button">Register Now</button>
      </main>
      
    </>
  );
};

export default ApplyNowPage;