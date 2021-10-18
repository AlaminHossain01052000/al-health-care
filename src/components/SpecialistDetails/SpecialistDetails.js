import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import "./SpecialistDetails.css";

const SpecialistDetails = () => {
    const { specialistId } = useParams();
    const [specialists, setSpecialists] = useState([]);
    const history = useHistory();
    let parsedSpecialistId = parseInt(specialistId);
    useEffect(() => {
        if (specialistId > 0) {
            fetch("/specialists.json")
                .then(res => res.json())
                .then(data => setSpecialists(data))
        }

    }, [specialistId])

    const specialistObj = specialists?.find(specialist => specialist.id === parsedSpecialistId);

    const getAppointment = () => {
        history.push("/home");
    }



    return (
        <div className="specialist-details">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={specialistObj?.img} />
                <Card.Body>
                    <Card.Title>
                        <h3>{specialistObj?.name}</h3>
                        <h4>{specialistObj?.specialist}</h4>
                    </Card.Title>
                    <Card.Text>
                        <div className="text-start bg-dark p-4 contact-info">
                            <p style={{ color: "#feca57" }}>
                                <i className="fas fa-phone me-3"></i>{specialistObj?.phone}
                            </p>
                            <p style={{ color: "#48dbfb" }}>
                                <i className="fas fa-envelope me-3"></i>{specialistObj?.email}
                            </p>
                            <p style={{ color: "#10ac84" }}>
                                <i className="fas fa-globe me-3"></i>www.{specialistObj?.website}
                            </p>


                            <p style={{ color: "#c8d6e5" }}>
                                <i className="fas fa-home me-3"></i>
                                {specialistObj?.street}-{specialistObj?.suit}-{specialistObj?.city}
                            </p>
                        </div>
                    </Card.Text>
                    <Button variant="primary" onClick={getAppointment} className="btn-back-home">Get Appointment</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SpecialistDetails;