import React from 'react';

const Banner = () => {
    return (
        <div className='flex container mt-10 ms-auto justify-items-center gap-0'>
            <div className='space-y-6 m-20'>
                <div className="badge badge-xl bg-blue-50 text-blue-500 text-sm rounded-full"> 
                   <div className='w-5 h-5 rounded-full bg-blue-600'>
                    </div> 
                    New: AI-Powered Tools Available</div>
                <button></button>
                <h1 className='text-4xl font-bold'>Supercharge Your <br />Digital Workflow</h1>
                <p className='line-clamp-3'>Access premium AI tools, design assets, templates, and productivity <br />
software—all in one place. Start creating faster today.
Explore Products


</p>
                <div className='flex gap-1'>
                    <button className="btn btn-primary rounded-full">Explore Products</button>
                    <button className="btn text-blue-500 btn-outline rounded-full"> <img src="/src/assets/products/Play.png" alt="" />Watch Demo</button>   
                </div>
            </div>
            <div className='w-125 h-147.5'>
                <img src="/src/assets/products/banner.png" alt="" />
                </div>
        </div>
    );
};

export default Banner;