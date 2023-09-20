import React from 'react'
import './footer.css'
import {FaLinkedinIn} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
      <footer>
        <a href="" className="footer__logo">AYUSHI</a>
  
        <ul className="permalinks">
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Skills</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
  
        <div className="footer__socials">
        <a href="https://www.linkedin.com/in/ayushi-srivastava-992aaa21b/"><FaLinkedinIn/></a>
        <a href="https://twitter.com/AyushiSriv48465"><BsTwitter/></a>
        <a href="https://www.instagram.com/direct/inbox/"><BsInstagram/></a>
  
        </div>
      </footer>
  )
}

export default Footer