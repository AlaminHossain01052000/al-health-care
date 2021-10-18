import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useServices from '../../hooks/useServices';

const ServiceDetails = () => {
    const serviceId = useParams();
    const { services } = useServices();
    console.log(services)









    return (
        <div>

        </div>
    );
};

export default ServiceDetails;