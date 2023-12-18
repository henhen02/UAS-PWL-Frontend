import React from "react";
import { Outlet } from "react-router-dom";
import HeaderComponentLayout from "../../components/layouts/HeaderComponentLayout";
import FooterComponentLayout from "../../components/layouts/FooterComponentLayout";

const PetugasAdminRootPage = () => {
  return (
    <div id="page-container">
      <HeaderComponentLayout />
      <main id="main">
        <div className="flex flex-col gap-[10px] p-[10px]">
          <Outlet />
        </div>
      </main>
      <FooterComponentLayout />
    </div>
  );
};

export default PetugasAdminRootPage;
