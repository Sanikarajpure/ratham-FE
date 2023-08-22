import React from "react";

const Landing = () => {
  return (
    <div className="h-screen flex justify-center  items-center ">
      <div className="  ">
        <div className="text-xl font-semibold">
          Enter into Student Info System
        </div>
        <div className=" grid justify-items-center m-2">
          <button
            className="bg-blue-400 px-4 py-2 rounded text-lg"
            onClick={() => {
              console.log("click");
            }}
          >
            Enroll Now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
