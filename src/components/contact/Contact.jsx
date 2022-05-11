import React, {useRef} from 'react'
import './contact.css'
import {SiGmail} from 'react-icons/si'
import {BsMessenger} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
// import {MdSend} from 'react-icons/md'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wkdk5ta', 'template_l20cs4l', form.current, 'fpSDO5zemUYYHYNkY')
    
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
          <div className="contact_options">
              <article className="contact_option">
                <SiGmail className='contact_option-icon'/>
                <h4>Email</h4>
                <h5 className='text-light'>Open Direct<br />Mail Client</h5>
                <a href="mailto:coderrahul96@gmail.com" target='_blank' rel="noopener noreferrer">Send a message</a>
              </article>

              <article className="contact_option">
                <BsMessenger className='contact_option-icon'/>
                <h4>Messenger</h4>
                <h5 className='text-light'>Coder Rahul</h5>
                <a href="https://m.me/officialcoderrahul" target='_blank' rel="noopener noreferrer">Send a message</a>
              </article>

              <article className="contact_option">
                <BsWhatsapp className='contact_option-icon'/>
                <h4>WhatsApp</h4>
                <h5 className='text-light'>+91 88xxxxxx25</h5>
                <a href="https://api.whatsapp.com/send?phone=918805159425" target='_blank' rel="noopener noreferrer">Send a message</a>
              </article>
              {/* contact options completed */}
          </div>
          <form ref={form} onSubmit={sendEmail}>
                <div className='send-mail'><h5>Send me a message! </h5></div>
                <input type="text" name="name" placeholder='Enter your name' required />
                <input type="email" name="email" placeholder='Enter your email address' required />
                <textarea name="message" rows="5" placeholder='Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this?'></textarea>
                <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
      </div>
    </section>
  )
}

export default Contact