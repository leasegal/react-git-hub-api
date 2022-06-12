import React from "react";
import "./User.css";

const User = ({ user }) => {
  const { name, avatar_url, created_at, login, public_repos } = user;
  //const theRightCreated = created_at.split("T")[0].reverse();
  //why isn't it work?
  return (
    <div className="mainUser" id="main">
      <img src={avatar_url} alt="the user picture" className="img"/>
      <div className="name">{name}</div>
      <div className="created">Created At: {created_at}</div>
      <div className="repositories">
        {" "}
        {public_repos}
        <br />
        repositories
      </div>
      <button on onClick={(e)=>{e.target.getElementById('main').innerHTML=""}}>clear this user</button>
    </div>
  );
}

export default User;
