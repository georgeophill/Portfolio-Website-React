import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Eveentmonkey.png'
import IMG2 from '../../assets/Eveentmonkey.png'
import IMG3 from '../../assets/Eveentmonkey.png'


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
           <div className="portfolio__item-image">
              <img src={IMG1} alt="EventMonkey index page" />
           </div>
           <h3>EventMonkey</h3>
           <a href="https://github.com/iliaswa/EventMonkey" className='btn' target='_blank'>Github</a>
           <a href="http://www.eventmonkey.fun/" className='btn btn-primary' target='_blank'>Demo</a>
        </article>
        <article className='portfolio__item'>
           <div className="portfolio__item-image">
              <img src={IMG2} alt="LeChef index page" />
           </div>
           <h3>LeChef</h3>
           <a href="https://github.com/iliaswa/LeChef1" className='btn' target='_blank'>Github</a>
           <a href="" className='btn btn-primary' target='_blank'>Demo</a>
        </article>
        <article className='portfolio__item'>
           <div className="portfolio__item-image">
              <img src={IMG3} alt="LeChef index page" />
           </div>
           <h3>LeChef</h3>
           <a href="https://github.com/iliaswa/LeChef1" className='btn' target='_blank'>Github</a>
           <a href="" className='btn btn-primary' target='_blank'>Demo</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
