import React from "react";
import { useLocation } from "react-router-dom";
import DeleteButton from "../../../components/buttons/DeleteButton";

const RincianPetugasPage = () => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <div className="m-auto">
        <table className="table-auto border-collapse border border-gray-300">
          <caption>
            <h1 className="text-2xl font-bold text-[#262567] mb-2">
              Rincian Petugas
            </h1>
          </caption>
          <tbody>
            <tr>
              <th className="text-left p-2 border-b border-gray-300">
                {"NIP"}
              </th>
              <td className="p-2 border-b border-gray-300">
                {location.state.nip}
              </td>
            </tr>
            <tr>
              <th className="text-left p-2 border-b border-gray-300">
                {"Nama"}
              </th>
              <td className="p-2 border-b border-gray-300">
                {location.state.nama}
              </td>
            </tr>
            <tr>
              <th className="text-left p-2 border-b border-gray-300">
                {"Tanggal Lahir"}
              </th>
              <td className="p-2 border-b border-gray-300">
                {new Date(location.state.tgl_lahir).toLocaleString("id-ID", {
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
                {"Kontak"}
              </th>
              <td className="p-2 border-b border-gray-300">
                {location.state.kontak}
              </td>
            </tr>
            <tr>
              <th className="text-left p-2 border-b border-gray-300">
                {"Email"}
              </th>
              <td className="p-2 border-b border-gray-300">
                {location.state.email}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <DeleteButton text={"memek"} />
      </div>
    </>
  );
};

export default RincianPetugasPage;
