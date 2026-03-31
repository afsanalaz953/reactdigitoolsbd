import React from 'react';

const NavBar = () => {
    return (
        <div className="navbar ms-auto bg-base-100 shadow-blue-400 container px-20 flex gap-40 justify-center items-center ">
            <div className="">
    <img src="/src/assets/products/DigiTools (2).png" alt="" className='w-40' />
  </div>
 <ul className='flex gap-4 justify-center items-center'>
        <li>Products</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Testimonials</li>
        <li>FAQ</li>
    </ul>
  
  <div className="navbar-end gap-2">
    <img src="/src/assets/products/shopping-cart.png" alt="" />
    <button className='btn-neutral border-2 px-1'>login</button>
    <a className="btn rounded-full bg-blue-500">Get Started</a>
  </div>
</div>
         
           
        
    );
};

export default NavBar;