import React from "react";
import "./header.css";
import CTA from './CTA';
import Me from '../../assests/me.png';
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
   <div classname="container header_container">
    <h5>Hello I'm</h5>
    <h1>Ayushi </h1>
    <h5 className="text-light">FrontEnd Developer</h5>
    <CTA/>

    <div className="me">
     <img src={Me} alt="me"/>
    </div>
    <a href="#contact" className="scroll_down">scroll Down</a>
   </div>
    </header>
  )
}

export default Header;