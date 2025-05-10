import clsx from "clsx";
import { container } from "../../../Style";
import useOpenPage from "../Hooks/useOpenPage";
import { OurStoryCardData } from "../Data/OurStoryData";
import { OurStoryType } from "../Types/OurStoryType";
import useScrollTrigger from "../../../Hooks/useScrollTrigger";

const OurStory = () => {
    const { isOpen } = useOpenPage();
    const scrolled = useScrollTrigger();
  return (
    <div className={clsx(container)}>
      <div className="flex flex-col gap-2 text-[#3E8BFF]">
        <hr className={clsx("h-1 rounded-xl border-2 border-[#3E8BFF] transition-all duration-500", isOpen ? "opacity-100 w-96":"opacity-0 w-0")}/>
        <div>
            <h4 className="text-5xl font-semibold">Know</h4>
            <h1 className="text-6xl font-bold"><span className="font-serif font-semibold">our</span> story</h1>
        </div>
        <div className={clsx("mt-10 flex justify-center w-[170dvh] items-start transition-all duration-500", scrolled ? "opacity-100 gap-7":"opacity-0 gap-96")}>
            {
                OurStoryCardData.map((story: OurStoryType) => (
                    <div key={story.id} className="bg-[#0056d642] rounded-xl p-5 max-w-96 h-[30pc]">
                        <i>{story.icon}</i>
                        <h1 className="text-black text-xl font-semibold">{story.question}</h1>
                        <h1 className="text-[#0056D6] text-2xl font-bold">{story.title}</h1>
                        <p className="text-[#878787] text-md mt-3 font-normal">{story.answer}</p>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  );
};      

export default OurStory;
