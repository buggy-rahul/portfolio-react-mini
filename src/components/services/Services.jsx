import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container service_container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service_list">
            <li>
                <BiCheck className='service_list-icon' />
                <p>Responsive web design.</p>
                </li>
                <li>
                <BiCheck className='service_list-icon' />
                <p>Interaction design.</p>
                </li>
                <li>
                <BiCheck className='service_list-icon' />
                <p>Information architecture.</p>
                </li>
                <li>
                <BiCheck className='service_list-icon' />
                <p>User research and user strategy.</p>
                </li>
                <li>
                <BiCheck className='service_list-icon' />
                <p>Front-end programming (Coding).</p>
            </li>
            
          </ul>
          {/* END OF UI/UX */}
        </article>
        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className="service_list">
            <li>
                <BiCheck className='service_list-icon' />
                <p>Basic knowledge of HTML/ CSS/ JavaScript/ Bootstrap/ Tailwind.</p>
            </li>
            <li>
                <BiCheck className='service_list-icon' />
                <p>ReactJS/ AngularJs/ vueJs as a Frontend Framework </p>
            </li>
            <li>
                <BiCheck className='service_list-icon' />
                <p>Frontend web programing languages and skills such as JavaScript, Ajax and web animation techniques.</p>
            </li>
            <li>
                <BiCheck className='service_list-icon' />
                <p>Backend web programing languages such as JavaScript, Python or NodeJS, PHP, MySQL and MongoDb</p>
            </li>
           
          </ul>
          {/* END OF Web Development */}
        </article>
        <article className="service">
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service_list">
            <li>
                <BiCheck className='service_list-icon' />
                <p>Data analysis </p>
            </li>
            <li>
                <BiCheck className='service_list-icon' />
                <p>Content promotion </p>
            </li>
            <li>
                <BiCheck className='service_list-icon' />
                <p>SEO </p>
            </li>
            <li>
                <BiCheck className='service_list-icon' />
                <p>Research/Planning</p>
            </li>
          
          </ul>
          {/* Content Creation */}
        </article>
      </div>
    </section>
  )
}

export default Services