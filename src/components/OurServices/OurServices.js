import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import "./OurServices.css";

const OurServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("./services.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (

        <div id="services-container">
            <Container>
                <h1 className="section-title">Our Services</h1>
                <Row lg={3} md={2} sm={1} xs={1}>
                    {
                        services.slice(0, 6).map(service => <Service
                            key={service.id}
                            service={service}
                        >

                        </Service>)
                    }
                </Row>
            </Container>
        </div>


    );
};

export default OurServices;