import React from 'react';

const Rating = () => {
    return (
        
          <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-full h-32 my-15 ">
            <div className='text-white pt-10 mx-20  h-20 flex gap-40 justify-center items-center'>
            <div>
                <h2 className='text-3xl font-bold'>50K+</h2>
            <p>Active Users</p>
           
            </div>
              <div className="divider divider-horizontal divider-primary h-15 "></div>
             
            <div >
                <h2 className='text-3xl font-bold' >200+</h2>
                <p>Premium</p>     
            </div>
<div className="divider divider-horizontal divider-primary h-15"></div>

            <div>
                <h2 className='text-3xl font-bold'>4.9</h2>
                <p>Rating</p>
            </div>
            

             
            </div>
            
            </div>  
        
    );
};

export default Rating;