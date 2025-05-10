import clsx from "clsx"
import { container } from "../../../Style"
import useOpenPage from "../Hooks/useOpenPage";
import useScrollTrigger from "../../../Hooks/useScrollTrigger";

const OurVision = () => {
    const { isOpen } = useOpenPage();
    const scrolled = useScrollTrigger();
    return (
        <div className={clsx(container)}>               
      <div className="flex flex-col gap-2 text-[#3E8BFF] mt-20">
        <hr className={clsx("h-1 rounded-xl border-2 border-[#3E8BFF] transition-all duration-500", isOpen ? "opacity-100 w-96":"opacity-0 w-0")}/>
        <div>
            <h1 className="text-6xl font-bold"><span className="font-serif font-semibold">our</span> Vision</h1>
        </div>
        <div className={clsx("mt-10 flex justify-center w-[170dvh] items-start transition-all duration-500", scrolled ? "opacity-100 gap-7":"opacity-0 gap-96")}>
            
        </div>
      </div>
    </div>              
    )
}   

export default OurVision