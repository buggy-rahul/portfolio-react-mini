import React from 'react'
import './about.css'
import Card from '../../img/ccard.jpg'
import { RiAwardLine } from 'react-icons/ri'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <div className="container about_container">
        <div className="about_me">
          <div className="about_img">
            <img src={Card} alt="About Me" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">

            <article className="about_card">
            <a href="#experience">
            <RiAwardLine />
            <h5>Experience </h5>
            <small>2+ Years Working</small>
            </a>
            </article>

            <article className="about_card">
              <a href="#testimonials">
              <FiUsers />
              <h5>Clients </h5>
              <small>200+ WordWide</small>
              </a>
            </article>

            <article className="about_card">
              <a href="#portfolio">
              <VscFolderLibrary />
              <h5>Projects </h5>
              <small>80+ Completed</small>
              </a>
            </article>

          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At temporibus eos dolore quisquam mollitia, ex consequatur fuga amet non sunt!</p>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About