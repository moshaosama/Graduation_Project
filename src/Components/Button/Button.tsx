import React from "react";

const Button = React.memo(
  ({
    Title,
    backGround,
    Color,
  }: {
    Title: string;
    backGround: string;
    Color: string;
  }) => {
    return (
      <button
        className={`bg-${backGround} hover:bg-[#23A6F0] transition-all duration-300 hover:text-black border-[1px] border-solid border-[#23A6F0] py-3 px-10 rounded-lg text-${Color} font-semibold`}
      >
        {Title}
      </button>
    );
  }
);

export default Button;
