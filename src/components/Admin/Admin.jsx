import React from "react";
import { FaUserCog } from "react-icons/fa";
import { GoLaw } from "react-icons/go";
const Admin = () => {
  return (
    <div className="md:grid grid-cols-12 relative mt-16 md:mt-20">
      {/* admin Dashboard */}
      <div className=" p-3 space-y-2 w-full bg-gray-100 divide-y divide-gray-300 text-gray-800 col-span-3 min-h-screen hidden md:block">
        <div className="flex items-center p-2 space-x-4 ">
          <FaUserCog className="text-2xl" />
          <div>
            <h2 className="text-lg font-semibold">Admin</h2>
          </div>
        </div>
        <div>
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            <li className="bg-gray-100 text-gray-900">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current text-gray-600"
                >
                  <path d="M68.983,382.642l171.35,98.928a32.082,32.082,0,0,0,32,0l171.352-98.929a32.093,32.093,0,0,0,16-27.713V157.071a32.092,32.092,0,0,0-16-27.713L272.334,30.429a32.086,32.086,0,0,0-32,0L68.983,129.358a32.09,32.09,0,0,0-16,27.713V354.929A32.09,32.09,0,0,0,68.983,382.642ZM272.333,67.38l155.351,89.691V334.449L272.333,246.642ZM256.282,274.327l157.155,88.828-157.1,90.7L99.179,363.125ZM84.983,157.071,240.333,67.38v179.2L84.983,334.39Z"></path>
                </svg>
                <span>Add Service</span>
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current text-gray-600"
                >
                  <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                </svg>
                <span>Search</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* add product form  */}
      <div className="col-span-9 mb-5 lg:mb-0 mx-auto">
        <h1 className="text-2xl font-semibold uppercase text-center py-5">
          Service information
        </h1>
        <div className="lg:grid grid-cols-5 ">
          {/* product information  */}
          <div className="col-span-3 px-5 space-y-5">
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
            <div className="flex md:flex-row flex-col gap-5">
              <div>
                <label htmlFor="image1" className="font-semibold mb-2 mr-2">
                  Image 1
                </label>
                <input type="file" name="image1" id="image1" />
              </div>
              <div>
                <label htmlFor="image2" className="font-semibold mb-2 mr-2">
                  Image 2
                </label>
                <input type="file" name="image2" id="image2" />
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
          <div className="col-span-2 mt-10 lg:mt-0">
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
                    <GoLaw className="text-7xl inline" />
                  </div>
                </div>
                <div className=" uppercase font-semibold">law</div>
              </label>
              <label
                htmlFor="law1"
                className="border inline-flex flex-col justify-center items-center m-5  p-5 space-y-3 "
              >
                <div className="inline-flex">
                  <input type="radio" name="law" id="law1" />
                  <div>
                    <GoLaw className="text-7xl inline" />
                  </div>
                </div>
                <div className=" uppercase font-semibold">law</div>
              </label>
              <label
                htmlFor="law2"
                className="border inline-flex flex-col justify-center items-center m-5  p-5 space-y-3 "
              >
                <div className="inline-flex">
                  <input type="radio" name="law" id="law2" />
                  <div>
                    <GoLaw className="text-7xl inline" />
                  </div>
                </div>
                <div className=" uppercase font-semibold">law</div>
              </label>
              <label
                htmlFor="law3"
                className="border inline-flex flex-col justify-center items-center m-5  p-5 space-y-3 "
              >
                <div className="inline-flex">
                  <input type="radio" name="law" id="law3" />
                  <div>
                    <GoLaw className="text-7xl inline" />
                  </div>
                </div>
                <div className=" uppercase font-semibold">law</div>
              </label>
            </div>
          </div>
        </div>
        <div className="w-full">
          <button type="submit" className="bg-slate-600 block text-center text-white w-28 mx-auto px-2 py-3 hover:bg-slate-900 text-lg font-semibold rounded-md">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
