import React, { useRef } from 'react'
import Header from './Header'
import { useState } from 'react'
import checkValidSignIn from '../utils/validateSignin'
import checkValidSignUp from '../utils/validateSignup'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../utils/userSlice'
const Login = () => {

  const [isSignInForm,setisSignInForm]=useState(true);
  const [errorMessage,seterrorMessage]=useState(null);
  const navigate=useNavigate();
  const dispatch=useDispatch();
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
  if(message){
    return ;
  }
  // sign in/ sign up
  if(!isSignInForm){
    // sign up logic
    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/145908456?v=4",
    }).then(() => {
      const {uid,email,displayName, photoURL} = auth.currentUser;
      dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
      navigate("/browse")
    }).catch((error) => {
      seterrorMessage(error.message);
    });
    console.log(user);
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorMessage(errorCode+ " " +errorMessage)
    
  });
  }
  else{
    // sign in logicn  
  signInWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      navigate("/browse")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      seterrorMessage(errorCode+" "+errorMessage)
    });
    }
    

  }
  return (
    <div>
      <Header/>
      <div className=' w-screen h-screen absolute bg-black lg:bg-transparent'>
        <img className='w-screen h-screen hidden lg:block' src="https://assets.nflxext.com/ffe/siteui/vlv3/335ddde7-3955-499c-b4cc-ca2eb7e1ae71/a7d20bc1-831c-4f9d-8153-11bdf7a08d23/IN-en-20240624-POP_SIGNUP_TWO_WEEKS-perspective_WEB_13cda806-d858-493e-b4aa-f2792ff965dc_large.jpg" alt="" />
      </div>
      <div className="absolute w-screen">
        <div className="card md:w-1/4 w-full mx-auto mt-28">
        <form onSubmit={(e)=>e.preventDefault()} className='flex flex-col justify-center gap-3 md:gap-4 bg-black bg-opacity-85 p-5 lg:p-10 text-white rounded-md'>
          <h1 className="md:font-medium px-2 sm:font-small">{isSignInForm? "Sign In" : "Sign Up"}</h1>
          {!isSignInForm && (<input type="text" ref={name} placeholder='Your Name' className='m-2 p-2 md:p-4 bg-white bg-opacity-5 border rounded-md' />)}

          <input type="text" ref={email} placeholder='Email or Mobile Number' className='m-2 p-2 md:p-4 bg-white bg-opacity-5 border rounded-md' />
          
          <input type="password" ref={password} placeholder='Password' className='m-2 p-2 md:p-4 bg-white bg-opacity-5  border rounded-md' /> 
          <p className='text-red-500 px-2'>{errorMessage}</p>
          <button className='m-1 p-2 md:p-3 bg-red-700 rounded-md text-lg hover:bg-red-800' onClick={handleButtonClick}>{isSignInForm? "Sign In" : "Sign Up"}</button>

          {isSignInForm &&(
            <>
            <h4 className='font-thin text-center'>OR</h4>
            <button className='m-1 p-2 md:p-3 bg-white bg-opacity-20 rounded-md text-lg hover:bg-opacity-25'>Use a sign-in code</button>
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