import React from 'react'
import './about.css'
import Me from '../../assests/me-about.jpg'
import {SiLeetcode} from 'react-icons/si';
import {SiGeeksforgeeks} from 'react-icons/si';
import {VscFolderLibrary} from 'react-icons/vsc';
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">

          {/* leetcode */}
          <a href="https://leetcode.com/Ayushi_vastava29/" className='about__a' target='_blank'>
            <article className="about__card">
              <SiGeeksforgeeks className='about__icon'/>
              <h5>LeetCode</h5>
              <small>250+ Solved</small>
            </article>
          </a>
            {/* gfg */}
          <a href="https://auth.geeksforgeeks.org/user/ayushisrivastavas29" className='about__a' target='_blank'>
            <article className="about__card">
              <SiLeetcode className='about__icon'/>
              <h5>GFG</h5>
              <small>300+ Solved</small>
            </article>
          </a>
          <a href="#portfolio" className='about__a'>
            <article className="about__card">
             <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </a>
          </div>
          <p>  
          Final year Undergraduate Student persuing Btech in Information Technology from HBTU .I love to explore 
          new technologies and like to solve problem related to tech.I am a proficient in C++ programming 
          language with a strong foundation in Data Structures and Algorithms.I am a passionate developer who loves to 
          build web applications. I like to work and colloborate with different people in various domain.
          </p>
          {/* <p>
            I am open to talk regarding Internships and full-time opportunities.
          </p> */}
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About