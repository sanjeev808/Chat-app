import React, { useEffect, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IconButton } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import NightlightIcon from "@mui/icons-material/Nightlight";
import SearchIcon from "@mui/icons-material/Search";
import LightModeIcon from "@mui/icons-material/LightMode";
import ConversationItem from "./ConversationItem";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../Features/themeSlice";
import io from 'socket.io-client';

export default function Sidebar() {

  let navigate = useNavigate();
  let dispatch = useDispatch();
  let lightTheme = useSelector((state) => state.themeKey);
  const [socket, setSocket] = useState(null);

  console.log(lightTheme, "lightTheme");
  const [conversations, setConversations] = useState([
    {
      name: "Sest#1",
      lastMessage: "last message #1",
      timeStamp: "1 daya ago",
    },
    {
      name: "Test#2",
      lastMessage: "last message #2",
      timeStamp: "1 daya ago",
    },
    {
      name: "Test#3",
      lastMessage: "last message #4",
      timeStamp: "1 daya ago",
    },
  ]);


  useEffect(() => {
    const connectionOptions = {
      transports: ["websocket"],
      autoConnect: true,
    };
    const newSocket = io('http://localhost:3001', connectionOptions);
  console.log(newSocket, "newSocketnewSocketnewSocket")
    newSocket.on('connect', () => {
      console.log('Socket connected');
    });
  
    newSocket.on('disconnect', () => {
      console.log('Socket disconnected');
    });
  
    setSocket(newSocket);
  
    return () => {
      newSocket.disconnect();
    };
  }, []);

  useEffect(()=>{
    if(socket?.connected)
    console.log(socket, "9482390842930842930849238429038940")
  },[socket])
  return (
    <div className="sidebar-container">
      <div className={"sb-header" + (lightTheme ? "" : " dark")}>
        <div>
          <IconButton>
            <AccountCircleIcon
              className={"icon" + (lightTheme ? "" : " dark")}
            />
          </IconButton>
        </div>
        <div className="other-icons">
          <IconButton
            onClick={() => {
              navigate("users");
            }}
          >
            <PersonAddIcon className={"icon" + (lightTheme ? "" : " dark")} />
          </IconButton>
          <IconButton
            onClick={() => {
              navigate("groups");
            }}
          >
            <GroupAddIcon className={"icon" + (lightTheme ? "" : " dark")} />
          </IconButton>

          <IconButton
            onClick={() => {
              navigate("create-groups");
            }}
          >
            <AddCircleIcon className={"icon" + (lightTheme ? "" : " dark")} />
          </IconButton>
          <IconButton
            onClick={() => {
              dispatch(toggleTheme());
            }}
          >
            {lightTheme && (
              <NightlightIcon
                className={"icon" + (lightTheme ? "" : " dark")}
              />
            )}
            {!lightTheme && (
              <LightModeIcon className={"icon" + (lightTheme ? "" : " dark")} />
            )}
          </IconButton>
        </div>
      </div>
      <div className={"sb-search" + (lightTheme ? "" : " dark")}>
        <IconButton>
          <SearchIcon className={"icon" + (lightTheme ? "" : " dark")} />
        </IconButton>
        <input
          placeholder="search"
          className={"search-box" + (lightTheme ? "" : " dark")}
        />
      </div>
      <div className={"sb-conversation" + (lightTheme ? "" : " dark")}>
        {conversations.map((conversation, index) => {
          return (
            <ConversationItem
              props={conversation}
              key={index}
              onClick={() => {
                navigate("chat");
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
