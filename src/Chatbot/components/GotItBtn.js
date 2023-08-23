import React from "react";

const GotItBtn = (props) => {
  return (
    <div className=" flex justify-end">
      <button
        className="px-2 py-2 border-solid border-2 border-[#376B7E]
         rounded text-white bg-[#4daacc]"
        onClick={() => {
          props.actionProvider.handleGotItBtn();
        }}
      >
        Got It!
      </button>
    </div>
  );
};

export default GotItBtn;
