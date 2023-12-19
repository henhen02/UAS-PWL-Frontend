import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AdminRoot from "./root/AdminRoot";
import DashboardAdminPage from "./pages/admin/DashboardAdminPage";
import PenjadwalanAdminRootPage from "./pages/admin/PenjadwalanAdminRootPage";
import PetugasAdminRootPage from "./pages/admin/PetugasAdminRootPage";
import DaftarPetugasPage from "./pages/admin/petugas/DaftarPetugasPage";
import DaftarPenjadwalanPage from "./pages/admin/penjadwalan/DaftarPenjadwalanPage";
import RincianPenjadwalanPage from "./pages/admin/penjadwalan/RincianPenjadwalanPage";
import TambahPenjadwalanPage from "./pages/admin/penjadwalan/TambahPenjadwalanPage";
import TambahPetugasPage from "./pages/admin/petugas/TambahPetugasPage";
import RincianPetugasPage from "./pages/admin/petugas/RincianPetugasPage";
import LoginRoot from "./root/LoginRoot";
import LoginPetugasPage from "./pages/petugas/LoginPetugasPage";
import LoginAdminPage from "./pages/admin/LoginAdminPage";
import LaporanBulananRootPage from "./pages/admin/LaporanBulananRootPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<AdminRoot />}>
        <Route index element={<DashboardAdminPage />} />
        <Route path="penjadwalan" element={<PenjadwalanAdminRootPage />}>
          <Route index element={<DaftarPenjadwalanPage />} />
          <Route path="rincian-jadwal" element={<RincianPenjadwalanPage />} />
          <Route path="buat-jadwal" element={<TambahPenjadwalanPage />} />
        </Route>
        <Route path="petugas" element={<PetugasAdminRootPage />}>
          <Route index element={<DaftarPetugasPage />} />
          <Route path="rincian-petugas" element={<RincianPetugasPage />} />
          <Route path="tambah-petugas" element={<TambahPetugasPage />} />
        </Route>
        <Route path="laporan-bulanan" element={<LaporanBulananRootPage />} />
      </Route>
      <Route path="login" element={<LoginRoot />}>
        <Route index element={<LoginPetugasPage />} />
        <Route path="admin" element={<LoginAdminPage />} />
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
