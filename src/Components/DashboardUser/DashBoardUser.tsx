import { Link } from "react-router-dom";
import { User } from "../../Types/Navbar";
import RouteProfileFactory from "../../Utils/RouteProfileFactory";

const DashBoardUser = () => {
  const handleClickLogout = () => {
    window.localStorage.removeItem("Token");
    window.localStorage.removeItem("User");
    window.location.reload();
  };
  const User: User = JSON.parse(window.localStorage.getItem("User")!);

  return (
    <div className="absolute  bg-gray-200 w-44 z-50 rounded-lg mt-1">
      <div className="font-bold">
        <Link to={RouteProfileFactory(User.Status, User.DoctorId)}>
          <div className="hover:bg-[#302e2e] cursor-pointer p-2 hover:text-white">
            <h1>My Profile</h1>
          </div>
        </Link>
        <div className="hover:bg-[#302e2e] cursor-pointer p-2 hover:text-white">
          <h1>My Appointments</h1>
        </div>
        <Link to={"/listmedicine"}>
          <div className="hover:bg-[#302e2e] cursor-pointer p-2 hover:text-white">
            <h1>My MedicineList</h1>
          </div>
        </Link>
        <div
          className="hover:bg-[#302e2e] cursor-pointer p-2 hover:text-white"
          onClick={handleClickLogout}
        >
          <h1>LogOut</h1>
        </div>
      </div>
    </div>
  );
};

export default DashBoardUser;
