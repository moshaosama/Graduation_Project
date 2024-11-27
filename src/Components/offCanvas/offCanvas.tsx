import { useState } from "react";
import {
  FaArrowRight,
  FaBars,
  FaHome,
  FaPhone,
  FaUser,
  FaUserCheck,
} from "react-icons/fa";
import Links from "./links";
import { CiLogin } from "react-icons/ci";
import { FcContacts } from "react-icons/fc";

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
          <Links
            Title={"Login"}
            Icon={<CiLogin className="font-bold text-2xl " />}
          />
          <hr />
          <Links
            Title={"Contact Us"}
            Icon={<FaPhone className="font-bold text-2xl " />}
          />
          <hr />
        </div>
      ) : null}
      {/* <div className="sm:hidden absolute right-0  top-0 bg-blue-600 h-[56.95pc] w-72">
        <h1>Mosha</h1>
      </div> */}
    </>
  );
}

export default OffCanvas;
