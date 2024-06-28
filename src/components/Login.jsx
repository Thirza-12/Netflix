import React from 'react'
import Header from './Header'
import { useState } from 'react'
const Login = () => {

  const [isSignInForm,setisSignInForm]=useState(true);
  const toggleSignInForm=()=>{
    setisSignInForm(!isSignInForm);
  }
  return (
    <div className='relative'>
      <Header/>
      <div className='absolute'>
        <img className='w-screen h-screen bg-black' src="https://assets.nflxext.com/ffe/siteui/vlv3/335ddde7-3955-499c-b4cc-ca2eb7e1ae71/a7d20bc1-831c-4f9d-8153-11bdf7a08d23/IN-en-20240624-POP_SIGNUP_TWO_WEEKS-perspective_WEB_13cda806-d858-493e-b4aa-f2792ff965dc_large.jpg" alt="" />
      </div>
      <div className="absolute w-screen">
        <div className="card w-1/4 mx-auto mt-40">
        <form action="" className='flex flex-col justify-center gap-4 bg-black bg-opacity-80 p-10 text-white rounded-md'>
          <h1 className="font-medium">{isSignInForm? "Sign In" : "Sign Up"}</h1>
          {!isSignInForm && (<input type="text" name="" id="" placeholder='Your Name' className='m-2 p-4 bg-white bg-opacity-5 border rounded-md' />)}

          <input type="text" name="" id="" placeholder='Email or Mobile Number' className='m-2 p-4 bg-white bg-opacity-5 border rounded-md' />
          
          {isSignInForm?<input type="password" name="" id="" placeholder='Password' className='m-2 p-4 bg-white bg-opacity-5  border rounded-md' /> : <input type="password" name="" id="" placeholder='Create a strong Password' className='m-2 p-4 bg-white bg-opacity-5  border rounded-md' /> }

          <button className='m-1 p-3 bg-red-700 rounded-md text-lg'>{isSignInForm? "Sign In" : "Sign Up"}</button>

          {isSignInForm &&(
            <>
            <h4 className='font-thin text-center'>OR</h4>
            <button className='m-1 p-3 bg-white bg-opacity-30 rounded-md text-lg'>Use a sign-in code</button>
            <h4 className='font-thin text-center hover:underline cursor-pointer'>Forgot Password?</h4>
            </>
          )}

          <p className="cursor-pointer hover:underline" onClick={toggleSignInForm}>{isSignInForm? "New to Netflix? Sign up now." : "Already have an account? Sign in"}</p>
        </form>
        </div>
      </div>
      
    </div>
    
  )
}

export default Login