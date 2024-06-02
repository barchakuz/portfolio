import React from 'react'
import './header.css'
import me from '../../assets/Images/PP.jpg'
import logo from '../../assets/Images/Logo-B.png'
import resume from '../../assets/Pdf/Resmue-B1.pdf'

function Header({id}) {
  return (
    <>
      <div className='header-body' id='home'>
    
          <div className='header-body-img'>
              <img src={me} alt="Behroze-Picture"  className='me'/>
              <img src={logo} alt="Logo" className='logo'/>
          </div>
          <div className='header-body-info'>
            <div className="header-body-info-box">
              <h1>Hi, I am Behroze Aslam</h1>
              <h3>I am a Mern Stack and Game developer</h3>
              <p>Welcome to my portfolio! I'm a passionate Software Engineering graduate with a knack for crafting innovative solutions. Explore my projects, delve into my journey, and let's connect to collaborate on exciting opportunities</p>
              <a href={resume} target='_blank' download={resume}>Resume</a>
              <a href="#">CV</a>
            </div>
          </div>
      
      </div>
    </>
  )
}

export default Header