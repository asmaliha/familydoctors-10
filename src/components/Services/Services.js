import React, { useEffect, useState } from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./info.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (

        <div className="section ">
            {services.map(services => <ServiceDetails
                services={services}>
                key={services.id}

            </ServiceDetails>)
            }
        </div>
    );
};



export default Services;