import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="bg-[#007fff4a] w-full py-7 rounded-tr-lg">
      <div className="flex justify-between mx-6 ">
        <div className="flex flex-col gap-4 sm:contents">
          <div className="flex justify-between sm:contents">
            <div>
              <div className="flex items-center gap-5">
                <img src="Vector.png" alt="" className="w-10" />
                <h1 className="font-bold text-2xl max-sm:text-sm">MediPulse</h1>
              </div>
              <div className="flex flex-col gap-2  text-white my-5">
                <a
                  href=""
                  className="hover:underline text-sm text-black font-bold"
                >
                  About Us
                </a>
                <a
                  href=""
                  className="hover:underline text-sm text-black font-bold"
                >
                  Our Team
                </a>
                <a
                  href=""
                  className="hover:underline text-sm text-black font-bold"
                >
                  Careers
                </a>
                <a
                  href=""
                  className="hover:underline text-sm text-black font-bold"
                >
                  Press
                </a>
              </div>
            </div>
            <div>
              <h1 className="font-bold text-2xl max-sm:text-sm ">Search By</h1>
              <div className="flex flex-col my-5 gap-2 text-white">
                <a href="" className="hover:underline text-black font-bold ">
                  Speciality
                </a>
                <a href="" className="hover:underline text-black font-bold ">
                  Area
                </a>
                <a href="" className="hover:underline text-black font-bold ">
                  Insurance
                </a>
                <a href="" className="hover:underline text-black font-bold ">
                  Hospital
                </a>
                <a href="" className="hover:underline text-black font-bold ">
                  Center
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-row-reverse gap sm:contents">
            <div>
              <h1 className="font-bold text-2xl max-sm:text-sm">
                Are You A Doctor ?
              </h1>
              <div className="flex flex-col my-5 gap-2 text-white">
                <a href="" className="hover:underline text-black font-bold">
                  Join Vezeeta doctors
                </a>
              </div>
            </div>
            <div>
              <h1 className="font-bold text-2xl max-sm:text-sm text-black">
                Need Help ?
              </h1>
              <div className="flex flex-col my-5 gap-2 text-black font-bold">
                <a href="" className="hover:underline">
                  Medical Library
                </a>
                <Link to={"/contactus"} className="hover:underline">
                  Contact Us
                </Link>
                <a href="" className="hover:underline text-black font-bold">
                  Terms Of Use
                </a>
                <a href="" className="hover:underline text-black font-bold">
                  Privacy Policy
                </a>
                <a href="" className="hover:underline text-black font-bold">
                  Doctors Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex gap-5 items-center max-sm:hidden">
          <FaFacebook className="text-white text-3xl cursor-pointer" />
          <FaInstagram className="text-white text-3xl cursor-pointer" />
          <FaXTwitter className="text-white text-3xl cursor-pointer" />
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
