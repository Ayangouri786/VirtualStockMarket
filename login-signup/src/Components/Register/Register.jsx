import React from 'react'
import './Register.css'

import user_icon from '../Assets/person.png'
import password_icon from '../Assets/password.png'
import logo_icon from '../Assets/logo.png'
import email_icon from '../Assets/email.png'

function Register() {
  return (
    <div className='container'>
      <div className="logo">
        <img src={logo_icon} alt="logo" />
      </div>
      <div className="inputs">
        <div className="input">
        <img src={user_icon} alt="" />
          <input type="text" placeholder='NAME'/>
        </div>
        <div className="input">
        <img src={user_icon} alt="" />
          <input type="text" placeholder='USERNAME'/>
        </div>
        <div className="input">
        <img src={email_icon} alt="" />
          <input type="email" placeholder='Email'/>
        </div>
        <div className="input">
        <img src={email_icon} alt="" />
          <input type="number" placeholder='PHONE NO'/>
        </div>
        <div className="input">
        <img src={password_icon} alt="" />
          <input type="password" placeholder='PASSWORD'/>
        </div>
        <div className="input">
        <img src={password_icon} alt="" />
          <input type="password" placeholder='CONFIRM PASSWORD'/>
        </div>
      </div>
      <div className="condition">
        <button></button>
        <p>I AGREE TO TERMS AND CONDITIONS</p>
      </div>
      <div className="submit-btn">
        <div className="submit">CREATE</div>
      </div>
    </div>
  )
}

export default Register
