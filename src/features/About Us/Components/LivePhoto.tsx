import clsx from "clsx";
import useScrollTrigger from "../../../Hooks/useScrollTrigger";

const LivePhoto = () => {
  const scrolled = useScrollTrigger(12);
  return (
    <div
      className={clsx(
        "mt-10 flex justify-center w-[170dvh] max-2xl:w-full max-sm:w-fit items-start max-sm:mx-24 max-2xl:mx-60 transition-all duration-500",
        scrolled ? "opacity-100 gap-7" : "opacity-0 gap-96"
      )}
    >
      <div className="relative flex mt-20">
        <div className="bg-[#1f40c36b] rounded-xl w-60 max-2xl:w-48 max-sm:w-48 h-60 max-2xl:h-48 max-sm:h-48"></div>
        <div className="bg-[#1f40c36b] rounded-xl absolute  right-20 top-20 max-2xl:w-48 max-sm:w-48 max-2xl:h-48 max-sm:h-48 w-60 h-60"></div>
        <img
          src="Ellipse 17.png"
          alt="logo.png"
          className="w-36 max-2xl:w-32 max-sm:w-32 h-36 max-2xl:h-32 max-sm:h-32 absolute right-20 top-20"
        />
        <div className="border-[7px]  rounded-full border-dotted border-[#6893E4] w-52 max-2xl:w-40 max-sm:w-40 h-52 max-2xl:h-40 max-sm:h-40 absolute right-14 max-2xl:right-16 max-sm:right-16 top-14 max-2xl:top-14 max-sm:top-14  animate-spin-slow"></div>
        <div className="border-[7px]  rounded-full border-dotted border-[#6893E4] w-64 max-2xl:w-56 max-sm:w-56 h-64 max-2xl:h-56 max-sm:h-56 absolute top-8 max-2xl:top-6 max-sm:top-6 right-8 max-2xl:right-7 max-sm:right-7 animate-spin-slow"></div>
      </div>
    </div>
  );
};

export default LivePhoto;
