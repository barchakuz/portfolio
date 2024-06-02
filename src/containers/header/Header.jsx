import React from 'react'
import './header.css'
import me from '../../assets/Images/PP.jpg'
import logo from '../../assets/Images/Logo-B.png'
function Header() {
  return (
    <>
      <div className='header-body'>
    
          <div className='header-body-img'>
              <img src={me} alt="Behroze-Picture"  className='me'/>
              <img src={logo} alt="Logo" className='logo'/>
          </div>
          <div className='header-body-info'>
            <div className="header-body-info-box">
              <h1>Hi, I am Behroze Aslam</h1>
              <h3>I am a Mern Stack and Game developer</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, illum aperiam provident dicta deleniti incidunt animi architecto praesentium sequi. Quas ut error repudiandae sequi similique!</p>
              <a href="#">Resume</a>
              <a href="#">CV</a>
            </div>
          </div>
      
      </div>
    </>
  )
}

export default Header