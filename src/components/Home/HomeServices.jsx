import React from 'react';
import ServiceCard from '../Shared/ServiceCard';

const HomeServices = () => {
    return (
        <div>
            <div className='text-center'>

                <h1 className='text-slate-400 font-semibold'>WHAT WE ARE EXPERT AT</h1>
                <h3 className='text-4xl font-serif font-medium'>Legal Practices Area</h3>
                <div className=' w-[60px] rounded-lg h-full border-b-4 border-yellow-700 mx-auto mt-5'>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3'>
            <ServiceCard/>
            <ServiceCard/>
            <ServiceCard/>
            </div>
        </div>
    );
};

export default HomeServices;