import React from "react";
import * as FaIcon from "react-icons/fa";

const StatusCard = ({ statusId }) => {
  return (
    <>
      {statusId == 1 ? (
        <div className="text-green-600 flex w-[90px] items-center gap-[5px] text-sm justify-start">
          <FaIcon.FaCheck size={14} /> <p className="italic">Selesai</p>
        </div>
      ) : (
        <div className="text-yellow-600 flex w-[90px] items-center gap-[5px] text-sm justify-start">
          <FaIcon.FaClock size={14} /> <p className="italic">Proses</p>
        </div>
      )}
    </>
  );
};
export default StatusCard;
