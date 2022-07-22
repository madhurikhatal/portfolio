import React from 'react'
// import { Link } from 'react-router-dom';
import './contact.css'
import link from './image/ln.png'
import mail from './image/mail.png'
import git from './image/gt.png'

const Contact = () => {
    return (
        <>
            <div className="container my-5 bg" id='contact'>
                <h1 className='text-center' >  Contact Me</h1>
                <div className='row my-5'>
                  
                    <div className='col-sm-6 text-center my-5'>
                        <a  href='https://www.linkedin.com/feed/'>
                            <img  src={link} height={70} alt='linkdin' />
                        </a>
                        <br />
                        <a href='mailto:madhuribkhatal@gmail.com'>
                            <img className='my-3' src={mail} height={70} alt='email' />
                        </a>
                        <br />

                        <a href='https://github.com/madhurikhatal'>
                            <img className='my-3' src={git} height={70} alt='github' />
                        </a>
                    </div>
                    <div className='col-sm-6 '>
                    <h1>+91 8010636141</h1>
                      <form action='mailto:madhuribkhatal@gmail.com' method='post' target='_blank' encType='text/plain'>
                      <div className="input-group flex-nowrap my-3">
                            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" required/>
                        </div>

                        <div className="input-group flex-nowrap my-3">
                            <input type="email" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="addon-wrapping" required/>
                        </div>

                        <div className="form-floating">
                            <textarea className="form-control" placeholder="Leave a message here" id="floatingTextarea"required  ></textarea>
                            <label for="floatingTextarea">Message for me</label>
                        </div>

                        <button type="submit" className="btn btn-outline-primary mx-5 my-5" >Send Message</button>
                      </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact