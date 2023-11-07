import React from 'react'
import {AiFillCheckCircle} from 'react-icons/ai'
import './Experience.css'

export const Experience = () => {
  return (
    <section id='experience'>
      <h5>SKills</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
            <div className="experience__frontend">
                <div className="experience__content">
                <article className="experience__details">
                   <AiFillCheckCircle className='experience__details-icon'/> <h4>HTML</h4> 
                   <AiFillCheckCircle className='experience__details-icon'/> <h4>CSS</h4>
                   <AiFillCheckCircle className='experience__details-icon'/> <h4>ReactJS</h4>
                   <AiFillCheckCircle className='experience__details-icon'/> <h4>TypeScript</h4>
                   <AiFillCheckCircle className='experience__details-icon'/> <h4>Java</h4>
                   <AiFillCheckCircle className='experience__details-icon'/> <h4>Python</h4>
                   <AiFillCheckCircle className='experience__details-icon'/> <h4>JavaScript</h4>
                   <AiFillCheckCircle className='experience__details-icon'/> <h4>MySQL</h4>
                   <AiFillCheckCircle className='experience__details-icon'/> <h4>OracleSQL</h4>
                   <AiFillCheckCircle className='experience__details-icon'/> <h4>SpringBoot</h4>
                </article>
                </div>
                </div>
            </div>
    </section>
  )
}
