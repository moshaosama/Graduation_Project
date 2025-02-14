import { Link } from "react-router";
import NewService from "./newService";

const MedicineTracker = () => {
  return (
    <>
      <NewService
        Image={
          <img
            src="/2689957-removebg-preview.png"
            alt="MedicineTracker.png"
            className="w-20 max-sm:w-10"
          />
        }
        Title="Medication Tracker"
        Description=" This medication reminder tool enables a patient and their healthcare worker to create a personalised treatment schedule"
        Button={
          <Link to={"/listmedicine"}>
            <button className="bg-blue-500 p-4 w-72 rounded-xl text-white font-bold">
              See Details
            </button>
          </Link>
        }
        BackGroundFrom="white"
        BackGroundTo="white"
        ColorText="black"
      />
    </>
  );
};

export default MedicineTracker;
