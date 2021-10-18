import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import "./ServiceDetails.css";
const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [services, setServices] = useState([]);
    const history = useHistory();
    useEffect(() => {
        if (serviceId > 0) {
            fetch("/services.json")
                .then(res => res.json())
                .then(data => setServices(data))
        }

    }, [serviceId])
    const parsedServiceId = parseInt(serviceId);
    const serviceObj = services.find(service => service.id === parsedServiceId);
    const backToHome = () => {
        history.push("/home")
    }
    return (
        <div className="service-details">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={serviceObj?.img} />
                <Card.Body>
                    <Card.Title>{serviceObj?.name}</Card.Title>
                    <Card.Text>
                        {serviceObj?.description}
                    </Card.Text>
                    <Button variant="primary" onClick={backToHome} className="btn-back-home">Home</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ServiceDetails;