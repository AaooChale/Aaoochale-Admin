import React from "react";

const Button = ({
  btn,
  onClick,
  height,
  width,
  fontSize,
  textAlign,
  backgroundColor,
  color
}) => {
  return (
    <button
      class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
      onClick={onClick}
      style={{
        height: height,
        width: width,
        fontSize: fontSize,
        textAlign: textAlign,
        backgroundColor: backgroundColor,
        color:color

      }}
    >
      {btn}
    </button>
  );
};

export default Button;
