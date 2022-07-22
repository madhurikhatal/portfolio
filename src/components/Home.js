import React from 'react'
import './home.css'
import i6 from './image/2.gif'

const Home = () => {
    return (
        <>
            <div className="container hover-overlay bg" id='home'>

                <div className='row my-2'>


                    <div className='col-sm-6 my-5'>
                        <div className='my-5'>
                            <div className='my-5 '>
                                <h1>Hi! I am Madhuri Khatal.</h1>
                                <p>MERN Developer</p>
                                <a href='https://drive.google.com/file/d/1EFs0-KrhGY-NWQ_NDSjaAYdodcK484v8/view?usp=sharing'>
                                    <button type="button" className="btn btn-outline-primary my-5 btn1 ">Resume</button>
                                </a>
                                <a href='/contact'>
                                    <button type="button" className="btn btn-outline-primary mx-5 ">Let's connect</button>
                                </a>
                            </div>
                        </div>
                    </div>



                    <div className='col-sm-6 my-5 '>
                        <img src={i6} height={300}  alt='userimage' className='img1' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home