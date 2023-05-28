import React, { useState } from 'react'
import "../../allCss/Auth.css"
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';

function Login({ signinVisible, setSigninVisible }) {
    const nav = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handlesigin=(e)=>{
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials)=>{
        // console.log(userCredentials);
        // nav("/")
        setSigninVisible(false);
      })
      .catch((error)=>{
        console.log(error);
      });
    }
  return (
    <div className='Login'>
        <form onSubmit={handlesigin} class="form">
        <span class="signup">Sign In</span>
        <input 
        type="email"
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        class="input-style"/>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          class="input-style"
        />
        <button type="submit" class="form--submit">Sign in</button>
        </form>
        
    </div>
  )
}

export default Login