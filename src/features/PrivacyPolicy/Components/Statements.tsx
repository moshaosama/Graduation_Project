import clsx from "clsx";
import { container } from "../../../Style";

const Statements = () => {
  return (
    <>
      <div className={container}>
        <div>
          <hr
            className={clsx(
              "h-1 rounded-xl max-sm:w-10 border-2 w-72 border-[#3E8BFF] transition-all duration-500"
            )}
          />
          <div className="mt-7 text-[#1F3FC3]">
            <p className="text-3xl">Privacy</p>
            <h1 className="text-5xl font-bold">Statements</h1>
          </div>

          <div className="mt-7 bg-[#1f40c35d] p-5 rounded-xl flex flex-col gap-5">
            <div className="flex gap-2 items-center">
              <i className="text-xl">🔐</i>
              <h1 className="text-lg font-bold text-[#1F3FC3]">
                Privacy Policy
              </h1>
            </div>
            <p className="text-[#464646]">
              We value your privacy and are committed to protecting your
              personal information. This Privacy Policy explains how we collect,
              use, and safeguard your data when you use our medical services. We
              follow strict confidentiality and data protection standards to
              ensure your information remains secure. By using our platform, you
              agree to the practices described in this policy. Your trust is
              important to us, and we strive to be transparent about how your
              data is handled. If you have any questions, please contact us at
              any time.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Statements;
