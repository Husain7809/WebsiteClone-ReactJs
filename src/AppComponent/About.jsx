import React from 'react';
import Web from '../asset/image/services.jpg'
import Common_page from './Common_page';

const About = () => {
    return (
        <div>
            <Common_page name='Welcome to About page' Web={Web} buttonText='Contact Now' visit="/About"/>
        </div>
    );
}

export default About;
