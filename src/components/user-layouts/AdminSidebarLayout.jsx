import SidebarMenuButton from "../buttons/SidebarMenuButton";
import SidebarComponentLayout from "../layouts/SidebarComponentLayout";
import * as FaIcons from "react-icons/fa";

const AdminSidebarLayout = () => {
  return (
    <SidebarComponentLayout
      children={
        <>
          <div>
            <h1 className="font-medium text-[14px] text-[#262567]">
              Pengelolaan
            </h1>
            <div style={{ borderBottom: "1px solid #262567" }}></div>
            <SidebarMenuButton
              to="/"
              label="Dashboard"
              icon={<FaIcons.FaTachometerAlt />}
            />
            <SidebarMenuButton
              to="/penjadwalan"
              label="Penjadwalan"
              icon={<FaIcons.FaCalendarAlt />}
            />

            <SidebarMenuButton
              to="/petugas"
              label="Petugas"
              icon={<FaIcons.FaUsers />}
            />
            <SidebarMenuButton
              to="/laporan-bulanan"
              label="Laporan Bulanan"
              icon={<FaIcons.FaFileAlt />}
            />
          </div>
          <div>
            <h1 className="font-medium text-[14px] text-[#262567]">Akun</h1>
            <div style={{ borderBottom: "1px solid #262567" }}></div>
            <SidebarMenuButton
              to="/profil"
              label="Profil"
              icon={<FaIcons.FaUserAlt />}
            />

            <SidebarMenuButton
              to="/logout"
              label="Logout"
              icon={<FaIcons.FaSignOutAlt />}
            />
          </div>
        </>
      }
    />
  );
};

export default AdminSidebarLayout;
