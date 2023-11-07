import React, { useState } from 'react'
import {ImHome} from 'react-icons/im'
import {AiOutlineUser} from 'react-icons/ai'
import {PiHandbagFill} from 'react-icons/pi'
import {GoWorkflow} from 'react-icons/go'
import {LuContact} from 'react-icons/lu'
import { About } from '../About/About'
import { Contact } from '../Contact/Contact'
import { Experience } from '../Experience/Experience'
import './Nav.css'

export const Nav = () => {
  const [activeNav,setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={ () => setActiveNav('#')} className= {activeNav === '#' ? 'active' : '' }> <ImHome/></a>
      <a href="#about" onClick={ () => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}> <AiOutlineUser/></a>
      <a href="#experience" onClick={ () => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}> <PiHandbagFill/></a>
      <a href="#projects" onClick={ () => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}> <GoWorkflow/></a>
      <a href="#contact" onClick={ () => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}> <LuContact/></a>
    </nav>
  )
}
