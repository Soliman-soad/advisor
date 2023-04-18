import React from 'react';

const Contact = () => {
    return (
        <div>
      <section className="bg-slate-800/80 relative text-white  mt-5 flex flex-col mx-auto divide-y rounded-t-md divide-gray-700">
        <div className='absolute w-full h-full -z-10 opacity-40'>
            <img src="https://img.freepik.com/free-photo/facade-old-building-with-columns-new-york-stock-exchange_23-2148184273.jpg?w=740&t=st=1680712081~exp=1680712681~hmac=d1ec7fe767871ee300f9a8109ee2db9f399f78f02eea02fdfa74d6618698ec7e" alt=""  className='w-full h-full object-cover'/>
        </div>
	<div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x py-10">
		<div className="py-6 md:py-0 md:px-6">
			<h1 className="text-4xl font-bold">Get in touch
            <div className='w-2/12 ml-1 border-2 my-3 border-white'>

            </div>
            </h1>
			<p className="pt-2 pb-4">Fill in the form to start a conversation</p>
			<div className="space-y-4">
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
					</svg>
					<span>Sylhet, Bangladesh</span>
				</p>
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
					</svg>
					<span>01515275356</span>
				</p>
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
						<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
					</svg>
					<span>solimanalam1999@gmail.com</span>
				</p>
			</div>
		</div>
		<div  className="flex flex-col py-6 space-y-6 md:py-0 md:pl-6">
			<label className="block">
				<span className="mb-1">Full name</span>
				<input type="text" name='name' placeholder="name" className="block w-full rounded-md shadow-sm p-3" />
			</label>
			<label className="block">
				<span className="mb-1">Email address</span>
				<input type="email" name='email' placeholder="email" className="block w-full rounded-md shadow-sm  p-3" />
			</label>
			<label className="block">
				<span className="mb-1">Message</span>
				<textarea rows="3" name='message' className="block w-full rounded-md p-3 "></textarea>
			</label>
			<button  className="self-center px-8 py-3 font-medium tracking-wide hover:text-white text-gray-800 transition duration-200 rounded shadow-md bg-white hover:bg-slate-500 focus:shadow-outline focus:outline-none">Submit</button>
		</div>
        
	</div>
</section>      
        </div>
    );
};

export default Contact;