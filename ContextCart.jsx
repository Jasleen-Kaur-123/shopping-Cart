import React,{  useContext } from 'react'
import { FaLongArrowAltLeft } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import Items from '../NewComponent/Items.jsx'
import CartContext from './Cart.jsx'
const ContextCart = () => {
    const item = useContext(CartContext)
    console.log(item)
  return (
    <div>
        <div className='w-[90vw] block m-auto'>
      <header className='flex justify-between items-center border-b-2 border-gray-400 m-8 p-4'>
        <div className='flex items-center gap-1' >
            <div>
                <FaLongArrowAltLeft className='w-10 h-6 hover:text-yellow-400 cursor-pointer'/> 
            </div>
            <div>
                <p className='font-medium text-xl hover:text-yellow-400 cursor-pointer'>Continue Shopping</p>
            </div>
        </div>
        <div>
            <BsCart4 className='w-10 h-6 hover:text-yellow-400 cursor-pointer absolute'/>
            <p className='bg-sky-300 rounded-full text-center w-6 relative -top-5 -right-5 hover:bg-yellow-400 cursor-pointer hover:font-semibold'>3</p>
        </div>
      </header>

      <section className='m-8'>
        <p className='text-xl tracking-wide font-medium mb-1'>Shopping Cart</p>
        <p>You have <span>4</span> items in shopping Cart</p>

        <div className='h-[80vh] bg-gradient-to-r from-cyan-100 to-sky-50 m-7 hover:bg-gradient-to-l 
        hover:from-sky-100 hover:to-cyan-50 rounded-3xl shadow-lg shadow-yellow-100 overflow-auto'>
           {item.map((e)=>{
            return <Items key = {e.id} {...e}/>
           })}
            {/* {
                item.map((e)=>{
                    return(
                        <Items key={e.id} {...e}/>
                    )
                })
            } */}
        </div>

        <div className='text-end p-6'>
            <p className='text-gray-600 m-1 text-xl'>Cart Total : <span className='text-black'>Rs.22000</span></p>
            <button className=' p-2 rounded-lg uppercase bg-sky-500 text-white tracking-wide font-semibold
            hover:shadow-lg hover:shadow-yellow-200 hover:bg-yellow-300 hover:text-black'>Checkout</button>
        </div>
      </section>
      
    </div>
    </div>
  )
}

export default ContextCart
