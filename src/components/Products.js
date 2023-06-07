import React, { useContext, useEffect, useState } from 'react'
import Product from './Product'
import {cartContext} from '../CartContext'

const Products = () => {

  const[products,setProducts]=useState([]);
  
  useEffect(()=>{
    fetch('https://star-spark-pasta.glitch.me/api/products')
    .then((response) => {
      return response.json();
    } )
  .then(data => setProducts(data));
  },[])
  
  
  const {cart,setCart}= useContext(cartContext);
  return (
    <div className='container mx-auto pb-24'>
      <h1 className="text-lg font-bold my-8">Products</h1>
      <div className="grid grid-cols-5 my-8 gap-24">
        {
          products.map(product => <Product key={product._id} product={product} />)
        }
      </div>
    </div>
  )
}

export default Products
