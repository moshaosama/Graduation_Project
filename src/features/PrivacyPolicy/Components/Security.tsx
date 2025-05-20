import clsx from "clsx";
import { container } from "../../../Style";
import { SecurityData } from "../Data/SecurityData";
import ServiceCard from "../../../Components/ServiceCard";

const Security = () => {
  return (
    <div className={clsx(container)}>
      <div className="mt-10">
        <hr
          className={clsx(
            "h-1 rounded-xl max-sm:w-10 border-2 w-72 border-[#3E8BFF] transition-all duration-500"
          )}
        />
        <div className="mt-7 text-[#1F3FC3]">
          <p className="text-3xl">Privacy</p>
          <h1 className="text-5xl font-bold">and Security</h1>
        </div>

        <ServiceCard data={SecurityData} NumberGrid={3} />
      </div>
    </div>
  );
};

export default Security;
