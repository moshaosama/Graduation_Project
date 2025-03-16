import { useParams } from "react-router";
import useFindDoctor from "../../../Hooks/useFindDoctor";
import { DoctorType } from "../../../Types/Doctor/Doctor";

const ReviewDoctor = () => {
  const { id } = useParams();
  const Doctor: DoctorType = useFindDoctor(+id!)[0];
  return (
    <>
      <div className="bg-gray-300 w-full p-4 rounded-lg shadow-md">
        <h1 className="text-xl font-semibold">Leave a review</h1>
        <p>
          How was your experience with DR.{" "}
          <span className="font-semibold">{Doctor?.Name}</span>
        </p>
        <form action="" className="mt-5 flex items-center gap-5">
          <input
            type="text"
            placeholder="Leave a review..."
            className="w-full p-3 rounded-md"
          />
          <button className="bg-red-600 p-3 text-white font-bold hover:bg-red-400 transition-all duration-500  rounded-md">
            Continue
          </button>
        </form>
      </div>
    </>
  );
};

export default ReviewDoctor;
