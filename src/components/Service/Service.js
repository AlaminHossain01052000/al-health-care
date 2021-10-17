import React from 'react';
import { Card, Col } from 'react-bootstrap';
import "./Service.css";

const Service = (props) => {
    const { name, description, img } = props.service;
    return (
        <div id="service">
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <hr />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <button className="btn btn-service-details">Details</button>
                    </Card.Footer>
                </Card>
            </Col>
        </div>





    );
};

export default Service;