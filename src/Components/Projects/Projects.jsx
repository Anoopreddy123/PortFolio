import React from 'react'
import {FaGithubSquare} from 'react-icons/fa'
import ResumeImg from '../../assets/ResumeImg.jpeg' 

export const Projects = () => {
  return (
    <section className='portfolio'>
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio_item'>
          <div className="portfolio__item-image">
            
         </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com/Anoopreddy123/Resume_Builder" className='btn' target='_blank'>Github</a>
        </article>
      </div>
    </section>
  )
}
