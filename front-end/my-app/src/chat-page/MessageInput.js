import React from "react";
import "./ChatPage.css";

function MessageInput() {
  return (
    <div className="message-input">
      <input type="text" placeholder="Type a message..." />
      <button>{">"}</button>
    </div>
  );
}

export default MessageInput;
