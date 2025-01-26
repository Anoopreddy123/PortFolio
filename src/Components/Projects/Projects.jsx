import React from 'react';
import { FaGithubSquare, FaExternalLinkAlt } from 'react-icons/fa';
import ResumeImg from '../../assets/ResumeImg.jpeg';
import garbage from '../../assets/garbage.jpeg';
import Library from '../../assets/Library.png';
import ToDo from '../../assets/ToDo.png';
import AutoTyper from '../../assets/AutoTyper.jpeg';
import Towy from '../../assets/Towy.png';  
import FileCloud from '../../assets/FileCloud.png';
import MetaAnalysis from '../../assets/MetaAnalysis.png';
import Dashboard from '../../assets/DashBoard.png';
import StudentManagement from '../../assets/StudentManagement.png';

import './Projects.css';

/* 
  We define project categories, each with a "categoryName" and an array of "projects".
  This structure makes it easy to expand, rearrange, or add new categories.
*/
const PROJECT_CATEGORIES = [
  {
    categoryName: 'Web & Software Development',
    projects: [
      {
        id: 1,
        image: ResumeImg,
        title: 'Resume Builder',
        github: 'https://github.com/Anoopreddy123/Resume_Builder',
      },
      {
        id: 2,
        image: ToDo,
        title: 'To-Do',
        github: 'https://github.com/Anoopreddy123/To-Do-page',
      },
      {
        id: 3,
        image: Towy,
        title: 'Towy.io',
        working : 'https://towy-5p0866on8-anoops-projects-e49f75e4.vercel.app/',
        github: 'https://github.com/Anoopreddy123/Towy-ui'
      },
      {
        id: 4,
        image: Dashboard ,
        title: 'Mock Finance Dashboard',
        working: 'https://personal-portfolio-coral-mu-46.vercel.app/',
      },
      {
        id: 5,
        image: FileCloud ,
        title: 'File Cloud',
        github: 'https://github.com/Anoopreddy123/DropBox-clone',
      }
    ],
  },
  {
    categoryName: 'AI/ML Projects',
    projects: [
      {
        id: 5,
        image: garbage,
        title: 'Garbage Detection Using AI',
        github: 'https://github.com/Anoopreddy123/',
      },
      {
        id: 6,
        image: MetaAnalysis,
        title: 'Meta Analysis',
      },
    ],
  },
  {
    categoryName: 'Desktop',
    projects: [
      {
        id: 7,
        image: Library,
        title: 'Library Management System (GUI)',
        github: 'https://github.com/Anoopreddy123/Library-advn/tree/master',
      },
      {
        id: 8,
        image: AutoTyper,
        title: 'Auto Typer in Java Using Robot',
        github: 'https://github.com/Anoopreddy123/AutoTyper',
      },
      {
        id: 9,
        image: StudentManagement,
        title: 'Student Management System',
        github: 'https://github.com/Anoopreddy123/StudentManagmentSystem',
      },
    ],
  },
];

export const Projects = () => {
  return (
    <section className="projects">
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className="portfolio__categories">
        {PROJECT_CATEGORIES.map(({ categoryName, projects }) => (
          <div key={categoryName} className="portfolio__category">
            {/* Category heading */}
            <h3>{categoryName}</h3>

            {/* Grid styling to display projects */}
            <div className="portfolio__container">
              {projects.map(({ id, image, title, github, working }) => (
                <article key={id} className="portfolio_item">
                  <div className="portfolio__item-image">
                    <img src={image} alt={title} />
                  </div>
                  <h3>{title}</h3>
                  <div className="portfolio__item-cta">
                    {/* Render GitHub button only if GitHub link exists */}
                    {github && (
                      <a
                        href={github}
                        className="btn"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaGithubSquare style={{ marginRight: '5px' }} />
                        GitHub
                      </a>
                    )}
                    {/* Render Working button only if Working link exists */}
                    {working && (
                      <a
                        href={working}
                        className="btn"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaExternalLinkAlt style={{ marginRight: '5px' }} />
                        Working Link
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

