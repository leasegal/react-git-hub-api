import React from "react";
import "./User.css";

const User = ({ user, users, setUsers }) => {
  const { name, avatar_url, created_at, login, public_repos } = user;
  
  return (
    <div className="mainUser" id="main">
      <img src={avatar_url} alt="the user picture" className="img" />
      <div className="name">{name===null?login:name}</div>
      <div className="created">Created At: {created_at.split("T")[0]}</div>
      <div className="repositories">
        {public_repos}
        <br />
        repositories
      </div>
      <button
        onClick={() => {
          setUsers(users.filter((el)=>el!=user));
        }}
      >
        clear this user
      </button>
    </div>
  );
};

export default User;
