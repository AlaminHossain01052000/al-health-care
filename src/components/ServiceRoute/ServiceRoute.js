import React from 'react';
import "./ServiceRoute.css";

const ServiceRoute = (props) => {

    const { img, name, description } = props.service;
    return (


        <div className="col">
            <div className="d-lg-flex border p-3">
                <div>
                    <img src={img} alt="" className="h-100" style={{ width: "300px" }} />
                </div>
                <div className="text-lg-start service-text ms-2">
                    <h1>{name}</h1>
                    <p>{description}</p>
                </div>
            </div>
        </div>



    );
};

export default ServiceRoute;