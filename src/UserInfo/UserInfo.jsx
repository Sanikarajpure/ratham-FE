import React, { useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router-dom";

const UserInfo = () => {
  const User = useSelector((state) => (state.User ? state.User : null));
  const navigate = useNavigate();

  useEffect(() => {
    if (!User.name) {
      navigate("/");
    }
  }, [User, navigate]);
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
