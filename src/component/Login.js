import React, { useEffect } from "react";
import image from "./../icons/chat_icon.png";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { loginAsync, selectAuth } from "../Features/authSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Login() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const authState = useSelector(selectAuth);
  console.log(authState, "authState");
  useEffect(() => {
    if (authState.token) {
      localStorage.setItem("token", authState.token);
      navigate("/app/welcome");
    }
  }, [authState]);
  const handleLogin = () => {
    const credentials = {
      email: "sanjeev@yopmail.com",
      password: "sanjeev",
    };

    dispatch(loginAsync(credentials));
  };
  return (
    <div className="login-container">
      <div className="image-container">
        <img src={image}></img>
      </div>
      <div className="login-box">
        <p>Login to you account</p>
        <TextField
          id="standard-basic"
          label="Enter user name"
          variant="outlined"
        />
        <TextField
          id="outlined-password-input"
          type="password"
          label="password"
          variant="outlined"
          autoComplete="current-password"
        />
        <Button variant="outlined" onClick={handleLogin}>
          {" "}
          Login
        </Button>
        <p className="already-account">
          Don't have an Account
          <span onClick={() => navigate("/register")} className="Login-button">
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}
