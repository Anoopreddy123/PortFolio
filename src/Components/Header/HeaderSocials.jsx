import React from 'react'
import {BiLogoLinkedinSquare} from 'react-icons/bi'
import {FaGithubSquare} from 'react-icons/fa'
import { BiLogoMediumSquare } from "react-icons/bi";


 const HeaderSocials = () => {
  return (
  <div className="header__socials">
    <a href="https://www.linkedin.com/in/anoop-reddy/" target='_blank'><BiLogoLinkedinSquare/></a>
    <a href="https://github.com/Anoopreddy123" target='_blank'><FaGithubSquare/></a>
    <a href="https://medium.com/@anoopreddykunta12"  target='_blank'><BiLogoMediumSquare /></a>
  </div>
  )
}

export default HeaderSocials
