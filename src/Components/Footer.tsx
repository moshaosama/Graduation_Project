import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className=" bg-blue-600 w-full py-7">
      <div className="flex justify-between mx-6 ">
        <div className="flex flex-col gap-4 sm:contents">
          <div className="flex justify-between sm:contents">
            <div>
              <h1 className="font-bold text-xl max-sm:text-sm">BrandNam</h1>
              <div className="flex flex-col gap-2 text-white my-2">
                <a href="" className="hover:underline text-sm">
                  About Us
                </a>
                <a href="" className="hover:underline text-sm">
                  Our Team
                </a>
                <a href="" className="hover:underline text-sm">
                  Careers
                </a>
                <a href="" className="hover:underline text-sm">
                  Press
                </a>
              </div>
            </div>
            <div>
              <h1 className="font-bold text-xl max-sm:text-sm">Search By</h1>
              <div className="flex flex-col gap-2 text-white">
                <a href="" className="hover:underline">
                  Speciality
                </a>
                <a href="" className="hover:underline">
                  Area
                </a>
                <a href="" className="hover:underline">
                  Insurance
                </a>
                <a href="" className="hover:underline">
                  Hospital
                </a>
                <a href="" className="hover:underline">
                  Center
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-row-reverse gap sm:contents">
            <div>
              <h1 className="font-bold text-xl max-sm:text-sm">
                Are You A Doctor ?
              </h1>
              <div className="flex flex-col gap-2 text-white">
                <a href="" className="hover:underline">
                  Join Vezeeta doctors
                </a>
              </div>
            </div>
            <div>
              <h1 className="font-bold text-xl max-sm:text-sm">Need Help ?</h1>
              <div className="flex flex-col gap-2 text-white">
                <a href="" className="hover:underline">
                  Medical Library
                </a>
                <Link to={"/contactus"} className="hover:underline">
                  Contact Us
                </Link>
                <a href="" className="hover:underline">
                  Terms Of Use
                </a>
                <a href="" className="hover:underline">
                  Privacy Policy
                </a>
                <a href="" className="hover:underline">
                  Doctors Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5 items-center max-sm:hidden">
          <FaFacebook className="text-white text-3xl cursor-pointer" />
          <FaInstagram className="text-white text-3xl cursor-pointer" />
          <FaXTwitter className="text-white text-3xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
