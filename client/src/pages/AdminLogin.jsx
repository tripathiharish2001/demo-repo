import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminLogin = ({ isAdmin, setIsAdmin }) => {
  const navigate = useNavigate();

  const [loginVis, setLoginVis] = useState(true);
  const [status, setStatus] = useState("Signup");

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  //changing data of input fields
  const changeHandler = (e) => {
    console.log(e.target.name);
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  // LOGIN HANDLER
  const loginHandler = async (e) => {
    e.preventDefault();
    const userData = [data.name, data.email, data.password];
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const response = await axios.post(
        "http://localhost:5000/api/v1/auth/login",
        userData,
        config
      );

      localStorage.setItem("userData", JSON.stringify(response.data.user));
      console.log(response.data.user);
      setIsAdmin(true);
      navigate("/adminController");
    } catch (err) {
      console.log("Error");
    }
  };

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) navigate("/adminController");
  }, []);

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
              type="confirmPassword"
              name="confirmPassword"
              id=""
            />

            <button onClick={signupHandler} className="ct-cart--btn">
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

export default AdminLogin;
