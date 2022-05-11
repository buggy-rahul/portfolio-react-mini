import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer id='footer'>
      <a href="/" className='footer_logo'>Coder Rahul</a>
      
      <ul className='permalinks'>
      <li><a href="#header">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
          <a href="https://www.facebook.com/officialcoderrahul/"><BsFacebook/></a>
          <a href="https://www.instagram.com/coder__rahul/"><BsInstagram/></a>
          <a href="https://twitter.com/coderrahuI"><BsTwitter/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; CoderRahul. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer