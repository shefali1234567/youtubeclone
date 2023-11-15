import React, { useRef, useState } from 'react'
import checkValidation from '../utils/Validation';
import Header from  "./Header"

const Login = () => {

  const [login,setLogin]=useState(true);
  const [error,setError]=useState("");
  const name=useRef(null);
  const email=useRef(null);
  const password=useRef(null);


  const handleClick=()=>{
    setLogin(!login)
  }
  const handleButtonClick=()=>{
   if(!login)
   setError(checkValidation(login,name.current.value,email.current.value,password.current.value));
   setError(checkValidation("","",email.current.value,password.current.value));

  }
  return (
    <div  className="loginForm">
      <Header/>
      <div className="backgroundImage">
        <img  className="w-20" src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_small.jpg"  alt="background_image"/>
      </div>
        <form onSubmit={(e)=>e.preventDefault()} className='loginDetails'>
          <h1>{login?"Sign In":"Sign Up"}</h1>
          {!login &&  <input ref={name} type="text" placeholder='Full Name' />}
          <input ref={email} type="text" placeholder='Email or phone number' />
          <input  ref={password} type="password" placeholder='Password' />
          <p>{error}</p>
          <button onClick={handleButtonClick}>{login?"Sign In":"Sign Up"}</button>
          <p onClick={handleClick}>New to Netflix? Sign up now.</p>
          {/* <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</p> */}

                 </form>
    </div>

  )
}

export default Login