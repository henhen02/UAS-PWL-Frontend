import React from "react";
import { petugasDump } from "../../../dump/petugasDump";
import DetailButton from "../../../components/buttons/DetailButton";
import { useNavigate } from "react-router-dom";
import AddButton from "../../../components/buttons/AddButton";
import { FaUserPlus } from "react-icons/fa";
const DaftarPetugasPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-row justify-between">
        <h1 className="text-2xl font-bold text-[#202027]">Petugas</h1>
        <AddButton
          icon={<FaUserPlus />}
          text={"Tambah Petugas"}
          onClick={() => navigate("/petugas/tambah-petugas")}
        />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b-[1px] border-t-[1px]">
              <th className="py-2 px-4 border-b">No.</th>
              <th className="py-2 px-4 border-b text-left">NIP</th>
              <th className="py-2 px-4 border-b text-left">Nama</th>
              <th className="py-2 px-4 border-b text-left">Tanggal Lahir</th>
              <th className="py-2 px-4 border-b text-left">Alamat</th>
              <th colSpan={2} className="py-2 px-4 border-b text-left">
                Kontak
              </th>
            </tr>
          </thead>
          <tbody>
            {petugasDump.map((petugas, index) => (
              <tr key={index}>
                <td className="py-2 px-4 text-center">{index + 1}</td>
                <td className="py-2 px-4">{petugas.nip}</td>
                <td className="py-2 px-4">{petugas.petugas_nama}</td>
                <td className="py-2 px-4">
                  {new Date(petugas.petugas_tgl_lahir).toLocaleDateString(
                    "id-ID",
                    {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    }
                  )}
                </td>
                <td className="py-2 px-4">{petugas.petugas_alamat}</td>
                <td className="py-2 px-4">{petugas.petugas_kontak}</td>
                <td>
                  <DetailButton
                    onClick={() => {
                      navigate("/petugas/rincian-petugas", {
                        state: {
                          id: petugas.petugas_id,
                          nip: petugas.nip,
                          nama: petugas.petugas_nama,
                          tgl_lahir: petugas.petugas_tgl_lahir,
                          alamat: petugas.petugas_alamat,
                          kontak: petugas.petugas_kontak,
                          email: petugas.petugas_email,
                        },
                      });
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DaftarPetugasPage;
