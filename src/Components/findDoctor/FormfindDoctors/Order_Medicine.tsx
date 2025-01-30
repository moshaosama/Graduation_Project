import { CiSearch } from "react-icons/ci";
import FormDoctors from "../FormDoctors";
import "../../../App.css";

const Order_Medicine = () => {
  const handleClick = () => {
    const Input = document.getElementById("Input");
    if (Input) {
      window.scroll(0, Input.getBoundingClientRect().y - 14);
    }
  };
  return (
    <FormDoctors
      Title=""
      Element={
        <form action="" className="p-3">
          <p className="flex items-center gap-4">
            <CiSearch className="text-xl text-[#747474]" />
            <input
              id="Input"
              type="text"
              className="w-full"
              placeholder="Search For a Product"
              onClick={handleClick}
            />
          </p>
        </form>
      }
    />
  );
};

export default Order_Medicine;
