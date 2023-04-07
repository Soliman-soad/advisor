import React from 'react';
import { FaCertificate } from 'react-icons/fa';
import Slider from 'react-slick';

const Testimonial = () => {
    const settings = {
          infinite: true,
          speed: 4000,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 9000
        };
        
    return (
        <div className='relative rounded-xl overflow-hidden'>
          <div className='absolute w-full h-full -z-10'>
            <img src="https://img.freepik.com/free-photo/facade-old-building-with-columns-new-york-stock-exchange_23-2148184273.jpg?w=740&t=st=1680712081~exp=1680712681~hmac=d1ec7fe767871ee300f9a8109ee2db9f399f78f02eea02fdfa74d6618698ec7e" className=' w-full h-full object-cover' alt="" />
            </div>
            <div className='space-y-3 bg-slate-900/80 pt-10'>
                <h1 className='text-sm uppercase font-semibold text-center  text-white'>Testimonial </h1>
                <h1 className='text-5xl text-center  text-white font-semibold'>Words form our Clients
                
                <div className='w-1/12 mt-8 mx-auto border-b-4 border-white'></div>
                 </h1>
                
            </div>
            <Slider {...settings} className='-z-10'>
          {/* slider 1 */}
          <div className=' h-full'>
          <div className="bg-slate-900/80 w-full h-full text-white flex flex-col justify-center items-center p-10 md:p-20 space-y-5" >
            <div>
                <FaCertificate className='mx-auto text-6xl'/>
            </div>
            <p className='text-center text-lg'>I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary,</p>
            <div className='text-center'>
            <h3 className='text-2xl font-serif font-semibold'>Mark justin</h3>
            <h2 className='text-lg'>CEO of Reddit</h2>
            </div>
    </div>
          </div>
          {/* slider 2 */}
          <div className=''>
          <div className="bg-slate-900/80 w-full h-full text-white flex flex-col justify-center items-center p-10 md:p-20 space-y-5" >
          <FaCertificate className='mx-auto text-6xl'/>
            <p className='text-center text-lg'>I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary,</p>
            <div className='text-center'>
            <h3 className='text-2xl font-serif font-semibold'>Mark justin</h3>
            <h2 className='text-lg'>CEO of Reddit</h2>
            </div>
    </div>
          </div>
          {/* slider 3 */}
          <div className=''>
          <div className="bg-slate-900/80 w-full h-full text-white flex flex-col justify-center items-center p-10 md:p-20 space-y-5" >
          <FaCertificate className='mx-auto text-6xl'/>
            <p className='text-center text-lg'>I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary,</p>
            <div className='text-center'>
            <h3 className='text-2xl font-serif font-semibold'>Mark justin</h3>
            <h2 className='text-lg'>CEO of Reddit</h2>
            </div>
    </div>
          </div>
          
         
        </Slider>
        </div>
    );
};

export default Testimonial;