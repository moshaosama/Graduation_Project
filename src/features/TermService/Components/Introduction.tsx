import clsx from "clsx";

import { container } from "../../../Style";

const Introduction = () => {
  return (
    <>
      <div className={clsx(container, "mt-10")}>
        <div>
          <div className="flex flex-col text-5xl  gap-2 text-[#1F3FC3]">
            <p>Introduction to</p>
            <h1 className=" font-bold">Using medipule</h1>
          </div>
          <div className="mt-10 bg-[#1f40c35d] flex flex-col gap-4 p-5 rounded-xl">
            <h1 className="text-xl font-bold text-[#1F3FC3] flex gap-2 items-center">
              <i>🩺</i>
              <h1>Introduction to Using medipule</h1>
            </h1>
            <p className="text-2xl">
              Welcome to medipule, your digital gateway to secure and accessible
              healthcare services. Before using any of the platform’s services,
              please read these Terms of Use carefully. This document serves as
              a legal agreement between you and the platform’s management. Its
              purpose is to protect your rights, clarify responsibilities, and
              ensure ethical service delivery. Please note that medipule does
              not offer direct medical diagnoses. Instead, it provides support
              tools like symptom checkers, appointment scheduling,
              teleconsultations, and doctor reviews. All medical guidance is for
              informational purposes only and does not replace professional
              consultation, especially in emergencies. We reserve the right to
              modify these terms at any time. You will be notified of major
              changes. By continuing to use the platform, you agree to the
              updated terms. We recommend reviewing this page regularly.
            </p>
          </div>
          <hr
            className={clsx(
              "h-1 rounded-xl mt-24 max-sm:w-10 border-2 w-72 border-[#3E8BFF] transition-all duration-500"
            )}
          />
        </div>
      </div>
    </>
  );
};

export default Introduction;
