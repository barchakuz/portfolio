import React from 'react'
import './education.css'
function Education({id}) {
  return (
    <>
    <div className="edu-main" id='education'>
      <h1 className='edu-heading'>Education</h1>
      <ul className='edu-list'>
        <li>Bachelor of Science in Software Engineering <br />
            COMSATS University Islamabad, WahCantt Campus <br />
            CGPA: 3.03 <br />
            Graduation: January 2024</li> <br />
            <li>Higher Secondary School Certificate (HSSC)  Itermediate in Computer Science  <br />
              Punjab College Islamabad <br />
              Itermediate in Computer Science <br />
              Grade : B <br />
              Graduation: June 2018
               </li> <br />
            <li>Secondary School Certificate (SSC) <br />
                Army Public School Gilgit <br />
                Intermediate <br />
                Grade : A <br />
                Graduation: June 2016
            </li> <br />
      </ul>
    </div>
    
    </>
  )
}

export default Education