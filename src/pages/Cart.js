import { getSpaceUntilMaxLength } from '@testing-library/user-event/dist/utils';
import React, { useContext, useEffect, useState } from 'react'
import {cartContext} from '../CartContext'

const Cart = () => {
  
  const {cart,setCart}=useContext(cartContext);
  
  const[products,setProducts]=useState([]);
  
  useEffect(()=>{
    
    if(!cart.items){
      return;
    }

    fetch('https://star-spark-pasta.glitch.me/api/products/cart-items',{
      method: 'POST',
      body: JSON.stringify({'ids': Object.keys(cart.items)}),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(data => setProducts(data));
  },[cart]);

  
  const getQty =(productId)=>{
    return cart.items[productId];
  }

  const increment =(productId)=>{
    const currQty=cart.items[productId];
    const _cart={...cart};
    _cart.items[productId]=currQty+1;
    _cart.totalItems+=1;
    setCart(_cart);
    return;
  }
  const decrement =(productId)=>{
    const currQty=cart.items[productId];
    if(currQty===1) return;
    const _cart={...cart};
    _cart.items[productId]=currQty-1;
    _cart.totalItems-=1;
    setCart(_cart);
    return;
  }
  const getSum =(product,productId)=>{
    return product.price*cart.items[productId];
  }
  let total=0;
  return (
    products.length  ?
    <div className="container mx-auto lg:w-1/2 w-full pb-24">
            <h1 className="my-12 font-bold">Cart items</h1>
            <ul>
                {
                    products.map(product => {
                      total+=product.price*cart.items[product._id];
                        return (
                            <li className="mb-12" key={product._id}>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <img className="h-16" src={product.image} alt="" />
                                    <span className="font-bold ml-4 w-48">{ product.name }</span>
                                </div>
                                <div>
                                    <button onClick={()=>{decrement(product._id)}} className="bg-yellow-500 px-4 py-2 rounded-full leading-none">-</button>
                                   <b className="px-4">{ getQty(product._id) }</b>
                                   <button onClick={()=>{increment(product._id)}} className="bg-yellow-500 px-4 py-2 rounded-full leading-none">+</button> 
                                </div>
                                <span>₹ { getSum(product,product._id) }</span>
                                <button className="bg-red-500 px-4 py-2 rounded-full leading-none text-white">Delete</button>
                            </div>
                        </li>
                        )
                    })
                }
            </ul>
            <hr className="my-6"/>
            <div className="text-right">
                <b>Grand Total:</b> ₹ { total }
            </div>
            <div className="text-right mt-6">
                <button  className="bg-yellow-500 px-4 py-2 rounded-full leading-none">Order Now</button>
            </div>
        </div>
              :
        <img className='mx-auto w-1/2 mt-12' src='/images/empty-cart.png' alt='bruhhh'/>             
  )
}

export default Cart
