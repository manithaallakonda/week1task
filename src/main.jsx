import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Signin from './SignIn.jsx'
import Signup from './SignUp.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  <Signin />
  <Signup />
  </React.StrictMode>,
)
