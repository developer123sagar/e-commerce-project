import React from 'react'
import { BsCartPlus } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const CartEmpty = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full gap-5 mt-5 font-roboto'>
        <BsCartPlus color='blue' size={100} />
        <p className='font-bold text-2xl'>Hey, it feels so light !!</p> 
        <p>There is nothing in your cart, Let's add some items</p>
        <Link to="/">
            <button className='text-white px-20 py-3 rounded bg-lime-600 hover:bg-sky-400 hover:text-black hover:font-bold hover:rounded-xl transition-all'>Add Items</button>
        </Link>
    </div>
  )
}

export default CartEmpty