import React from 'react';

const ShowSpecialistRoute = (props) => {
    const { img, name, specialist } = props.specialist;
    return (
        <div>
            <div className="col">
                <div className="border p-3">
                    <div>
                        <img src={img} alt="" className="h-100" style={{ width: "300px" }} />
                    </div>
                    <hr />
                    <div className="text-center service-text ms-2">
                        <h3>{name}</h3>
                        <h3>{specialist}</h3>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowSpecialistRoute;