import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import cover from '../../assets/Images/Logo-w.png'





function Footer() {
  return (
    <>
    <div className="main">
      <div className='footer-head'>
      <img src={cover} alt="Logo" className='logo-img'/>
      </div>
      <div className="footer-body">
        <div className="footer-body-icon">
          <a href="https://m.facebook.com/behroze.barcha.bk" target='_blank'><FontAwesomeIcon icon={faFacebookF} className='icon'/></a>
          <a href="https://www.instagram.com/https.barchakuz.onion/" target='_blank'><FontAwesomeIcon icon={faInstagram} className='icon'/></a>
          <a href="https://github.com/barchakuz" target='_blank'><FontAwesomeIcon icon={faGithub} className='icon'/></a>
          <a href="https://www.linkedin.com/in/behroze-aslam-745b17190/" target='_blank'><FontAwesomeIcon icon={faLinkedinIn} className='icon'/></a>
        </div>
        <div className='footer-body-menu'>
          <ul className='footer-body-menu-list'>
              <a href='/'>Home</a >
              <a href='#about'>About</a >
              <a href='#skills'>Work</a >
              <a href='#education'>Contact</a >
         </ul>
        </div>
        <p>&copy; 2024 Behroze Aslam. All rights reserved.</p>
      </div>
    </div>
    </>
  )
}

export default Footer