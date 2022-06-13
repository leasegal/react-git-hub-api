import React, { useState } from "react";


const Button = ({ text, clickEvent}) => {

  return (
    <>
      <button onClick={clickEvent} >{text}</button>
    </>
  );
};

export default Button;
