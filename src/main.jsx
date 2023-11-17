import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Container from './components/Container.jsx'
import Onboarding from './components/Onboarding.jsx'
import Signup from './components/Signup.jsx'
import Login from './components/Login.jsx'
import ForgotP from './components/ForgotP.jsx'
import ForgotEmail from './components/Password/ForgotEmail.jsx'

const router = createBrowserRouter (
  [
    {
      path:"/",
      element: <App/>,
      children: [
        {
         index: true ,element: <Container/>
        },
       {
        path:"/onboarding",
        element:<Onboarding/>
       },
       {
        path:"/signup",
        element: <Signup/>
       },
       {
        path:"/login",
        element:<Login/>
       },
       {
        path:"/forgotpassword",
        element:<ForgotP/>
       },
       {
        path:"/forgotemail",
        element:<ForgotEmail/>
       }
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router}/>
 
)
