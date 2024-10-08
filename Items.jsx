import React from 'react'
import { HiOutlinePlusCircle } from "react-icons/hi";
import { HiOutlineMinusCircle } from "react-icons/hi";
import { ImBin } from "react-icons/im";

const Items = ({title,description,price,image}) => {
  return (
    <div>
       <div className='flex items-center justify-center'>
                    <div className='w-[70vw] h-[20vh] mt-6 flex justify-between items-center border-b-2 border-gray-400'>
                        <div>
                            <img src={image} className='h-32 w-32 m-3 rounded-xl hover:cursor-pointer' alt="" />
                        </div>
                        <div>
                            <p className='font-semibold tracking-wide'>{title}</p>
                            <p className='text-gray-500'>{description}</p>
                        </div>
                        <div className='flex items-center justify-center'>
                            <span className='hover:text-red-500 cursor-pointer font-extrabold'><HiOutlineMinusCircle /></span>
                            {/* <input type="number" placeholder='2' className='border-2 border-gray-300 p-2 w-10 text-center m-2' /> */}
                            <p className='border-2 border-gray-300 p-1 w-10 text-center m-2'>2</p>
                            <span className='hover:text-green-500  cursor-pointer font-extrabold '><HiOutlinePlusCircle /></span>
                        </div>
                        <div>
                            <p className='tracking-wider'>{price}</p>
                        </div>
                        <div>
                        <ImBin className='size-5 cursor-pointer hover:text-red-600' />
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default Items
