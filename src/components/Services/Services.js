import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./info.JSON')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (

        <div className="section">
            {services.map(info =>
                <Card style={{ width: '18rem' }} className="m-3">
                    <Card.Img variant="top" src={info.image} />
                    <Card.Body>
                        <Card.Title>{info.title}</Card.Title>
                        <Card.Text>
                            {info.description}
                        </Card.Text>
                        <Button variant="primary"><Link to="/services" className="text">Go somewhere</Link></Button>
                    </Card.Body>
                </Card>)}
        </div>
    );
};



export default Services;