import React, { use } from 'react';

const Products = ({productsPromise}) => {
    console.log (productsPromise);
    const products = use(productsPromise);
    console.log (products);
    return (
        <div className=' container ms-auto grid grid-cols-3 gap-10'>
           {products.map(product => <div className='border-0 shadow-sm rounded-2xl'  >
            <div className='p-10'>
                <div className='relative'>
                 <button className='absolute -top-8 left-55 w-30 rounded-3xl p-2 border-0 bg-amber-100 text-amber-400 text-[15px]'> {product.tag} </button>
                </div>
                <div>
                    <div className='w-20 h-20 rounded-full border-0 shadow-sm p-5'> <img src={product.icon} alt="" /></div>   
                </div>
                <div className='space-y-4'>
                    <h3 className='text-2xl font-bold'>{product.name}</h3>
                    <p className='line-clamp-2 text-gray-400'> {product.description} </p>
                    <div className='flex'>
                        <h3 className='font-bold text-[25px]'>${product.price}</h3>
                        <p className='text-[20px] text-gray-400'>/{product.period} </p>
                    </div>
                    
                </div>
              <div className='text-gray-400 mt-2 space-y-1'>
                 <ul>
  {product.features.map((feature, index) => (
    <li key={index} className="flex items-center gap-2">
      <span>✓</span>
      <span>{feature}</span>
    </li>
  ))}
</ul>
</div>
<button className='w-70 p-4 mt-4 text-white bg-blue-700 rounded-3xl border-0'>Buy Now</button>
            </div>
           </div>)} 
        </div>
    );
};

export default Products;