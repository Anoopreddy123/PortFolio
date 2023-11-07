import React from 'react'
import resume from '../../assets/Kunta Anoop Reddy.pdf'

export const CTA = () => {
  return (
    <div className='cta'>
      <a href={resume} download className='btn'> Download CV</a>
      <a href="#contact" className='btn btn-primary'>  Contact </a>

    </div>
  )
}
