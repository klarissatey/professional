import React, { useState } from "react";
import {
  MinChatUiProvider,
  MainContainer,
  MessageInput,
  MessageContainer,
  MessageList,
  MessageHeader,
} from "@minchat/react-chat-ui";
import "./ChatPage.css";

let initialMessages = [
  {
    text: "Hello, I'm Alice! Nice to meet you! I will be your personalized mentor so how can I help?",
    user: {
      id: "john",
      name: "Alice",
    },
  },
  {
    text: "Hi there!",
    user: {
      id: "me",
      name: "Me",
    },
  },
];

const chats = [
  { id: 1, name: "Alice Doe", lastMessageTime: "10:30 AM" },
  { id: 2, name: "Jane Smith", lastMessageTime: "11:00 AM" },
  { id: 3, name: "Charlie Hudson", lastMessageTime: "11:30 AM" },
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

function ChatPage() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    console.log("handleSendMessage is called");
    // Create the new message
    const newMessage = { text: input, user: { id: "me", name: "Me" } };
    // Update messages state by appending the new message
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    // Clear the input field
    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage(); // Call handleSendMessage when Enter key is pressed
    }
  };

  const handleSelectChat = (chatId) => {
    // Handle chat selection if needed
  };

  const handleKeyDown = (e) => {
    const allowedKeys = /^[a-zA-Z0-9\s]$/; // Allow letters, numbers, and space
    console.log(e.key);
    if (allowedKeys.test(e.key)) {
      setInput((prevInput) => prevInput + e.key); // Append valid key to the input
    } else if (e.key === "Backspace") {
      setInput((prevInput) => prevInput.slice(0, -1)); // Handle backspace
    }
  };

  return (
    <MinChatUiProvider theme="#6ea9d7">
      <div className="chat-container">
        <Sidebar onSelectChat={handleSelectChat} />
        <MainContainer className="main-container">
          <MessageContainer className="message-container">
            <MessageHeader title="Chat with John" />
            <MessageList currentUserId="me" messages={messages} />{" "}
            {/* This line displays the messages */}
            <MessageInput
              placeholder="Type message here"
              value={input}
              onKeyDown={handleKeyDown}
              onSendMessage={handleSendMessage}
            />
          </MessageContainer>
        </MainContainer>
      </div>
    </MinChatUiProvider>
  );
}

export default ChatPage;
