import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Eveentmonkey.png'
import IMG2 from '../../assets/lechef1.png'
import IMG3 from '../../assets/flashy.png'
import IMG4 from '../../assets/bump.png'
import IMG5 from '../../assets/SS - Cover photo.png'
import IMG6 from '../../assets/TT - Cover photo.png'


const data = [
  {
    id: 1,
    image: IMG4,
    title: 'Bump - A Path to Parenthood',
    github: 'https://github.com/Chey-DB/bump-backend',
    github1: 'https://github.com/Chey-DB/bump-frontend',
    demo: 'https://bump-kwkn.onrender.com/',
  },
  {
    id: 2,
    image: IMG5,
    title: 'Scotland Safaris',
    github: 'https://github.com/georgeophill/scotland-safaris/tree/main/scotland-safaris/scotland-safaris',
    demo: '',
  },
  {
    id: 3,
    image: IMG1,
    title: 'EventMonkey - Find Events You Love',
    github: 'https://github.com/iliaswa/EventMonkey',
    demo: 'http://www.eventmonkey.fun/',
  },
  {
    id: 4,
    image: IMG3,
    title: 'Flashcard App',
    github: 'https://github.com/PiroAvni/Educational_APP_Server_MongoDB',
    demo: 'https://educational-app.onrender.com/',
  },
  {
    id: 5,
    image: IMG2,
    title: 'LeChef - Book Your Own Private Chef',
    github: 'https://github.com/iliaswa/LeChef1',
    demo: '',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Teenagers Translated - A Parents Survival Guide (WIP)',
    github: 'https://github.com/georgeophill/scotland-safaris/tree/main/teenagers-translated',
    demo: '',
  },
  
  // ===== ADD FUTURE PORTFOLIO PROJECTS HERE ========
  

]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, github1, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                    <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                <a href={github} rel='noreferrer' className='btn' target='_blank'>Github</a>
                { id=1 && github1 && ( 
                <a href={github1} rel='noreferrer' className='btn' target='_blank'>Github(Client-Side)</a>
                )}
                <a href={demo} rel='noreferrer' className='btn btn-primary' target='_blank'>Demo</a>
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
