import React from "react";
import HeaderComponentLayout from "../../components/layouts/HeaderComponentLayout";
import FooterComponentLayout from "../../components/layouts/FooterComponentLayout";
import ContentEmptyCard from "../../components/cards/ContentEmptyCard";

const LaporanBulananRootPage = () => {
  return (
    <div id="page-container">
      <HeaderComponentLayout />
      <main id="main">
        <div className="flex flex-1 flex-col gap-[10px] p-[10px]">
          <ContentEmptyCard text={"Belum ada laporan bulanan."} />
        </div>
      </main>
      <FooterComponentLayout />
    </div>
  );
};

export default LaporanBulananRootPage;
