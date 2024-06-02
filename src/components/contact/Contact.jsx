import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGithub, faLinkedinIn,faMailchimp } from '@fortawesome/free-brands-svg-icons';
import './contact.css'

function Contact() {
  return (
    <>
    <div className="contact">
      <h1>Contact me</h1>
      <div className="c-icon">
          <a href="https://www.linkedin.com/in/behroze-aslam-745b17190/" target='_blank'><FontAwesomeIcon icon={faLinkedinIn} className='contact-icon In'/></a>
          <a href="mailto:behroze.barcha@gmail.com" val target='_blank'><FontAwesomeIcon icon={faMailchimp} className='contact-icon gmail'/></a>
          <a href="https://github.com/barchakuz" target='_blank'><FontAwesomeIcon icon={faGithub} className='contact-icon git'/></a>
          <a href="https://www.instagram.com/https.barchakuz.onion/" target='_blank'><FontAwesomeIcon icon={faInstagram} className='contact-icon insta'/></a>
          <a href="https://m.facebook.com/behroze.barcha.bk" target='_blank'><FontAwesomeIcon icon={faFacebookF} className='contact-icon fb'/></a>
      </div>
    </div>

    </>
  )
}

export default Contact