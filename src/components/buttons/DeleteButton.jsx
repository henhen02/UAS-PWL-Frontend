import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const DeleteButton = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-row gap-[5px] items-center pt-[3px] pb-[3px] pl-[7px] pr-[7px] bg-red-500 text-white rounded-md hover:bg-red-700 text-[14px]"
    >
      <FaTrashAlt />
      {text}
    </button>
  );
};

export default DeleteButton;
