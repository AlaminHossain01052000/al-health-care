import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import "./Header.css";

const Header = () => {
    const [navBg, setNavbg] = useState(false);
    const { user, loggingOut } = useAuth();

    const changeBg = () => {
        if (window.scrollY > 100) {
            setNavbg(true)
        }
        else {
            setNavbg(false)
        }

    }

    useEffect(() => {
        if (navBg) {
            const myNavbar = document.getElementById("my-navbar");
            if (myNavbar) {
                myNavbar.style.backgroundColor = "rgba(0,0,0,0.3)"
            }

        }
        else {
            const myNavbar = document.getElementById("my-navbar");
            if (myNavbar) {
                myNavbar.style.backgroundColor = "white"

            }
        }
    }, [navBg])


    window.addEventListener("scroll", changeBg);
    const handleLogginOut = (e) => {
        e.preventDefault();

        loggingOut();
    }

    return (
        <div>
            <Navbar id="my-navbar" expand="lg" className="fixed-top">
                <Container>
                    <Navbar.Brand as={Link} to="/home" className="d-flex align-items-center">
                        <img src="https://i.ibb.co/N1tj2K1/icon.png" className="w-100" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/services">Our Services</Nav.Link>
                            <Nav.Link as={Link} to="/specialist">Our Specialists</Nav.Link>




                            {
                                user.email && <span className="nav-link">{user.displayName}</span>
                            }
                            {user?.email ? <Nav.Link as={Link} onClick={handleLogginOut} to="/login">Log Out</Nav.Link> : <Nav.Link as={Link} to="/login">Log In</Nav.Link>}



                            <Nav.Link as={Link} to="/viewappointment">View Appointments</Nav.Link>
                            <Nav.Link as={Link} to="/contactus">Contact Us</Nav.Link>

                        </Nav>
                        <Nav.Link as={Link} to="/signup"><button className="btn btn-register">Register</button></Nav.Link>

                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div>
    );
};

export default Header;