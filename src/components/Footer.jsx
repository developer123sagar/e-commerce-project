import React from 'react';
import logo from '../img/logo.jpeg';
import { BsTelephone, BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import { HiOutlineEnvelope } from 'react-icons/hi2';

const Footer = () => {
  return (
    <>
      <>
        <footer className='bg-gray-200 '>
          <div className=' pt-3'>
            <div className='max-w-9xl mx-auto'>

              <div className='box-content w-full grid grid-auto-fit-lg bg-primary-700 mix-blend-multiply'>
                <img src={logo} alt="logo" className='w-[400px] h-[250px] object-cover ' />

                <span className=' grid flex-wrap pt-5'>
                  <p className='text-white text-5xl pl-5'>Furnishing Is What We Do</p>
                  <form className='flex flex-wrap gap-2 px-5 py-3'>
                    <input id="email" className='text-black h-12 rounded-lg w-60' type="email" placeholder='Enter your email:' required />
                    <button type="button" className='bg-secondary-400 hover:bg-yellow-400 w-24 h-12 rounded-lg '>Get Started</button>
                  </form>
                </span>
              </div>
            </div>

            <div className='grid grid-auto-fit-sm px-5 pt-5'>
              <div className=' mb-5 '>
                <h4 className=' text-emerald-800 mb-3 text-2xl'><strong>Support</strong></h4>
                <ul>
                  <li className='pb-3 text-lg'><a href="#" className=" hover:underline">Live chat</a></li>
                  <li className='pb-3 text-lg'><a href="#" className=" hover:underline">Terms of use</a></li>
                  <li className='pb-3 text-lg'><a href="#" className=" hover:underline">Policy&security</a></li>



                </ul>
              </div>
              <div className=' mb-5 '>
                <h5 className='text-emerald-800 mb-3 text-2xl'><strong>Orders&Returns</strong></h5>
                <ul>
                  <li className='pb-3 text-lg'><a href="#" className=" hover:underline">Order status</a></li>
                  <li className='pb-3 text-lg'><a href="#" className=" hover:underline">Shipping info</a></li>
                  <li className='pb-3 text-lg'><a href="#" className=" hover:underline">Return policy</a></li>
                </ul>
              </div>
              <div className=' mb-5 '>
                <h6 className='text-emerald-800 mb-3 text-2xl'><strong>About us</strong></h6>
                <ul>
                  <li className='pb-3 text-lg'><a href="#" className=" hover:underline">References</a></li>
                  <li className='pb-3 text-lg'><a href="#" className=" hover:underline">Services</a></li>
                  <li className='pb-3 text-lg'><a href="#" className=" hover:underline">Team</a></li>
                </ul>
              </div>
              <div className='mb-5' >
                <div className='flex items-center  text-lg pb-3 hover:underline gap-x-3'>
                  <BsTelephone size='30' /> +977 156 4567 876

                </div>

                <div className='flex items-center  text-lg  hover:underline pb-3 gap-x-3'>
                  <HiOutlineEnvelope size='30' />info@gmail.com

                </div>
                <div className='flex flex-cols-3 pb-3 text-lg gap-x-3'>
                  Follow us on:<BsFacebook size='30' color='blue' /><BsInstagram size='30' color='#E4405F' /><BsTwitter size='30' color='#1DA1F2' />
                </div>
              </div>


            </div>
            <div className='border-t-[1px] border-yellow-600 w-[90%] mx-auto py-5'>
              <span className='grid grid-auto-fit pt-4 text-lg'>
                <p className='pr-4'>Eclectica   <span class='px-3 border-l-[1px] border-yellow-400'>&copy; 2020 Eclectica</span></p>
                <div class='flex grid-auto-fit-md space-x-6'>
                  <ul><a href="#" className='pr-5 hover:underline'>Policy</a></ul>
                  <ul><a href="#" className='pr-5 hover:underline'>Cookies</a></ul>
                  <ul><a href="#" className='pr-5 hover:underline'>Terms and Conditions</a></ul>
                </div>
              </span>


            </div>
          </div>
        </footer>
      </>
    </>
  )
}

export default Footer;
