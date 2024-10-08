import React , { createContext } from 'react'
import ContextCart from './ContextCart.jsx';
import {Product} from './Product.jsx'

//create a Context
export const CartContext = createContext();

const Cart = () => {
  return (
    <>
    <CartContext.Provider value={Product}>
      <ContextCart/>
    </CartContext.Provider>  
    </>
  )
}

export default Cart
