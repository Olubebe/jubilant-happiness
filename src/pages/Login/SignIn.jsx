import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleButton } from "react-google-button";
import { UserAuth } from "../../context/AuthContext";
import { Helmet } from "react-helmet-async";
import "../Login/SignIn.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signIn, googleSignIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/account");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await googleSignIn();
      navigate("/account");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Sign In</title>
        <meta name="description" content="Welcome to signIn page" />
        <link rel="canonical" href="/signin" />
      </Helmet>
      <div className="">
        <div className="login-box">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            {error}
            <div className="user-box">
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name=""
                required=""
              />
              <label>Email</label>
            </div>
            <div className="user-box">
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name=""
                required=""
              />
              <label>Password</label>
            </div>
            <GoogleButton onClick={handleGoogleSignIn} />
            <button className="sign__btn">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <a href="">Sign In</a>
            </button>
          </form>
          <p className="deport">
            Don't have an account ? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
