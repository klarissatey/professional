import React, { useState } from "react";
import "./ChatPage.css";
import Sidebar from "./Sidebar";

const dummyMessages = {
  1: ["Hello from John!", "How are you?"],
  2: ["Hi from Jane!", "What's up?"],
  3: ["Hey from Alice!", "Long time no see!"],
  4: ["Hello from Bob!", "How's it going?"],
};

function ChatMain() {
  const [selectedChat, setSelectedChat] = useState(1);
  const [messages, setMessages] = useState(dummyMessages[selectedChat] || []);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, input]);
      setInput("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleSelectChat = (chatId) => {
    setSelectedChat(chatId);
    setMessages(dummyMessages[chatId] || []);
  };

  return (
    <div className="chat-container">
      <Sidebar onSelectChat={handleSelectChat} />
      <main className="chat-main">
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${index % 2 === 0 ? "left" : "right"}`}
            >
              {message}
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type a message..."
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </main>
    </div>
  );
}

export default ChatMain;
