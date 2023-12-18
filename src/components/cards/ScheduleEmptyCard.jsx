import React from "react";
import { imageStatic } from "../../static/ImageStatic";

const ScheduleEmptyCard = ({ text }) => {
  return (
    <div className="w-[200px] h-[200px] m-auto">
      <img src={imageStatic.emptyCalendar} alt="content-empty.png" />
      <p className="text-center text-gray-400 text-[14px]">{text}</p>
    </div>
  );
};

export default ScheduleEmptyCard;
