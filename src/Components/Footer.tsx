// import { Link } from "react-router";

import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <div className="bg-blue-700 w-full py-7 rounded-tr-lg text-white">
//       <div className="flex justify-between mx-80 max-sm:mx-5 ">
//         <div className="flex flex-col gap-4 sm:contents ">
//           <div className="flex justify-between sm:contents ">
//             <div>
//               <div className="flex items-center gap-5">
//                 <img src="Vector.png" alt="" className="w-10 " loading="lazy" />
//                 <h1
//                   className="font-bold text-2xl max-sm:text-sm"
//                   style={{ fontFamily: "Arbutus Slab" }}
//                 >
//                   MediPulse
//                 </h1>
//               </div>
//               <div className="flex flex-col gap-2  text-white my-5">
//                 <a href="" className="hover:underline text-sm  font-bold ">
//                   About Us
//                 </a>
//                 <a href="" className="hover:underline text-sm  font-bold ">
//                   Our Team
//                 </a>
//                 <a href="" className="hover:underline text-sm  font-bold ">
//                   Careers
//                 </a>
//                 <a href="" className="hover:underline text-sm  font-bold">
//                   Press
//                 </a>
//               </div>
//             </div>
//             <div>
//               <h1
//                 className="font-extrabold text-2xl max-sm:text-sm "
//                 style={{ fontFamily: "Inter" }}
//               >
//                 Search By
//               </h1>
//               <div className="flex flex-col my-5 gap-2 text-white">
//                 <a
//                   href="/specialty-directory"
//                   className="hover:underline  font-bold text-lg"
//                   style={{ fontFamily: "Inter" }}
//                 >
//                   Speciality
//                 </a>
//                 <a
//                   href=""
//                   className="hover:underline  font-bold text-lg"
//                   style={{ fontFamily: "Inter" }}
//                 >
//                   Area
//                 </a>
//                 <a
//                   href=""
//                   className="hover:underline  font-bold text-lg"
//                   style={{ fontFamily: "Inter" }}
//                 >
//                   Insurance
//                 </a>
//                 <a
//                   href=""
//                   className="hover:underline  font-bold text-lg"
//                   style={{ fontFamily: "Inter" }}
//                 >
//                   Hospital
//                 </a>
//                 <a
//                   href=""
//                   className="hover:underline  font-bold text-lg"
//                   style={{ fontFamily: "Inter" }}
//                 >
//                   Center
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-row-reverse gap sm:contents">
//             <div>
//               <h1
//                 className="font-extrabold text-2xl max-sm:text-sm "
//                 style={{ fontFamily: "Inter" }}
//               >
//                 Are You A Doctor ?
//               </h1>
//               <div className="flex flex-col my-5 gap-2 text-white">
//                 <a
//                   href=""
//                   className="hover:underline  font-bold text-lg"
//                   style={{ fontFamily: "Inter" }}
//                 >
//                   Join Vezeeta doctors
//                 </a>
//               </div>
//             </div>
//             <div>
//               <h1
//                 className="font-extrabold text-2xl max-sm:text-sm "
//                 style={{ fontFamily: "Inter" }}
//               >
//                 Need Help ?
//               </h1>
//               <div className="flex flex-col my-5 gap-2  font-bold">
//                 <a
//                   href=""
//                   className="hover:underline  font-bold text-lg"
//                   style={{ fontFamily: "Inter" }}
//                 >
//                   Medical Library
//                 </a>
//                 <Link
//                   to={"/contact"}
//                   className="hover:underline  font-bold text-lg"
//                   style={{ fontFamily: "Inter" }}
//                 >
//                   Contact Us
//                 </Link>
//                 <a
//                   href=""
//                   className="hover:underline  font-bold text-lg"
//                   style={{ fontFamily: "Inter" }}
//                 >
//                   Terms Of Use
//                 </a>
//                 <a
//                   href=""
//                   className="hover:underline  font-bold text-lg"
//                   style={{ fontFamily: "Inter" }}
//                 >
//                   Privacy Policy
//                 </a>
//                 <a
//                   href=""
//                   className="hover:underline  font-bold text-lg"
//                   style={{ fontFamily: "Inter" }}
//                 >
//                   Doctors Privacy Policy
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* <div className="flex gap-5 items-center max-sm:hidden">
//           <FaFacebook className="text-white text-3xl cursor-pointer" />
//           <FaInstagram className="text-white text-3xl cursor-pointer" />
//           <FaXTwitter className="text-white text-3xl cursor-pointer" />
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default Footer;

const Footer = () => {
  return (
    <div className="bg-[#1F3FC3]  w-full py-7 rounded-tr-lg text-white">
      <div className="mx-80 max-sm:mx-5 border flex justify-between max-sm:flex-col max-sm:gap-8 border-[#ffffff59]  rounded-lg p-7 ">
        <div className="flex flex-col gap-4 w-96 max-sm:w-80">
          <div className="flex gap-2 items-center">
            <img src="Vector.png" alt="" className="w-8 " loading="lazy" />
            <h1
              className="font-bold text-xl max-sm:text-sm"
              style={{ fontFamily: "Arbutus Slab" }}
            >
              MediPulse
            </h1>
          </div>
          <p className="font-semibold">
            Subscribe to our newsletter for the latest updates on features and
            services.
          </p>
          <form>
            <input
              type="text"
              className="rounded-md rounded-r-none p-3 w-80 max-sm:w-64"
              placeholder="Your mail here"
            />
            <button className="p-3 w-16 bg-[#eee] font-bold text-black rounded-md rounded-l-none">
              Join
            </button>
          </form>
          <p className="text-[12px]">
            By subscribing, you consent to our Privacy Policy and receive
            updates.
          </p>
        </div>
        <div className="flex flex-col max-sm:gap-4 justify-between">
          <h1 className="font-bold">Quick Links</h1>
          <p>Home Page</p>
          <p>Our Services</p>
          <p>Contact Us</p>
          <p>About Us</p>
          <p>FAQs</p>
        </div>
        <div className="flex flex-col max-sm:gap-4 justify-between">
          <h1 className="font-bold">Stay Connected</h1>
          <p>Facebook Page</p>
          <p>Instagram Feed</p>
          <p>Twitter Updates</p>
          <p>LinkedIn Profile</p>
          <p>YouTube Channel</p>
        </div>
        <div className="flex flex-col max-sm:gap-4 justify-between">
          <h1 className="font-bold">Follow Us</h1>
          <p className="flex gap-2 items-center">
            <FaFacebook />
            Facebook
          </p>
          <p className="flex gap-2 items-center">
            <FaInstagram />
            Instagram
          </p>
          <p className="flex gap-2 items-center">
            <BsTwitterX />X
          </p>
          <p className="flex gap-2 items-center">
            <FaLinkedin />
            LinkedIn
          </p>
          <p className="flex gap-2 items-center">
            <FaYoutube />
            YouTube
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
