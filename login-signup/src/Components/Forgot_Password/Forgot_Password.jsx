import React from 'react'
import './Forgot_Password.css'
import logo_icon from '../Assets/logo.png'

import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';

function Forgot_Password() {
  return (
    <div className='container'>
        <div className="logo_icon">
            <img src={logo_icon} alt="" className="logo" />
        </div>
        <h1>FORGOT YOUR PASSWORD ?</h1>
        <p>PLEASE ENTER THE EMAIL YOU USED TO SIGN IN</p>
        <div className="input-box">
            <input type="email" placeholder='EXAMPLE@GMAIL.COM' required/>
            <MdEmail className='icon'/>
        </div>
        <div className="input-box">
            <input type="button" value='REQUEST FOR OTP' required/>
            <FaLock className='icon' />
        </div>
        <div className="input-box">
            <input type="password" placeholder='PASSWORD' required/>
            <FaLock className='icon' />
        </div>
        <div className="next">
            <button><Link to="/Reset_Password">NEXT</Link></button>
        </div>
    </div>
  )
}

export default Forgot_Password
