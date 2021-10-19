import React from 'react';
import useSpecialist from '../../hooks/useSpecialist';
import ShowSpecialistRoute from '../ShowSpecialistRoute/ShowSpecialistRoute';

const SpecialistRoute = () => {
    const { specialists } = useSpecialist();
    return (
        <div>
            <img className="w-100 mt-5" src={"https://thumbs.dreamstime.com/b/doctor-office-banner-background-healthcare-hospital-background-concept-87323968.jpg"} alt="" />
            <div className="my-container">
                <div className="row row-cols-lg-3 row-cols-md-3 row-cols-sm-1 g-3">
                    {
                        specialists.map(specialist => <ShowSpecialistRoute
                            key={specialist.id}
                            specialist={specialist}></ShowSpecialistRoute>)
                    }
                </div>
            </div>
        </div>
    );
};

export default SpecialistRoute;