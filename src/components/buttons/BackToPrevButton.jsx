import React from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";

const BackToPrevButton = ({ text }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate(-1);
      }}
      className="w-fit flex flex-row gap-[5px] items-center text-2xl font-bold text-[#262567]"
    >
      <FaChevronLeft size={18} />
      <h1 className="text-2xl font-bold text-[#262567]">
        {text == undefined ? "Kembali" : text}
      </h1>
    </button>
  );
};

export default BackToPrevButton;
