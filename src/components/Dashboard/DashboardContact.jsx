import React from 'react';
import { AiFillDelete } from "react-icons/ai";

const DashboardContact = () => {
    return (
        <div className='border-2 rounded-xl p-10 grid grid-cols-5 items-center my-5 w-11/12 mx-auto'>
            <div className='col-span-4'>
            <h1 className='text-xl mb-3 font-semibold'>Lorem ipsum dolor sit amet.</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur tenetur dolorum voluptatem eum eveniet vero laudantium officiis exercitationem consequuntur, veritatis rem nulla. Cumque voluptatem rerum tenetur pariatur natus omnis molestiae.</p>
            <h2><span className='font-semibold'>location:</span> Dhaka, Bangladesh</h2>
            <h2><span className='font-semibold'>Time:</span> Dhaka, Bangladesh</h2>
            </div>
            <div>
                <AiFillDelete className='bg-red-200 text-red-600 w-10 h-10 rounded-full p-2 mx-auto'/>
            </div>
        </div>
    );
};

export default DashboardContact;