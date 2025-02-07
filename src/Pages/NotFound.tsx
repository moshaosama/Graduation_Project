import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="flex max-sm:flex-col justify-center items-center h-screen">
        <img
          src="/3dlat.net_23_17_89d0_98a8bff7b05917-removebg-preview.png"
          alt="Disney.png"
          className="max-sm:w-40"
        />
        <div className="flex flex-col gap-10">
          <h1 className="text-6xl font-bold w-96 max-sm:text-2xl max-sm:text-center">
            OOPS! PAGE NOT FOUND
          </h1>
          <p className="text-2xl text-gray-700 w-96 max-sm:text-xl max-sm:text-center">
            You must have picked the wrong door because i haven't been able to
            lay my eye on the page you've been searched for.
          </p>
          <Link to={""} className="max-sm:flex max-sm:justify-center">
            <button className="bg-blue-500 p-4 w-52 text-white rounded-xl hover:bg-blue-700 transition-all duration-500">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
