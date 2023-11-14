import React from 'react'
import {BsFillAwardFill} from 'react-icons/bs'
import {IoSchoolSharp} from 'react-icons/io5'
import {PiFoldersDuotone} from 'react-icons/pi'
import './About.css'


export const About = () => {
  return (
   <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>
    <div className="container about__container">
     

      <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
            <BsFillAwardFill className='about__icon'/>
              <h5>Internship - Broadridge Financial Solutiona </h5> 
              <small> Internship </small>
              <p>• Crafted reusable Java code to enhance our projects' quality and scalability. </p>
              <p>  • Strengthened security by addressing vulnerabilities and ensuring robust defences.  </p>
              <p>  • Streamlined data loading through optimized PL/SQL procedures, ensuring accuracy and efficiency.  </p>
              <p>  • Led software upgrades aligned with business needs, resolving issues for enhanced functionality.</p>
            </article>
            <article className='about__card'>
            <BsFillAwardFill className='about__icon'/>
              <h5>Full Time - Broadridge Financial Solution </h5> 
              <small> Junior Software Engineer </small>
              <p>• Assisted in migrating codebase and functionality from EJB to Spring, resulting in improved application structure and maintainability.</p>
           <p>   • Collaborated on rewriting frontend components from JSP to ReactJS, enhancing user experience and enabling modern UI features. </p>
            <p>  • Designed and implemented APIs that retrieve data from backend systems, enabling seamless integration with the frontend ensuring up-to-date information presentation. </p>
            <p> • These APIs helped in improving data retrieval efficiency and reducing latency, resulting in a smoother user experience.
             
              </p>
            </article>

            <article className='about__card'>
            <IoSchoolSharp className='about__icon'/>
              <h5>College </h5> 
              <small> Master's in Computer Science <br />
                     
              </small>
              <p> California State University - Dominguez Hills</p>
              <p>• Fall 2023 Semester</p>
              <p>  </p>
              <p>  </p>
              <p>  </p>
            </article>
           </div>

           <p></p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
   </section>
  )
}
