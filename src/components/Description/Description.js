import React from 'react';
import './Description.css'

const Description = () => {
    return (
        <div className="m-5 px-5">
            <div className="card mb-5" >
                <div className="row g-0">
                    <div className="col-md-6">
                        <img src="https://image.freepik.com/free-photo/close-up-doctor-holding-blood-sample_23-2148747867.jpg" className="img-fluid rounded-start" alt="..."></img>
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-5">
                <div className="row g-0">
                    <div className="col-md-6">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src="https://image.freepik.com/free-photo/doctor-with-co-workers-analyzing-x-ray_1098-581.jpg" className="img-fluid rounded-start" alt="..."></img>
                    </div>

                </div>
            </div>
            <div className="card mb-5" >
                <div className="row g-0">
                    <div className="col-md-6">
                        <img src="https://image.freepik.com/free-photo/medicine-bottles-pills_1160-370.jpg" className="img-fluid rounded-start" alt="..."></img>
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Description;