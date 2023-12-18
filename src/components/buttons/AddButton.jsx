import React from "react";
import { FaRegCalendarPlus } from "react-icons/fa";

const AddButton = ({ text, onClick, icon }) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-row gap-[5px] items-center pt-[3px] pb-[3px] pl-[7px] pr-[7px] bg-green-500 text-white rounded-md hover:bg-green-700 text-[14px]"
    >
      {icon == undefined ? <FaRegCalendarPlus /> : icon}
      {text}
    </button>
  );
};

export default AddButton;
