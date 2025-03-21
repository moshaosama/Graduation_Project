import { memo, useEffect, useMemo, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { DoctorType } from "../../../Types/Doctor/Doctor";
import { Link } from "react-router";

const TopDoctorsDetails = memo(() => {
  const [state, setState] = useState<{
    result: [];
  }>({ result: [] });
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(4);

  const handleClickPrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const handleClickNextPage = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    fetch(`http://localhost:3000/findDoctor/all?page=${page}&limit=${limit}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => setState(data));
  }, [page, limit]);

  console.log(state && state?.result);

  const FindDoctors = useMemo(() => {
    if (!state?.result) return <p>No doctors found</p>;

    return state.result?.map((el: DoctorType, index: number) => (
      <Link to={`/doctors/${el.DoctorID}`}>
        <div
          key={index}
          className="bg-white py-10 w-96 px-2 max-h-80 flex flex-col gap-4 items-center rounded-xl hover:translate-x-1 transition-all duration-500 cursor-pointer hover:bg-gray-200 shadow-2xl"
        >
          <img
            src="WhatsApp_Image_2025-02-27_at_01.00.00_8ea27a5f-removebg-preview.png"
            alt="Person.png"
            className="w-36"
            loading="lazy"
          />
          <h1 className="text-md font-bold">{el.Name}</h1>
          <p className="text-sm font-semibold">{el.Specialty_name}</p>
          <div>
            <p>{el?.Location?.slice(0, 40)}....</p>
          </div>
        </div>
      </Link>
    ));
  }, [state.result]);

  return (
    <>
      <div className="my-14 flex bg-[#184c9917] py-3 justify-between items-center">
        <div
          className="bg-[#184c993a] w-10 h-24 py-20 px-12 rounded-r-full relative cursor-pointer"
          onClick={handleClickPrevPage}
        >
          <div className="bg-[#184C99] w-16 h-24 absolute flex justify-center items-center left-0 top-7 rounded-r-full">
            <MdKeyboardArrowLeft className="text-3xl text-white" />
          </div>
        </div>

        <div className="flex items-center gap-10">{FindDoctors}</div>

        <div
          className="bg-[#184c993a] w-10 h-24 py-20 px-12 rounded-l-full relative cursor-pointer"
          onClick={handleClickNextPage}
        >
          <div className="bg-[#184C99] w-16 h-24 absolute flex justify-center items-center right-0 top-7 rounded-l-full">
            <MdKeyboardArrowRight className="text-3xl text-white" />
          </div>
        </div>
      </div>
    </>
  );
});

export default TopDoctorsDetails;
