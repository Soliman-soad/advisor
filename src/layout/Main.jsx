import React, { useContext } from 'react';
import { Nav } from '../components/Shared/Nav';
import { Outlet } from 'react-router-dom';
import { Footer } from '../components/Shared/Footer';
import { StateManage } from '../Context/StateContext';
import Login from '../components/Authentication/Login'

const Main = () => {
    const {formOpen} = useContext(StateManage)
    return (
        <div>
            <Nav/>
            {
                formOpen
                ?
            <div>
            <Login />
            </div>
            :
            <></>
            }
            <div className='lg:mt-[5.5rem]'>
            <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Main;