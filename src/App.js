import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import ChatBot from "./Chatbot";
import UserInfo from "./UserInfo/UserInfo";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/bot" element={<ChatBot />} />
        <Route exact path="/info" element={<UserInfo />} />
      </Routes>
    </>
  );
}

export default App;
