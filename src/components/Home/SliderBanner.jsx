import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const SliderBanner = () => {
    const settings = {
      fade: true,
        infinite: true,
        speed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 9000
      };
    return (
        <Slider {...settings} className='-z-10'>
          {/* slider 1 */}
          <div className='relative h-screen'>
          <div className='absolute w-full h-full -z-10'>
            <img src="https://img.freepik.com/free-photo/facade-old-building-with-columns-new-york-stock-exchange_23-2148184273.jpg?w=740&t=st=1680712081~exp=1680712681~hmac=d1ec7fe767871ee300f9a8109ee2db9f399f78f02eea02fdfa74d6618698ec7e" className=' w-full h-full object-cover' alt="" />
            </div>
          <div className="bg-slate-900/80 w-full h-full text-white flex flex-col justify-center p-10 md:p-20 space-y-5" >
            <h1 className='text-2xl md:text-7xl font-semibold'>
              Advisor the law firm
              <div className='w-20 border-b-4 border-white mt-5'></div>
              </h1>
            <div className='space-y-3'>
              <p className='md:text-xl'>We are a leading law firm in financial and business. With more than 15 years of experience. </p>
              <button className='bg-white text-slate-900 text-xl font-semibold px-4 py-2 rounded-md'>Contact us</button>
            </div>
    </div>
          </div>
          {/* slider 2 */}
          <div className='relative h-screen'>
          <div className='absolute w-full h-full -z-10'>
            <img src="https://img.freepik.com/free-photo/facade-old-building-with-columns-new-york-stock-exchange_23-2148184273.jpg?w=740&t=st=1680712081~exp=1680712681~hmac=d1ec7fe767871ee300f9a8109ee2db9f399f78f02eea02fdfa74d6618698ec7e" className=' w-full h-full object-cover' alt="" />
            </div>
          <div className="bg-slate-900/80 w-full h-full text-white flex flex-col justify-center p-10 md:p-20 space-y-5" >
            <h1 className='text-2xl md:text-7xl font-semibold'>
              Professional law firm
              <div className='w-20 border-b-4 border-white mt-5'></div>
              </h1>
            <div className='space-y-3'>
              <p className='md:text-xl'>We are a leading law firm in financial and business. With more than 15 years of experience. </p>
              <button className='bg-white text-slate-900 text-xl font-semibold px-4 py-2 rounded-md'>Contact us</button>
            </div>
    </div>
          </div>
         
        </Slider>
        
    );
};

export default SliderBanner;