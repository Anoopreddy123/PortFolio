import React from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'
import './Experience.css'

const SKILL_CATEGORIES = [
  {
    title: "Programming Languages",
    items: [
      "Python", 
      "Java", 
      "C/C++", 
      "JavaScript", 
      "TypeScript",
      "PL/SQL"
    ]
  },
  {
    title: "Database Technologies",
    items: [
      "MySQL", 
      "Firebase", 
      "Microsoft SQL", 
      "PostgreSQL", 
      "MongoDB", 
      "Cassandra"
    ]
  },
  {
    title: "Frameworks / Libraries",
    items: [
      "Flask", 
      "React", 
      "Redux", 
      "NodeJS", 
      "NextJS", 
      "RestAPI", 
      "Spring Boot"
    ]
  },
  {
    title: "Tools & Technologies",
    items: [
      "AWS", 
      "Azure", 
      "Perforce", 
      "Docker", 
      "Kubernetes", 
      "Apache Kafka", 
      "RabbitMQ", 
      "Splunk", 
      "Jenkins"
    ]
  }
];

export const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills</h5>
      <h2>My Experience</h2>

      {/* Main wrapper that goes full width on desktop */}
      <div className="skills__container">
        {SKILL_CATEGORIES.map((category) => (
          <div key={category.title} className="skills__category">
            <h3>{category.title}</h3>
            <div className="skills__list">
              {category.items.map((skill) => (
                <article className="skills__item" key={skill}>
                  <AiFillCheckCircle className="skills__icon" />
                  <h4>{skill}</h4>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
