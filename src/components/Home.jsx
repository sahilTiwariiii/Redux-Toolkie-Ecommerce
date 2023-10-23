import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../features/cart/ProductSlice'

const Home = () => {
    const [products, setProducts] = useState([])
    const dispatch=useDispatch()
    useEffect(() => {
        const fetchApi=async()=>{
            const api= await fetch('https://fakestoreapi.com/products');
            const data =await api.json();
            setProducts(data)
            
        }
        fetchApi()

    }, [])
    
  return (
    <div className='productsWrapper'>
    {
     products.map((product)=>(
          <div className='card' key={product.id}>
             <img src={product.image} alt='img'/>
             <h4>{product.title}</h4>
             <h5>{product.price}</h5>
<button className="btn" onClick={()=>dispatch(addProduct(product))}>Add to Cart</button>
          </div>
     ))
    }
 </div>
  )
}

export default Home