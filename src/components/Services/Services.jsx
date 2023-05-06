import React from 'react';
import ServiceCard from '../Shared/ServiceCard';
import { BiTimeFive } from "react-icons/bi";

const Services = () => {
    return (
        <div>
            {/* service page header */}
            <div className='h-80 relative flex items-center justify-center bg-gray-900/50'>                
                <img src="https://images.unsplash.com/photo-1505664063603-28e48ca204eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGxhd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className='w-full h-full absolute object-fit -z-10' />
                <h1 className='text-4xl text-white'>Practice Areas</h1>
            </div>

            {/* services  */}
            <div className='grid grid-cols-3'>
            <ServiceCard/>
            <ServiceCard/>
            <ServiceCard/>
            </div>

            {/* contact section */}
            <div className='h-80 relative flex items-center justify-center bg-gray-900/90 p-8'>                
                <img src="https://images.unsplash.com/photo-1505664063603-28e48ca204eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGxhd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className='w-full h-full absolute object-fit -z-10' />
                <div className='flex items-center justify-center flex-col w-11/12 border h-full'>
                <h1 className='text-xl text-white'>ARE YOU LOOKING FOR SOMEONE TO HELP?</h1>
                <h1 className='text-3xl text-slate-500'>Let us help you! Call Now : (1)2345-2345-54</h1>
                <h1 className='text-lg text-white'>contact@adviser.com <BiTimeFive className='inline'/> MON-FRI 09.00 -17.00</h1>                
                </div>
            </div>

        </div>
    );
};

export default Services;