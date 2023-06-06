import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Eveentmonkey.png'
import IMG2 from '../../assets/lechef1.png'
import IMG3 from '../../assets/flashcard.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'EventMonkey - Find Events You Love',
    github: 'https://github.com/iliaswa/EventMonkey',
    demo: 'http://www.eventmonkey.fun/',
  },
  {
    id: 2,
    image: IMG2,
    title: 'LeChef - Book Your Own Private Chef',
    github: 'https://github.com/iliaswa/LeChef1',
    demo: '',
  },

  // ===== ADD FUTURE PORTFOLIO PROJECTS HERE ========

  {
    id: 3,
    image: IMG3,
    title: 'Flashcard App',
    github: 'https://github.com/PiroAvni/Educational_APP_Server_MongoDB',
    demo: 'https://educational-app.onrender.com/',
  },
  // {
  //   id: 4,
  //   image: IMG2,
  //   title: 'LeChef - Book Your Own Private Chef',
  //   github: 'https://github.com/iliaswa/LeChef1',
  //   demo: 'http://www.eventmonkey.fun/',
  // },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                    <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
