import React from "react";

const AgeDropDown = (props) => {
  let ageOptions = [
    18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
    37, 38, 39, 40,
  ];

  return (
    <div className="w-full  flex justify-end px-2">
      <select
        className="px-2"
        onChange={(e) => {
          props.actionProvider.setAge(e.target.value);
        }}
      >
        {ageOptions.map((item, index) => {
          return (
            <option className="" value={item} key={index}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default AgeDropDown;
