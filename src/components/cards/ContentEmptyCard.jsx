import React from "react";
import { imageStatic } from "../../static/ImageStatic";

const ContentEmptyCard = ({ text }) => {
  return (
    <div className="w-[200px] h-[200px] m-auto">
      <img src={imageStatic.emptyContent} alt="content-empty.png" />
      <p className="text-center text-gray-400 text-[14px]">{text}</p>
    </div>
  );
};

export default ContentEmptyCard;
