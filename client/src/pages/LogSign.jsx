import React, { useState } from "react";
import LoginSignup from "./LoginSignup";
import LoggedIn from "./LoggedIn";

const LogSign = () => {
  // variable for tracking the login status of user
  // need to be global
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log(isLoggedIn, " loginsignup");

  return (
    <div className="">
      {!isLoggedIn && (
        <LoginSignup setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
      )}
      {isLoggedIn && (
        <LoggedIn setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
      )}
    </div>
  );
};

export default LogSign;
