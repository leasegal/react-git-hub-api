import React, { useState } from "react";

const Search = ({ setGitUser, gitUser,keyPress }) => {

  
  return (
    <>
      <input
      placeholder="enter a login to check"
      type="text"
      value={gitUser}
      onChange={(e) => setGitUser(e.target.value)}
      onKeyDown={(e)=>{console.log(e.key);if(e.key==="Enter"){keyPress()}}}
      />
     
    </>
  );
};

export default Search;
