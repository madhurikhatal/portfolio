import React from 'react'
import img7 from './image/7.jpg'
import './contact.css'

const About = () => {
  return (
    <>
      <div className="container my-5 bg" id='about'>
        <h1 className='text-center' >  About Me</h1>
        <div className='row '>
          <div className='col-sm-6 '>
            <img className='img' src={img7} height={400} alt='aboutimage' />
          </div>
          <div className='col-sm-6 my-5 font'>
            <p>
              Hi, <p>
                My name is KHATAL MADHURI BALASAHEB ,I belong to Sangamner . currently i am pursuing MSC(CA) Master of Science in Computer Application from Modern College  Ganeshkhind, Pune. I have done my graduation in BCA(Science) from Sangamner College, Sangamner.
                <p>I have keen interest in OOPS, HTML, CSS, REACT JS, BOOTSTRAP, MONGODB, GITHUB, VS CODE, THUNDER CLIENT, POSTMAN</p>

              </p>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About