import React from 'react';

const About = () => {
    return (
        <div className='bg-slate-700 grid grid-cols-1 md:grid-cols-2 py-5 md:py-0 items-center w-11/12 mx-auto rounded-md -mt-32 overflow-hidden' >
            <div className='text-white md:text-start text-center md:px-10 py-8 px-6 space-y-5'>
            <h1 className='text-2xl font-bold font-serif uppercase'>
            About lawYer
            </h1>
            <p className='text-slate-300'>
            We can provide corporate governance, helping clients manage the responsibilities of running a corporation in financial field. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
            </p>
            <div>
                <h3 className='text-3xl font-mono'>Soliman Alam</h3>
                <p className='text-yellow-600 text-sm font-semibold'>CEO, Lawyer Law Firm</p>
            </div>
            </div>
            <div className='w-full h-full'>
            <img src="https://img.freepik.com/free-photo/facade-old-building-with-columns-new-york-stock-exchange_23-2148184273.jpg?w=740&t=st=1680712081~exp=1680712681~hmac=d1ec7fe767871ee300f9a8109ee2db9f399f78f02eea02fdfa74d6618698ec7e" className='max-w-[380px] max-h-[400px] md:max-h-full md:max-w-full md:w-full md:h-full mx-auto' alt="" />
            </div>

        </div>
    );
};

export default About;