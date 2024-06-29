import React, { useRef } from 'react'
import Header from './Header'
import { useState } from 'react'
import checkValidSignIn from '../utils/validateSignin'
import checkValidSignUp from '../utils/validateSignup'
const Login = () => {

  const [isSignInForm,setisSignInForm]=useState(true);
  const [errorMessage,seterrorMessage]=useState(null);
  const email=useRef(null);
  const password=useRef(null);
  const name=useRef(null);
  const toggleSignInForm=()=>{
    setisSignInForm(!isSignInForm);
  }
  const handleButtonClick=()=>{
    // Validate the Form data
  let message=null;
  {isSignInForm? message=checkValidSignIn(email.current.value, password.current.value): message=checkValidSignUp(email.current.value, password.current.value,name.current.value) }
  seterrorMessage(message);
    
    // Sign In/ Sign Up

  }
  return (
    <div className='relative'>
      <Header/>
      <div className='absolute'>
        <img className='w-screen h-screen bg-black' src="https://assets.nflxext.com/ffe/siteui/vlv3/335ddde7-3955-499c-b4cc-ca2eb7e1ae71/a7d20bc1-831c-4f9d-8153-11bdf7a08d23/IN-en-20240624-POP_SIGNUP_TWO_WEEKS-perspective_WEB_13cda806-d858-493e-b4aa-f2792ff965dc_large.jpg" alt="" />
      </div>
      <div className="absolute w-screen">
        <div className="card w-1/4 mx-auto mt-40">
        <form onSubmit={(e)=>e.preventDefault()} className='flex flex-col justify-center gap-4 bg-black bg-opacity-85 p-10 text-white rounded-md'>
          <h1 className="font-medium px-2">{isSignInForm? "Sign In" : "Sign Up"}</h1>
          {!isSignInForm && (<input type="text" ref={name} placeholder='Your Name' className='m-2 p-4 bg-white bg-opacity-5 border rounded-md' />)}

          <input type="text" ref={email} placeholder='Email or Mobile Number' className='m-2 p-4 bg-white bg-opacity-5 border rounded-md' />
          
          {isSignInForm?<input type="password" ref={password} placeholder='Password' className='m-2 p-4 bg-white bg-opacity-5  border rounded-md' /> : <input type="password" ref={password} placeholder='Create a strong Password' className='m-2 p-4 bg-white bg-opacity-5  border rounded-md' /> }
          <p className='text-red-500 px-2'>{errorMessage}</p>
          <button className='m-1 p-3 bg-red-700 rounded-md text-lg hover:bg-red-800' onClick={handleButtonClick}>{isSignInForm? "Sign In" : "Sign Up"}</button>

          {isSignInForm &&(
            <>
            <h4 className='font-thin text-center'>OR</h4>
            <button className='m-1 p-3 bg-white bg-opacity-20 rounded-md text-lg hover:bg-opacity-25'>Use a sign-in code</button>
            <h4 className='font-thin text-center hover:underline cursor-pointer'>Forgot Password?</h4>
            </>
          )}

          <p className="cursor-pointer px-2 hover:underline" onClick={toggleSignInForm}>{isSignInForm? "New to Netflix? Sign up now." : "Already have an account? Sign in"}</p>
        </form>
        </div>
      </div>
      
    </div>
    
  )
}

export default Login