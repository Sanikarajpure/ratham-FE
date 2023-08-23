import React from "react";
import { useDispatch } from "react-redux";
import { set_username, set_userage } from "../../Actions/userActions";
import { useNavigate } from "react-router-dom";
import { createClientMessage } from "react-chatbot-kit";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleHello = () => {
    const botMessage = createChatBotMessage("Hello. Nice to meet you.");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleGotItBtn = () => {
    const message = createClientMessage("Got It!");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));

    setTimeout(handleGotIt(), 1000);
  };

  const handleGotIt = () => {
    const botMessage = createChatBotMessage("Enter your full name");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const catchMessages = (message) => {
    dispatch(set_username(message));
    handleAge();
  };

  const handleAge = () => {
    const messageWithProperties = createChatBotMessage("Enter your Age", {
      widget: "age-widget",
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, messageWithProperties],
    }));
  };

  const setAge = (age) => {
    const message = createClientMessage(age);

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));

    dispatch(set_userage(age));

    setTimeout(exitMessage(), 1000);
  };

  const exitMessage = () => {
    const message = createChatBotMessage(
      "Thank you. In 5 seconds, bot will exit"
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));

    setTimeout(exitCountDown(), 5000);
  };

  function exitCountDown() {
    function counter() {
      var i = 5;
      var setCounter = function () {
        if (i === 0) {
          clearInterval(this);
          navigate("/info");
        } else {
          const message = createChatBotMessage(`${i}...`);
          i--;
          setState((prev) => ({
            ...prev,
            messages: [...prev.messages, message],
          }));
        }
      };

      setInterval(setCounter, 1000);
      setCounter();
    }

    counter();
  }

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleGotItBtn,
            handleGotIt,
            handleAge,
            setAge,
            catchMessages,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
