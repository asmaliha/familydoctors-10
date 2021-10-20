import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className="container">
                <footer className="py-5">
                    <div className="row">
                        <div className="col-4 px-3">
                            <h5>About Us</h5>
                            <p>
                                Our aim is to make the best use of technology in medical sectors which promises better health and wellbeing.
                            </p>
                        </div>

                        <div className="col-2">
                            <h5>More</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><Link to='/home' className="nav-link p-0 text-muted">Home</Link></li>
                                <li className="nav-item mb-2"><Link to='/home' className="nav-link p-0 text-muted">Contact us</Link></li>
                                <li className="nav-item mb-2"><Link to='/home' className="nav-link p-0 text-muted">Pricing</Link></li>
                                <li className="nav-item mb-2"><Link to='/home' className="nav-link p-0 text-muted">FAQs</Link></li>
                                <li className="nav-item mb-2"><Link to='/about' className="nav-link p-0 text-muted">About</Link></li>
                            </ul>
                        </div>


                        <div className="col-4 offset-1">
                            <form>
                                <h5>Subscribe to our newsletter</h5>
                                <p>Monthly digest of whats new and exciting from us.</p>
                                <div className="d-flex w-100 gap-2">
                                    <label for="newsletter1" className="visually-hidden">Email address</label>
                                    <input id="newsletter1" type="text" className="form-control" placeholder="Email address"></input>
                                    <button className="btn btn-primary" type="button">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="d-flex justify-content-between py-4 my-4 border-top">
                        <p><Link to="/home">                        <img alt=""
                            src="https://scontent.fdac24-1.fna.fbcdn.net/v/t1.6435-9/100063541_117091953343316_2220452840256569344_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHMME9mC0LwVOK-Y1dneo8jGxm2vF55WqkbGba8XnlaqX8SzbXEciTQxsP0pcfLFj__WKE2_VKdMQd04mzN6m6r&_nc_ohc=OVzFtSxmYBMAX-sszTt&_nc_ht=scontent.fdac24-1.fna&oh=f1a953d07fa8c835fcbf8d0165adabf2&oe=6191BAF9"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                        </Link>
                            &copy; 2021 Company, Inc. All rights reserved.</p>
                        <ul className="list-unstyled d-flex">
                            <li className="ms-3"><i class="fab fa-twitter-square" ></i></li>
                            <li className="ms-3"><i class="fab fa-facebook-square"></i></li>
                            <li className="ms-3"><i class="fab fa-instagram-square"></i></li>
                        </ul>
                    </div>
                </footer >
            </div >

        </div >
    );
};

export default Footer;
