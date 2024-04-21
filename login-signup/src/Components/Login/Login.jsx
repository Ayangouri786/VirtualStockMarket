import React, { useState } from 'react'
import './Login.css'
import { Link } from "react-router-dom";

import logo_icon from '../Assets/logo.png'

import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";


const Login = () => {
  return (
      <div className="container">
        <div className="form-box login">
        <form action="#" className='LoginForm'> 
        <div className="logo_icon">
            <img src={logo_icon} alt="logo" className='logo' />
          </div>
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder='USERNAME' required/>
            <FaUser className='icon'/>
          </div>
          <div className="input-box">
            <input type="password" placeholder='PASSWORD' required/>
            <FaLock className='icon' />
          </div>

          <div className="remember-forgot">
            <label htmlFor=""><input type="checkbox" />Remember me</label>
            <Link to="/Forgot_Password">Forgot password?</Link>
          </div>

          <button type='submit' className='login-btn'><a href="#">Login</a></button>

          <div className="register-link">
            <p>Don't have an account? <Link to="/Register">Register</Link> </p>
          </div>
        </form>
        </div>
      </div>     
  )
}

export default Login
