import React from 'react'
import { Link } from 'react-router-dom';
import './home.css'

const Navbar = () => {
  return (
    <>
    
    <nav className="navbar navbar-expand-lg  ">
    
        <div className="container-fluid nav ">
          <Link className="navbar-brand mx-5 nav" to="/">MY PROFILE</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse  my-3 " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              {/* <li className="nav-item">
                <Link className="nav-link active mx-5 nav " aria-current="page" to="/">Home</Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link mx-5 nav" to="/about">About</Link>
              </li>
             
         
              <li className="nav-item">
                <Link className="nav-link mx-5 nav" to="/skill">Skill</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-5 nav" to="/project">Project</Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link mx-5 nav" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    
    </>
  )
}

export default Navbar