import React from "react";

export default function MessageSelf() {
  var props1 = {
    name: "Randam user",
    message: "this is random user message",
  };
  return (
    <div className="self-message-conatiner">
      <div className="self-text-content">
        <p className="col-title">{props1.name}</p>
        <p className="col-lastMessage">{props1.message}</p>
        <p className="self-timeStamp">12:00 AM</p>
      </div>
    </div>
  );
}
