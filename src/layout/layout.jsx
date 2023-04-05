import React from 'react';
import { Nav } from '../components/Shared/Nav';
import { Outlet } from 'react-router-dom';
import { Footer } from '../components/Shared/Footer';

const layout = () => {
    return (
        <div>
            <Nav/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default layout;