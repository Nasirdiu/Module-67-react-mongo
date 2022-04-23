import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);


    const nagative=useNavigate();
   const location=useLocation();
  const from=location.state?.from?.pathname || '/';

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  if(user){
    nagative(from,{replace:true});
  }

  const handleusesingin = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email,password);
  };

  

  return (
    <div className="from-container">
      <div>
        <h1 className="from-title">Login</h1>
        <form onSubmit={handleusesingin}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              onBlur={handleEmail}
              type="email"
              name="email"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              onBlur={handlePassword}
              type="password"
              name="Password"
              id=""
              required
            />
          </div>
          <p style={{color:'red'}}>{error?.message}</p>
          {
              loading && <p>Loadding....</p>
          }
          <input className="from-submit" type="submit" value="Login" required />
        </form>
        <p>
          New To Ema-John?
          <Link className="from-link" to="/singup">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
