import React from 'react';
import { Carousel } from 'react-bootstrap';
import b1 from '../../images/Banner/b1.jpg'
import b2 from '../../images/Banner/b2.jpg'
import b3 from '../../images/Banner/b3.jpg'
import b4 from '../../images/Banner/b4.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <Carousel fade variant="dark" className='m-3'>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={b1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Caring like your family</h3>
                        <p>We offer Services at your doorstep</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={b2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Best Consultants</h3>
                        <p>From reputed hospitals.</p>
                    </Carousel.Caption>
                </Carousel.Item >
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={b3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Fully Online</h3>
                        <p>Services provided ar fully online based</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={b4}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Online Medicine supply</h3>
                        <p>Providing prescribed medicines at your doorstep.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;