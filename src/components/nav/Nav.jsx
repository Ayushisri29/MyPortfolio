import {BiBook} from "react-icons/bi";
import {RiServiceLine} from "react-icons/ri";
import {BiMessageSquareDetail} from "react-icons/bi";
import {useState} from 'react';

const Nav = () => {
  const [activeNav,setActiveNav]=useState('#')
  return (
   
    <nav>
      <a href="#" onClick={()=>setActiveNav('#')} className={activeNav==='#'?'active':''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav==='#about'?'active':''}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav==='#experience'?'active':''}><BiBook/></a>
      <a href="#contact"  onClick={()=>setActiveNav('#about')} className={activeNav==='#about'?'active':''}><BiMessageSquareDetail/></a>

    </nav>
  )
}

export default Nav;
