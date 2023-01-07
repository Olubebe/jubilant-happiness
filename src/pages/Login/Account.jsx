import React from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { Helmet } from "react-helmet-async";
import "../Login/Account.css";

const Account = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
      console.log("you are logged out");
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <div>
      <Helmet>
        <title>Account</title>
        <meta name="description" content="Welcome to account page" />
        <link rel="canonical" href="/account" />
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="account__page">
        <h1 className="account__header">Account</h1>
        <p className="account__email">User Email: {user && user.email} </p>

        <button className="account__logout" onClick={handleLogout}>
          LogOut
        </button>
      </div>
    </div>
  );
};

export default Account;
