import React from 'react'
import CTA from './CTA'
import './header.css'
import ME from '../../img/Me.png'
import HeaderSocials from './HeaderSocials'
import{AiOutlineRight} from 'react-icons/ai'

const Header = () => {
  return (
    <header id='header'>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Coder Rahul</h1>
        <h5 className="text-light">FullStack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
        <img src={ME} alt="me" />
        </div>
        <a href="#contact" className='scroll__down'>SCROLL DOWN <AiOutlineRight/></a>
      </div>
    </header>
  )
}

export default Header