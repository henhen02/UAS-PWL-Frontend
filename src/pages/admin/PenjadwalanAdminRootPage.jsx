import { Outlet } from "react-router-dom";
import FooterComponentLayout from "../../components/layouts/FooterComponentLayout";
import HeaderComponentLayout from "../../components/layouts/HeaderComponentLayout";

const PenjadwalanAdminPage = () => {
  return (
    <>
      <div id="page-container">
        <HeaderComponentLayout />
        <main id="main">
          <div className="flex flex-1 flex-col gap-[10px] p-[10px]">
            <Outlet />
          </div>
        </main>
        <FooterComponentLayout />
      </div>
    </>
  );
};

export default PenjadwalanAdminPage;
