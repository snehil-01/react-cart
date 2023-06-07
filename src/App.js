import React, { useEffect, useState } from 'react'
import {Route} from 'react-router-dom'
import Navigation from './components/Navigation'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Products from './components/Products'
import SingleProduct from './pages/SingleProduct'
import {cartContext} from './CartContext'

const App = () => {

  const[cart,setCart]=useState({});

  useEffect(()=>{
   const cart=JSON.parse(window.localStorage.getItem('cart'));
   setCart(cart);
  },[])
  
  useEffect(()=>{
    window.localStorage.setItem('cart',JSON.stringify(cart));
  },[cart])
  
    return (
    <> <cartContext.Provider value={{cart,setCart}}> 
        <Navigation/>
         <Route path='/' component={Home} exact/>
         <Route path='/products' component={Products} exact/>
         <Route path='/products/:_id' component={SingleProduct} exact/>
         <Route path='/cart' component={Cart} />
        </cartContext.Provider>
    </>
  )
}

export default App
