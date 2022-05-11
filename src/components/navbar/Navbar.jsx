import React, {useState} from 'react';
import './navbar.css';

import { BiHomeAlt } from 'react-icons/bi';
import { BsFillPersonFill } from 'react-icons/bs';
import { BiBookAlt } from 'react-icons/bi';
import { FiTool } from 'react-icons/fi';
import { RiServiceLine } from 'react-icons/ri';
import { RiContactsLine } from 'react-icons/ri';


const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
        <a href="#header" onClick={ () => setActiveNav('#')} className={ activeNav === '#' ? 'active' : ''  } > <BiHomeAlt/> </a>
        <a href="#about" onClick={ () => setActiveNav('#about')} className={ activeNav === '#about' ? 'active' : ''}> <BsFillPersonFill/> </a>
        <a href="#experience" onClick={ () => setActiveNav('#experience')} className={ activeNav === '#experience' ? 'active' : ''}> <BiBookAlt/> </a>
        <a href="#services" onClick={ () => setActiveNav('#services')} className={ activeNav === '#services' ? 'active' : ''}>  <FiTool/> </a>
        <a href="#portfolio" onClick={ () => setActiveNav('#portfolio')} className={ activeNav === '#portfolio' ? 'active' : ''}>  <RiServiceLine/> </a>
        <a href="#contact" onClick={ () => setActiveNav('#contact')} className={ activeNav === '#contact' ? 'active' : ''}> <RiContactsLine/> </a>
    </nav>
  )
}

export default Navbar