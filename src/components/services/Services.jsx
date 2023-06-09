import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id="Services">
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Figma</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Font Awesome</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Sketch</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}

        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> JavaScript</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Responisve HTML and CSS </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> SEO (Search Engine Optimisation)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Scaleable Software</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Web System Architecture</p>
            </li>

          </ul>
        </article>
        {/* END OF WEB DEV */}

        <article className='service'>
          <div className='service__head'>
            <h3>Content Creation</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Adobe Photoshop</p>
            </li>
            {/* <li>
              <BiCheck className='service__list-icon'/>
              <p> </p>
            </li> */}
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Accessibility and Best Practices</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
