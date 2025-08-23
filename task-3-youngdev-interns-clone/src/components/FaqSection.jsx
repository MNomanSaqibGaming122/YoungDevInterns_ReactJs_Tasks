import React, { useState } from 'react';
import './FaqSection.css';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqData = [
  {
    question: 'What is the YoungDev Interns Remote Internship?',
    answer: 'It is a professionally curated journey that prepares you for a thriving tech career through live projects and mentorship.'
  },
  {
    question: 'What benefits will I gain from the program?',
    answer: 'You will gain a verified certificate, real-world project experience, career counseling, and placement opportunities.'
  },
  {
    question: 'What is the duration and format of the internship?',
    answer: 'The internship is an eight-week virtual program. You can also choose from 4-week or 6-week durations.'
  },
  {
    question: 'When can I register for the internship?',
    answer: 'Registrations are open year-round. You can apply at any time through our official portal.'
  },
  {
    question: 'What job opportunities are available after completion?',
    answer: 'Top performers get direct placement opportunities with our global partners and are featured on our official channels.'
  },
  {
    question: 'What is the YoungDev Interns Portal?',
    answer: 'It is a dedicated portal for interns where you can access resources, submit assignments, and track your progress.'
  },
  {
    question: 'How do I apply?',
    answer: 'You can apply by visiting the "Apply Now" section on our website and filling out the registration form.'
  },
  {
    question: 'Who can I contact for more information?',
    answer: 'For more information, please use the contact form on our "Contact Us" page, and our team will get back to you shortly.'
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
    <section className="faq-section">
      <div className="faq-header">
        <h2>Frequently Asked Questions – YoungDev Interns Remote Internship</h2>
        <p>Find answers to all your questions about the YoungDev Interns program.</p>
      </div>
      <div className="faq-accordion">
        {faqData.map((faq, index) => (
          <div className="faq-item" key={index}>
            <button className="faq-question" onClick={() => handleToggle(index)}>
              <span>{faq.question}</span>
              {openIndex === index ? <FaMinus className="faq-icon" /> : <FaPlus className="faq-icon" />}
            </button>
            <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default FaqSection;