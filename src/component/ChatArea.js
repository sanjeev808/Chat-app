import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import MessageSelf from "./MessageSelf";
import MessageOther from "./MessageOther";
import SendIcon from "@mui/icons-material/Send";
import { useSelector } from "react-redux";
export default function ChatArea() {
  let lightTheme = useSelector((state) => state.themeKey);
  const [header, setHeader] = useState({
    name: "Test#1",
    lastMessage: "text last message",
    timeStamp: "1 mint ago",
  });
  return (
    <div className="chatArea-container">
      <div className={"chatArea-header" + (lightTheme ? "" : " dark")}>
        <p className="col-icon">{header.name[0]}</p>
        <div className="header-text">
          <p className="col-title">{header.name}</p>
          <p className="col-lastMessage">{header.lastMessage}</p>
        </div>
        <IconButton>
          <DeleteIcon className={"icon" + (lightTheme ? "" : " dark")} />
        </IconButton>
      </div>
      <div className={"message-container" + (lightTheme ? "" : " dark")}>
        <MessageOther />
        <MessageSelf />
        <MessageOther />
        <MessageSelf />
        <MessageSelf />
        <MessageOther />
        <MessageSelf />
        <MessageOther />
        <MessageSelf />
      </div>
      <div className={"text-input-area" + (lightTheme ? "" : " dark")}>
        <input
          placeholder="Type a message"
          className={"search-box" + (lightTheme ? "" : " dark")}
        />
        <IconButton>
          <SendIcon className={"icon" + (lightTheme ? "" : " dark")} />
        </IconButton>
      </div>
    </div>
  );
}
