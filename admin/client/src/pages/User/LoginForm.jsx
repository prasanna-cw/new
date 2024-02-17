import React, {useState} from 'react'
import './LoginForm.css'
import { FaUserCheck } from "react-icons/fa";
import { TbPasswordFingerprint } from "react-icons/tb";
import { MdOutgoingMail } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { TfiMicrosoft } from "react-icons/tfi";


const LoginForm = () => {

  const [action, setAction] = useState("Sign Up")
  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action==="Login"?<div></div>:<div className="input">
        <FaUserCheck />
        <input type='text' placeholder='Username' />
        </div>}
        
        <div className="input">
            <MdOutgoingMail />
            <input type='email' placeholder='UserID/EmailID' />
        </div>
        <div className="input">
            <TbPasswordFingerprint />
            <input type='password' placeholder='Password' />
        </div>
      </div>
      {action==="Sign Up"?<div></div>:<div className="forget-password">Forget Password.? <span>Click Here.!</span></div>}
      
      <div className="submit-container">
        <div className={action==="Login"?"sumbit gray":"submit"} onClick={() =>{setAction("Sign Up")}}>Sign Up</div>
        <div className={action==="Sign Up"?"submit gray":"submit"} onClick={() =>{setAction("Login")}}>Login</div>
      </div>
      <div className="g-button">
      <FcGoogle /> Continue with Google
      </div>
      <div className="ms-button">
      <TfiMicrosoft /> Continue with MicroSoft
      </div>
    </div>
  )
}

export default LoginForm