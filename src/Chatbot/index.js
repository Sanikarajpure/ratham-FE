import React from "react";
import Chatbot from "react-chatbot-kit";
import ActionProvider from "./components/ActionProvider";
import MessageParser from "./components/MessageParser";
import config from "./components/config";
import "react-chatbot-kit/build/main.css";
import "./chatbot.css";

const ChatBot = () => {
  return (
    <Chatbot
      config={config}
      actionProvider={ActionProvider}
      messageParser={MessageParser}
    />
  );
};

export default ChatBot;
