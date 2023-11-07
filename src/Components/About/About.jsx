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
              <h5>Experience </h5> 
              <small>1 year </small>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nihil dolorum a quisquam, laborum corporis, corrupti laudantium quam omnis optio expedita eum. Quis facilis minus magni quia error reprehenderit deserunt?</p>
            </article>
            <article className='about__card'>
            <IoSchoolSharp className='about__icon'/>
              <h5>College </h5> 
              <small> Master's in Computer Science <br />
                      California State University - Dominguez Hills
              </small>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti reiciendis non nisi. Atque tenetur aperiam laboriosam magni! Accusamus doloribus aperiam, fuga quibusdam quisquam dicta voluptate, sapiente earum et soluta vero?</p>
            </article>
            <article className='about__card'>
            <PiFoldersDuotone className='about__icon'/>
              <h5>Projects </h5> 
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, repudiandae temporibus ex vel, dolorem molestias quibusdam beatae vitae tempora ullam officia tenetur! Commodi neque voluptate sint modi ipsam in et?</p>
            </article>
           </div>

           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit laudantium facere in iste explicabo neque illo. Neque assumenda repellendus architecto omnis, animi eius! Ullam earum recusandae officiis, exercitationem magnam ducimus?</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
   </section>
  )
}
