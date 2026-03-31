import React, { use } from 'react';

const Products = ({productsPromise}) => {
    console.log (productsPromise);
    const products = use(productsPromise);
    console.log (products);
    return (
        <div className=' container ms-auto grid grid-cols-3 gap-10'>
           {products.map(product => <div className='border-2'  >
            <div>
                <div className='flex justify-between gap-10'>
                    <img src={product.icon} alt="" />
                    <button className='w-10 rounded-2 border-0 bg-amber-100'> {product.tag} </button>
                </div>
                <div>
                    <h3 className='text-2xl font-bold'>{product.name}</h3>
                    <p className='line-clamp-2'> {product.description} </p>
                    <h3>{product.price}/{product.period} </h3>
                </div>
               <div>{product.features} </div>
               <button></button>
            </div>
           </div>)} 
        </div>
    );
};

export default Products;