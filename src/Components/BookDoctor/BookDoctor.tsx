import { memo } from "react";
import { Link } from "react-router-dom";

type BookDoctorProps = {
  id: string;
};

const BookDoctor = memo(({ id }: BookDoctorProps) => {
  return (
    <div>
      <div className="border-black  w-32 border-[1px] flex flex-col justify-between rounded-md  h-full">
        <div className="bg-[#0056D6] text-center py-1">
          <h1 className=" text-white font-bold h-fit w-full">Today</h1>
        </div>
        <div className="text-center flex">
          <h1>From 5:00 PM to 11:00 PM</h1>
        </div>
        <div className="bg-red-600 cursor-pointer hover:bg-red-500 transition-all duration-300 text-center py-1">
          <h1 className=" text-white font-bold h-fit w-full">Book</h1>
        </div>
      </div>
      <div className="flex justify-center my-3">
        <Link to={`${id}`}>
          <button className="text-red-600 rounded-full w-44 hover:bg-gray-100 transition-all duration-200 font-bold border-[1px] p-1 border-red-400 ">
            View Profile
          </button>
        </Link>
      </div>
    </div>
  );
});

export default BookDoctor;
