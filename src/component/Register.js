import React from "react";
import image from "./../icons/chat_icon.png";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function Register() {
    let navigate = useNavigate();
  return (
    <div className="login-container">
      <div className="image-container">
        <img src={image}></img>
      </div>
      <div className="login-box">
        <p>Create your Account</p>
        <TextField
          id="standard-basic"
          label="Enter user name"
          variant="outlined"
        />
        <TextField
          id="standard-basic"
          label="Enter Email Address"
          variant="outlined"
        />
        <TextField
          id="outlined-password-input"
          type="password"
          label="password"
          variant="outlined"
          autoComplete="current-password"
        />
        <Button variant="outlined"> Sign Up</Button>
        <p className="already-account">Already have an Account? <span onClick={()=>navigate("/")} className="Login-button">Login</span></p>
      </div>
    </div>
  );
}
