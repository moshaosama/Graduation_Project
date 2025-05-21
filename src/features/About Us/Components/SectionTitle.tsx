import clsx from "clsx";
import useShadowTime from "../Hooks/useShadowTime";

const SectionTitle = () => {
  const shadowTime = useShadowTime();
  return (
    <div
      className={clsx(
        "w-full py-10 my-32 bg-[#1f3fc0b9] transition-all duration-500 shadow-[#1f3fc0b9] flex justify-center items-center",
        shadowTime && "shadow-xl shadow-[#1f3fc0b9]"
      )}
    >
      <h1
        className={clsx("text-white text-4xl font-bold font-playwrite")}
        style={{ fontOpticalSizing: "auto" }}
      >
        Medipulse
      </h1>
    </div>
  );
};

export default SectionTitle;
