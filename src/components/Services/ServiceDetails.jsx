import React from 'react';
import { FaAccusoft, FaClock, FaVoicemail } from 'react-icons/fa';
import Comment from './Comment';

const ServiceDetails = () => {
    return (
        <div className='md:px-0 px-5'>
            {/* service type title */}
            <div className='h-screen relative'>
                <div className='absolute w-full h-full -z-10 object-cover'>
                    <img src="https://img.freepik.com/free-photo/facade-old-building-with-columns-new-york-stock-exchange_23-2148184273.jpg?w=740&t=st=1680712081~exp=1680712681~hmac=d1ec7fe767871ee300f9a8109ee2db9f399f78f02eea02fdfa74d6618698ec7e" alt="" className='w-full h-full object-cover' />
                </div>

                <div className='text-center text-white bg-slate-900/80 h-full flex flex-col items-center justify-center'>
                    <h1 className='text-xl md:text-5xl font-semibold'>Real Estate Law</h1>
                    <p className='uppercase font-semibold md:text-lg'>CAPTION PLACED HERE</p>
                </div>
            </div>

            {/* service detail */}
            <div className='md:grid grid-cols-12 gap-10 my-20'>


            {/* practice areas and advertise  */}
            <div className='md:block hidden col-span-3 space-y-5'>
            <ul>
                <h1 className='text-lg font-semibold'>Practice Areas</h1>
                <li>Corporate and Securities</li>
                <li>Real Estate Law</li>
                <li>Real Estate Law</li>
                <li>Real Estate Law</li>
                <li>Real Estate Law</li>
                <li>Real Estate Law</li>
                <li>Real Estate Law</li>
                <li>Real Estate Law</li>
            </ul>
            <div className='relative h-[480px] rounded-lg'>
                <div className='absolute h-full w-full -z-10'>
                    <img src="https://img.freepik.com/free-photo/facade-old-building-with-columns-new-york-stock-exchange_23-2148184273.jpg?w=740&t=st=1680712081~exp=1680712681~hmac=d1ec7fe767871ee300f9a8109ee2db9f399f78f02eea02fdfa74d6618698ec7e" alt="" className='w-full h-full object-cover'/>
                </div>
                <div className='bg-slate-800/80 w-full h-full flex justify-center flex-col text-white space-y-5 px-10'>
                <h1 className='text-indigo-300 font-semibold text-xl'>Let us help you!</h1>
                <p className='text-slate-300 font-sans font-medium'>
                If you need any helps, please feel free to contact us. We will get back to you with 1 business day. Or if in hurry, just call us now.
                </p>

                <h3 className='text-xl font-semibold'>
                Call : +8801515275356
                </h3>

                <div className='text-slate-200 space-y-2'>
                <h3 >
                    <FaVoicemail className='inline mr-2'/>
                    mdsolimansoad@gmail.com
                </h3>
                <h3>
                    <FaClock className='inline mr-2'/>
                     Sat-thus 09.00-17.00
                </h3>
                </div>
                </div>
            </div>
            </div>

            {/* details */}
            <div className='col-span-9 space-y-10'>
                <div className='space-y-5'>
                    <div>
                <img src="https://img.freepik.com/free-photo/facade-old-building-with-columns-new-york-stock-exchange_23-2148184273.jpg?w=740&t=st=1680712081~exp=1680712681~hmac=d1ec7fe767871ee300f9a8109ee2db9f399f78f02eea02fdfa74d6618698ec7e" alt="" className='w-full h-64 object-cover' />
                </div>

                <h1 className='text-2xl text-yellow-600 font-semibold font-serif'>
                    Choosing Right Advisor Can Save Million Dollars
                </h1>

                <div>
                    <p>
                        Our Trading helps clients run and transform their front, middle and back-office trading operations. We provide buy-side, sell-side and market infrastructure firms with a full-service offering, including systems integration and technology consulting services, to assist in delivering high performance trading and settlement capabilities across all asset classes. This includes strategy, architecture design, operating model work, process improvement.
These apps run on a custom built blockchain, an enormously powerful shared global infrastructure that can move value around and represent the ownership of property. This enables developers to create markets, store registries of debts or promises, move funds in accordance with instructions given long in the past (like a will or a futures contract) and many other things that have not been invented yet, all without a middleman 
                    </p>
                </div>
                </div>


                {/* process and plan */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 my-10'>
                <div>
                    <img src="https://img.freepik.com/free-photo/facade-old-building-with-columns-new-york-stock-exchange_23-2148184273.jpg?w=740&t=st=1680712081~exp=1680712681~hmac=d1ec7fe767871ee300f9a8109ee2db9f399f78f02eea02fdfa74d6618698ec7e" className='max-w-[380px] max-h-[400px] md:max-h-full md:max-w-full md:w-full md:h-full mx-auto' alt="" />
                </div>
                <div className='space-y-5'>
                    <h1 className='text-2xl text-yellow-600 font-semibold font-serif'>Our Process</h1>
                    <div className='space-y-10 '>
                        <div>
                        <h3 className='text-lg font-semibold'>1. Planning The Case</h3>
                        <p>Up to 45% of a merchant’s budget is spent on commissions charge by a number of brokers, including banks.</p>
                    </div>
                    <div>
                        <h3 className='text-lg font-semibold'>2. Evaluate Situation</h3>
                        <p>Up to 45% of a merchant’s budget is spent on commissions charge by a number of brokers, including banks.</p>
                    </div>
                    <div>
                        <h3 className='text-lg font-semibold'>3. File The Case To The Court</h3>
                        <p>Up to 45% of a merchant’s budget is spent on commissions charge by a number of brokers, including banks.</p>
                    </div>
                    <div>
                        <h3 className='text-lg font-semibold'>4. Gather More Information</h3>
                        <p>Up to 45% of a merchant’s budget is spent on commissions charge by a number of brokers, including banks.</p>
                    </div>
                    </div>
                </div>
                </div>

                {/* improvement */}
                <div className='space-y-5'>
                    <h1 className='text-2xl text-yellow-600 font-semibold font-serif'>
                        Evaluate & Improvement
                    </h1>
                    <div>
                        <p>
                            Our Trading helps clients run and transform their front, middle and back-office trading operations. We provide buy-side, sell-side and market infrastructure firms with a full-service offering, including systems integration and technology consulting services, to assist in delivering high performance trading and settlement capabilities across all asset classes and many other things that have not been invented yet, all without a middleman.
                        </p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center gap-5'>
                        <div className='space-y-4'>
                            <FaAccusoft className='text-6xl text-yellow-600 font-semibold mx-auto'/>
                            <h3 className='text-gray-600 font-serif font-semibold'>PRIVATE</h3>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there.</p>
                        </div>
                        <div className='space-y-4'>
                            <FaAccusoft className='text-6xl text-yellow-600 font-semibold mx-auto'/>
                            <h3 className='text-gray-600 font-serif font-semibold'>LEGAL PROTECTION</h3>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there.</p>
                        </div>
                        <div className='space-y-4'>
                            <FaAccusoft className='text-6xl text-yellow-600 font-semibold mx-auto'/>
                            <h3 className='text-gray-600 font-serif font-semibold'>WE TAKE CARE</h3>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there.</p>
                        </div>
                    </div>

                </div>

                {/* comments */}
                <div className='space-y-5'>
                    <h1 className='bg-sky-800 text-white text-xl font-semibold pl-2 py-2 rounded-sm'>
                        Comments 
                    </h1>
                    <div className='flex items-center'>
                        <textarea name="comments" id="" cols="80" rows="3" placeholder='Write your comments' className='border-2 p-3 border-gray-500'></textarea>
                        <button type='submit' className='btn bg-slate-700 text-white py-2 px-4 rounded ml-2'>Comment</button>
                    </div>
                    <div className='space-y-3'>
                        <Comment/>
                        <Comment/>
                        <Comment/>
                    </div>
                </div>


            </div>

            </div>

        </div>
    );
};

export default ServiceDetails;