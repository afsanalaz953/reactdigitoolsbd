import React from 'react';

const Startcard = () => {
    return (
        <div className='grid grid-cols-3 gap-4 mx-40 my-10 bg-base-200'>
            <div className=''>
                <div className="card bg-white shadow-sm rounded-2xl border-0">
  <div className="card-body">
    <div className="card-actions justify-end">
      <button className="btn btn-circle bg-blue-700 btn-sm text-white">
        01
      </button>
    </div>
    <div className='flex flex-col justify-center items-center space-y-2'>
        <div className='w-15 h-15 rounded-full bg-purple-200'>
            <img src="/src/assets/products/user.png" alt="" className='w-15 p-2 text-center' />
        </div>
        
         <h3>Create Account</h3>
    <p className='line-clamp-2 text-center'>Sign up for free in seconds. No credit card <br />required to get started.</p>
    </div>  
  </div>
</div>
            </div>
            {/* card-2 */}
                    <div>
                <div className="card bg-base-100 shadow-sm rounded-2xl border-0">
  <div className="card-body">
    <div className="card-actions justify-end">
      <button className="btn btn-circle bg-blue-700 btn-sm text-white">
        02
      </button>
    </div>
    <div className='flex flex-col justify-center items-center space-y-2'>
        <div className='w-15 h-15 rounded-full bg-purple-200'>
            <img src="/src/assets/products/package.png" alt="" className='w-15 p-2 items-center' />
        </div>
        
         <h3>Choose Products</h3>
    <p className='line-clamp-2 text-center'>Browse our catalog and select the tools <br />that fit your needs.</p>
    </div>  
  </div>
</div>
            </div>
            {/* card-3 */}
                    <div>
                <div className="card bg-base-100 shadow-sm rounded-2xl border-0">
  <div className="card-body">
    <div className="card-actions justify-end">
      <button className="btn btn-circle bg-blue-700 btn-sm text-white">
        03
      </button>
    </div>
    <div className='flex flex-col justify-center items-center space-y-2'>
        <div className='w-15 h-15 rounded-full bg-purple-200'>
            <img src="/src/assets/products/rocket.png" alt="" className='w-15 p-2 text-center' />
        </div>
        
         <h3>Start Creating</h3>
    <p className='line-clamp-2 text-center'>Download and start using your premium <br /> tools immediately.</p>
    </div>  
  </div>
</div>
            </div>
        </div>
    );
};

export default Startcard;