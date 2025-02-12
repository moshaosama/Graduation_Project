import { FaFilter, FaTransgenderAlt } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";

const Filtering = () => {
  return (
    <>
      <div className="sticky top-10">
        <p style={{ fontSize: "10px" }}>
          <Link to={"/"}>
            <span className="text-blue-600 w-fit cursor-pointer hover:underline">
              MediPulse
            </span>
          </Link>
          <span className="text-gray-500"> / Orthopedist in Egypt</span>
        </p>
        <div className="my-5 bg-white rounded-xl">
          <div className="bg-blue-500 w-48 rounded-t-xl p-2">
            <h1 className="flex items-center gap-3 text-white font-semibold">
              <FaFilter />
              Filters
            </h1>
          </div>
          <div className="p-2 flex flex-col gap-1">
            <div className="text-blue-500 p-2 flex justify-between items-center cursor-pointer">
              <div>
                <h1 className="flex items-center gap-3  font-semibold">
                  <FaTransgenderAlt />
                  Gender
                </h1>
              </div>
              <div>
                <IoMdArrowDropright />
              </div>
            </div>
            <hr className=" bg-gray-600" />
          </div>
          <div className="p-2 flex flex-col gap-1">
            <div className="text-blue-500 p-2 flex justify-between items-center cursor-pointer">
              <div>
                <h1 className="flex items-center gap-3  font-semibold">
                  <FaTransgenderAlt />
                  Gender
                </h1>
              </div>
              <div>
                <IoMdArrowDropright />
              </div>
            </div>
            <hr className=" bg-gray-600" />
          </div>
          <div className="p-2 flex flex-col gap-1">
            <div className="text-blue-500 p-2 flex justify-between items-center cursor-pointer">
              <div>
                <h1 className="flex items-center gap-3  font-semibold">
                  <FaTransgenderAlt />
                  Gender
                </h1>
              </div>
              <div>
                <IoMdArrowDropright />
              </div>
            </div>
            <hr className=" bg-gray-600" />
          </div>
          <div className="p-2 flex flex-col gap-1">
            <div className="text-blue-500 p-2 flex justify-between items-center cursor-pointer">
              <div>
                <h1 className="flex items-center gap-3  font-semibold">
                  <FaTransgenderAlt />
                  Gender
                </h1>
              </div>
              <div>
                <IoMdArrowDropright />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filtering;
