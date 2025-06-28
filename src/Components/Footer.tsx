import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#1F3FC3] w-full py-7 max-sm:w-[25.8pc] rounded-tr-lg text-white">
      <div className="mx-80 max-sm:mx-5 border flex justify-between max-sm:flex-col max-sm:gap-8 max-2xl:mx-10 border-[#ffffff59]  rounded-lg p-7 ">
        <div className="flex flex-col gap-4 w-96 max-sm:w-80">
          <div className="flex gap-2 items-center">
            <img src="Vector.png" alt="" className="w-8" loading="lazy" />
            <h1
              className="text-xl font-bold max-sm:text-sm"
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
              className="p-3 w-80 rounded-md rounded-r-none max-sm:w-64"
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
        <div className="flex flex-col justify-between max-sm:gap-4">
          <h1 className="font-bold">Quick Links</h1>
          <a href="/">Home Page</a>
          <p>Our Services</p>
          <a href="/contact">Contact Us</a>
          <a href="/aboutus">About Us</a>
          <p>FAQs</p>
        </div>
        <div className="flex flex-col justify-between max-sm:gap-4">
          <h1 className="font-bold">Stay Connected</h1>
          <p>Facebook Page</p>
          <p>Instagram Feed</p>
          <p>Twitter Updates</p>
          <p>LinkedIn Profile</p>
          <p>YouTube Channel</p>
        </div>
        <div className="flex flex-col justify-between max-sm:gap-4">
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
