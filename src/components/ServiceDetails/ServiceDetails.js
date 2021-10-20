import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetails.css'

const ServiceDetails = (props) => {
    console.log(props.services);
    const { image, title, description } = (props.services);

    return (
        <div>
            <div >
                <div className="mb-5 shadow-lg py-5 px-4 p-3 text-center rounded-5" >
                    <img src={image} className="image" alt="..."></img>

                    <div className="details">
                        <h2 className="card-title p-2 my-3">{title} </h2>
                        <h5 className="card-title m-2 ">{description} </h5>
                    </div>
                    <button type="button" className="btn btn-secondary border border-dark rounded-pill px-3 my-3"><Link className="text" to="/services">Our Services</Link></button>
                </div>

            </div>



        </div >
    );
};

export default ServiceDetails;
