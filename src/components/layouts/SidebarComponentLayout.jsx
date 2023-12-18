import React from "react";

const SidebarComponentLayout = ({ children }) => {
  return (
    <nav id="side-bar" className="sticky top-0 h-screen w-[250px] p-[10px]">
      <div className="bg-white w-full h-full rounded-xl p-4">
        <div id="side-header" className="text-center">
          <h1 className="text-6xl font-bold text-[#262567]">
            SI<span className="text-[#3DB54B]">APS</span>
          </h1>
          <p className="text-[10.5px]">Sistem Antrian Penjadwalan Sampel</p>
        </div>
        <div id="nav-items" className="mt-[25px]">
          {children}
        </div>
      </div>
    </nav>
  );
};

export default SidebarComponentLayout;
