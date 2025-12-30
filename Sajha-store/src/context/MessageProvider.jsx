import { useState } from "react";
import { MessageContext } from "./MessageContext";

const MessageProvider = ({ children }) => {
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const showMessage = (msg, type, duration) => {
    setMessage(msg);
    setMessageType(type);
    setTimeout(() => {
      setMessage("");
      setMessageType("");
    }, duration);
  };

  const clearMessage = () => {
    setMessage("");
    setMessageType("");
  };
  return (
    <MessageContext.Provider
      value={{
        showMessage,
        clearMessage,
        message,
        messageType,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
};

export default MessageProvider;
