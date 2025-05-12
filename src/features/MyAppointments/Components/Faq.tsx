import { container } from "../../../Style";
import clsx from "clsx";
const Faq = () => {
  return (
    <div className={clsx(container)}>
      <div className="mt-20 border-2 border-solid border-gray-400 w-full p-10 rounded-lg relative">
        <div className="bg-blue-500 p-2 rounded-xl w-32 text-center text-white font-bold absolute -top-5">
          <h1>FAQs</h1>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-5">
            <div className="bg-[#A5A6F6] w-5 h-5 rounded-full"></div>
            <h1 className="font-semibold">What is a Payment Gateway?</h1>
          </div>
          <div className="flex items-center gap-5">
            <div className="bg-[#5D5FEF] w-5 h-5 rounded-full"></div>
            <h1 className="font-semibold">
              Do I need to pay to Instapay even when there is no transaction
              going on in my business?
            </h1>
          </div>
          <div className="flex items-center gap-5">
            <div className="bg-[#A5A6F6] w-5 h-5 rounded-full"></div>
            <h1 className="font-semibold">
              What platforms does ACME payment gateway support?
            </h1>
          </div>
          <div className="flex items-center gap-5">
            <div className="bg-[#A5A6F6] w-5 h-5 rounded-full"></div>
            <h1 className="font-semibold">
              Does ACME provide international payments support?
            </h1>
          </div>
          <div className="flex items-center gap-5">
            <div className="bg-[#A5A6F6] w-5 h-5 rounded-full"></div>
            <h1 className="font-semibold">
              Is there any setup fee or annual maintainance fee that I need to
              pay regularly?
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
