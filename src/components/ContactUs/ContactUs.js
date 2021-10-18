import React from 'react';
import { Container, FloatingLabel, Form, Button } from 'react-bootstrap';
import "./ContactUs.css";

const ContactUs = () => {
    return (
        <section className="my-5">
            <Container>
                <h1 style={{ textAlign: "left" }} className="mb-4">Contact Us</h1>
                <div className="d-lg-flex justify-content-around ">
                    <div className="mb-4">
                        <Form>
                            <FloatingLabel controlId="floatingTextarea2" label="Your Feedback">
                                <Form.Control
                                    as="textarea"

                                    style={{ height: '100px' }}
                                />
                            </FloatingLabel>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Email" className="mt-3" />
                                <Form.Text className="text-muted">
                                    Enter your Email so that we can contact you as soon as possible
                                </Form.Text>
                            </Form.Group>
                            <div className="text-start">
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </div>


                        </Form>
                    </div>
                    <div className="text-start bg-dark p-4 contact-info">
                        <p style={{ color: "#feca57" }}>
                            <i className="fas fa-phone me-3"></i>01912442233 , 01822222651
                        </p>
                        <p style={{ color: "#48dbfb" }}>
                            <i className="fas fa-envelope me-3"></i>alhealthcare@gmail.com
                        </p>
                        <p style={{ color: "#10ac84" }}>
                            <i className="fas fa-globe me-3"></i>www.alhealthcare.health.com
                        </p>
                        <p style={{ color: "#2e86de" }}>
                            <i className="fas fa-ambulance me-3"></i>2091
                        </p>

                        <address style={{ color: "#c8d6e5" }}>
                            <i className="fas fa-hospital me-3"></i>
                            198/B Cld Rode,Narayanganj-1400,Narayanganj
                        </address>
                    </div>
                </div>

            </Container>
        </section>
    );
};

export default ContactUs;