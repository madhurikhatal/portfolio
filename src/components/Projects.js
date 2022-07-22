import React from 'react'
import './home.css'
import './contact.css'
// import { Link } from 'react-router-dom'
import img0 from './image/0.jpeg'
import img1 from './image/1.jpg'
import img2 from './image/2.png'
import img3 from './image/3.png'
import img4 from './image/4.png'
import img5 from './image/5.jpg'
import note from './image/noteapp.png'
import product from './image/productlist.png'
const Projects = () => {
    return (
        <>

            <div className="card-group my-5  " id='project'>
                <div className="card mx-5 card1">
                    <img src={img0} className="card-img-top" alt="Current time" height={400} />
                    <div className="card-body">
                        <h5 className="card-title">Music Player</h5>
                        <p className="card-text">This site play songs . Which shows on screen .It developed using pure javascript and css and HTML   </p>

                        <div className='d-flex justify-content-between'>
                            <a href="https://madhurikhatal.github.io/music_player/">
                                <button className="btn btn-outline-primary">Preview </button>
                            </a>
                            <a href="https://github.com/madhurikhatal/music_player">
                                <button className="btn btn-outline-primary mx-5 ">Github</button>
                            </a>
                        </div>

                    </div>
                </div>

                <div className="card mx-5 card2">
                    <img src={note} className="card-img-top" alt="Music Site" height={400} />
                    <div className="card-body">
                        <h5 className="card-title">Note App</h5>
                        <p className="card-text">This is the app where users can add , update ,delete notes .
                            Can also see notes of his/her but necessary to register and login into the system .
                            React js , javascript , HTML , CSS andMongoDB .
                        </p>
                        <div className="d-flex justify-content-between">
                            {/* <a href="https://madhurikhatal.github.io/bootstrapsite/">
                                <button className="btn btn-outline-primary">Preview</button>
                            </a> */}
                            <a href="https://github.com/madhurikhatal/react-noteapp">
                                <button className="btn btn-outline-primary  mx-5">Github</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="card mx-5 card2">
                    <img src={product} className="card-img-top" alt="Music Site" height={400} />
                    <div className="card-body">
                        <h5 className="card-title">ProductList App</h5>
                        <p className="card-text">This is the app where users can add , update ,delete products. Can also see notes of his/her but necessary to register and login
                            into the system . React js , javascript , HTML , CSS andMongoDB . This app is used to add product , update , delete and make product list.

                        </p>

                        <div className="d-flex justify-content-between">
                            {/* <a href="https://madhurikhatal.github.io/bootstrapsite/">
                                <button className="btn btn-outline-primary">Preview</button>
                            </a> */}
                            <a href="https://github.com/madhurikhatal/productlist">
                                <button className="btn btn-outline-primary  mx-5">Github</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card-group my-5 ">
                <div className="card mx-5 card3">
                    <img src={img3} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Calculator</h5>
                        <p className="card-text">This is a simple Calculator.
                            Using JavaScript technology</p>
                        <div className="d-flex justify-content-between">
                            <a href="https://madhurikhatal.github.io/calculator/" >
                                <button className="btn btn-outline-primary btn1">Preview</button>

                            </a>
                            <a href="https://github.com/madhurikhatal/calculator.git">
                                <button className="btn btn-outline-primary mx-5 btn2">Github</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="card mx-5">
                    <img src={img4} className="card-img-top" alt="Current time" height={400} />
                    <div className="card-body">
                        <h5 className="card-title"> Newsapp</h5>
                        <p className="card-text">  This site create using bootstrap ,react js ,Api tecnologies.</p>
                        <div className="d-flex justify-content-between">
                            {/* <a href="https://madhurikhatal.github.io/bootstrapsite/">
                                <button className="btn btn-outline-primary">Preview</button>
                            </a> */}
                            <a href="https://github.com/madhurikhatal/react-newsapp.git">
                                <button className="btn btn-outline-primary  mx-5">Github</button>
                            </a>
                        </div>

                    </div>
                </div>


                <div className="card mx-5 card5">
                    <img src={img5} className="card-img-top" alt="Music Site" height={400} />
                    <div className="card-body">
                        <h5 className="card-title">Image toggle</h5>
                        <p className="card-text">this is a simple  image toggle site.
                        </p>
                        <div className='d-flex justify-content-between'>
                            <a href="https://madhurikhatal.github.io/imageToggle/">
                                <button className="btn btn-outline-primary btn1 ">Preview</button></a>

                            <a href="https://github.com/madhurikhatal/imageToggle.git">
                                <button className="btn btn-outline-primary mx-5 btn2">Github</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card-group my-5 ">
                <div className="card mx-5 card1">
                    <img src={img1} className="card-img-top" alt="Current time" height={400} />
                    <div className="card-body">
                        <h5 className="card-title">Current time</h5>
                        <p className="card-text">This side display the current time and day and date. This site create using javascript tecnologies</p>

                        <div className='d-flex justify-content-between'>
                            <a href="https://madhurikhatal.github.io/smallproject/">
                                <button className="btn btn-outline-primary">Preview </button>
                            </a>
                            <a href="https://github.com/madhurikhatal/smallproject.git">
                                <button className="btn btn-outline-primary mx-5 ">Github</button>
                            </a>
                        </div>

                    </div>
                </div>

                <div className="card mx-5 card2">
                    <img src={img2} className="card-img-top" alt="Music Site" height={400} />
                    <div className="card-body">
                        <h5 className="card-title">Music Site</h5>
                        <p className="card-text">This site display the KOREAN music bands and  some videos.
                            This site create using bootstrap tecnologies.
                            In that I use cards, iframe tag crausel.
                        </p>
                        <div className="d-flex justify-content-between">
                            <a href="https://madhurikhatal.github.io/bootstrapsite/">
                                <button className="btn btn-outline-primary">Preview</button>
                            </a>
                            <a href="https://github.com/madhurikhatal/bootstrapsite.git">
                                <button className="btn btn-outline-primary  mx-5">Github</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="card mx-5 card1">
                    <img src={img1} className="card-img-top" alt="Current time" height={400} />
                    <div className="card-body">
                        <h5 className="card-title">Current time</h5>
                        <p className="card-text">This side display the current time and day and date. This site create using javascript tecnologies</p>

                        <div className='d-flex justify-content-between'>
                            <a href="https://madhurikhatal.github.io/smallproject/">
                                <button className="btn btn-outline-primary">Preview </button>
                            </a>
                            <a href="https://github.com/madhurikhatal/smallproject.git">
                                <button className="btn btn-outline-primary mx-5 ">Github</button>
                            </a>
                        </div>

                    </div>
                </div>
            </div>







        </>
    )
}

export default Projects