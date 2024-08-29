import pic from './assets/logo.png';
import user from './assets/user.png';
import hlogo from './assets/h-logo.png';

import './App.css'

function App(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-2">
                    <img className='my-2' src={hlogo} style={{height: "100px", width: "150px"}}></img>
                    <div>
                        <img className='my-2' src={pic} style={{height: "100px", width: "100%"}}></img>
                        <p>Student Management</p>
                    </div>
                    <div>
                        <img className='my-2' src={pic} style={{height: "100px", width: "100%"}}></img>
                        <p>Financial Management</p>
                    </div>
                    <div>
                        <img className='my-2' src={pic} style={{height: "100px", width: "100%"}}></img>
                        <p>Quality Control</p>
                    </div>
                    <div>
                        <img className='my-2' src={pic} style={{height: "100px", width: "100%"}}></img>
                        <p>Report Delivery</p>
                    </div>
                    <div>
                        <img className='my-2' src={pic} style={{height: "100px", width: "100%"}}></img>
                        <p>Attendance</p>
                    </div>
                </div>
                <div className='col-10'>
                    <div className='row' style={{height: "80px"}}>
                        <h5 className='bg-primary'>Student Management System</h5>
                    </div>
                    <div className='row'>
                        <div className='col-12 dashboard d-flex justify-content-center'>
                            <div className='box c1 mx-3 d-flex align-items-center text-light'>
                                <img className='d-card' src={user} style={{height: "70px", width: "70px"}}></img>
                                <div className='ms-1'>
                                    <p className='fs-1 mb-0 text-end'>8</p>
                                    <p className='text-end'>Regular Students</p>
                                </div>
                            </div>
                            <div className='box c2 mx-3 d-flex align-items-center text-light'>
                                <img className='d-card' src={user} style={{height: "70px", width: "70px"}}></img>
                                <div className='ms-1'>
                                    <p className='fs-1 mb-0 text-end'>8</p>
                                    <p className='text-end'>Remedial Students</p>
                                </div>
                            </div>

                            <div className='box c3 mx-3 d-flex align-items-center text-light'>
                                <img className='d-card' src={user} style={{height: "70px", width: "70px"}}></img>
                                <div className='ms-4'>
                                    <p className='fs-1 mb-0 text-end'>8</p>
                                    <p>In Paid Club</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <hr></hr>
                    </div>

                    <div className='row'>
                        <p className='text-center'>Menu</p>
                        <div className='col-12 menu d-flex justify-content-center align-items-center'>
                            <div className='col-3 box m-2 text-center'>
                                <img className='d-card' src={user} style={{height: "70px", width: "70px"}}></img>
                                <p>Regular Enrollment</p>
                            </div>
                            <div className='col-3 box m-2 text-center'>
                                <img className='d-card' src={user} style={{height: "70px", width: "70px"}}></img>
                                <p>Remedial Enrollment</p>
                            </div>
                            <div className='col-3 box m-2 text-center'>
                                <img className='d-card' src={user} style={{height: "70px", width: "70px"}}></img>
                                <p>Club Management</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className='row'>
                        <div className='col-12 menu d-flex justify-content-center'>
                            <div className='col-3 box m-2 text-center'>
                                <img className='d-card' src={user} style={{height: "70px", width: "70px"}}></img>
                                <p>Classroom Management</p>
                            </div>
                            <div className='col-3 box m-2 text-center'>
                                <img className='d-card' src={user} style={{height: "70px", width: "70px"}}></img>
                                <p>SMS / EMAIL</p>
                            </div>
                            <div className='col-3 box m-2 text-center'>
                                <img className='d-card' src={user} style={{height: "70px", width: "70px"}}></img>
                                <p>Attendance</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;