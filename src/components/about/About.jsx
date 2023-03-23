import React from 'react'
import './about.css'
import ME from '../../assets/me.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
    <h5>Get To Know</h5>
    <h2>About Me</h2>

    <div className='container about__container'>
      <div className='about__me'>
        <div className="about__me-image">
          <img src={ME} alt="image of George Hill" />
        </div>
      </div>

      <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>1+ years</small>
          </article>
          <article className='about__card'>
            <FiUsers className='about__icon'/>
            <h5>Clients</h5>
            <small>3</small>
          </article>
          <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
            <h5>Projects</h5>
            <small>3+ Completed</small>
          </article>
        </div>
        <p>Highly driven, enthusiastic individual with a constant drive to self-improve shown through my curiosity to learn, as well as a passion for technological change and connecting with people. Being a millennial baby, a career in tech is seemingly an
imperative path that I will take and something I want to learn more about imminently. I aspire to be a top Software Developer since it allows me to mix my passion in agile development with my love for design.
        </p>

        <a href="#contact" className='btn btn-primary'> Lets Talk</a>
      </div>
    </div>
    </section>
  )
}

export default About
