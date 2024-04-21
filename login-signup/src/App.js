import React from 'react'
import './App.css'
import Login from './Components/Login/Login'
import { BrowserRouter , Routes, Route} from 'react-router-dom'
import { DiVim } from 'react-icons/di'
import Register from './Components/Register/Register'

const App = () => {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/Register' element={<Register/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
