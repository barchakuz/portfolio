import React from 'react'
import './navbar.css'
import logo from '../../assets/Images/Logo-w.png'

function Navbar() {
  return (
    <>
      <div className='navbar-head'>
        <div>
          <img src={logo} alt="Logo" className='logo-img'/>
        </div>
         <ul className='navbar-head-list'>
          <a href='#'>Home</a >
          <a href='#about'>About</a >
          <a href='#skills'>Work</a >
          <a href='#'>Contact</a >
         </ul>
      </div>
    </>
  )
}

export default Navbar