import React from 'react';
import './LoginPage.css';
function LoginPage() {
  return (
    <div className='loginPage-container fs-'>
        <form className='AuthenticationForm-container p-5'>

            <h1 className='pb-5'>Login Form/Signup Form</h1>
            <div className='d-flex justify-content-between mb-4'>
                <button type='button' className='logInButton width50'>Login</button>
                <button type='button' className='signUpButton width50'>Signup</button>
            </div>
            
            <label for="email"></label>
            <input type="email" id="email" placeholder='Email Address' className='FormButton ps-4 mb-3'></input>
            
            
            <label for="password"></label>
            <input type="password" id="password" placeholder='Password' className='FormButton ps-4'></input>
            <p className='mb-4'><a href="#">Forgot password?</a></p>

            <button type='button' className='FormButton FormButtonColor'>Login</button>
            <p className='signUpNowLink mt-5'>Not a member? <a href="#">Signup now!</a> </p>
        </form>
    </div>
  )
}

export default LoginPage