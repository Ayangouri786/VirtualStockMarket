import React from 'react'
import { Link } from "react-router-dom";
import './Reset_Password.css'

import logo_icon from '../Assets/logo.png'
import { FaLock } from "react-icons/fa";

function Reset_Password() {
  return (
    <div className='container'>
        <div className="logo_icon">
            <img src={logo_icon} alt="" className="logo" />
        </div>
        <h1>RESET YOUR PASSWORD ?</h1>
        <div className="input-box">
            <input type="password" placeholder='ENTER NEW PASSWORD' required/>
            <FaLock className='icon' />
        </div>
        <div className="input-box">
            <input type="password" placeholder='CONFIRM PASSWORD' required/>
            <FaLock className='icon' />
        </div>
        <div className="next">
            <Link to="/Password_Successful">Next</Link>
        </div>
    </div>
  )
}

export default Reset_Password
