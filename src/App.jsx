import NavBar from "./component/home/navbar/NavBar"
import Banner from "./component/home/navbar/Banner"
import Rating from "./component/home/navbar/Rating"
import Tools from "./component/home/navbar/Tools"
import Products from "./component/home/navbar/Products"
import Start from "./component/home/navbar/Start"
import Startcard from "./component/home/navbar/Startcard"
import {Suspense} from "react";
import Pricing from "./component/home/navbar/Pricing"
import './App.css'

const fetchProducts = async() =>{
  const res = await fetch("/data.json")
  return res.json();
}

function App() {
  const productsPromise = fetchProducts();

  return (
    <>
     <NavBar></NavBar>
     <Banner></Banner> 
     <Rating></Rating>
     <Tools></Tools>
    <Suspense fallback = {<span className="loading loading-dots loading-xl"></span>}>
       <Products productsPromise ={productsPromise} ></Products>
     </Suspense>
    
     <Start></Start>
    <Startcard></Startcard>
    <Pricing></Pricing>

    </>
  )
}

export default App
