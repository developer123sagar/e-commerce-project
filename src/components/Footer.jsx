import React from 'react';
import logo from '../img/logo.jpeg';
import { BsTelephone, BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import { HiOutlineEnvelope } from 'react-icons/hi2';

const Footer = () => {
  return (
    <>
      <>
        <footer class='bg-gray-100'>
          <div className=' pt-3 h-screen '>
            <div className='max-w-9xl mx-auto'>

              <div class='box-content w-full grid grid-auto-fit-lg bg-primary-700 mix-blend-multiply'>
                <img src={logo} alt="logo" class='w-[400px] h-[250px] object-cover ' />

                <span className=' grid flex-wrap pt-5'>
                  <p class='text-white text-4xl md:ml-0 '>Furnishing Is What We Do</p>
                  <form class='flex flex-wrap gap-2'>
                    <input id="email" class='text-black h-10 rounded-lg' type="email" placeholder='Enter your email:' required />
                    <button type="button" class='bg-yellow-500 hover:bg-yellow-400 w-24 h-10 rounded-lg '>Get Started</button>
                  </form>
                </span>
              </div>
            </div>

            <div class='grid grid-auto-fit-sm px-5 pt-5'>
              <div class=' mb-5 '>
                <h4 className=' text-emerald-800 mb-3 text-2xl'><strong>Support</strong></h4>
                <ul>
                  <li class='pb-3 text-lg'> <a href="#" class=" hover:underline ">Customer service</a></li>
                  <li class='pb-3 text-lg'><a href="#" class=" hover:underline">Live chat</a></li>
                  <li class='pb-3 text-lg'><a href="#" class=" hover:underline">Terms of use</a></li>
                  <li class='pb-3 text-lg'><a href="#" class=" hover:underline">Policy&security</a></li>



                </ul>
              </div>
              <div class=' mb-5 '>
                <h5 class='text-emerald-800 mb-3 text-2xl'><strong>Orders&Returns</strong></h5>
                <ul>
                  <li class='pb-3 text-lg'><a href="#" class=" hover:underline">Order status</a></li>
                  <li class='pb-3 text-lg'><a href="#" class=" hover:underline">Shipping info</a></li>
                  <li class='pb-3 text-lg'><a href="#" class=" hover:underline">Return policy</a></li>
                </ul>
              </div>
              <div class=' mb-5 '>
                <h6 class='text-emerald-800 mb-3 text-2xl'><strong>About us</strong></h6>
                <ul>
                  <li class='pb-3 text-lg'><a href="#" class=" hover:underline">References</a></li>
                  <li class='pb-3 text-lg'><a href="#" class=" hover:underline">Services</a></li>
                  <li class='pb-3 text-lg'><a href="#" class=" hover:underline">Team</a></li>
                </ul>
              </div>
              <div class='  mb-5' >
                <div class='flex items-center  text-lg pb-3 hover:underline gap-x-3'>
                  <BsTelephone size='30' /> +977 156 4567 876

                </div>

                <div class='flex items-center  text-lg  hover:underline pb-3 gap-x-3'>
                  <HiOutlineEnvelope size='30' />info@gmail.com

                </div>
                <div class='flex flex-cols-3 pb-3 text-lg gap-x-3'>
                  Follow us on:<BsFacebook size='30' color='blue' /><BsInstagram size='30' color='#E4405F' /><BsTwitter size='30' color='#1DA1F2' />
                </div>
              </div>


            </div>
            <div class='border-t-[1px] border-yellow-600 w-[90%] mx-auto pt-5'>
              <span class='grid  grid-auto-fit pt-4 text-lg'>
                <p class='pr-4'>Eclectica   <span class='px-3 border-l-[1px] border-yellow-400'>&copy; 2020 Eclectica</span></p>
                <div class='flex flex-wrap space-x-14'>
                  <ul><a href="#" class='pr-5 hover:underline'>Policy</a></ul>
                  <ul><a href="#" class='pr-5 hover:underline'>Cookies</a></ul>
                  <ul><a href="#" class='pr-5 hover:underline'>Terms and Conditions</a></ul>
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
