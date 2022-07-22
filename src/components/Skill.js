import React from 'react'
import './home.css'
const Skill = () => {
    return (
        <>
            {/* <div className="container">
                <h1 className='text-center' >  Skill Set</h1>
                <div className='row my-5'>
                    <div className='col-sm-4'>
                        <h4 >Front-End </h4>
                        <h6 >
                            <ul>
                                <li>ReactJs </li>
                                <li>HTML</li>
                                <li>CSS </li>
                                <li>BOOTSTRAP</li>
                            </ul>
                        </h6>
                    </div>


                    <div className='col-sm-4'>
                        <h4 >Back-end</h4>
                        <h6>
                            <ul>
                                <li>Node JS </li>
                                <li>Express </li>
                            </ul>
                        </h6>
                    </div>
                    <div className='col-sm-4'>
                        <h4 >Database </h4>
                        <h6>
                            <ul>
                                <li> MONGODB </li>
                            </ul>
                        </h6>
                    </div>
                </div>
            </div> */}

            <div class="container" id='skill'>
                <div class="row g-3">
                    <div class="col-4">
                        <div class="p-3 border bg-light title"> Front-End </div>
                    </div>
                    <div class="col-4">
                        <div class="p-3 border bg-light title">Back-end</div>
                    </div>
                    <div class="col-4">
                        <div class="p-3 border bg-light title">Database </div>
                    </div>
                    <div class="col-4">
                        <div class="p-3 border bg-light"> <ul>
                            <li>ReactJs </li>
                            <li>HTML</li>
                            <li>CSS </li>
                            <li>BOOTSTRAP</li>
                        </ul> </div>
                    </div>
                    <div class="col-4">
                        <div class="p-3 border bg-light"> <ul>
                            <li>Node JS </li>
                            <li>Express </li>
                        </ul> </div>
                    </div>
                    <div class="col-4">
                        <div class="p-3 border bg-light"> <ul>
                            <li> MONGODB </li>
                        </ul> </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skill