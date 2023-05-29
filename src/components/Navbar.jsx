import React from 'react'

const Navbar = () => {
  return (
    <>
        <div className='w-full'>
            <ul className='text-3xl flex gap-10 justify-center text-purple-500 hover:cursor-pointer'>
                <li>Home</li>
                <li>About us</li>
                <li>contact</li>
                <li>Help</li>
                <li>shop</li>
            </ul>
        </div>
    </>
  )
}

export default Navbar