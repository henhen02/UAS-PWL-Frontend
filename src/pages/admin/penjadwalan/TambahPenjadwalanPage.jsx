import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { jenisSampling } from "../../../dump/jenisSamplingDump";
import { petugasDump } from "../../../dump/petugasDump";

const TambahPenjadwalanPage = () => {
  const [input, setInput] = useState({
    petugas: "",
    tanggal: "",
    instansi: "",
    alamat: "",
    penanggung_jawab: "",
    kontak_penanggung_jawab: "",
    jenis_sampling: "",
  });

  const handleChange = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    // Check if any field is empty
    if (
      input.petugas === "" ||
      input.tanggal === "" ||
      input.instansi === "" ||
      input.alamat === "" ||
      input.penanggung_jawab === "" ||
      input.kontak_penanggung_jawab === "" ||
      input.jenis_sampling === ""
    ) {
      toast.dismiss();
      toast.error("Harap isi semua field terlebih dahulu!", {
        style: {
          color: "#ffffff",
          background: "#e7515a",
        },
        iconTheme: {
          primary: "#ffffff",
          secondary: "#e7515a",
        },
      });
    } else {
      input.tanggal = new Date(input.tanggal).toISOString();
      console.log(input);
      toast.dismiss();
      toast.success("Berhasil menambahkan jadwal!", {
        style: {
          color: "#ffffff",
          background: "#3DB54B",
        },
        iconTheme: {
          primary: "#ffffff",
          secondary: "#3DB54B",
        },
      });
    }
  };
  return (
    <div className="flex flex-1 justify-center items-center">
      <div className="px-8 py-6 w-[500px] text-[#262567]">
        <h2 className="text-2xl font-bold mb-4">Buat Jadwal Baru</h2>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="instansi"
            >
              Instansi Tujuan
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="instansi"
              name="instansi"
              type="text"
              placeholder="Masukkan nama instansi"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="alamat"
            >
              Alamat
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="alamat"
              name="alamat"
              type="text"
              placeholder="Masukkan alamat instansi"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="penanggung_jawab"
            >
              Penanggung Jawab
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="penanggung_jawab"
              name="penanggung_jawab"
              type="text"
              placeholder="Masukkan nama penanggung jawab"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="kontak_penanggung_jawab"
            >
              Kontak Penanggung Jawab
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="kontak_penanggung_jawab"
              name="kontak_penanggung_jawab"
              type="text"
              placeholder="Masukkan kontak penanggung jawab"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="tanggal"
            >
              Tanggal Sampling
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="tanggal"
              name="tanggal"
              type="date"
              placeholder="Masukkan tanggal sampling"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="petugas"
            >
              Petugas
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="petugas"
              name="petugas"
              onChange={handleChange}
            >
              <option value="">Pilih petugas</option>
              {petugasDump.map((petugas, index) => (
                <option key={index} value={petugas.petugas_id}>
                  {petugas.petugas_nama}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="jenis_sampling"
            >
              Jenis Sampling
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="jenis_sampling"
              name="jenis_sampling"
              onChange={handleChange}
            >
              <option value="">Pilih jenis sampling</option>
              {jenisSampling.map((jenis, index) => (
                <option key={index} value={jenis.id}>
                  {jenis.nama}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSubmit}
            >
              Simpan
            </button>
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Batal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TambahPenjadwalanPage;
