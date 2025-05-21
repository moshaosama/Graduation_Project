import clsx from "clsx";
import { container } from "../../../Style";
import useScrollTrigger from "../../../Hooks/useScrollTrigger";
import LivePhoto from "./LivePhoto";

const OurVision = () => {
  const scrolled = useScrollTrigger(30);
  return (
    <div className={clsx(container)}>
      <div className="flex flex-col gap-2 text-[#3E8BFF] mt-20 relative">
        <hr
          className={clsx(
            "h-1 rounded-xl border-2 max-sm:w-10 border-[#3E8BFF] transition-all duration-500",
            scrolled ? "opacity-100 w-96" : "opacity-0 w-0"
          )}
        />
        <div>
          <h1 className="text-6xl font-bold">
            <span className="font-serif font-semibold">our</span> Vision
          </h1>
        </div>

        <div className="mb-96">
          <LivePhoto />
          <div className="bg-[#0056d642] max-sm:hidden rounded-xl p-5 w-72 h-52 absolute top-40 ">
            <div className="flex items-center gap-4">
              <i className="text-">🌍</i>
              <h1>Impact</h1>
            </div>
            <p>
              To empower users across communities with quick, reliable medical
              services they can access anytime, anywhere.
            </p>
          </div>
          <div className="bg-[#0056d642] rounded-xl max-sm:hidden p-5 w-72 h-52 absolute top-64 right-0 max-2xl:-right-[21pc] max-2xl:top-20">
            <div className="flex items-center gap-4">
              <i className="text-">💡</i>
              <h1>Innovation</h1>
            </div>
            <p>
              We aim to integrate AI, modern web technologies, and a secure
              database system to transform how people approach self-diagnosis
              and find care.
            </p>
          </div>
          <div className="bg-[#0056d642] rounded-xl max-sm:hidden p-5 w-72 h-52 absolute bottom-0 left-[55pc] max-2xl:left-[45pc]">
            <div className="flex items-center gap-4">
              <i className="text-">🔮</i>
              <h1>Innovation</h1>
            </div>
            <p>
              MediPulse is more than a project—it's the start of a bigger
              mission. We plan to expand into mobile apps, multilingual support,
              and real medical partnerships.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurVision;
