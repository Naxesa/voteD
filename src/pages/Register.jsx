import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [userData, setUserData] = useState ({fullname:'', email:'', password:'', password2:''})
  
  const changeInputHandler = (e) => {
    setUserData( prevState => {
      return {...prevState, [e.target.name]: e.target.value}
    })

    console.log(userData)
  }



  return (
    <section className="register">
      <div className="register-container">
        <h2>Sign Up</h2>
        <form>
          <input 
            type="text" 
            name="fullname" 
            placeholder="Full Name" onChange={changeInputHandler}
            className="input-field"
          />
          <input 
            type="email" 
            name="EmailAddress"  onChange={changeInputHandler}
            placeholder="Email" 
            className="input-field"
          />
          <input 
            type="password" 
            name="password" onChange={changeInputHandler}
            placeholder="Password" 
            className="input-field"
          />
          <input 
            type="password" 
            name="password2" onChange={changeInputHandler}
            placeholder="Confirm Password" 
            className="input-field"
          />
          <p className="login-link">
            Already have an account? <Link to="/">Sign in</Link>
          </p>
          <button 
            type="submit" 
            className="register-button"
          >
            Register
          </button>
        </form>
      </div>
    </section>
  );
};

export default Register;