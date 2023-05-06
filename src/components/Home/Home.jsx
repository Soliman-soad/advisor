import React, { useContext, useState } from 'react';
import SliderBanner from './SliderBanner';
import HomeServices from './HomeServices';
import Expert from './Expert';
import About from './About';
import Testimonial from './Testimonial';
import Contact from './Contact';
import Services from '../Services/Services';




const Home = () => {

    
    return (
        <div className='space-y-20 '>

            <div>
            <SliderBanner/>
            <About/>
            </div>
            <HomeServices/>
            <Expert/>
            <Testimonial></Testimonial>
            <Contact/>
            <Services/>
            
        </div>
    );
};

export default Home;