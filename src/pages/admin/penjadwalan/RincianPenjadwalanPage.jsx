import React from "react";
import { useLocation } from "react-router-dom";
import StatusCard from "../../../components/cards/StatusCard";

const RincianPenjadwalanPage = () => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <div className="m-auto">
        <table className="table-auto border-collapse border border-gray-300">
          <caption>
            <h1 className="text-2xl font-bold text-[#262567] mb-2">
              Rincian Jadwal
            </h1>
          </caption>
          <tbody>
            <tr>
              <th className="text-left p-2 border-b border-gray-300">
                {"NIP"}
              </th>
              <td className="p-2 border-b border-gray-300">
                {location.state.instansi}
              </td>
            </tr>
            <tr>
              <th className="text-left p-2 border-b border-gray-300">
                {"Petugas"}
              </th>
              <td className="p-2 border-b border-gray-300">
                {location.state.petugas}
              </td>
            </tr>
            <tr>
              <th className="text-left p-2 border-b border-gray-300">
                {"Tanggal Lahir"}
              </th>
              <td className="p-2 border-b border-gray-300">
                {new Date(location.state.tanggal).toLocaleString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </td>
            </tr>
            <tr>
              <th className="text-left p-2 border-b border-gray-300">
                {"Alamat"}
              </th>
              <td className="p-2 border-b border-gray-300">
                {location.state.alamat}
              </td>
            </tr>
            <tr>
              <th className="text-left p-2 border-b border-gray-300">
                {"Penanggung Jawab"}
              </th>
              <td className="p-2 border-b border-gray-300">
                {location.state.penanggung_jawab}
              </td>
            </tr>
            <tr>
              <th className="text-left p-2 border-b border-gray-300">
                {"Kontak Penanggung Jawab"}
              </th>
              <td className="p-2 border-b border-gray-300">
                {location.state.kontak_penaggung_jawab}
              </td>
            </tr>
            <tr>
              <th className="text-left p-2 border-b border-gray-300">
                {"Status Jadwal"}
              </th>
              <td className="p-2 border-b border-gray-300">
                <StatusCard statusId={location.state.status} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default RincianPenjadwalanPage;
