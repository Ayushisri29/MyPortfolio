import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import{FaGithub} from 'react-icons/fa';
import {BsTwitter} from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
    
        <a href="https://www.linkedin.com/in/ayushi-srivastava-992aaa21b/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Ayushisri29" target="_blank"><FaGithub/></a>
        <a href="https://twitter.com/AyushiSriv48465" target="_blank"><BsTwitter/></a>
    </div>
  )
}

export default HeaderSocials;