import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Store/Store";
import { useEffect, useRef } from "react";
import { fetchgetReviews } from "../../Store/Reducer/Review/getReviewSlice";
import { useParams } from "react-router";
import useTransition from "../../Hooks/useTransition";

type ReviewCartType = {
  title: string;
  id: number;
  userName: string;
  Date: string;
};

const InitialState = {
  opacity: "0",
  right: "10pc",
};

const Styles = {
  opacity: "1",
  right: "1.3pc",
};

const ReviewsCard = () => {
  const state = useSelector((state: RootState) => state.Reviews);
  const dispatch = useDispatch<AppDispatch>();
  const ReviewsCard = useRef(null);
  const { id } = useParams();
  useTransition(ReviewsCard, InitialState, Styles);

  useEffect(() => {
    if (id) {
      dispatch(fetchgetReviews(+id));
    }
  }, [id, dispatch]);

  return (
    <>
      {state.loading && <p>Loading...</p>}
      {state.error && <p>{state.error}</p>}
      {state?.data?.result?.length > 0 ? (
        state.data.result.map((el: ReviewCartType) => (
          <div
            className="w-full right-5 max-sm:right-2  relative max-sm:w-[23pc] mt-5 mb-3 rounded-xl transition-all duration-1000 shadow-xl border-[3px] p-4 border-solid"
            key={el.id}
            ref={ReviewsCard}
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
              <p className="font-bold text-gray-400">
                {el.userName} - {el.Date}
              </p>
            </div>
          </div>
        ))
      ) : (
        <p>No reviews available.</p>
      )}
    </>
  );
};

export default ReviewsCard;
