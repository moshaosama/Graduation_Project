import { FaFacebookF } from "react-icons/fa";
import Inputs from "../../../Form/Inputs";
import { FaXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { useState } from "react";

const FormContact = () => {
  const [Name, setName] = useState("");
  const [MobileNumber, setMobildNumber] = useState("");
  const [Email, setEmail] = useState("");
  const [Comment, setComment] = useState("");

  const handleClickSend = () => {
    fetch("http://localhost:3000/createcontact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Name,
        MobileNumber,
        Email,
        Comment,
      }),
    }).then((res) => {
      return res.json();
    });
  };
  return (
    <>
      <div className="mx-64 max-sm:mx-2 my-6">
        <div className="bg-white shadow-lg flex max-sm:flex-col gap-10 max-sm:gap-7 rounded-xl p-5">
          <div className="w-full ">
            <h1 className="text-2xl text-[#0a84ff7a] font-semibold">
              Contact Us
            </h1>
            <p className="text-sm text-[#747474] my-2 font-semibold">
              We will be happy to receive your inquiries and suggestions.
            </p>
            <form action="">
              <Inputs
                Label="Your Name"
                Type="userName"
                placeHolder="First Name and Last Name"
                ChangeEvent={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setName(e.target.value)
                }
              />
              <Inputs
                Label="Mobile Number"
                Type="number"
                placeHolder="Mobile Numbe"
                ChangeEvent={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setMobildNumber(e.target.value)
                }
              />
              <Inputs
                Label="Email Address"
                Type="text"
                placeHolder="example@gmail.com"
                ChangeEvent={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
              />
              <p className="flex max-sm:flex-col my-2 justify-between">
                <label htmlFor="Comment">
                  Comments<span className="text-[red]">*</span>
                </label>
                <textarea
                  className="w-96 max-sm:w-full h-24 border-[#ddd] border-[1px] rounded-lg shadow-sm"
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    setComment(e.target.value)
                  }
                />
              </p>
            </form>
            <div className="bg-[red] w-1/6 mx-72 max-sm:mx-0 flex justify-center rounded-lg hover:bg-red-700 transition-all duration-500">
              <button
                className="p-2 mx-5  text-white font-bold cursor-pointer"
                onClick={handleClickSend}
              >
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
              <FaFacebookF className="text-2xl text-blue-500 cursor-pointer" />
              <FiInstagram className="text-2xl text-red-500 cursor-pointer" />
              <FaXTwitter className="text-2xl text-blue-400 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormContact;
