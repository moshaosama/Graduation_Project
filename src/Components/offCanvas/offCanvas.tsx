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
  const LinksLists = [
    {
      Title: "Home Page",
      Icon: <FaHome className="font-bold text-2xl " />,
      linkTo: "/",
      onclick: () => props.setActive(false),
    },
    {
      Title: "Join now as a user",
      Icon: <FaUser className="font-bold text-2xl " />,
      onclick: () => props.setActive(false),
    },
    {
      Title: "bransName for Doctors",
      Icon: <FaUserCheck className="font-bold text-2xl " />,
      onclick: () => props.setActive(false),
    },
    {
      Title: "Login",
      Icon: <CiLogin className="font-bold text-2xl " />,
      onclick: () => props.setActive(false),
      linkTo: "/login",
    },
    {
      Title: "Contact Us",
      Icon: <FaPhone className="font-bold text-2xl " />,
      onclick: () => props.setActive(false),
      linkTo: "/contactus",
    },
  ];
  return (
    <>
      <div
        className={`fixed top-0 right-0  ${
          props.Active ? "w-64" : "w-0"
        }  h-full z-50 transition-all duration-300 bg-[#82c0ff] text-white sm:hidden rounded-l-xl`}
      >
        {props.Active ? (
          <div>
            <div
              className="m-5 text-center cursor-pointer text-black"
              onClick={() => props.setActive(!props.Active)}
            >
              <FaArrowRight />
            </div>
            <hr />
            {LinksLists.map((el) => (
              <Link to={`${el.linkTo}`} onClick={el.onclick}>
                <Links Title={el.Title} Icon={el.Icon} />
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
}

export default OffCanvas;
