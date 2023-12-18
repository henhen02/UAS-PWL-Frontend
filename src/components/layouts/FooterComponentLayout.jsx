import React from "react";

const FooterComponentLayout = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="flex flex-row justify-center items-center p-4 bg-[#262567] rounded-xl">
      <p className="text-center font-light text-[#D2D2D2]">
        <b>&copy; {year} Sistem Antrian Penjadwalan Sampel</b>
      </p>
    </footer>
  );
};

export default FooterComponentLayout;
