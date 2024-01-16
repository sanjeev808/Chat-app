import React from "react";
import "./myStyle.css";
import Sidebar from "./Sidebar";
import ChatArea from "./ChatArea";
import Welcome from "./Welcome";
import CreateGroup from "./CreateGroup";
import User_Group from "./User_Group";
import { Outlet } from "react-router-dom";
export default function MainContainer() {
  return (
    <div className="main-container">
      <Sidebar />
      <Outlet />
    </div>
  );
}
