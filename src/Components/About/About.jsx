



import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    const [expandedCard, setExpandedCard] = useState(null);

    const handleMouseEnter = (index) => {
        setExpandedCard(index);
    };

    const handleMouseLeave = () => {
        setExpandedCard(null);
    };

    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__content">
                    <div className="about__cards">
                        <article
                            className={`about__card ${expandedCard === 1 ? 'expanded' : ''}`}
                            onMouseEnter={() => handleMouseEnter(1)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <h5>Internship - Broadridge Financial Solutions </h5> 
                            <small> Internship </small>
                            <p>  • Played a pivotal role in creating sophisticated, reusable Java code with a deep understanding of Object-Oriented Programming, contributed to code rewriting, leveraging cutting-edge Java features, leading to enhancements in project quality and scalability.</p>
              <p>  • Enhanced security measures by addressing vulnerabilities, resulting in a 25% reduction in potential threats and reinforcing robust defensesacross the system.</p>
              <p>  • Leveraged in-depth proficiency in batch processing, incorporating a nuanced understanding of SQL Loader, to streamline data loading.Utilized PL/SQL procedures, ensuring heightened accuracy and efficiency for data management system.</p>
              <p>  • Facilitated impactful software upgrades aligned with business needs, resulting in a 35% improvement in system functionality, resolving issues and optimizing overall performance.</p>
            
                        </article>
                        <article
                            className={`about__card ${expandedCard === 2 ? 'expanded' : ''}`}
                            onMouseEnter={() => handleMouseEnter(2)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <h5>Full Time - Broadridge Financial Solutions </h5> 
                            <small> Junior Software Engineer </small>
                            <p> • Conceptualized and executed the migration from EJB to Spring, resulting in a 30% transformation in application structure and improved maintainability.</p>
              <p> • Collaborated on rewriting frontend components from JSP to ReactJS, resulting in a 40% improvement in user experience and the seamless incorporation of modern UI features. </p>
              <p> • Designed and orchestrated APIs for seamless data retrieval from backend systems, ensuring fluid integration with the frontend and achieving a 25% enhancement in data retrieval efficiency metrics for up-to-date information presentation.</p>
              <p> • Implemented APIs optimizing data retrieval, achieving a 20% reduction in latency, ultimately enhancing the user experience with a noticeably smoother data presentation.</p>
              <p> • Facilitated the management of the QA database, identifying and rectifying data discrepancies by executing SQL procedures, thereby minimizing the impact.</p>
              <p> • Led the internship program as the primary contact, guiding interns in tasks by providing hands-on assistance and fostering a clear understanding, contributing to a successful and enriching learning experience.</p>
              <p>  • Co-ordinated in identifying and addressing security vulnerabilities, rectifying cross-site scripting issues across the application and achieving a notable 30% improvement in overall security.</p>
           
                        </article>
                        <article
                            className={`about__card ${expandedCard === 3 ? 'expanded' : ''}`}
                            onMouseEnter={() => handleMouseEnter(3)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <h5>College </h5> 
                            <small> Master's in Computer Science </small>
                            <p>  Courses <br />
              Data Structures <br />
              Design and Analysis of Algortihms<br />
             Advanced Computer Architecture<br />
               Cloud Computing</p>
                        </article>
                    </div>
                </div>
            </div>
            <p></p>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </section>
    );
};

export default Login;
