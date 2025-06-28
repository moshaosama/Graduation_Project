import clsx from "clsx";

const SectionTitle = () => {
  return (
    <div
      className={clsx(
        "w-full py-10 my-32 bg-[#1f3fc0b9] transition-all duration-500 flex justify-center items-center",
        
      )}
    >
      <h1
        className={clsx("text-4xl font-bold text-white font-playwrite")}
        style={{ fontOpticalSizing: "auto" }}
      >
        Medipulse
      </h1>
    </div>
  );
};

export default SectionTitle;
