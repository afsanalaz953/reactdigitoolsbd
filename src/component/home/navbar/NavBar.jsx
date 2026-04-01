import React from 'react';

const NavBar = ({ cartItemCount }) => {
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
  
  <div className="navbar-end gap-2 relative">
    <div className="relative">
      <img src="/src/assets/products/shopping-cart.png" alt="" />
      {cartItemCount > 0 && (
      <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
        {cartItemCount}
      </span>
    )}
    </div>
    <button className='btn-neutral border-2 px-1'>login</button>
    <a className="btn rounded-full bg-blue-400">Get Started</a>
  </div>
</div>
         
           
        
    );
};

export default NavBar;