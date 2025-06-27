import { ReactElement, useEffect, useRef } from "react";
import { BsHeadset } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import { FaMessage, FaUserDoctor } from "react-icons/fa6";
import { MdLocalHospital, MdReviews } from "react-icons/md";
import useConvertLanguage from "../../../../Hooks/useConvertLanguage";
import { ChangeTextByLanguage } from "../../../../Language/Language";
import useTransition from "../../../../Hooks/useTransition";

export const CartService = ({
  Icon,
  Text,
  Paragraph,
}: {
  Icon: ReactElement;
  Text: string;
  Paragraph: string;
}) => {
  return (
    <div className=" shadow-md shadow-black rounded-xl max-sm:mx-1 w-96 max-sm:w-[23pc] flex flex-col gap-3 items-center p-4 justify-center">
      <div className="flex flex-col gap-2 items-center">
        {Icon}
        <h1 className="text-lg font-bold">{Text}</h1>
      </div>
      <p className="mx-4 text-sm text-[#929292] font-semibold text-center">
        {Paragraph}
      </p>
    </div>
  );
};

const OurService = () => {
  const { language } = useConvertLanguage();
  const CartServices = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 1900) {
        useTransition(
          CartServices,
          { top: "10pc", opacity: "0" },
          { top: "20pc", opacity: "1" }
        );
      }
    });
  }, [CartService]);
  return (
    <>
      <div
        className={`bg-blue-700 rounded-t-xl py-16 flex ${
          language == "English" ? "flex-row-reverse" : "flex-row"
        } gap-5 justify-center max-sm:mx-[14px] items-center max-sm:w-96`}
      >
        <CiSettings className="text-5xl text-white" />
        {language == "English" ? (
          <span className="text-5xl font-bold text-white">خدمتنا</span>
        ) : (
          <h1 className="flex gap-2 items-center text-2xl text-white">
            our <span className="text-5xl font-bold">Services</span>
          </h1>
        )}
      </div>

      <div className="bg-white max-sm:mx-[14px] rounded-b-xl p-16">
        <div
          className="grid grid-cols-3 gap-28 mx-64 transition-all duration-1000 max-2xl:mx-0 max-sm:grid-cols-1 max-sm:-mx-14 max-sm:gap-10 max-sm:opacity-100"
          ref={CartServices}
        >
          <CartService
            Icon={<FaUserDoctor className="text-5xl text-blue-700" />}
            Text={ChangeTextByLanguage("ابحث عن طبيبك", "Find Yout Doctor")}
            Paragraph={ChangeTextByLanguage(
              "ابحث بسرعة عن الأطباء من خلال البحث عن اسمهم أو تخصصهم أو موقعهم. يضمن لك MediPluse العثور على المتخصصين المؤهلين الذين يناسبون احتياجاتك الطبية بسهولة.",
              "Locate doctors quickly by searching for their name, specialty, orlocation. MediPluse ensures you find qualified professionals thatsuit your medical needs with ease."
            )}
          />
          <CartService
            Icon={<MdLocalHospital className="text-5xl text-blue-700" />}
            Text={ChangeTextByLanguage("البحث عن منشأة", "Find a Facility")}
            Paragraph={ChangeTextByLanguage(
              "استكشف العيادات أو المستشفيات بناءً على التخصص والموقع. توفر منصتنا معلومات مفصلة عن المرافق، مما يساعدك في اختيار أفضل خيار للرعاية الصحية.",
              "Explore clinics or hospitals based onspecialty and location.Our platform provides detailed facility information,helping you choose the best healthcare option."
            )}
          />

          <CartService
            Icon={<FaMessage className="text-5xl text-blue-700" />}
            Text="Symptom Checker"
            Paragraph="Analyze symptoms with our AI-powered
 tool to identify potential conditions. 
This helps you decide whether to seek 
immediate care or schedule a consultation.  "
          />
          <CartService
            Icon={<BsHeadset className="text-5xl text-blue-700" />}
            Text="Telehealth"
            Paragraph=" Connect with healthcare providers through 
secure video calls for consultations.
 Get medical advice, diagnoses, and prescriptions 
from the comfort of your home.  
"
          />
          <CartService
            Icon={<MdReviews className="text-5xl text-blue-700" />}
            Text="Review"
            Paragraph="Share and read reviews about doctors, clinics, and hospitals.
 Transparent feedback helps you 
make informed decisions about your healthcare providers."
          />
        </div>
      </div>
    </>
  );
};

export default OurService;
