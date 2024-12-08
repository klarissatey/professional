import React, { useState } from "react";
import "./ChatPage.css";

const chats = [
  { id: 1, name: "John Doe", lastMessageTime: "10:30 AM" },
  { id: 2, name: "Jane Smith", lastMessageTime: "11:00 AM" },
  { id: 3, name: "Alice Johnson", lastMessageTime: "11:30 AM" },
  { id: 4, name: "Bob Brown", lastMessageTime: "12:00 PM" },
];

function Sidebar({ onSelectChat }) {
  return (
    <aside className="chat-sidebar">
      <h2>Chats</h2>
      <ul className="chat-list">
        {chats.map((chat) => (
          <li
            key={chat.id}
            className="chat-item"
            onClick={() => onSelectChat(chat.id)}
          >
            <div className="chat-details">
              <p className="chat-name">{chat.name}</p>
              <span className="chat-time">{chat.lastMessageTime}</span>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
