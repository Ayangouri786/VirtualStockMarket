import React from 'react'
import './App.css'
import Login from './Components/Login/Login'
import { BrowserRouter , Routes, Route, Router} from 'react-router-dom'
import { DiVim } from 'react-icons/di'
import Register from './Components/Register/Register'
import Forgot_Password from './Components/Forgot_Password/Forgot_Password'
import Reset_Password from './Components/Reset_Password/Reset_Password'
import Password_Successful from './Components/Password_Successful/Password_Successful'

const App = () => {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/Register' element={<Register/>}></Route>
        <Route path='/Forgot_Password' element={<Forgot_Password/>}></Route>
        <Route path='/Reset_Password' element={<Reset_Password/>}></Route>
        <Route path='/Password_Successful' element={<Password_Successful/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
