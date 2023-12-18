import React from "react";
import { useLocation } from "react-router-dom";
import StatusCard from "../../../components/cards/StatusCard";
import { useNavigate } from "react-router-dom";
import BackToPrevButton from "../../../components/buttons/BackToPrevButton";

const RincianPenjadwalanPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  return (
    <>
      <BackToPrevButton text={"Rincian Jadwal"} />
      <div className="m-auto">
        <table className="table-auto border-collapse border border-gray-300">
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
