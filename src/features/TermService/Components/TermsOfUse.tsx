import ServiceCard from "../../../Components/ServiceCard";
import { container } from "../../../Style";
import { TermsOfUseData } from "../Data/TermsOfUseData";

export const TermsOfUse = () => {
  return (
    <>
      <div className={container}>
        <div>
          <div className="flex flex-col text-5xl  gap-2 text-[#1F3FC3]">
            <p>Terms</p>
            <h1 className="font-bold">of Use</h1>
          </div>
          <div>
            <ServiceCard data={TermsOfUseData} NumberGrid={3} />
          </div>
        </div>
      </div>
    </>
  );
};
