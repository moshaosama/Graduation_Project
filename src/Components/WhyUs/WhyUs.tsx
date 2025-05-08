import { MdHealthAndSafety } from "react-icons/md";
import { ChangeTextByLanguage } from "../../Language/Language";
import { CartService } from "../OurServices/OurService";
import TitleForSection from "../TitleForSection/TitleForSection";
import { PiDnaThin } from "react-icons/pi";
import { RiHospitalFill } from "react-icons/ri";

const WhyUs = () => {
  return (
    <>
      <div className="mt-20  p-8 flex flex-col gap-8 bg-white rounded">
        <div className="mx-72 max-sm:-mx-2 max-2xl:mx-36">
          <TitleForSection
            Text={ChangeTextByLanguage("لي احنا ؟", "Why US ?")}
          />
        </div>
        <div className="grid grid-cols-4 max-2xl:mx-9  max-sm:grid-cols-1 max-sm:-mx-[13px] max-sm:gap-10 mx-72 gap-96 mt-10">
          <CartService
            Icon={<MdHealthAndSafety className="text-4xl text-blue-600" />}
            Text="Top doctors match your condition"
            Paragraph="Discover and check reviews from previous patients. Explore healthcare, profiles, and services offered."
          />
          <CartService
            Icon={<RiHospitalFill className="text-4xl text-blue-600" />}
            Text="Discover the most suitable specialty for you"
            Paragraph="Enter your symptoms, and we will recommend the most appropriate specialty for your condition."
          />
          <CartService
            Icon={<PiDnaThin className="text-4xl text-blue-600" />}
            Text="Book for free, pay in clinic"
            Paragraph="Payment is remitted at the clinic or upon availing of medical services, with no additional fees incurred."
          />
          {/* <CartService
            Icon={<GiMedicines className="text-4xl text-blue-600" />}
            Text="Healthcare on Your Terms"
            Paragraph="book your doctor or healthcare provider anytime, anywhere 24\7."
          /> */}
        </div>
      </div>
    </>
  );
};

export default WhyUs;
