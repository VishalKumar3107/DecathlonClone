import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

function Auth({ signinVisible, setSigninVisible }) {
  const [showLogin, setShowLogin] = useState(true);

  const handleButtonClick = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="Auth">
      <div className="Authimage">
        {showLogin ? (
          <>
            <h2>Login</h2>
            <p>Get</p>
            <p>access to</p>
            <p className="spanpara">personalised</p>
            <p>shopping experience</p>
          </>
        ) : (
          <>
            <h2>Signup</h2>
            <p>We</p>
            <p>promise</p>
            <p className="spanpara">100% secure</p>
            <p>data protection</p>
          </>
        )}
      </div>
      <div className="Authform">
        {showLogin ? (
          <Login
            signinVisible={signinVisible}
            setSigninVisible={setSigninVisible}
          />
        ) : (
          <Signup
            signinVisible={signinVisible}
            setSigninVisible={setSigninVisible}
          />
        )}
        <button className="Authenticate-box-button" onClick={handleButtonClick}>
          {showLogin ? "Create your account" : "Already have a account? Signin"}
        </button>
      </div>
    </div>
  );
}

export default Auth;
