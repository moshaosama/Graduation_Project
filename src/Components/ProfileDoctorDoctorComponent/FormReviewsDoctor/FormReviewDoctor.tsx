import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Store/Store";
import { useEffect, useMemo } from "react";
import { fetchCreateReview } from "../../../Store/Reducer/Review/CreateReviewSlice";
import { fetchAllDoctor } from "../../../Store/Reducer/AllDoctor/AllDoctor";
import { useForm } from "react-hook-form";

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

  const User = useMemo(() => {
    const storedUser = window.localStorage.getItem("User");
    return storedUser ? JSON.parse(storedUser) : null;
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    if (!Doctor || !User) return;

    dispatch(
      fetchCreateReview({
        ...data,
        DoctorId: Doctor.DoctorID,
        userName: User.userName,
      })
    );
  };

  return (
    <div className="bg-gray-300 relative right-5 max-sm:right-1 mt-10 w-full max-sm:w-[23pc] p-4 rounded-lg shadow-md">
      <h1 className="text-xl font-semibold">Leave a review</h1>
      <p>
        How was your experience with DR.{" "}
        <span className="font-semibold">{Doctor?.Name || "Loading..."}</span>
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex gap-5 items-center mt-5"
      >
        <div className="w-full">
          <input
            type="text"
            placeholder="Leave a review..."
            className="p-3 w-full rounded-md"
            {...register("Title", { required: "Title is required" })}
          />
          {errors.Title && (
            <p className="mt-1 text-sm text-red-600">
              {errors.Title.message as string}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="p-3 font-bold text-white bg-red-600 rounded-md transition-all duration-500 hover:bg-red-400"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default FormReviewDoctor;
