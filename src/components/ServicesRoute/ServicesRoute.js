import React from 'react';
import useServices from '../../hooks/useServices';
import ServiceRoute from '../ServiceRoute/ServiceRoute';
import "./ServicesRoute.css";

const ServicesRoute = () => {
    const { services } = useServices();
    return (
        <div>
            <img height="500px" width="100%" src={"https://previews.123rf.com/images/varijanta/varijanta1605/varijanta160500041/56755962-thin-line-flat-design-banner-for-healthcare-web-page-medical-support-healthcare-insurance-diagnosis-.jpg"} alt="" />
            <div className="my-container">
                <div className="row row-cols-lg-2 row-cols-md-1 g-3">
                    {
                        services.map(service => <ServiceRoute
                            key={service.id}
                            service={service}></ServiceRoute>)
                    }
                </div>
            </div>


        </div>
    );
};

export default ServicesRoute;