import React from "react";
import { useState } from "react";
import { FaFilter } from "react-icons/fa";
import { jadwalDump } from "../../../dump/JadwalDump";
import StatusCard from "../../../components/cards/StatusCard";
import DetailButton from "../../../components/buttons/DetailButton";
import AddButton from "../../../components/buttons/AddButton";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ScheduleEmptyCard from "../../../components/cards/ScheduleEmptyCard";

const DaftarPenjadwalanPage = () => {
  const navigate = useNavigate();

  const month = () => {
    const month = [];
    for (let i = 0; i < 12; i++) {
      month.push({
        value: new Date(new Date().getFullYear(), i, 1).getMonth() + 1,
        name: new Date(new Date().getFullYear(), i, 1).toLocaleString(
          "default",
          {
            month: "long",
          }
        ),
      });
    }
    return month;
  };
  const year = () => {
    const years = [];
    const currentYear = new Date().getFullYear();
    const startYear = 2009;

    for (let i = startYear; i <= currentYear; i++) {
      years.push({
        value: i,
        name: i,
      });
    }

    return years;
  };

  const [monthFilter, setMonthFilter] = useState(new Date().getMonth() + 1);
  const [yearFilter, setYearFilter] = useState(0);

  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    if (yearFilter === 0) {
      setMonthFilter(0);
      setFilterData(jadwalDump);
    } else if (yearFilter !== 0) {
      if (monthFilter === 0) {
        setFilterData(
          jadwalDump.filter(
            (jadwal) => new Date(jadwal.tanggal).getFullYear() == yearFilter
          )
        );
      } else if (monthFilter !== 0) {
        setFilterData(
          jadwalDump.filter(
            (jadwal) =>
              `${new Date(jadwal.tanggal).getMonth() + 1}-${new Date(
                jadwal.tanggal
              ).getFullYear()}` == `${monthFilter}-${yearFilter}`
          )
        );
      }
    }
  }, [monthFilter, yearFilter]);

  return (
    <>
      <div className="flex flex-col gap-[3px]">
        <h1 className="text-2xl font-bold text-[#262567]">Jadwal</h1>
        <p className="text-gray-500 text-[12px]">
          <b>
            {
              jadwalDump.filter(
                (jadwalDumpItem) => jadwalDumpItem.status === "2"
              ).length
            }{" "}
            dari {jadwalDump.length} perlu diselesaikan.
          </b>
        </p>
      </div>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-[5px] items-center">
          <label htmlFor="filter-month"></label>
          <select
            disabled={yearFilter === 0}
            name="filter-month"
            id="filter-month"
            className="py-2 px-4 border-[1px] border-[#e4dfdf] rounded-md"
            value={monthFilter}
            onChange={(e) =>
              setMonthFilter((prev) => (prev = parseInt(e.target.value)))
            }
          >
            <option value={0}>Semua</option>
            {month().map((monthItem) => (
              <option key={monthItem.value} value={monthItem.value}>
                {monthItem.name}
              </option>
            ))}
          </select>
          <select
            name="filter-year"
            id="filter-year"
            className="py-2 px-4 border-[1px] border-[#e4dfdf] rounded-md"
            value={yearFilter}
            onChange={(e) =>
              setYearFilter((prev) => (prev = parseInt(e.target.value)))
            }
          >
            <option value={0}>Semua</option>
            {year().map((yearItem) => (
              <option key={yearItem.value} value={yearItem.value}>
                {yearItem.name}
              </option>
            ))}
          </select>

          <FaFilter className="text-[#262567]" size={14} />
        </div>
        <div>
          <AddButton
            text={"Jadwal Baru"}
            onClick={() => navigate("/penjadwalan/buat-jadwal")}
          />
        </div>
      </div>
      {filterData.length == 0 ? (
        <ScheduleEmptyCard text={"Tidak ada jadwal di bulan ini"} />
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-[1px] border-t-[1px]">
                <th className="py-2 px-4 border-b">No.</th>
                <th className="py-2 px-4 border-b text-left">Instansi</th>
                <th className="py-2 px-4 border-b text-left">Tanggal</th>
                <th className="py-2 px-4 border-b text-left">Alamat</th>
                <th className="py-2 px-4 border-b text-left">Petugas</th>
                <th colSpan={2} className="py-2 px-4 border-b text-left">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {filterData?.map((jadwal, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 text-center">{index + 1}</td>
                  <td className="py-2 px-4">{jadwal.instansi}</td>
                  <td className="py-2 px-4">
                    {new Date(jadwal.tanggal).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </td>
                  <td className="py-2 px-4">{jadwal.alamat}</td>
                  <td className="py-2 px-4">{jadwal.petugas}</td>
                  <td className="py-2 px-4 text-left">
                    <StatusCard statusId={jadwal.status} />
                  </td>
                  <td>
                    <DetailButton
                      onClick={() => {
                        navigate("/penjadwalan/rincian-jadwal", {
                          state: {
                            id: jadwal.id,
                            instansi: jadwal.instansi,
                            alamat: jadwal.alamat,
                            tanggal: jadwal.tanggal,
                            petugas: jadwal.petugas,
                            penanggung_jawab: jadwal.penanggung_jawab,
                            kontak_penaggung_jawab:
                              jadwal.kontak_penanggung_jawab,
                            status: jadwal.status,
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
      )}
    </>
  );
};

export default DaftarPenjadwalanPage;
