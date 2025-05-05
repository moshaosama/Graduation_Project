import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Store/Store";
import { useEffect, useMemo, useState } from "react";
import { fetchCreateReview } from "../../../Store/Reducer/Review/CreateReviewSlice";
import { fetchAllDoctor } from "../../../Store/Reducer/AllDoctor/AllDoctor";

const FormReviewDoctor = () => {
  const { id } = useParams();
  const Doctors = useSelector((state: RootState) => state.allDoctor);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchAllDoctor());
  }, [dispatch]);

  const Doctor =
    Doctors?.data?.result?.find(
      (el: { DoctorID: number }) => el.DoctorID === +id!
    ) || undefined;

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
      <div className="bg-gray-300 w-full max-sm:w-96 p-4 rounded-lg shadow-md">
        <h1 className="text-xl font-semibold">Leave a review</h1>
        <p>
          How was your experience with DR.{" "}
          <span className="font-semibold">{Doctor?.Name || "Loading..."}</span>
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
            className="bg-red-600 p-3 text-white font-bold hover:bg-red-400 transition-all duration-500 rounded-md"
            onClick={() =>
              Doctor && User && handleClick(Doctor.DoctorID, User.userName)
            }
          >
            Continue
          </button>
        </form>
      </div>
    </>
  );
};

export default FormReviewDoctor;
