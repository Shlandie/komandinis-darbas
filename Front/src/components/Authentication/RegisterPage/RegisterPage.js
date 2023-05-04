import React from 'react';

function RegisterPage() {
  return (
    <div className='loginPage-container fs-'>
        <form className='loginForm-container p-5'>

            <h1 className='pb-5'>Login Form/Signup Form</h1>
            
            <button type='button' className='logInButton width50'>Login</button>
            <button type='button' className='signUpButton width50 mb-4'>Signup</button>
            
            <br></br>

            <label for="email"></label>
            <input type="email" id="email" placeholder='Email Address' className='FormButton ps-4 mb-3'></input>
            
            <br></br>
            
            <label for="password"></label>
            <input type="password" id="password" placeholder='Password' className='FormButton ps-4 mb-3'></input>
            
            <label for="password2"></label>
            <input type="password" id="password2" placeholder='Confirm Password' className='FormButton ps-4 mb-3'></input>
            <br></br>

            <button type='button' className='FormButton'>Signup</button>
            <p className='signUpNowLink mt-5'>Not a member? <a href="#">Signup now!</a> </p>
        </form>
    </div>
  )
}

export default RegisterPage