

  import React, { useState } from 'react';
import './About.css';
//import { experiencesData } from './data'; // If you separated the data

// data.js (optional file if you want to separate data)
export const experiencesData = [
    {
      id: 1,
      title: "Internship - Broadridge",
      shortDesc: "Internship Experience",
      details: `
      •	Refactored Java systems using object-oriented principles, reducing vulnerabilities by 25% and enhancing scalability by 35%.
      •	Proposed and implemented a multithreading architecture for SQL Loader jobs, boosting data file processing speed by 50%.
      •	Developed unit test frameworks using JUnit, increasing test coverage, and ensuring code reliability during deployments.
      •	Collaborated with senior engineers on end-to-end application enhancements, gaining hands-on experience in API integration, database management, and performance tuning.      
      `
    },
    {
      id: 2,
      title: "Full Time - Broadridge",
      shortDesc: "Member of Technical Staff",
      details: `
      •	Migrated legacy codebase to Spring Boot and ReactJS, enhancing system scalability and reducing operational costs by 40%.
      •	Optimized PL/SQL procedures, increasing transaction processing speed by 30% while ensuring secure and efficient data handling.
      •	Enhanced system security by implementing CVM mitigation and encryption mechanisms, safeguarding sensitive user data and meeting compliance standards.
      •	Monitored production environments using Splunk, identifying and resolving critical performance issues to maintain system stability and minimize downtime.
      •	Implemented CI/CD pipelines with Jenkins streamlining build, testing, and deployment processes for mission-critical applications.
      •	Designed and maintained ETL batch jobs to streamline data transformation and integration workflows, ensuring seamless data processing and improving efficiency.
      •	Automated ETL processes using shell scripting, enhancing data accuracy, and reducing manual intervention in financial data operations.
      
      `
    },
    {
      id: 3,
      title: "Web Developer",
      shortDesc: "California State University, Dominguez Hills",
      details: `
     • Migrated data storage to AWS S3, implementing automated backup solutions that reduced data loss risk by 95% and improved backup efficiency.
     • Developed eCommerce functionality and responsive webpages using HTML, CSS, JavaScript, and PHP, automating 90% of workflows and significantly enhancing user experience.
     • Built a ticketing system using PHP and JavaScript, facilitating the sale of 500+ event tickets and streamlining operational efficiency.
     • Designed and deployed Python-based automation scripts, streamlining testing processes, improving code quality, and ensuring consistent functionality.
     • Boosted website performance by 30% through image optimization, code refactoring, ensuring faster load times and enhanced user experience.
     • Maintained platform metrics and analyzed data to identify improvement areas, enabling informed decision-making to enhance user engagement.
     • Created internal employee portal web pages for the university, improving accessibility and workflow efficiency for staff.

      `
    }
  ];

export const About = () => {
  // State to track which card’s modal is open. If null, no modal is shown.
  const [selectedCard, setSelectedCard] = useState(null);

  // Open modal for that card
  const handleOpenModal = (card) => {
    setSelectedCard(card);
  };

  // Close modal
  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  return (
    <section id="about">
      <h2>About Me</h2>

      {/* 3 equally sized cards */}
      <div className="cards-container">
        {experiencesData.map((exp) => (
          <div key={exp.id} className="card">
            <h3>{exp.title}</h3>
            <p>{exp.shortDesc}</p>
            <button onClick={() => handleOpenModal(exp)}>More</button>
          </div>
        ))}
      </div>

      {/* Modal (only rendered if selectedCard != null) */}
      {selectedCard && (
  <div className="modal-backdrop" onClick={handleCloseModal}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <button className="modal-close-btn" onClick={handleCloseModal}>
        &times;
      </button>
      <h4>{selectedCard.title}</h4>
      <p>{selectedCard.details}</p>
    </div>
  </div>
)}

    </section>
  );
};

  