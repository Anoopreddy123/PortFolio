import React from 'react'
import './Footer.css'
export const Footer = () => {
  return (
    <footer>
        <a href="#" className='footer__logo'>Anoop Reddy Kunta</a>

        <ul className="permalinks">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>

            <div className="footer__copyright">
             <small>&copy; All rights reserved. </small>
            </div>

    </footer>
  )
}
