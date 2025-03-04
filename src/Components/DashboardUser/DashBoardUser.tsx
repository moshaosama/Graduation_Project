import { Link } from "react-router-dom";

const DashBoardUser = () => {
  const handleClickLogout = () => {
    window.localStorage.removeItem("Token");
    window.localStorage.removeItem("User");
    window.location.reload();
  };
  return (
    <div className="absolute  bg-white w-44 z-50 rounded-lg mt-1">
      <div className="font-bold">
        <Link to={"/profile/info"}>
          <div className="hover:bg-[#302e2e] cursor-pointer p-2 hover:text-white">
            <h1>My Profile</h1>
          </div>
        </Link>
        <div className="hover:bg-[#302e2e] cursor-pointer p-2 hover:text-white">
          <h1>My Appointments</h1>
        </div>
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
