import * as FaIcon from "react-icons/fa";
const DetailButton = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-row gap-[5px] items-center pt-[3px] pb-[3px] pl-[7px] pr-[7px] bg-[#262567] text-white rounded-md hover:bg-[#040341] text-[14px]"
    >
      <FaIcon.FaEye />
      {text == undefined ? "Rincian" : text}
    </button>
  );
};

export default DetailButton;
