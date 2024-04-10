import React from 'react';
import NavigationBar from '../components/Navbar';

const About = () => {
    return (
        <>
        <NavigationBar/>
            <div className='container'>
                <h1>About Us</h1>
                <p>This is the About page of our application.</p>
            </div>
        </>
    );
};

export default About;
