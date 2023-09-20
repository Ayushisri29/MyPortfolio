import React from 'react'
import './portfolio.css'
import img1 from '../../assests/img1.png'
import img2 from '../../assests/img2.png'
import img3 from '../../assests/img3.png'
import img4 from '../../assests/img4.png'

const Data=[
  {
    id:1,
    image:img1,
    title:'my react personal responsive project',
    Github:'https://github.com/Ayushisri29/MyPortfoli'
  },

  {
    id:2,
    image:img2,
    title:'Action Game Save the dino',
    Github:'https://github.com/Ayushisri29/Gameproject',
  },
  {
    id:3,
    image:img3,
    title:'Drum Kit',
    Github:'https://github.com/Ayushisri29/Drum-project.github.io',
  },
  {
    id:4,
    image:img4,
    title:'Online Examination System',
    Github:'https://github.com/Ayushisri29/OnlineExaminationSystem'
  }

]
const Portfolio = () => {
  return (
    <section id="portfolio">
    <h5>My Projects</h5>
    <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          Data.map(({id,image,title,Github})=>{
        return(
        <article key={id} className="portfolio__item">
        <div className="portfolio__item-image">
        <img src={image} alt={title}/>
        </div>
        <h3>{title}</h3>
        <div className="portfolio__item-cta">
        <a href={Github} className='btn' target='_blank'>Github</a>
        {/* <a href="" className='btn' target='_blank'>Live Demo</a> */}
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