import React from 'react';

const Comment = () => {
    return (
        <div className="container flex flex-col w-11/12 p-4 divide-y rounded-md divide-gray-300 bg-gray-50 text-gray-800">
        <div className="flex justify-between p-2">
            <div className="flex space-x-4">
                <div>
                    <img src='https://img.freepik.com/free-photo/facade-old-building-with-columns-new-york-stock-exchange_23-2148184273.jpg?w=740&t=st=1680712081~exp=1680712681~hmac=d1ec7fe767871ee300f9a8109ee2db9f399f78f02eea02fdfa74d6618698ec7e' alt="" className="object-cover w-12 h-12 rounded-full bg-gray-500" />
                </div>
                <div>
                    <h4 className="font-bold">Soliman</h4>
                    <span className="text-xs text-gray-600">10.10.23</span>
                </div>
            </div>
            
        </div>
        <div className="p-4 space-y-2 text-sm text-gray-600">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi illum sapiente quae tempore? Rem, maiores. Suscipit odit ab velit, nesciunt est quidem aliquid consequuntur reprehenderit aspernatur iusto? Incidunt, rem hic!</p>
            
        </div>
    </div>
    );
};

export default Comment;