import React from 'react';
import SliderBanner from './SliderBanner';
import HomeServices from './HomeServices';
import Expert from './Expert';
import About from './About';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div className='space-y-20'>
            <div>
            <SliderBanner/>
            <About/>
            </div>
            <HomeServices/>
            <Expert/>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;