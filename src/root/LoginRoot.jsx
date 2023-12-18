import React from "react";
import { Outlet } from "react-router-dom";
import { imageStatic } from "../static/ImageStatic";

const LoginRoot = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="flex min-h-screen flex-col w-full">
        <main id="main-login" className="flex flex-1">
          <Outlet />
        </main>
        <footer>
          <div className="flex flex-wrap gap-[20px] justify-center items-center bg-[#252567] text-[#ffffff]">
            <div className="flex flex-wrap justify-center gap-[10px] p-[10px]">
              <div className="flex flex-col gap-[10px]">
                <div className="max-w-[300px]">
                  <h1 className="text-2xl">Laboratorium</h1>
                  <p className="text-[12px]">
                    Jl. Hayam Wuruk No.88i, Kedamaian, Kec. Kedamaian, Kota
                    Bandar Lampung, Lampung 35122
                  </p>
                </div>
                <div className="max-w-[300px]">
                  <h1 className="text-2xl">Kontak</h1>
                  <div className="text-[12px]">
                    <p>{"(021) 87962155"}</p>
                    <p>Hotline: 08111637228</p>
                  </div>
                </div>
              </div>
              <div className="max-w-[300px]">
                <h1 className="text-2xl">Laboratorium Utama</h1>
                <p className="text-[12px]">
                  JL. MH. THAMRIN, PLAZA AMSTERDAM BLOK D2-D6, Desa/Kelurahan
                  Citaringgul, Kec. Babakan Madang, Kab. Bogor, Provinsi Jawa
                  Barat,16810
                </p>
              </div>
            </div>
            <div>
              <figure>
                <img src={imageStatic.footerComponent} alt="sponsors" />
              </figure>
            </div>
          </div>
          <div className="w-full bg-[#3cb54a] p-[20px]">
            <p className="text-center text-[#ffffff]">
              &copy; {year} Sistem Antrian Penjadwalan Sampel
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default LoginRoot;
