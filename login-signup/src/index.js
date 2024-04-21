import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Forgot_Password from './Components/Forgot_Password/Forgot_Password';
import Reset_Password from './Components/Reset_Password/Reset_Password';
import Password_Successful from './Components/Password_Successful/Password_Successful';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },

  {
    path: "/Register",
    element: <Register/>,
  },

  {
    path: "/Forgot_Password",
    element: <Forgot_Password/>,
  },

  {
    path: "/Reset_Password",
    element: <Reset_Password/>,
  },

  {
    path: "/Password_Successful",
    element: <Password_Successful/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
