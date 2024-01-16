import React from "react";
// import "/myStyle.css"
import SearchIcon from "@mui/icons-material/Search";

import logo from "../icons/chat_icon.png";
import { IconButton } from "@mui/material";
export default function Groups() {
  return (
    <div className="list-container">
      <div className="ug-header">
        <img src={logo} style={{ height: "2rem", width: "2rem" }} />
        <p>Available User</p>
      </div>
      <div className="sb-search">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input placeholder="search" className="search-box" />
      </div>
      <div className="ug-list">
        <div className="list-tem">
          <p className="col-icon">T</p>
          <p className="con-title">Test user</p>
        </div>

        <div className="list-tem">
          <p className="col-icon">T</p>
          <p className="con-title">Test user</p>
        </div>
        <div className="list-tem">
          <p className="col-icon">T</p>
          <p className="con-title">Test user</p>
        </div>
        <div className="list-tem">
          <p className="col-icon">T</p>
          <p className="con-title">Test user</p>
        </div>

       

       
      </div>
    </div>
  );
}
