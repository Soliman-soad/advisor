import React from 'react';

const Expert = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-5'>
            <div className='max-h-[400px] md:max-h-full'>

            </div>
            <div className='space-y-5 py-10 md:py-24 md:px-10 px-5'>
                <div className='relative pb-4'>
                    <div className='w-1/12 absolute h-full border-b-4'></div>
                    <h1 className='text-sm font-semibold text-gray-400'>WHAT WE ARE EXPERT AT</h1>
                    <h3 className='text-3xl'>Why Clients Choose Us</h3>
                </div>
                <div className='space-y-4 text-xl text-slate-800'>
                    <p>
                    We can provide corporate governance, helping clients manage the responsibilities of running a corporation in financial field.
                    </p>
                    <p>
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows.
                    </p>
                </div>
                <div>
                <a href=""className='text-lg text-cyan-900 font-semibold'>LEARN MORE ---</a>
                </div>
            </div>
        </div>
    );
};

export default Expert;