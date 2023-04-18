import React, { useContext, useState } from 'react';
import { FaDraftingCompass } from 'react-icons/fa';
import { StateManage } from '../../Context/StateContext';
import { VscAccount } from "react-icons/vsc";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdPassword } from "react-icons/md";

const Login = () => {
    const{setFormOpen} = useContext(StateManage);
    const [member, setMember] = useState(false);

    return (
        <div  className=' fixed top-0 w-full h-screen mx-auto bg-slate-800/90 z-50' >
        <div className='mx-auto max-w-md relative bg-slate-100/60 items-center rounded-md group '>    
            <div className='absolute w-full h-full  -z-10 rounded-md'>
            <img src="https://img.freepik.com/free-photo/facade-old-building-with-columns-new-york-stock-exchange_23-2148184273.jpg?w=740&t=st=1680712081~exp=1680712681~hmac=d1ec7fe767871ee300f9a8109ee2db9f399f78f02eea02fdfa74d6618698ec7e" className=' w-full h-full object-cover opacity-50 rounded-md' alt="" />
            </div>
        <div className="w-full max-w-md  p-8 space-y-3 rounded-xl mx-auto shadow-lg mt-10 border group">
        <h2  className='text-right font-bold text-xl'><span onClick={()=>setFormOpen(false)} className='cursor-pointer'>X</span></h2>
        <h2
            className=" items-center text-3xl mx-auto text-center py-4 "
            
          >
            <FaDraftingCompass className='inline'/>
            <span>dviser</span>
          </h2>
      <form className="space-y-6 ng-untouched ng-pristine ng-valid">
          
      <div className="space-y-1 text-sm">
              
      <div className="flex items-center bg-white rounded-full px-2">
                <VscAccount className="text-2xl"/>
			<input type="email" name="email" id="username" placeholder="Enter your email" className="w-full px-4 py-3 rounded-full bg-white text-gray-800  outline-none" />
            </div>
          </div>
          <div className="space-y-1 text-sm">
              
          <div className="flex items-center bg-white rounded-full px-2">
                <MdPassword className="text-xl" />
			<input type="password" name="password" id="password" placeholder="Enter your Password" className="w-full px-4 py-3 rounded-full bg-white text-gray-800  outline-none active:bg-white" />
            </div>
         
              <div className="flex justify-end text-xs text-gray-900">
                  {/* <p>{errorMessage}</p> */}
              </div>
          </div>
          {
            member
            ?
            <></>
            :
            <div className="flex items-center bg-white rounded-full px-2">
              <RiLockPasswordFill className="text-xl" />
			<input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" className="w-full px-4 py-3 rounded-full bg-white text-gray-800  outline-none active:bg-white" />
            </div>  
          }
          {
            member
            ?
            <button type='submit' className="block w-full p-3 text-center rounded-sm  bg-sky-600 text-white font-bold">Sign in</button>
            :
          <button type='submit' className="block w-full p-3 text-center rounded-sm  bg-sky-600 text-white font-bold">Sign up</button>
          }
      </form>
      <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm text-gray-900">Login with social accounts</p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
      </div>
      <div className="flex justify-center space-x-4">
          <button aria-label="Log in with Google" className="p-3 rounded-md text-white bg-red-600 flex">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current mr-2">
                  <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
              Log in with Google
          </button>
      </div>
      {
        member
        ?

      <p className="text-xs text-center sm:px-6 text-gray-900">Don't have an account?
          <span onClick={()=>setMember(false)} className="underline cursor-pointer text-blue-900">Sign up</span>
      </p>
      :
      <p className="text-xs text-center sm:px-6 text-gray-900">Already have account.
          <span onClick={()=>setMember(true)} className="underline cursor-pointer text-blue-900">Sign in</span>
      </p>
      }
  </div>
        </div>
          </div>
    );
};

export default Login;