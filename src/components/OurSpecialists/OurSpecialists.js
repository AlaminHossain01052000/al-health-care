import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Slider from "react-slick";
import Specialist from '../Specialist/Specialist';
const OurSpecialists = () => {
    const [specialists, setSpecialists] = useState([]);
    useEffect(() => {
        fetch("./specialists.json")
            .then(res => res.json())
            .then(data => setSpecialists(data));
    }, [])
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        responsive: [

            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,

                }
            },
            {
                breakpoint: 300,
                settings: {
                    slidesToShow: 1,


                }
            }
        ]
    };
    return (
        <section className="bg-dark">
            <Container className="mb-5 py-5">
                <h1 className="section-title mb-5">Our Specialists</h1>
                <Slider {...settings}>
                    {
                        specialists.map(specialist => <Specialist
                            key={specialist.id}
                            specialist={specialist}

                        >

                        </Specialist>)
                    }
                </Slider>
            </Container>
        </section>
    );
};

export default OurSpecialists;