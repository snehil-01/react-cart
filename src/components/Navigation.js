import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {cartContext} from '../CartContext'
const Navigation = () => {
  
  const cartStyle={
    backgroundColor: '#F59E0D',
    display: 'flex',
    padding : '6x 12px',
    borderRadius: '50px'
  }

  const {cart}=useContext(cartContext);
  return (
    <>
        <nav className='container mx-auto flex items-center justify-between py-4'>
          
            <Link to='/'>
              <img  style={{height : 45}} src='/images/logo.png' alt='pizza-icon'/>
            </Link>
            <ul className='flex items-center'>
              <li><Link to='/'>Home</Link></li>
              <li className='ml-6'><Link to='/products'>Products</Link></li>
              <li className='ml-6'>
                <Link to='/cart'>
                  <div style={cartStyle}>
                    <span className='w-2 text-balck'>{cart.totalItems ? cart.totalItems : 0}</span>
                    <img  className='ml-2' src='/images/cart.png' alt='cart-icon'/>
                  </div>
                </Link>
              </li>
            </ul>
        </nav>
    </>
  )
}

export default Navigation
