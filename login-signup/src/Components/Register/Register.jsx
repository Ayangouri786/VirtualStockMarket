import React, { useState } from 'react'
import './Register.css'

import logo_icon from '../Assets/logo.png'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!name) {
      errors.name = "Name is required";
    }
    if (!username) {
      errors.username = "Username is required";
    }
    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }
    if (!phone) {
      errors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(phone)) {
      errors.phone = "Phone number is invalid";
    }
    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }
    if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(errors).length === 0) {
      
    } else {
      setErrors(errors);
    }
  };

  return (
    <div className='container2'>
      <form onSubmit={handleSubmit} className='RegisterForm'> 
        <div className="logo_icon">
          <img src={logo_icon} alt="logo" className='logo' />
        </div>
        <h1>Register</h1>
        <div className="input-box2">
          <input type="text" placeholder='NAME' id="name" value={name} onChange={handleNameChange} />
          <FaUser className='icon'/>
        </div>
        {errors.name && <div className="error">{errors.name}</div>}
        <div className="input-box2">
          <input type="text" placeholder='USERNAME' id="username" value={username} onChange={handleUsernameChange} />
          <FaUser className='icon'/>
        </div>
        {errors.username && <div className="error">{errors.username}</div>}
        <div className="input-box2">
          <input type="email" placeholder='Email' id="email" value={email} onChange={handleEmailChange} />
          <MdEmail className='icon'/>
        </div>
        {errors.email && <div className="error">{errors.email}</div>}
        <div className="input-box2">
          <input type="tel" placeholder='PHONE NO' id="phone" value={phone} onChange={handlePhoneChange} />
          <FaPhoneAlt className='icon'/>
        </div>
        {errors.phone && <div className="error">{errors.phone}</div>}
        <div className="input-box2">
          <input type="password" placeholder='PASSWORD' id="password" value={password} onChange={handlePasswordChange} />
          <FaLock className='icon' />
        </div>
        {errors.password && <div className="error">{errors.password}</div>}
        <div className="input-box2">
          <input type="password" placeholder='CONFIRM PASSWORD' id="confirmPassword" value={confirmPassword} onChange={handleConfirmPasswordChange} />
          <FaLock className='icon' />
        </div>
        {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
        
        <div className="remember-forgot2">
          <label htmlFor="terms"><input type="checkbox" id="terms"  />I AGREE TO TERMS AND CONDITIONS</label>
        </div>

        <button type='submit' className='login-btn2'>Sign up</button>

        <div className="register-link">
          <p>Already have an account? <NavLink to="/">Login</NavLink></p>
        </div>
      </form>
    </div>
  );
};

export default Register;

