import { useParams } from "react-router";
import useFindDoctor from "../../../Hooks/useFindDoctor";
import { DoctorType } from "../../../Types/Doctor/Doctor";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../Store/Store";
import { useMemo, useState } from "react";
import { fetchCreateReview } from "../../../Store/Reducer/Review/CreateReviewSlice";

const FormReviewDoctor = () => {
  const { id } = useParams();
  const Doctor: DoctorType = useFindDoctor(+id!)[0];
  const dispatch = useDispatch<AppDispatch>();
  const [Title, setTitle] = useState("");
  const User = useMemo(
    () => JSON.parse(window.localStorage.getItem("User")!),
    []
  );

  const handleChange = (el: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(el.target.value);

  const handleClick = (DoctorId: number, userName: string) => {
    const data = {
      Title,
      DoctorId,
      userName,
    };
    dispatch(fetchCreateReview(data));
  };

  return (
    <>
      <div className="bg-gray-300 w-full p-4 rounded-lg shadow-md">
        <h1 className="text-xl font-semibold">Leave a review</h1>
        <p>
          How was your experience with DR.{" "}
          <span className="font-semibold">{Doctor?.Name}</span>
        </p>
        <form
          action=""
          className="mt-5 flex items-center gap-5"
          id="leaveReview"
        >
          <input
            type="text"
            placeholder="Leave a review..."
            className="w-full p-3 rounded-md"
            onChange={handleChange}
          />
          <button
            className="bg-red-600 p-3 text-white font-bold hover:bg-red-400 transition-all duration-500  rounded-md"
            onClick={() => handleClick(Doctor?.DoctorID, User?.userName)}
          >
            Continue
          </button>
        </form>
      </div>
    </>
  );
};

export default FormReviewDoctor;
