import React from "react";

const Input = ({value, onChange}) => {
  return (
    <input
      className={`w-[120px] h-10 rounded-md border-2`}
      type="text"
      placeholder="Enter value"
      value = {value}
      onChange={onChange}
    />
  );
};

export default Input;
