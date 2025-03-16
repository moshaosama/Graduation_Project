import { container } from "../../Style";
import AboutDoctor from "./AboutDoctor/AboutDoctor";
import DetailsProfileDoctor from "./DetailsProfileDoctor/DetailsProfileDoctor";
import ReviewDoctor from "./ReviewsDoctor/ReviewDoctor";

const ProfileDoctorCom = () => {
  return (
    <div
      className={container}
      style={{ flexDirection: "column", alignItems: "start" }}
    >
      <DetailsProfileDoctor />
      <AboutDoctor />
      <ReviewDoctor />
    </div>
  );
};

export default ProfileDoctorCom;
