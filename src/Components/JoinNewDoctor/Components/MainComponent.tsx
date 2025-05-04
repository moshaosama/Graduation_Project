import clsk from "clsx";
import React, { useEffect, useState } from "react";
import { ReactNode } from "react";
import { IoIosArrowBack } from "react-icons/io";

interface MainComponentProps {
  Title: string;
  handleClickBack: () => void;
  children: ReactNode;
}

const MainComponent = ({
  Title,
  children,
  handleClickBack,
}: MainComponentProps) => {
  const [Open, setOpen] = useState(false);

  useEffect(() => {
    const OpenWindow = async () => {
      try {
        setOpen(true);
      } catch (err) {
        throw new Error(err as string);
      }
    };
    OpenWindow();
  }, [Open]);
  return (
    <div className="w-full h-full absolute top-0 left-0 bg-[#f0f0f0] flex justify-center items-center">
      <div
        className={clsk(
          "border-2 px-10 py-5 rounded-xl w-[40pc] max-sm:w-[24pc] transition-all duration-500 bg-white border-gray-500",
          Open ? "opacity-100 scale-100" : "opacity-0 scale-50"
        )}
      >
        <div className="flex gap-3 items-center">
          <IoIosArrowBack
            className="cursor-pointer"
            onClick={handleClickBack}
          />
          <h1 className="text-xl font-bold">{Title}</h1>
        </div>
        {React.Children.map(children, () => {
          if (React.isValidElement(children)) {
            return React.cloneElement(children);
          }
        })}
      </div>
    </div>
  );
};

export default MainComponent;
