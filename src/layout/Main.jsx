import React from 'react';
import { Nav } from '../components/Shared/Nav';
import { Outlet } from 'react-router-dom';
import { Footer } from '../components/Shared/Footer';

const Main = () => {
    return (
        <div>
            <Nav/>
            <div className='lg:mt-[5.5rem]'>
            <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Main;