import React, { useEffect } from 'react';
import { useParams } from 'react-router';

const SpecialistDetails = () => {
    const { specialistId } = useParams();
    console.log(specialistId);
    const fetching = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => console.log(data))
    }
    useEffect(() => {
        fetching();
    }, [])


    return (
        <div>

        </div>
    );
};

export default SpecialistDetails;