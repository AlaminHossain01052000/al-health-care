import React from 'react';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';

import OurServices from '../OurServices/OurServices';
import OurSpecialists from '../OurSpecialists/OurSpecialists';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurServices></OurServices>
            <OurSpecialists></OurSpecialists>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;