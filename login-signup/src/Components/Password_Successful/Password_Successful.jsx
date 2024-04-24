import React from 'react'
import "./Password_Successful.css"
import { NavLink } from "react-router-dom";
import logo_icon from '../Assets/logo.png'
import { FaLock } from "react-icons/fa";
import { TbLockCheck } from "react-icons/tb";

function Password_Successful() {
  return (
      <div className='container5'>
        <form action="#" className="password_successful">
          <div className="logo_icon">
              <img src={logo_icon} alt="" className="logo" />
          </div>
          <div className="lock_icon">
          <TbLockCheck className='lock'/>
          </div>
          <h1>PASSWORD CHANGED SUCCESSFULLY !</h1>
          <div className="next">
              <button><NavLink to="/">Go To Login</NavLink></button>
          </div>
        </form>
    </div>
  )
}

export default Password_Successful
