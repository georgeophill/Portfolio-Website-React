import React from 'react'
import CV from '../../assets/George CV - August 2023 - Software Developer.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn'>Download CV</a>
      <a href="#contact" className='btn btn.primary'>Let's Talk</a>
    </div>
  )
}

export default CTA
