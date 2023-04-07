import React from 'react';

const Expert = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-5'>
            <div className='max-h-[400px] md:max-h-full relative mx-auto order-2 md:order-1'>
                <div className='absolute '>
                    
            <img src="https://img.freepik.com/free-photo/facade-old-building-with-columns-new-york-stock-exchange_23-2148184273.jpg?w=740&t=st=1680712081~exp=1680712681~hmac=d1ec7fe767871ee300f9a8109ee2db9f399f78f02eea02fdfa74d6618698ec7e" className='  -skew-y-1 rounded-lg object-cover h-[520px] w-[500px] hidden md:block' alt="" />
                </div>
                <div className='w-full h-full'>
                <div className='w-full h-full absolute bg-slate-500/30 md:-skew-y-1 md:rounded-lg'></div>
            <img src="https://img.freepik.com/free-photo/facade-old-building-with-columns-new-york-stock-exchange_23-2148184273.jpg?w=740&t=st=1680712081~exp=1680712681~hmac=d1ec7fe767871ee300f9a8109ee2db9f399f78f02eea02fdfa74d6618698ec7e" className=' md:-skew-y-1 md:rounded-lg md:object-cover md:h-[520px] md:w-[500px] max-w-[500px] md:translate-x-10  md:-translate-y-8 ' alt="" />
                </div>
            </div>
            <div className='space-y-5 py-10 md:py-24 md:px-10 px-5 order-1 md:order-2'>
                <div className='pb-4'>
                    
                    <h1 className='text-sm font-semibold text-gray-400'>
                        WHAT WE ARE EXPERT AT
                    <div className='w-1/12  border-b-4'></div>
                    </h1>
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