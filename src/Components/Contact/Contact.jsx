import React from 'react'
import {SiGmail} from 'react-icons/si'
import {BsLinkedin} from 'react-icons/bs'
import './Contact.css'
import {useRef} from 'react'
import emailjs from 'emailjs-com'
export const Contact = () => {



//emailjs code
const form = useRef();
const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_bjjls7g', 'template_sks5dy2', form.current, '4jHtWg97J1MpTpS2v')
   
  e.target.reset();
};






  return (
    <section id='contact'> 
    <h5>Get in Touch</h5>
    <h2>Contact me</h2>

    <div className="container contact__container">
      <div className="contact__options">
       <article className="contact__option">
        <SiGmail className='contact__option-icon'/>
        <h4>Email</h4>
        <h5>anoopreddykunta12@gmail.com</h5>
        <a href="mailto:anoopreddykunta12@gmail.com" target='_blank'>Send a message</a>
       </article>

       <article className="contact__option">
        <BsLinkedin className='contact__option-icon'/>
        <h4>LinkedIn Profile</h4>
        <h5>Anoop Reddy Kunta</h5>
        <a href="https://www.linkedin.com/in/anoop-reddy/" target='_blank'>Let's Connect</a>
       </article>
      </div>
      <form ref = {form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your Full Name' required/>
        <input type="text" name='email' placeholder='Your Email' required/>
        <textarea name="message" placeholder='Your Message' rows="6" required></textarea>
        <button type='submit' className='btn btn-primary'> Send Message</button>
      </form>
    </div>

    </section>
  )
}
