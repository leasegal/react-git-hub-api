import React, { useState } from "react";
import User from "../User/User";


const Button = ({ text, clickEvent, isClickSearch, user,searchedUser }) => {

  return (
    <>
      <button onClick={clickEvent}>{text}</button>
      {isClickSearch && searchedUser!=""?(<User user={user} />):("") }
       {/* users.map(function(user){<User user={user} />}):"enter a login user to display it"} */}
    </>
  );
};

export default Button;
