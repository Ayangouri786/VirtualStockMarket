import React from 'react'
import './Register.css'

import logo_icon from '../Assets/logo.png'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Register = () => {
  return (
    <div className='container'>
      <form action="#" class='RegisterForm'> 
        <div className="logo_icon">
            <img src={logo_icon} alt="logo" className='logo' />
          </div>
          <h1>Register</h1>
          <div className="input-box">
            <input type="text" placeholder='NAME' required/>
            <FaUser className='icon'/>
          </div>
          <div className="input-box">
            <input type="text" placeholder='USERNAME' required/>
            <FaUser className='icon'/>
          </div>
          <div className="input-box">
            <input type="email" placeholder='Email' required/>
            <MdEmail className='icon'/>
          </div>
          <div className="input-box">
            <input type="number" placeholder='PHONE NO' required/>
            <FaPhoneAlt className='icon'/>
          </div>
          <div className="input-box">
            <input type="password" placeholder='PASSWORD' required/>
            <FaLock className='icon' />
          </div>
          <div className="input-box">
            <input type="password" placeholder='CONFIRM PASSWORD' required/>
            <FaLock className='icon' />
          </div>
          
          <div className="remember-forgot">
            <label htmlFor=""><input type="checkbox" />I AGREE TO TERMS AN CONDITIONS</label>
          </div>

          <button type='submit' className='login-btn'>Sign up</button>

          <div className="register-link">
            <p>Already have an account? <Link to="/">Login</Link></p>
          </div>
        </form>
    </div>
  )
}

export default Register
