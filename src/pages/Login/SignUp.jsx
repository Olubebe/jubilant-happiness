import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { Helmet } from "react-helmet-async";
import "../Login/SignIn.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      navigate("/account");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div className="sign__page">
      <Helmet>
        <title>Sign Up</title>
        <meta name="description" content="Welcome to signup page" />
        <link rel="canonical" href="/signup" />
      </Helmet>
      <div className="">
        <div className="login-box">
          <h2 className="sign__font"> SignUp</h2>
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
            <button className="sign__btn">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <a href="">Sign In</a>
            </button>
            <p className="deport">
              Already have an account ? <Link to="/signin">Sign In</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
