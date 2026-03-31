import React from 'react';

const Tools = () => {
    return (
        <div className='container flex flex-col justify-center items-center space-y-4 m-15'>
          <h2 className='text-3xl font-bold'>Premium Digital Tools</h2>
          <p className='text-gray-400'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
          <div className='border-0 rounded-full flex gap-4  shadow-sm p-2'>
            <button className="btn btn-primary rounded-full px-6 ">Products</button>
          <button className="btn rounded-full bg-gray-50">Cart(0)</button> 
          </div>
         
        </div>
    );
};

export default Tools;