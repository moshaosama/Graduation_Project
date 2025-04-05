import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Store/Store";
import { useEffect } from "react";
import { fetchgetReviews } from "../../Store/Reducer/Review/getReviewSlice";
import { useParams } from "react-router";

type ReviewCartType = {
  title: string;
  id: number;
  userName: string;
  Date: string;
};

const ReviewsCard = () => {
  const state = useSelector((state: RootState) => state.Reviews);
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchgetReviews(+id!));
  }, [id, dispatch]);

  return (
    <>
      {id
        ? state?.data?.result?.map((el: ReviewCartType) => {
            return (
              <div
                className="w-full mt-5 border-[3px] p-4 border-solid"
                key={el.id}
              >
                <img
                  src="/1_k5m8q1rRpdQ-H5NogaHnBQ-removebg-preview.png"
                  alt="Rating.png"
                  loading="lazy"
                  decoding="async"
                  className="w-28"
                />
                <p className="mx-2 ">{el.title}</p>
                <div className="flex justify-end">
                  <p className="text-gray-400 font-bold">
                    {el.userName} - {el.Date}
                  </p>
                </div>
              </div>
            );
          })
        : null}
    </>
  );
};

export default ReviewsCard;
