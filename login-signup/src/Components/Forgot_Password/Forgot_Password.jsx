import React from 'react'
import './Forgot_Password.css'
import logo_icon from '../Assets/logo.png'

import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { NavLink } from 'react-router-dom';

function Forgot_Password() {
  return (
    <div className='container3'>
        <form action="#" className="forgot_password_form">
            <div className="logo_icon">
                <img src={logo_icon} alt="" className="logo" />
            </div>
            <h1>FORGOT YOUR PASSWORD ?</h1>
            <p>PLEASE ENTER THE EMAIL YOU USED TO SIGN IN</p>
            <div className="input-box3">
                <input type="email" placeholder='EXAMPLE@GMAIL.COM' required/>
                <MdEmail className='icon'/>
            </div>
            <div className="button">
                <button className='btn1'>REQUEST FOR OTP</button>
                <FaLock className='icon' />
            </div>
            <div className="input-box3">
                <input type="password" placeholder='PASSWORD' required/>
                <FaLock className='icon' />
            </div>
            
            <button className='btn2'><NavLink to="/Reset_Password">NEXT</NavLink></button>

        </form>
    </div>
  )
}

export default Forgot_Password
