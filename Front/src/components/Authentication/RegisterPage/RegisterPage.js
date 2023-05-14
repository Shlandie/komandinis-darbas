import React from 'react';
import { Link } from 'react-router-dom';

function RegisterPage() {
  return (
    <div className='loginPage-container'>
      <form className='AuthenticationForm-container p-5'>
        <h1 className='pb-5 d-flex justify-content-center'>Signup Form</h1>

        <div className='d-flex justify-content-between mb-4'>

          <Link className='width50' to="/LoginPage">
            <button type='button' className='logInButton width50'>Login</button>
          </Link>
          <Link className='width50  btnPositioningEnd' to="/RegisterPage">
            <button type='button' className='signUpButton authenticationButton-selected width50'>Sign up</button>
          </Link>
        </div>

        <label for="email"></label>
        <input type="email" id="email" placeholder='Email Address' className='FormButton ps-4 mb-3'></input>

        <label for="password"></label>
        <input type="password" id="password" placeholder='Password' className='FormButton ps-4 mb-3'></input>

        <label for="password2"></label>
        <input type="password" id="password2" placeholder='Confirm Password' className='FormButton ps-4 mb-4'></input>

        <Link to='/'>
          <button type='button' className='FormButton FormButtonColor'>Sign up</button>
        </Link>
      </form>
    </div>
  )
}

export default RegisterPage