import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const { user, logout } = useAuth();

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container className="container">
                    <Navbar.Brand href="/home">
                        <img
                            src="https://scontent.fdac24-1.fna.fbcdn.net/v/t1.6435-9/100063541_117091953343316_2220452840256569344_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHMME9mC0LwVOK-Y1dneo8jGxm2vF55WqkbGba8XnlaqX8SzbXEciTQxsP0pcfLFj__WKE2_VKdMQd04mzN6m6r&_nc_ohc=OVzFtSxmYBMAX-sszTt&_nc_ht=scontent.fdac24-1.fna&oh=f1a953d07fa8c835fcbf8d0165adabf2&oe=6191BAF9"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                    <Navbar.Brand href="/home">Family Doctors BD</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href='/home'>Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/services">Services</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="/covid">Covid Info</Nav.Link>
                            <button ><Link to="/login">Login</Link></button>

                            <button><Link to="/register">Register</Link></button>
                            <span className="text-white">{user.displayName} </span>

                            {user?.email && <button onClick={logout}>log out</button>}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;