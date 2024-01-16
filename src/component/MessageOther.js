import React from "react";

export default function MessageOther() {
  var props1 = {
    name: "Randam user",
    message: "this is random user message",
  };
  return (
    <div className="other-message-container ">
      <div className="conversation-container ">
        <p className="col-icon">{props1.name[0]}</p>
        <div className="other-text-content">
          <p className="col-title">{props1.name}</p>
          <p className="col-lastMessage">{props1.message}</p>
          <p className="self-timeStamp">12:00AM</p>
        </div>
      </div>
    </div>
  );
}
