import { memo } from "react";
import { Link } from "react-router-dom";
import usegetTime from "../../Hooks/usegetTime";

type BookDoctorProps = {
  id: string;
};

const BookDoctor = memo(({ id }: BookDoctorProps) => {
  const { hours, minutes, ampm } = usegetTime();
  return (
    <div>
      <div className="flex justify-center h-full gap-10 max-sm:hidden">
        <div className="border-black  w-32 border-[1px] flex flex-col justify-between rounded-md  h-full">
          <div className="bg-[#0056D6] text-center py-1">
            <h1 className="w-full font-bold text-white h-fit">Today</h1>
          </div>
          <div className="flex text-center">
            <h1>
              From {hours}:{minutes} {ampm} to 12:00 {ampm}
            </h1>
          </div>
          <Link to={`${id}/bookdoctor`}>
            <div className="py-1 text-center transition-all duration-300 bg-red-600 cursor-pointer hover:bg-red-500">
              <h1 className="w-full font-bold text-white h-fit">Book</h1>
            </div>
          </Link>
        </div>
      </div>

      <div className="flex justify-center my-3 max-sm:hidden">
        <Link to={`/doctors/${id}`}>
          <button className="text-red-600 rounded-full w-56 hover:bg-gray-100 transition-all duration-200 font-bold border-[1px] p-1 border-red-400 ">
            View Profile
          </button>
        </Link>
      </div>
    </div>
  );
});

export default BookDoctor;
