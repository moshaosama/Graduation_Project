import { container } from "../../Style";

import AboutDoctor from "./AboutDoctor/AboutDoctor";
import DetailsProfileDoctor from "./DetailsProfileDoctor/DetailsProfileDoctor";
import FormReviewDoctor from "./FormReviewsDoctor/FormReviewDoctor";
import { lazy, Suspense } from "react";

const ReviewsCard = lazy(() => import("../ReviewsCard/ReviewsCard"));
const ProfileDoctorCom = () => {
  return (
    <div
      className={container}
      style={{ flexDirection: "column", alignItems: "start" }}
    >
      <div className="max-2xl:w-full">
        <DetailsProfileDoctor />
        <AboutDoctor />
        <Suspense fallback="Loading...">
          <ReviewsCard />
        </Suspense>
        <FormReviewDoctor />
      </div>
    </div>
  );
};

export default ProfileDoctorCom;
