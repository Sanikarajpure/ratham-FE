import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

const UserInfo = () => {
  const User = useSelector((state) => (state.User ? state.User : ""));
  return (
    <div className="h-screen flex justify-center  items-center ">
      <div className="  ">
        <div className="text-xl font-semibold">
          Your name {User.name} aged {User.age}
        </div>
        <div className="grid justify-items-center ">
          has been added to student system.
        </div>
        <div className=" grid justify-items-center ">You may now exit.</div>
      </div>
    </div>
  );
};

export default UserInfo;
