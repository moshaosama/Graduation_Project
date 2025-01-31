import { FaFacebookF } from "react-icons/fa";
import Inputs from "../../../Form/Inputs";
import { FaXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";

const FormContact = () => {
  return (
    <>
      <div className="mx-64 my-6">
        <div className="bg-white shadow-lg flex gap-10 rounded-xl p-5">
          <div className="w-full ">
            <h1 className="text-2xl text-[#0a84ff7a] font-semibold">
              Contact Us
            </h1>
            <p className="text-sm text-[#747474] my-2 font-semibold">
              We will be happy to receive your inquiries and suggestions.
            </p>
            <form action="">
              <Inputs Label="Your Name" Type="userName" />
              <Inputs Label="Mobile Number" Type="number" />
              <Inputs Label="Email Address" Type="text" />
              <p className="flex my-2 justify-between">
                <label htmlFor="Comment">
                  Comments<span className="text-[red]">*</span>
                </label>
                <textarea className="w-96 h-24 border-[#ddd] border-[1px] rounded-lg shadow-sm" />
              </p>
            </form>
            <div className="bg-[red] w-1/12 mx-72 flex justify-center rounded-lg hover:bg-red-700 transition-all duration-500">
              <button className="p-1 text-white font-bold cursor-pointer ">
                Send
              </button>
            </div>
          </div>

          <div className="w-full">
            <h1 className="text-2xl text-[#0a84ff7a] font-semibold">Call Us</h1>
            <p className="text-sm text-[#747474] my-2 font-semibold">
              16676 Cost of regular call
            </p>
            <p className="text-sm text-[#747474] font-semibold">
              From outside Egypt call:
            </p>
            <p className="text-sm text-[#747474] font-bold">+2 01004365707</p>
            <h1 className="text-xl text-[#0a84ff7a] my-3 font-semibold">
              Address
            </h1>
            <p className="text-sm text-[#747474] font-semibold">
              6 October , Cairo ,Egypt
            </p>
            <h1 className="text-xl text-[#0a84ff7a] my-3 font-semibold">
              Mail Us
            </h1>
            <p className="text-sm text-[#747474] font-semibold">
              mohamedOSFekry@gmail.com
            </p>
            <div className="flex gap-2 my-5">
              <FaFacebookF className="text-2xl text-blue-500" />
              <FiInstagram className="text-2xl text-red-500" />
              <FaXTwitter className="text-2xl text-blue-400" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormContact;
