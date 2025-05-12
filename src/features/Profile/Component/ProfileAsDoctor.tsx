import { FaHome } from "react-icons/fa";
import { CiLogout, CiSettings } from "react-icons/ci";
import { IoHeartOutline } from "react-icons/io5";
import FormProfileDoctor from "./FormProfileDoctor";
import { Link } from "react-router-dom";

const ProfileAsDoctor = () => {
  return (
    <div className="flex max-sm:flex-col">
      <div className="bg-blue-500 w-96 p-4 -mt-7 rounded-r-xl mb-20  rounded-br-xl">
        <div className="flex items-center justify-center gap-10">
          <h1 className="text-white font-bold text-2xl">My Profile</h1>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col mt-8 items-center justify-center gap-6">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/026/375/249/small_2x/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg"
              alt="Doctor.png"
              className="w-24 h-24 object-cover rounded-full border-[3px] border-gray-700"
            />
            <h1 className="text-white font-semibold">Dr/ Mohamed</h1>
          </div>

          <div className="flex flex-col gap-6 mx-10">
            <Link to={"/"}>
              <div className="flex items-center gap-5 px-4   text-xl text-white font-semibold hover:bg-[blue] transition-all duration-200 py-2 rounded-xl cursor-pointer">
                <FaHome />
                <h1>Home</h1>
              </div>
            </Link>
            <div className="flex items-center gap-5 px-4  text-xl text-white font-semibold hover:bg-[blue] transition-all duration-200 py-2 rounded-xl cursor-pointer">
              <CiSettings />
              <h1>Settings</h1>
            </div>
            <div className="flex items-center gap-5 px-4  text-xl text-white font-semibold hover:bg-[blue] transition-all duration-200 py-2 rounded-xl cursor-pointer">
              <IoHeartOutline />
              <h1>Favourites </h1>
            </div>
            <div className="flex items-center gap-5 px-4  text-xl text-white font-semibold hover:bg-[blue] transition-all duration-200 py-2 rounded-xl cursor-pointer">
              <CiLogout />
              <h1>Log out</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-72 max-sm:mx-0">
        <FormProfileDoctor />
      </div>
    </div>
  );
};

export default ProfileAsDoctor;
