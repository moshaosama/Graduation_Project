import {
  FaArrowRight,
  FaHome,
  FaPhone,
  FaUser,
  FaUserCheck,
} from "react-icons/fa";
import Links from "./links";
import { CiLogin } from "react-icons/ci";
import { Link } from "react-router";

function OffCanvas(props: { Active: boolean; setActive: any }) {
  return (
    <>
      {props.Active ? (
        <div
          className={`fixed top-0 right-0 w-0 h-full bg-blue-800 text-white sm:hidden ${
            props.Active
              ? "w-64 transition-all duration-600 ease-in-out"
              : "w-0"
          }`}
        >
          <div
            className="m-5 text-center cursor-pointer"
            onClick={() => props.setActive(!props.Active)}
          >
            <FaArrowRight />
          </div>
          <hr />
          <Links
            Title={"Home Page"}
            Icon={<FaHome className="font-bold text-2xl " />}
          />
          <hr />
          <Links
            Title={"Join now as a user"}
            Icon={<FaUser className="font-bold text-2xl " />}
          />
          <hr />
          <Links
            Title={"bransName for Doctors"}
            Icon={<FaUserCheck className="font-bold text-2xl " />}
          />
          <hr />
          <Link to={"/login"}>
            <Links
              Title={"Login"}
              Icon={<CiLogin className="font-bold text-2xl " />}
            />
          </Link>
          <hr />
          <Links
            Title={"Contact Us"}
            Icon={<FaPhone className="font-bold text-2xl " />}
          />
          <hr />
        </div>
      ) : null}
    </>
  );
}

export default OffCanvas;
