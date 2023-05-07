import React from 'react';
import './LoginPage.css';
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div className='loginPage-container'>
      <form className='AuthenticationForm-container p-5'>

        <h1 className='pb-5 d-flex justify-content-center'>Login Form</h1>
        <div className='d-flex justify-content-between mb-4'>

          <Link className='width50' to="/LoginPage">
            <button type='button' className='logInButton authenticationButton-selected width50'>Login</button>
          </Link>
          <Link className='width50  btnPositioningEnd' to="/RegisterPage">
            <button type='button' className='signUpButton width50'>Sign up</button>
          </Link>
        </div>

        <label for="email"></label>
        <input type="email" id="email" placeholder='Email Address' className='FormButton ps-4 mb-3'></input>


        <label for="password"></label>
        <input type="password" id="password" placeholder='Password'  className='FormButton ps-4'></input>
        <p className='mb-4'><a href="#" className='color-darkBlue'>Forgot password?</a></p>

        <button type='button' className='FormButton FormButtonColor'>Login</button>
      </form>
    </div>
  )
}

export default LoginPage