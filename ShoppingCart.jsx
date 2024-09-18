import React, { useRef, useState } from 'react'

const ShoppingCart = () => {
  const bone = useRef(null) //+
  const btwo = useRef(null) //-
  const total = useRef(null)
  const[cartitem,setCartItem]=useState(0) // add and sub in cart

  const bonenew = useRef(null) //+
  const btwonew = useRef(null) //-
  const totalnew = useRef(null) 
  const[cart,setCart]=useState(0) 
  const[cartitemnew,setCartItemnew]=useState(0) // add and sub in cart
 
  function upgrade(){ //forCartUpgrade
    setCartItem(cartitem+1)
  }
  function degrade(){ //froCartDegrade
    setCartItem(cartitem-1)
  }

  function upgradenew(){ //forCartUpgrade
    setCartItemnew(cartitemnew+1)
  }
  function degradenew(){ //froCartDegrade
    setCartItemnew(cartitemnew-1)
  }

  function makevisible(){
    setCart(cart+1)
      bone.current.style.display="block"
      btwo.current.style.display="block"
      total.current.style.display="block"
  }
  function makevisiblenew(){
    setCart(cart+1)
    bonenew.current.style.display="block"
    btwonew.current.style.display="block"
    totalnew.current.style.display="block"
  }
  return (
    <div>
      
        <div className='flex items-center justify-around bg-blue-300 m-10'>
            <p className='text-center font-bold m-3 text-black text-2xl tracking-wider'>EAU DE PARFUM</p>
            <img src="https://clipground.com/images/animated-shopping-trolley-clipart.png" className='h-10 relative' alt="none" />
            <button className='absolute right-[360px] top-[35px]'>{cart}</button>
        </div>

        <div className='bg-purple-300 h-screen w-screen flex items-center justify-center gap-6'>
          <div className='h-[60vh] w-80 border-solid border-2 border-black'>
            <img src="https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/resize-w:540/1049424/NnPRYv-LLF-1049424_1.jpg" alt="none" />
            <p className='text-center font-bold m-3'>Vanilla Vibes Eau De Parfum</p>
            <div className='flex items-center justify-around'>
                <button className='hidden' ref={bone} onClick={upgrade}>+</button>
                <button onClick={makevisible} className='bg-red-600 rounded-full border-2 
                border-solid border-black font-bold text-white p-2'>Add to Cart</button>
                <button className='hidden' ref={btwo} onClick={degrade}>-</button>
            </div>
            <div className='m-3'>
                <p className='font-bold text-purple-600 bg-white p-2 text-center hidden' ref={total}>Item Added : {cartitem}</p>
            </div>
          </div>
          
          <div className='h-[60vh] w-80 border-solid border-2 border-black'>
            <img src="https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/resize-w:540/1049422/sBY8L6kNO-1049422_1.jpg" alt="none" />
            <p className='text-center font-bold m-3'>Orchid-You-Not Eau De Parfum </p>
            <div className='flex items-center justify-around'>
                <button className='hidden' ref={bonenew} onClick={upgradenew}>+</button>
                <button onClick={makevisiblenew} className='bg-red-600 rounded-full border-2 
                border-solid border-black font-bold text-white p-2'>Add to Cart</button>
                <button className='hidden' ref={btwonew} onClick={degradenew}>-</button>
            </div>
            <div className='m-3'>
                <p className='font-bold text-blue-900 bg-white p-2 text-center hidden' ref={totalnew}>Item Added : {cartitemnew}</p>
            </div>
          </div>

          {/* <div className='h-[60vh] w-80 border-solid border-2 border-black'>
            <img src="https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/resize-w:540/1134156/T8FCnFzfrP-1134156_1.jpg" alt="none" />
            <p className='text-center font-bold m-3'>Vanilla Eau De Parfum</p>
            <div className='flex items-center justify-around'>
                <button className='hidden' ref={bone} onClick={upgrade}>+</button>
                <button onClick={makevisible} className='bg-red-600 rounded-full border-2 
                border-solid border-black font-bold text-white p-2'>Add to Cart</button>
                <button className='hidden' ref={btwo} onClick={degrade}>-</button>
            </div>
            <div className='m-3'>
                <p className='font-bold text-amber-800 bg-white p-2 text-center hidden' ref={total}>Item Added : {cartitem}</p>
            </div>
          </div> */}


        </div>
    </div>
  )
}

export default ShoppingCart
