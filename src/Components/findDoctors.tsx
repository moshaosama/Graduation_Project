import SpecialityCard from "./Card/SpecialityCard";
import { FaStethoscope } from "react-icons/fa";
import { CgFolderAdd } from "react-icons/cg";

const FindDoctors = () => {
  const Language = JSON.stringify(window.localStorage.getItem("Language")!);
  const Elements = [
    {
      id: "1",
      headerText: ChangeTextByLanguage("Book a doctor", "احجز دكتور"),
      Text: ChangeTextByLanguage(
        "Examination or procedure",
        "الفحص أو الإجراء"
      ),
      Element: <CgFolderAdd className="text-4xl" />,
    },
    {
      id: "2",
      headerText: ChangeTextByLanguage("Telehealth", "مكالمة دكتور"),
      Text: ChangeTextByLanguage(
        "Call consultation with doctor",
        "المتابعة عبر مكالمة مع دكتور"
      ),
      Element: <FaStethoscope className="text-4xl" />,
    },
  ];

  function ChangeTextByLanguage(Text: string, newText: string) {
    if (Language == '"English"') {
      return Text;
    } else {
      return newText;
    }
  }
  const hancleClick = (id: string) => {
    const ELement = document.getElementById(id);
    const allElements = document.querySelectorAll(".Active");
    allElements.forEach((ele) => {
      ele.classList.remove("Active");
    });
    ELement?.classList.add("Active");
  };
  return (
    <>
      <div className="bg-white shadow-2xl w-[75pc] text-[rgb(116,116,112)] p-5 absolute top-1/2 left-80  rounded-2xl">
        <div
          className={`flex ${
            Language == '"English"' ? "flex-row" : "flex-row-reverse"
          }  items-center justify-center gap-60`}
        >
          {Elements.map((el) => {
            return (
              <>
                <div id={el.id}>
                  <div
                    className={`flex ${
                      Language == '"English"' ? "flex-row" : "flex-row-reverse"
                    } items-center gap-5 cursor-pointer  hover:text-[#0a84ff7a] transition-all duration-300`}
                    onClick={() => hancleClick(el.id)}
                  >
                    <div>{el.Element}</div>
                    <div className="text-xl" key={el.id}>
                      <h1
                        className={`font-bold ${
                          Language == '"English"' ? "text-start" : "text-end"
                        }`}
                      >
                        {el.headerText}
                      </h1>
                      <p className="text-sm font-bold">{el.Text}</p>
                    </div>
                  </div>
                  <hr className="bg-[#ddd]" />
                </div>
              </>
            );
          })}
        </div>
        <hr className="bg-[#ddd] w-full my-4 h-1" />
        <div className="rounded-xl flex items-center">
          <SpecialityCard
            Title="Choose Specialty"
            Label="Select a specialty"
            Element={<FaStethoscope className="text-2xl" />}
          />{" "}
          <SpecialityCard
            Title="Choose City"
            Label="In this city"
            Element={<FaStethoscope className="text-2xl" />}
          />
          <SpecialityCard
            Title="Choose Specialty"
            Label="Select a specialty"
            Element={<FaStethoscope className="text-2xl" />}
          />{" "}
          <SpecialityCard
            Title="Choose Specialty"
            Label="Select a specialty"
            Element={<FaStethoscope className="text-2xl" />}
          />
          <div className="h-20 border border-solid bg-red-600 border-[#9b9b9b] rounded-r-xl flex items-center justify-center w-96">
            <div>
              <h1 className="text-white font-semibold">Search</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FindDoctors;
