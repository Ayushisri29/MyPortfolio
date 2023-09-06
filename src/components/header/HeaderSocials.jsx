import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import{FaGithub} from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header_socials">
        <a href="https://www.linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="https://www.github.com" target="_blank"><FaGithub/></a>
        <a href="" target="_blank"></a>
    </div>
  )
}

export default HeaderSocials;