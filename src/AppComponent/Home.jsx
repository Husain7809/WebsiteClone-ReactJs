import React from 'react';
import Web from '../asset/image/bg.png';
import Common_page from './Common_page';

const Home = () => {
    return (
        <>
            <Common_page name='Grow your business with' Web={Web} buttonText='Get Started' visit='/'/>
        </>
    );
}

export default Home;
