import React from 'react';
import { FaWarehouse } from 'react-icons/fa';

const ServiceCard = () => {
    return (
        <div className='text-center max-w-[400px] space-y-5 shadow-lg shadow-md my-10 py-14 px-16 group hover:bg-sky-800 hover:-translate-y-5 transition-all delay-200 ease-in-out rounded-lg cursor-pointer mx-auto border'>
            <FaWarehouse className='mx-auto text-5xl text-yellow-700'/>
            <h1 className='text-xl font-semibold group-hover:text-white transition-none'>Health Care Law</h1>
            <div>
            <p className='text-lg text-slate-400 font-normal font-serif'>We can provide corporate governance, helping clients manage the responsi bilities of running a corporation in financial field.</p>
            </div>
            <div>
            <a href="#" className='uppercase text-yellow-800 font-semibold text-sm group-hover:text-white'>Learn more --</a>
            </div>
            
        </div>
    );
};

export default ServiceCard;