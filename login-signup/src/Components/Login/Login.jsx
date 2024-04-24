import React, { useEffect, useState } from 'react'
import './Login.css'
import { NavLink } from "react-router-dom";
import logo_icon from '../Assets/logo.png'

import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";


const Login = () => {

  const [values, setValues] = useState({
    username:"",
    password:""
  })
  
  function handleChange(e){
      setValues({...values, [e.target.username]: e.target.value})
  }

  function handleSubmit(e){
    e.preventDefault();
  }



  return (
    
      <div className="container1">
        <div className="form-box login">
        <form action="#" className='LoginForm' onSubmit={handleSubmit} > 
        <div className="logo_icon">
            <img src={logo_icon} alt="logo" className='logo' />
          </div>
          <h1>Login</h1>
          <div className="input-box1">
            <input type="text" placeholder='USERNAME' required value={values.username} onClick={values.handleChange}/>
            <FaUser className='icon'/>
          </div>
          <div className="input-box1">
            <input type="password" placeholder='PASSWORD' required value={values.password} onClick={values.handleChange}/>
            <FaLock className='icon' />
          </div>
          <div className="remember-forgot1">
            <label htmlFor=""><input type="checkbox" />Remember me</label>
            <NavLink to="/Forgot_Password">Forgot password?</NavLink>
          </div>

          <button type='submit' className='login-btn1'><a href="#">Login</a></button>

          <div className="register-link">
            <p>Don't have an account? <NavLink to="/Register">Register</NavLink> </p>
          </div>
        </form>
        </div>
      </div>     
  )
}

export default Login
