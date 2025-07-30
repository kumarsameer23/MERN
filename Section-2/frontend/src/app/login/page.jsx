import React from 'react'
import classes from './login.module.css';
const Login = () => {
  return (
    <div>
        <h1>Login Page</h1>
        <button className='my-btn'>Global Button</button>
        <button className={classes.loginBtn}>Login Button</button>
        </div>  
  )
}

export default Login;