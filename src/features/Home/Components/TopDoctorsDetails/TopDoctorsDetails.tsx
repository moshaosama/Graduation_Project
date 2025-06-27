import { memo, useEffect, useMemo, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { DoctorType } from "../../../../Types/Doctor/Doctor";
import { Link } from "react-router";

const TopDoctorsDetails = memo(() => {
  const [state, setState] = useState<{
    result: [];
  }>({ result: [] });
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, [window.innerWidth]);

  const [page, setPage] = useState(1);
  const [limit] = useState(width == 412 ? 1 : 4);

  const handleClickPrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const handleClickNextPage = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    fetch(
      `https://graduationprojectserver-production.up.railway.app/findDoctor/all?page=${page}&limit=${limit}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => setState(data));
  }, [page, limit]);

  const FindDoctors = useMemo(() => {
    if (!state?.result) return <p>No doctors found</p>;

    return state.result?.map((el: DoctorType, index: number) => (
      <Link to={`/doctors/${el.DoctorID}`} key={index}>
        <div className="flex flex-col gap-4 items-center px-2 py-10 w-80 max-h-80 bg-white rounded-xl shadow-2xl transition-all duration-500 cursor-pointer max-sm:w-72 max-2xl:w-60 hover:translate-x-1 hover:bg-gray-200">
          <img
            src={
              el?.Gender == "Male"
                ? "https://static.vecteezy.com/system/resources/thumbnails/026/375/249/small_2x/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg"
                : "https://img.freepik.com/free-photo/female-doctor-hospital-with-stethoscope_23-2148827774.jpg"
            }
            alt="Person.png"
            className="w-24 h-24 object-cover rounded-full border-[3px] border-gray-700"
            loading="lazy"
          />
          <h1 className="font-bold text-md">{el.Name}</h1>
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
      <div className="my-14 max-sm:mx-[10px] max-sm:rounded-lg flex bg-[#184c9917] max-sm:w-[24.5pc] py-3 justify-between items-center">
        <div
          className="bg-[#184c993a] max-sm:w-0 max-sm:h-0 max-sm:py-10 max-sm:px-5 w-10 h-24 py-20 px-12 rounded-r-full relative cursor-pointer"
          onClick={handleClickPrevPage}
        >
          <div className="bg-[#184C99]  max-sm:py-2 max-sm:px-0 max-sm:w-7 w-16 max-sm:h-12 h-24  absolute flex justify-center items-center left-0 max-sm:top-4 top-7 rounded-r-full">
            <MdKeyboardArrowLeft className="text-3xl text-white" />
          </div>
        </div>

        <div className="flex gap-10 items-center max-sm:overflow-x-scroll">
          {FindDoctors}
        </div>

        <div
          className="bg-[#184c993a] max-sm:w-0 max-sm:h-0 max-sm:py-10 max-sm:px-5 w-10 h-24 py-20 px-12 rounded-l-full relative cursor-pointer"
          onClick={handleClickNextPage}
        >
          <div className="bg-[#184C99]  max-sm:py-2 max-sm:px-0 max-sm:w-7 w-16 max-sm:h-12 h-24  absolute flex justify-center items-center right-0 max-sm:top-4 top-7 rounded-l-full">
            <MdKeyboardArrowRight className="text-3xl text-white" />
          </div>
        </div>
      </div>
    </>
  );
});

export default TopDoctorsDetails;
