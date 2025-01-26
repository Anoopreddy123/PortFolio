import React from 'react'
import resume from '../../assets/AnoopReddy_1.pdf'

export const CTA = () => {
  return (
    <div className='cta'>
      <a href={resume} download className='btn'> Download CV</a>
      <a href="#contact" className='btn btn-primary'>  Contact </a>

    </div>
  )
}
