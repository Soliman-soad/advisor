import React, { useState } from "react";
import { FaUserCog } from "react-icons/fa";
import { GoLaw } from "react-icons/go";
import { MdElectricalServices, MdOutlineAddBusiness, MdOutlineCorporateFare, MdRealEstateAgent } from "react-icons/md";
import DashboardContact from "../Dashboard/DashboardContact";
import { RiFundsBoxFill, RiHealthBookFill } from "react-icons/ri";
const Admin = () => {
  const [slot, setSlot] =useState(false);
  return (
    <div className="md:grid grid-cols-12 relative mt-16 md:mt-20">
      {/* admin Dashboard */}
      <div className="col-span-3 min-h-screen hidden md:block">
      <div className=" p-3 space-y-2 w-full bg-gray-100 divide-y divide-gray-300 text-gray-800 h-full">
        <div className="flex items-center p-2 space-x-4 ">
          <FaUserCog className="text-2xl" />
          <div>
            <h2 className="text-lg font-semibold">Admin</h2>
          </div>
        </div>
        <div>
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            <li className={slot ? "bg-gray-100 text-gray-900": "bg-gray-800 text-white"}>
              <span
              onClick={()=> setSlot(false)}
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current "
                >
                  <path d="M68.983,382.642l171.35,98.928a32.082,32.082,0,0,0,32,0l171.352-98.929a32.093,32.093,0,0,0,16-27.713V157.071a32.092,32.092,0,0,0-16-27.713L272.334,30.429a32.086,32.086,0,0,0-32,0L68.983,129.358a32.09,32.09,0,0,0-16,27.713V354.929A32.09,32.09,0,0,0,68.983,382.642ZM272.333,67.38l155.351,89.691V334.449L272.333,246.642ZM256.282,274.327l157.155,88.828-157.1,90.7L99.179,363.125ZM84.983,157.071,240.333,67.38v179.2L84.983,334.39Z"></path>
                </svg>
                <span>Add Service</span>
              </span>
            </li>
            <li className={!slot ? "bg-gray-100 text-gray-900": "bg-gray-800 text-white"}>
              <span
                onClick={()=> setSlot(true)}
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
</svg>

                <span>Slots</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
      </div>
      {
        slot
        ?
        <div className="col-span-9 mb-5 lg:mb-0 mx-auto">
          {/* all slots */}

        {/* Header of the User Dashboard */}
        <div  className='h-40  relative flex items-center justify-center bg-gray-900/50'>                
                <img src="https://images.unsplash.com/photo-1505664063603-28e48ca204eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGxhd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className='w-full h-full absolute object-fit -z-10' />
                <h1 className='text-4xl text-white'>All Slot for consultant</h1>
            </div>

            {/* slots */}
            <DashboardContact/>            
            <DashboardContact/>            
            <DashboardContact/> 
        </div>
        :
        <>
        {/* add product form  */}
      <div className="col-span-9 mb-5 lg:mb-0 mx-auto w-full">
      <div  className='h-40  relative flex items-center justify-center bg-gray-900/50 '>                
                <img src="https://images.unsplash.com/photo-1505664063603-28e48ca204eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGxhd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className='w-full h-full absolute object-fit -z-10' />
                <h1 className='text-4xl text-white'>Service Information</h1>
            </div>
        <div>
          {/* product information  */}
          <div className=" px-5 space-y-5">
            <div className="flex flex-col">
              <label htmlFor="name" className="font-semibold mb-2">
                Service Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Input your service Name"
                className="bg-slate-100 px-2 py-1"
              />
            </div>
            <div className="flex md:flex-row flex-col gap-5 justify-evenly">
              <div>
                <label htmlFor="image1" className="font-semibold mb-2 mr-2">
                  Image 1
                </label>
                <input type="text" name="image1" id="image1" className="bg-slate-100 px-2 py-1" placeholder="Image 1 URL"/>
              </div>
              <div>
                <label htmlFor="image2" className="font-semibold mb-2 mr-2">
                  Image 2
                </label>
                <input type="text" name="image2" id="image2" className="bg-slate-100 px-2 py-1" placeholder="Image 2 URL"/>
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="desc" className="font-semibold mb-2">
                Description
              </label>
              <textarea
                name="desc"
                id="desc"
                cols="30"
                rows="5"
                placeholder="Enter service Description"
                className="bg-slate-100 px-4 py-2"
              ></textarea>
            </div>
           
          </div>

          {/* product type selection */}
          <div className="mt-5 text-gray-800">
            <h1 className="text-xl uppercase font-semibold text-center">
              Choose Service type
            </h1>
            <div className="grid grid-cols-2">
              <label
                htmlFor="law"
                className="border inline-flex flex-col justify-center items-center m-5  p-5 space-y-3 "
              >
                <div className="inline-flex">
                  <input type="radio" name="law" id="law" />
                  <div>
                    <MdOutlineCorporateFare className="text-5xl inline" />
                  </div>
                </div>
                <div className=" uppercase font-semibold">CORPORATE & SECURITIES</div>
              </label>
              <label
                htmlFor="law1"
                className="border inline-flex flex-col justify-center items-center m-5  p-5 space-y-3 "
              >
                <div className="inline-flex">
                  <input type="radio" name="law" id="law1" />
                  <div>
                    <MdRealEstateAgent className="text-5xl inline" />
                  </div>
                </div>
                <div className=" uppercase font-semibold">REAL ESTATE LAW</div>
              </label>
              <label
                htmlFor="law2"
                className="border inline-flex flex-col justify-center items-center m-5  p-5 space-y-3 "
              >
                <div className="inline-flex">
                  <input type="radio" name="law" id="law2" />
                  <div>
                    <RiHealthBookFill className="text-5xl inline" />
                  </div>
                </div>
                <div className=" uppercase font-semibold">HEALTH CARE LAW</div>
              </label>
              <label
                htmlFor="law3"
                className="border inline-flex flex-col justify-center items-center m-5  p-5 space-y-3 "
              >
                <div className="inline-flex">
                  <input type="radio" name="law" id="law3" />
                  <div>
                    <MdOutlineAddBusiness className="text-5xl inline" />
                  </div>
                </div>
                <div className=" uppercase font-semibold">ECOMMERCE LAW</div>
              </label>
              <label
                htmlFor="law4"
                className="border inline-flex flex-col justify-center items-center m-5  p-5 space-y-3 "
              >
                <div className="inline-flex">
                  <input type="radio" name="law" id="law4" />
                  <div>
                    <RiFundsBoxFill className="text-5xl inline" />
                  </div>
                </div>
                <div className=" uppercase font-semibold">PRIVATE FUND</div>
              </label>
              <label
                htmlFor="law5"
                className="border inline-flex flex-col justify-center items-center m-5  p-5 space-y-3 "
              >
                <div className="inline-flex">
                  <input type="radio" name="law" id="law5" />
                  <div>
                    <GoLaw className="text-5xl inline" />
                  </div>
                </div>
                <div className=" uppercase font-semibold">LENDING LAW</div>
              </label>
              <label
                htmlFor="law6"
                className="border inline-flex flex-col justify-center items-center m-5  p-5 space-y-3 "
              >
                <div className="inline-flex">
                  <input type="radio" name="law" id="law6" />
                  <div>
                    <MdElectricalServices className="text-5xl inline" />
                  </div>
                </div>
                <div className=" uppercase font-semibold text-center">POWER & ENERGY</div>
              </label>
            </div>
          </div>
        </div>
        <div className="w-full mb-10">
          <button type="submit" className="bg-slate-600 block text-center text-white w-28 mx-auto px-2 py-3 hover:bg-slate-900 text-lg font-semibold rounded-md">Submit</button>
        </div>
      </div>
        </>
      }
      
    </div>
  );
};

export default Admin;
