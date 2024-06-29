import React from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
const Header = () => {
  const user=useSelector((store) =>store.user);
  const navigate=useNavigate();
    const handleSignOut=()=>{
        console.log("Button clicked");
        signOut(auth).then(() => {
            // Sign-out successful.

            console.log("Signed Out successFully")
            navigate("/");
          }).catch((error) => {
            // An error happened.
            console.log("ERRRORRRR")
            navigate("/error");
          });
    } 
  return (
    
    <div className="absolute w-screen px-44 bg-gradient-to-b from-black z-10 flex">
      <div>
      <img className="w-48" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" />
      </div>
      
      {user && (<div className="w-10/12 flex justify-end items-center  gap-2">
        <img src={user.photoURL} alt="heyyyyyy" className='w-10' />
        <button type="button" onClick={handleSignOut} className=" text-white m-1 p-2 bg-red-700 rounded-md text-lg hover:bg-red-800">Sign Out</button>
      </div>)}
    </div>



    
    
  )
}

export default Header
