import React from 'react';

const About = () => {
    return (
        <div className='bg-sky-900 grid grid-cols-1 md:grid-cols-2 items-center max-w-4xl mx-auto rounded-md '>
            <div className='text-white md:text-start text-center md:px-10 md:py-8 space-y-5'>
            <h1 className='text-xl font-bold font-serif uppercase'>
            About lawYer
            </h1>
            <p >
            We can provide corporate governance, helping clients manage the responsibilities of running a corporation in financial field. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
            </p>
            <div>
                <h3 className='text-3xl font-mono'>Soliman Alam</h3>
                <p className='text-yellow-600 font-semibold'>CEO, Lawyer Law Firm</p>
            </div>
            </div>
            <div>

            </div>

        </div>
    );
};

export default About;