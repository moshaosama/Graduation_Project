import clsx from "clsx";
import { container } from "../../../Style";
import { SecurityData } from "../Data/SecurityData";

type SecurityType = {
  id: number;
  icon: string;
  title: string;
  description: string;
};

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

        <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-5 mt-10">
          {SecurityData?.map((data: SecurityType) => (
            <div key={data.id} className="bg-[#1f40c35d] rounded-xl p-5">
              <div className="flex gap-2 items-center">
                <i>{data.icon}</i>
                <h1 className="text-2xl font-bold text-[#1F3FC3]">
                  {data.title}
                </h1>
              </div>
              <p className="text-sm text-[#464646] mt-5">{data.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Security;
