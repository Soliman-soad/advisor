import React, { useContext, useState } from 'react';
import SliderBanner from './SliderBanner';
import HomeServices from './HomeServices';
import Expert from './Expert';
import About from './About';
import Testimonial from './Testimonial';
import Contact from './Contact';
import Login from '../Authentication/Login';
import { StateManage } from '../../Context/StateContext';



const Home = () => {
    const {formOpen} = useContext(StateManage)
    
    return (
        <div className='space-y-20 '>
            {
                formOpen
                ?
            <div>
            <Login />
            </div>
            :
            <></>
            }
            <div>
            <SliderBanner/>
            <About/>
            </div>
            <HomeServices/>
            <Expert/>
            <Testimonial></Testimonial>
            <Contact/>
            
        </div>
    );
};

export default Home;