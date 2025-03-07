import { useState } from "react";
import { FaClinicMedical } from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";
import { IoIosCall } from "react-icons/io";
import Clinic_Visit from "../FormfindDoctors/Clinic_Visit";
import Order_Medicine from "../FormfindDoctors/Order_Medicine";
import Doctor_Call from "../FormfindDoctors/Doctor_Call";

const FindDectorResponsive = () => {
  const [ActiveFindDeoctor, setFindDoctor] = useState("Clinic Visit");

  const formDoctors = () => {
    if (ActiveFindDeoctor == "Clinic Visit") {
      return <Clinic_Visit />;
    } else if (ActiveFindDeoctor == "Order Medicine") {
      return <Order_Medicine />;
    } else if (ActiveFindDeoctor == "Doctor Call") {
      return <Doctor_Call />;
    }
  };
  const listFindDoctor = [
    {
      id: "3",
      Name: "Clinic Visit",
      Icon: <FaClinicMedical className="text-xl" />,
    },
    {
      id: "4",
      Name: "Order Medicine",
      Icon: <GiMedicines className="text-xl" />,
    },
    {
      id: "5",
      Name: "Doctor Call",
      Icon: <IoIosCall className="text-xl" />,
    },
  ];

  const activeItem = (id: string, Title: string) => {
    const Item = document.getElementById(id);
    const Elements = document.querySelectorAll(".active");
    Elements.forEach((item) => {
      item.classList.remove("active");
    });
    Item?.classList.add("active");

    setFindDoctor(Title);
  };
  return (
    <div>
      <div className="flex justify-between   border-blue-500">
        {listFindDoctor.map((el) => (
          <div
            key={el.id}
            className={`flex flex-col items-center ${
              el.id === "3" ? "active rounded-tl-lg" : ""
            } ${
              el.id === "5" ? "rounded-tr-lg" : ""
            } py-4 w-full text-blue-600 bg-[rgb(229,241,255)]`}
            id={el.id}
            onClick={() => activeItem(el.id, el.Name)}
          >
            <p>{el.Icon}</p>
            <h1 className="font-semibold">{el.Name}</h1>
          </div>
        ))}
      </div>
      <div>{formDoctors()}</div>
      <div>
        {ActiveFindDeoctor == "Clinic Visit" ||
        ActiveFindDeoctor == "Doctor Call" ? (
          <div className="my-4">
            <div className="bg-[red] rounded-lg flex justify-center py-5">
              <button className="text-white font-bold text-md">
                Browse Doctors
              </button>
            </div>
            <div className="flex justify-center my-3">
              <h1>
                Or Call
                <span className="text-blue-500 font-bold underline">16676</span>
              </h1>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default FindDectorResponsive;
