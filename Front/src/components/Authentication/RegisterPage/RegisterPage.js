import React from 'react';

function RegisterPage() {
  return (
    <div className='loginPage-container fs-'>
        <form className='AuthenticationForm-container p-5'>

            <h1 className='pb-5 d-flex justify-content-center'>Signup Form</h1>
            <div className='d-flex justify-content-between mb-4'>
                <button type='button' className='logInButton width50'>Login</button>
                <button type='button' className='signUpButton width50'>Signup</button>
            </div>
            
            <label for="email"></label>
            <input type="email" id="email" placeholder='Email Address' className='FormButton ps-4 mb-3'></input>
            
            <label for="password"></label>
            <input type="password" id="password" placeholder='Password' className='FormButton ps-4 mb-3'></input>
            
            <label for="password2"></label>
            <input type="password" id="password2" placeholder='Confirm Password' className='FormButton ps-4 mb-4'></input>
            
            <div className='formContainer-2 my-3'>
                <button type='button' className='FormButton FormButtonColor'>Login</button>
            </div>
        </form>
    </div>
  )
}

export default RegisterPage