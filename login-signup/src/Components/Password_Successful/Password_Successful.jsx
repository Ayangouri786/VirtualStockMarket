import React from 'react'
import "./Password_Successful.css"
import { Link } from "react-router-dom";
import logo_icon from '../Assets/logo.png'
import { FaLock } from "react-icons/fa";

function Password_Successful() {
  return (
    <div>
      <div className='container'>
        <div className="logo_icon">
            <img src={logo_icon} alt="" className="logo" />
        </div>
        <h1>PASSWORD CHANGED SUCCESSFULLY !</h1>
        
        <div className="next">
            <Link to="/">Go To Login</Link>
        </div>
    </div>
    </div>
  )
}

export default Password_Successful
