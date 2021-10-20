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
                            <h2 className="card-title m-3 p-3">Lab Tests and Home Sample Collection</h2>
                            <p className="card-text m-3 p-3">

                                Lab Tests Online is an award-winning health information web resource designed to help patients and caregivers understand the many lab tests that are a vital part of medical care.
                                According to authorized prescription we provide sample collection from your doorstep also the reports are provided with maximum accuracy with the shortest possible time</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-5">
                <div className="row g-0">
                    <div className="col-md-6">
                        <div className="card-body">
                            <h2 className="card-title m-3 p-3">Consultation with Specialized doctors</h2>
                            <p className="card-text m-3 p-3">"Find most qualified Doctors from Bangladesh to get instant medical advice and second opinion for your health problems. Ask the doctors online and consult them
                                Book an appointment now and avail the best doctors consultation online.</p>
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
                            <h2 className="card-title m-3 p-3">Online Pharmacy</h2>
                            <p className="card-text m-3 p-3">Provide us the prescription we'll get you the medicine!
                                We offer medicines from trusted pharmaceutical companies and a large range of list there is for you to select. All sort of healthcare products, personal care and medical products ar available to make your life easier.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Description;