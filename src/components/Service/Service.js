import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import "./Service.css";

const Service = (props) => {
    const { id, name, description, img } = props.service;
    const history = useHistory();
    const serviceDetails = (id) => {
        history.push(`/servicedetails/${id}`)
    }
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
                        <button className="btn btn-service-details" onClick={() => serviceDetails(id)}>Details</button>
                    </Card.Footer>
                </Card>
            </Col>
        </div>





    );
};

export default Service;