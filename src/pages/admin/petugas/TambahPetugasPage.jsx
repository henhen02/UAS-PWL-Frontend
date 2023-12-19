import React, { useState } from "react";
import { toast } from "react-hot-toast";

const TambahPetugasPage = () => {
  const [input, setInput] = useState({
    nama: "",
    nip: "",
    tanggal_lahir: "",
    email: "",
    alamat: "",
    kontak: "",
  });

  const handleChange = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    if (
      input.nama === "" ||
      input.nip === "" ||
      input.tanggal_lahir === "" ||
      input.email === "" ||
      input.alamat === "" ||
      input.kontak === ""
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
      toast.success("Berhasil menambahkan petugas baru.", {
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
        <h2 className="text-2xl font-bold mb-4">Tambah Petugas Baru</h2>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="nama"
            >
              Nama
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="nama"
              name="nama"
              type="text"
              placeholder="Masukkan nama instansi"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="nip"
            >
              NIP
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="nip"
              name="nip"
              type="text"
              placeholder="Masukkan alamat instansi"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="tanggal_lahir"
            >
              Tanggal Lahir
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="tanggal_lahir"
              name="tanggal_lahir"
              type="text"
              placeholder="Masukkan nama penanggung jawab"
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
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="alamat"
              name="alamat"
              type="text"
              placeholder="Masukkan nama penanggung jawab"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="kontak"
            >
              Nomor Telepon
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="kontak"
              name="kontak"
              type="number"
              placeholder="Masukkan kontak penanggung jawab"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="email"
              placeholder="Masukkan tanggal sampling"
              onChange={handleChange}
            />
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

export default TambahPetugasPage;
