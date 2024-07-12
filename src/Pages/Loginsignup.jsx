import React from 'react'
import './Loginsignup.css'

const Loginsignup = () => {
  return (
    
      <div className='Loginsignup'>
      <div className="Loginsignup-container">
        <h1>Sign-up</h1>
        <div className="Loginsignup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Your email adress' />
          <input type="password" placeholder='password' />
        </div>
        <button>Countinue</button>
        <p className="Loginsignup-login">
          Already have an account? <span>Login</span>
        </p>
        <div className="Loginsignup-agree">
          <input type="checkbox"  name='' id=''/>
          <p>By Countinue. i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}
export default Loginsignup
