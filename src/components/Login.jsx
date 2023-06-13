import React, { useState } from 'react'
import lg from '../assets/lg.jpg';
import './Register';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }
  return (
    <>
    <div className='w-full h-screen flex'>
      <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[500px] shadow-lg shadow-gray-600 sm:max-w-900px'>
        <div className='w-full h-[500px] hidden md:block'>
            <img className='w-full h-full object-cover' src={lg} alt="Image loading" />
        </div>
        <div className='p-4 flex flex-col justify-around'>
        <form> 
        <h2 className='text-4xl font-bold text-center mb-8'>Eclectica</h2>
       <div>
       <input className='border p-2  mr-2 w-full' type="email" placeholder='Youremail@gmail.com' autocomplete="off" name="email" id="email" />
        <input className='border p-2 mt-5 mr-2 w-full' type="password" placeholder='Password' name="password" id="password" />
       </div>
       <button className='w-full py-2 my-2 bg-primary-700 mix-blend-multiply hover:bg-green-700 text-white'>Sign In</button>
       <p className='text-center'>Forget password or username?</p>
      
      </form>
      <a href="./Register.jsx">sign up</a>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login
