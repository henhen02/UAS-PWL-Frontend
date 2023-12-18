import React from "react";
import { jadwalDump } from "../../dump/JadwalDump";
import StatusCard from "../../components/cards/StatusCard";
import FooterComponentLayout from "../../components/layouts/FooterComponentLayout";
import HeaderComponentLayout from "../../components/layouts/HeaderComponentLayout";
import DetailButton from "../../components/buttons/DetailButton";

const DashboardAdminPage = () => {
  return (
    <div id="page-container">
      <HeaderComponentLayout />
      <main id="main">
        <div className="flex flex-col gap-[10px] p-[10px]">
          <div className="flex flex-col gap-[3px]">
            <h1 className="text-2xl font-bold text-[#262567]">
              Jadwal Hari Ini
            </h1>
            <p className="text-gray-500 text-[12px]">
              <b>{jadwalDump.length} jadwal </b>
              harus harus diselesaikan hari ini.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-[1px] border-t-[1px]">
                  <th className="py-2 px-4 border-b">No.</th>
                  <th className="py-2 px-4 border-b text-left">Instansi</th>
                  <th className="py-2 px-4 border-b text-left">Alamat</th>
                  <th className="py-2 px-4 border-b text-left">Petugas</th>
                  <th colSpan={2} className="py-2 px-4 border-b text-left">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {jadwalDump.map((jadwal, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 text-center">{index + 1}</td>
                    <td className="py-2 px-4">{jadwal.instansi}</td>
                    <td className="py-2 px-4">{jadwal.alamat}</td>
                    <td className="py-2 px-4">{jadwal.petugas}</td>
                    <td className="py-2 px-4 text-left">
                      <StatusCard statusId={jadwal.status} />
                    </td>
                    <td>
                      <DetailButton text={"Rincian"} jadwalId={jadwal.id} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="p-[10px]">
          <div className="flex flex-col gap-[3px]">
            <h1 className="text-2xl font-bold text-[#262567]">
              Grafik Permintaan Sampling
            </h1>
            <p className="text-gray-500 text-[12px]">
              Permintaan sampling periode {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </main>
      <FooterComponentLayout />
    </div>
  );
};

export default DashboardAdminPage;
