import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [userData, setUserData] = useState ({fullname:'', email:'', password:'', password2:''})
  
  const changeInputHandler = (e) => {
    setUserData( prevState => {
      return {...prevState, [e.target.name]: e.target.value}
    })

  }

  return (
    <section className="register">
      <div className="register-container">
        <h2>Login</h2>
        <form>
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
          <p className="login-link">
            Dont have an account? <Link to="/register">Sign Up</Link>
          </p>
          <button 
            type="submit" 
            className="register-button"
          >
            Login
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;