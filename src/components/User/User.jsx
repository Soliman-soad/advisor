import React from 'react';
import DashboardContact from '../Dashboard/DashboardContact';

const User = () => {
    return (
        <div>
            {/* Header of the User Dashboard */}
            <div className='h-80 relative flex items-center justify-center bg-gray-900/50'>                
                <img src="https://images.unsplash.com/photo-1505664063603-28e48ca204eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGxhd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className='w-full h-full absolute object-fit -z-10' />
                <h1 className='text-4xl text-white'>Your Slot for consultant</h1>
            </div>

            {/* slots */}
            <DashboardContact/>            
            <DashboardContact/>            
            <DashboardContact/>            
        </div>
    );
};

export default User;