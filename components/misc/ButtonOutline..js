import React from "react";

const ButtonOutline = ({ children }) => {
  return (
    <button className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-y-black-600 text-black-600 bg-[#fcd34d]  outline-none rounded-l-full rounded-r-full capitalize hover:bg-black-600 hover:text-black-600 transition-all hover:shadow-black-600">
      {" "}
      {children}
    </button>
  );
};

export default ButtonOutline;
