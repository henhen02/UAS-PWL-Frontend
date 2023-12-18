import React from "react";

const SidebarMenuButton = ({ to, icon, label }) => {
  return (
    <a
      href={to}
      className="px-6 py-3 text-xs font-bold text-[#262567] leading-6 uppercase transition ripple hover:text-[#d9d9d9] hover:focus:outline-none active:text-[#d9d9d9] flex flex-row items-center justify-start gap-[5px]"
    >
      {icon}
      {label}
    </a>
  );
};

export default SidebarMenuButton;
