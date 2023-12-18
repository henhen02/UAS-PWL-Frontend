import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const LoginPetugasPage = () => {
  const [input, setInput] = useState({
    nip: "",
  });

  const handleInput = (e) => {
    setInput((prev) => {
      return {
        ...prev,
        [e.target.id]: e.target.value,
      };
    });
  };
  const handleSubmit = () => {
    console.log(`nip: ${input.nip}`);
  };
  return (
    <>
      <div className="image-bg-container">
        <div className="max-w-[300px] min-w-[300px] h-[400px] bg-white bg-opacity-[.9] flex flex-col shadow-2xl rounded-xl">
          <div className="text-center pt-[20px]">
            <h1 className="text-6xl font-bold text-[#262567]">
              SI<span className="text-[#3DB54B]">APS</span>
            </h1>
            <p className="text-[10.5px]">Sistem Antrian Penjadwalan Sampel</p>
          </div>
          <div className="w-full p-[20px] flex flex-col flex-1 gap-[20px]">
            <p className="text-center text-[12px]">Masuk Sebagai Petugas</p>
            <div className="flex flex-col flex-1 items-center justify-center gap-[30px]">
              <input
                required
                onChange={handleInput}
                type="text"
                name="nip"
                id="nip"
                className="p-2 bg-transparent border border-black rounded-md focus:border-none focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                placeholder="NIP"
              />
              <button
                onClick={handleSubmit}
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Masuk
              </button>
            </div>
          </div>
          <div className="pb-[30px] text-center">
            <p className="text-[14px] text-gray-600">Bukan Petugas?</p>
            <Link
              to={"/login/admin"}
              className="text-blue-600 text-[14px] underline"
            >
              Masuk Sebagai Admin
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPetugasPage;
