//
import React from "react";
import Pagination from "../Pagination/Pagination";
import { Helmet } from "react-helmet-async";
import "./Users.css";

const Users = ({ user, totalPages, loading, currentPages, onPageChange }) => {
  return (
    <div>
      <Helmet>
        <title>Users</title>
        <meta name="description" content="Welcome to users page" />
        <link rel="canonical" href="/users" />
      </Helmet>
      <div className="profile">
        {loading ? (
          <div className="loading">Loading.... </div>
        ) : (
          user?.map((person) => {
            return (
              <div key={person.name.first} className="profile__wrapper">
                <img
                  src={person.picture.medium}
                  alt=""
                  className="profile__image"
                />
                <div className="profile__detail">
                  <p className="profile__title">
                    <span>Name: </span>
                    {person.name.title} {person.name.first} {person.name.last}
                  </p>
                  <p className="profile__gender">
                    {" "}
                    <span>Gender: </span> {person.gender}
                  </p>
                  <p className=" profile__email">
                    {" "}
                    <span>Email: </span>
                    {person.email}
                  </p>
                  <p className="profile__location">
                    {" "}
                    <span>Country: </span> {person.location.country}
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>
      <Pagination
        className="pagination"
        currentPages={currentPages}
        onPageChange={onPageChange}
        totalPages={totalPages}
      />
    </div>
  );
};

export default Users;
