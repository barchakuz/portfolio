import React from 'react'
import './skills.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFirefoxBrowser } from '@fortawesome/free-brands-svg-icons';
import us from '../../assets/Images/uv.png'
import a from '../../assets/Images/Web-a.png'
import chat from '../../assets/Images/chat.png'
import Music from '../../assets/Images/music.png'
import lib from '../../assets/Images/lib.png'
import m from '../../assets/Images/m.png'
import bike from '../../assets/Images/bike.png'
import game from '../../assets/Images/game.png'
import head from '../../assets/Images/head.png'
import run from '../../assets/Images/run.png'

function Skills() {
  return (
    <>
    <div className="skills-main">
        <h2 className='skills-heading'>Web Development</h2>
      <div className="container">
      <div className="skills-web-development">
        <div class="project">
          <h3>Real Vid</h3>
          <img src={us} alt="site-image"  className='skills-img'/>
          <div className='link-box'>
          <a href="https://github.com/barchakuz/js-backend" target='_blank'><FontAwesomeIcon icon={faGithub} className='icon-skills'/></a>
          <a href="https://github.com/barchakuz/js-backend" target='_blank'><FontAwesomeIcon icon={faFirefoxBrowser} className='icon-skills'/></a>
          </div>
        </div>
        <div class="project">
          <h3>Real Time Auction System</h3>
          <img src={a} alt="site-image"  className='skills-img'/>
          <div className='link-box'>
            <a href="https://github.com/barchakuz/Auction-Managment-System" target='_blank'><FontAwesomeIcon icon={faGithub} className='icon-skills'/></a>
            <a href="https://barchakuz.github.io/Auction-Managment-System/" target='_blank'><FontAwesomeIcon icon={faFirefoxBrowser} className='icon-skills'/></a>
          </div>
        </div>
        <div class="project">
          <h3>ChatGPT Clone</h3>
          <img src={chat} alt="site-image"  className='skills-img'/>
          <div className='link-box'>
            <a href="https://github.com/barchakuz/gpt" target='_blank'><FontAwesomeIcon icon={faGithub} className='icon-skills'/></a>
            <a href="https://barchakuz.github.io/gpt/" target='_blank'><FontAwesomeIcon icon={faFirefoxBrowser} className='icon-skills'/></a>
            </div>
        </div>
        <div class="project">
          <h3>Music School Website</h3>
          <img src={Music} alt="site-image"  className='skills-img'/>
          <div className='link-box'>
          <a href="https://github.com/barchakuz/nextJs" target='_blank'><FontAwesomeIcon icon={faGithub} className='icon-skills'/></a>
          <a href="https://barchakuz.github.io/nextJs/" target='_blank'><FontAwesomeIcon icon={faFirefoxBrowser} className='icon-skills'/></a>
            </div>
        </div>
        <div class="project">
        <h3>Blog Site</h3>
          <img src={us} alt="site-image"  className='skills-img'/>
          <div className='link-box'>
          <a href="https://github.com/barchakuz/Mega" target='_blank'><FontAwesomeIcon icon={faGithub} className='icon-skills'/></a>
          <a href="https://github.com/barchakuz/Mega" target='_blank'><FontAwesomeIcon icon={faFirefoxBrowser} className='icon-skills'/></a>  
          </div>
        </div>
        
        <div class="project">
          <h3>Library Management System</h3>
          <img src={lib} alt="webiste-image" className='skills-img'/>
          <div className='link-box'>
          <a href="https://github.com/barchakuz/Mega" target='_blank'><FontAwesomeIcon icon={faGithub} className='icon-skills'/></a>
          <a href="#" target='_blank'><FontAwesomeIcon icon={faFirefoxBrowser} className='icon-skills'/></a>
          </div>
        </div>
        <div class="project">
        <h3>Masia Institute Clone</h3>
          <img src={m} alt="webiste-image" className='skills-img'/>
          <div className='link-box'>
          <a href="https://github.com/barchakuz/MasiaClone" target='_blank'><FontAwesomeIcon icon={faGithub} className='icon-skills'/></a>
          <a href="#" target='_blank'><FontAwesomeIcon icon={faFirefoxBrowser} className='icon-skills'/></a>
        </div>
    </div>
   
    </div>
      </div>



        <h2 className='skills-heading'>Game Development</h2>
      <div className="container">
    <div className="skills-game-development">
          <div class="project">
               <h3>Xtreme Motocross</h3>
               <img src={bike} alt="site-image"  className='skills-img'/>
          <div className='link-box'>
            <a href="https://youtu.be/rvAPG-BgTfs" target='_blank'><FontAwesomeIcon icon={faGithub} className='game-icon-skills'/></a>
            <a href="https://youtu.be/rvAPG-BgTfs" target='_blank'><FontAwesomeIcon icon={faFirefoxBrowser} className='game-icon-skills'/></a>
          </div>
          </div>
        <div class="project">
               <h3>Maze Game</h3>
               <img src={game} alt="site-image"  className='skills-img'/>
          <div className='link-box'>
            <a href="https://github.com/barchakuz/Maze-Game-Unity-3D" target='_blank'><FontAwesomeIcon icon={faGithub} className='game-icon-skills'/></a>
            {/* <a href="" target='_blank'><FontAwesomeIcon icon={faFirefoxBrowser} className='icon-skills'/></a> */}
          </div>
        </div>
        <div class="project">
               <h3>Realistic Hair System</h3>
               <img src={head} alt="site-image"  className='skills-img'/>
          <div className='link-box'>
            {/* <a href="#" target='_blank'><FontAwesomeIcon icon={faGithub} className='icon-skills'/></a> */}
            <a href="" target='_blank'><FontAwesomeIcon icon={faFirefoxBrowser} className='game-icon-skills'/></a>
          </div>
        </div>
        <div class="project">
               <h3>2D Deer Game</h3>
               <img src={run} alt="site-image"  className='skills-img'/>
          <div className='link-box'>
            {/* <a href="https://youtube.com/shorts/88d3zCe9a8A?feature=share" target='_blank'><FontAwesomeIcon icon={faGithub} className='icon-skills'/></a> */}
            <a href="https://youtube.com/shorts/88d3zCe9a8A?feature=share" target='_blank'><FontAwesomeIcon icon={faFirefoxBrowser} className='game-icon-skills'/></a>
          </div>
        </div>    
    </div>
    </div>
</div>


    </>
  )
}

export default Skills