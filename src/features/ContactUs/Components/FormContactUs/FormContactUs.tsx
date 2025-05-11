import { CiLocationOn } from "react-icons/ci";
import { BiPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

import FormContectusList from "./FormContectusList";

const FormContactUs = () => {
  return (
    <div className="border-[3px] border-solid m-10 h-fit mx-36 max-sm:-mx-4 max-sm:w-[24pc] p-[2.4pc] rounded-md shadow-2xl border-gray-500">
      <h1 className="text-3xl font-bold text-[#343437] flex justify-center">
        Contact US
      </h1>
      <div className="flex items-center mt-10 mx-5 max-sm:mx-0 max-sm:flex-col">
        <div className="mr-10 max-sm:ml-10 max-sm:mb-10">
          <FormContectusList />
        </div>
        <div className="flex flex-col gap-7">
          <div className="flex items-center gap-3">
            <CiLocationOn className="text-xl" />
            <p>Akhbar Academy, 6th of October city</p>
          </div>
          <div className="flex items-center gap-3">
            <BiPhoneCall className="text-xl" />
            <p>+20 1004365707</p>
          </div>
          <div className="flex items-center gap-3">
            <MdEmail className="text-xl" />
            <p>mohamedOSFekry@gmail.com</p>
          </div>

          <div className="flex gap-7">
            <BsYoutube />
            <BsFacebook />
            <BsInstagram />
            <BsTwitter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormContactUs;
