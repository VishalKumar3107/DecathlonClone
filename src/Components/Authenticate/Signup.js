import React, { useState } from 'react'
import "../../allCss/Auth.css"
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';

function Signup({ signinVisible, setSigninVisible }) {
    const nav = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handlesigup=(e)=>{
      e.preventDefault();
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials)=>{
        setSigninVisible(false)
        // console.log(userCredentials);
        // nav("/")
      })
      .catch((error)=>{
        console.log(error);
      });
    }
  return (
    <div className='Login'>
        <form onSubmit={handlesigup} class="form">
        <span class="signup">Sign Up</span>
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
        <button type="submit" class="form--submit">Sign up</button>
        </form>
        
    </div>
  )
}

export default Signup