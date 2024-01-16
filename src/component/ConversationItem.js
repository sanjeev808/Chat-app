import React from "react";
import "./myStyle.css";
import { useNavigate } from "react-router-dom";
export default function ConversationItem({ props }) {
  let navigate = useNavigate()
  return (
    <div className="conversation-container" onClick={()=>{navigate('chat')}}>
      <div className="col-icon">{props.name[0]}</div>
      <div className="col-title">{props.name}</div>
      <div className="col-lastMessage">{props.lastMessage}</div>
      <div className="col-timeStamp">{props.timeStamp}</div>
    </div>
  );
}
