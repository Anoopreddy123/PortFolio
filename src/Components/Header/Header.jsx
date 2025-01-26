import React from 'react'
import './Header.css'
import { CTA } from './CTA'
import pic from  '../../assets/Image.jpg'
import HeaderSocials from './HeaderSocials'
export const Header = () => {
  return (


<header>
  <div className="container header__container">
    <h5>Hello I'm</h5>
    <h1>Anoop Reddy Kunta</h1>
    <h5 className='text-light'>Full Stack Developer</h5>
    <CTA/>
    <HeaderSocials/>
    <div className='me'>
      <img src={pic} alt="Anoop Profile" />
    </div>
  </div>
</header>

  )
}
