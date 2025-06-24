import { Link } from "react-router";
import { PulseLoader, RingLoader } from "react-spinners";

const Processing = () => {
  return (
    <div className="h-[80vh] flex justify-center items-center flex-col gap-20">
      <RingLoader size={96} />
      <h1 className="flex items-center text-5xl font-bold">
        Processing
        <PulseLoader className="mt-10" size={10} />
      </h1>
      <Link to={"/"} className="max-sm:flex max-sm:justify-center">
        <button className="p-4 w-52 text-white bg-blue-500 rounded-xl transition-all duration-500 hover:bg-blue-700">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default Processing;
