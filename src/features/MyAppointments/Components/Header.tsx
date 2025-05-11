import clsx from "clsx";
import { container } from "../../../Style";

const Header = () => {
  return (
    <>
      <div className="bg-[#001D96] -my-10  h-44 mb-8 flex flex-col">
        <p className={clsx("text-white", container)}>
          Home / Schedule / My Appointments
        </p>
        <h1 className="flex justify-center items-center w-full h-12 text-white text-5xl font-bold">
          My Appointments
        </h1>
      </div>
    </>
  );
};

export default Header;
