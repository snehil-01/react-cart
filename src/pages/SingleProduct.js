import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';

const SingleProduct = () => {

    const[product,setProduct]=useState({});
    const params=useParams();
    const history=useHistory();

    useEffect(()=>{
        fetch(`https://star-spark-pasta.glitch.me/api/products/${params._id}`)
        .then(response =>response.json())
        .then(data=>setProduct(data));
    },[])
    
  return (
    <div className='container mx-auto mt-12'>
      <button className='mb-12 font-bold' onClick={()=> history.goBack()}>Back</button>
      <div className='flex'>
        <img src='/images/peproni.png' alt='pizza'/>
        <div className='ml-16'>
            <h1 className="text-xl font-bold">{product.name}</h1>
            <div className="text-md">{product.size}</div>
            <div className="font-bold mt-2">₹{product.price}</div>
            <button className="bg-yellow-500 py-1 px-8 rounded-full font-bold mt-4">Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct
