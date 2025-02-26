import { CiSettings } from "react-icons/ci";

const OurService = () => {
  return (
    <>
      <div className="bg-blue-700 py-16 flex gap-5 justify-center items-center">
        <CiSettings className="text-5xl text-white" />
        <h1 className="text-white text-2xl flex items-center gap-2">
          our <span className="text-5xl font-bold">Services</span>
        </h1>
      </div>

      <div>
        <h1>Mosha</h1>
      </div>
    </>
  );
};

export default OurService;
