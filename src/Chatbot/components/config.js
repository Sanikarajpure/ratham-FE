import { createChatBotMessage } from "react-chatbot-kit";
import GotItBtn from "./GotItBtn";
import AgeDropDown from "./AgeDropDown";

const config = {
  botName: "Student Info Bot",
  initialMessages: [
    createChatBotMessage(`Hello, Welcome to student info system!`, {
      widget: "gotIt",
    }),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
  widgets: [
    {
      widgetName: "gotIt",
      widgetFunc: (props) => <GotItBtn {...props} />,
    },

    {
      widgetName: "age-widget",
      widgetFunc: (props) => <AgeDropDown {...props} />,
    },
  ],
};

export default config;
