import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useState } from "react";
import NavBar from "./component/home/navbar/NavBar"
import Banner from "./component/home/navbar/Banner"
import Rating from "./component/home/navbar/Rating"
import Tools from "./component/home/navbar/Tools"
import Products from "./component/home/navbar/Products"
import Start from "./component/home/navbar/Start"
import Startcard from "./component/home/navbar/Startcard"
import {Suspense} from "react";
import Pricing from "./component/home/navbar/Pricing"
import Cart from "./component/home/navbar/Cart";
import './App.css'

const fetchProducts = async() =>{
  const res = await fetch("/data.json")
  return res.json();
}

function App() {
  const productsPromise = fetchProducts();
  const [activeSection, setActiveSection] = useState('products');
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === productId
            ? { ...item, quantity: newQuantity }
            : item
        )
      );
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartItemCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };



  return (
    <>
    <ToastContainer position="top-right" autoClose={3000} />
     <NavBar cartItemCount={getCartItemCount()}></NavBar>
     <Banner></Banner> 
     <Rating></Rating>
     <Tools setActiveSection={setActiveSection} 
        activeSection={activeSection}
        cartItemCount={getCartItemCount()}></Tools>

        {activeSection === 'products' ? (
        <Suspense fallback={<div>Loading products...</div>}>
          <Products 
            productsPromise={productsPromise} 
            addToCart={addToCart}
          />
        </Suspense>
      ) : (
        <Cart 
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
          clearCart={clearCart}
          total={getCartTotal()}
        />
      )}
   
    
     <Start></Start>
    <Startcard></Startcard>
    <Pricing></Pricing>

    </>
  )
}

export default App;
