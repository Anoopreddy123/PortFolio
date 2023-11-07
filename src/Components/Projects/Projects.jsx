import React from 'react'
import {FaGithubSquare} from 'react-icons/fa'
import ResumeImg from '../../assets/ResumeImg.jpeg' 
import garbage from '../../assets/garbage.jpeg' 
import Library from '../../assets/Library.png' 
import ToDo from '../../assets/ToDo.png' 
import AutoTyper from '../../assets/AutoTyper.jpeg' 
import StudentManagement from '../../assets/StudentManagement.png' 

import './Projects.css'

const data = [
  {
    id:1,
    image:ResumeImg,
    title:"Resume Builder",
    github:"https://github.com/Anoopreddy123/Resume_Builder"
  },

  {
    id:2,
    image:ToDo,
    title:"To-Do",
    github:"https://github.com/Anoopreddy123/To-Do-page"
  },
  {
    id:3,
    image:garbage,
    title:"Garbage Detection Using AI",
    github:"https://github.com/Anoopreddy123/"
  },
  
  {
    id:4,
    image:Library,
    title:"Library Managment System using GUI",
    github:"https://github.com/Anoopreddy123/Library-advn/tree/master"
  },
  {
    id:5,
    image:AutoTyper,
    title:"Auto Typer in java Using Robot",
    github:"https://github.com/Anoopreddy123/AutoTyper"
  },
  {
    id:6,
    image:StudentManagement,
    title:"Student Management System",
    github:"https://github.com/Anoopreddy123/StudentManagmentSystem"
  },

  
]

export const Projects = () => {
  return (
    <section className='portfolio'>
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        {
          data.map(({id,image,title,github})=>{
            return(
                    <article className='portfolio_item'>
                    <div className="portfolio__item-image">
                    <img src={image} alt="" />
                    </div>
                    <h3>{title}</h3>
                    <div className='portfolio__item-cta'>
                    <a href={github} className='btn' target='_blank'>Github</a>
                    </div> 
                    </article>
            )
          })
        }

        
        
        
      </div>
    </section>
  )
}
