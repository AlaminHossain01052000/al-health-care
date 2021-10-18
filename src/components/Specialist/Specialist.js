import React from 'react';
import { Card, Button } from 'react-bootstrap';
import "./Specialist.css";

const Specialist = (props) => {
    const { img, name, specialist, email, phone, website, id } = props.specialist;


    return (
        <div id="specialist">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <hr />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <h3>{specialist}</h3>
                    <Card.Text>
                        <p style={{ color: "#ff6b6b" }}><i className="fas fa-envelope me-3"></i>{email}</p>
                        <p style={{ color: "#1dd1a1" }}><i className="fas fa-phone-alt me-3"></i>{phone}</p>
                        <p style={{ color: "#ff9f43" }}><i className="fas fa-globe me-3"></i> www.{website}</p>
                    </Card.Text>
                    <Button className="btn-book-now mx-auto">Book Now</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Specialist;