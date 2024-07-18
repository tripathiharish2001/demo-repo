import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginSignup = ({ setIsLoggedIn, isLoggedIn }) => {
  const navigate = useNavigate();

  const [loginVis, setLoginVis] = useState(true);
  const [status, setStatus] = useState("Signup");

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    rePassword: "",
  });

  //changing data of input fields
  const changeHandler = (e) => {
    console.log(e.target.name);

    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  //  handling signup or login request
  // checking will be done over here for legitness of the user.

  const loginHandler = (e) => {
    e.preventDefault();
    // check creds..
    // alert("Login Alert!");
    // setIsLoggedIn((isLoggedIn) => {
    //   return !isLoggedIn;
    // });
    const legitLogin = true;
    if (legitLogin) {
      navigate("/");
    }
  };

  const signupHandler = (e) => {
    e.preventDefault();
    // alert("SIgnup Call made!");
    // setIsLoggedIn(!isLoggedIn);
    setIsLoggedIn((isLoggedIn) => {
      return !isLoggedIn;
    });
    const legitSignup = true;
    if (legitSignup) {
      navigate("/");
    }
  };

  return (
    <div className="ct-loginSignup">
      <div className="ct-ls-main">
        {loginVis && (
          <form className="ct-contact--form">
            <input
              onChange={changeHandler}
              placeholder="Enter Your Name"
              type="text"
              name="name"
              id=""
            />
            <input
              onChange={changeHandler}
              placeholder="Enter Your Email"
              type="email"
              name="email"
              id=""
            />
            <input
              onChange={changeHandler}
              placeholder="Enter Your Password"
              type="password"
              name="password"
              id=""
            />

            <button onClick={loginHandler} className="ct-cart--btn">
              Login
            </button>
          </form>
        )}

        {!loginVis && (
          <form className="ct-contact--form">
            <input
              onChange={changeHandler}
              placeholder="Enter Your Name"
              type="text"
              name="name"
              id=""
            />
            <input
              onChange={changeHandler}
              placeholder="Enter Your Email"
              type="email"
              name="email"
              id=""
            />
            <input
              onChange={changeHandler}
              placeholder="Enter Your Password"
              type="password"
              name="password"
              id=""
            />
            <input
              onChange={changeHandler}
              placeholder="Re-Enter Your Password"
              type="rePassword"
              name="rePassword"
              id=""
            />

            <button onClick={loginHandler} className="ct-cart--btn">
              Sign-Up
            </button>
          </form>
        )}
        <button
          onClick={() => {
            setLoginVis((loginVis) => {
              return !loginVis;
            });
            status === "Login" ? setStatus("Signup") : setStatus("Login");
          }}
        >
          {status}
        </button>
      </div>
    </div>
  );
};

export default LoginSignup;
