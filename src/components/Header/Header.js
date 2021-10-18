import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
    const [navBg, setNavbg] = useState(false);
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


    window.addEventListener("scroll", changeBg)
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
                            <NavDropdown title="Our Specialists" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Orthopedics</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Cardiologist</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Gynochologist</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Neurologist</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Nephrologist</NavDropdown.Item>

                            </NavDropdown>
                            <Nav.Link href="#home">Sign In</Nav.Link>
                            <Nav.Link href="#home">View Appointments</Nav.Link>
                            <Nav.Link href="#home">Contact Us</Nav.Link>

                        </Nav>
                        <Nav.Link href="#home"><button className="btn btn-register">Register</button></Nav.Link>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;