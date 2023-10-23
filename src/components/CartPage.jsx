import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeProduct } from '../features/cart/ProductSlice';
// import { remove } from '../Redux/Cartslice';


const CartPage = () => {
    const dispatch =useDispatch();
    const cartitems = useSelector((state)=>state.cart)
   
  return (
    <div>
        <h3>Cart Page</h3>
    <div className='cartWrapper'>
        {cartitems.map((item)=>(
            <div className='cartCard'>
            <img src={item.image} alt="img"/>
            <h5>{item.title}</h5>
            <h5>{item.price}</h5>
            <button className='btn' onClick={()=>dispatch(removeProduct(item.id))} >Remove</button>
            </div>
        ))}
    </div>
    </div>
  )
}

export default CartPage