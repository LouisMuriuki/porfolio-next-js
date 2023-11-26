import React, { createContext, useState } from "react";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [chatlog, setChatlog] = useState([]);
  return (
    <ChatContext.Provider value={{ chatlog, setChatlog }}>
      {children}
    </ChatContext.Provider>
  );
};

export default ChatContext;
