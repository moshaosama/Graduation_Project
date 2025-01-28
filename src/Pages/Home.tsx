import { CgFolderAdd } from "react-icons/cg";
import { FaStethoscope } from "react-icons/fa";

function Home() {
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
  const hancleClick = (id: string) => {
    const ELement = document.getElementById(id);
    const allElements = document.querySelectorAll(".Active");
    allElements.forEach((ele) => {
      ele.classList.remove("Active");
    });
    ELement?.classList.add("Active");
  };

  function ChangeTextByLanguage(Text: string, newText: string) {
    if (Language == '"English"') {
      return Text;
    } else {
      return newText;
    }
  }
  return (
    <>
      <div className="relative">
        <div>
          <img
            src="https://www.accruent.com/hubfs/Healthcare-Hero.webp"
            alt="ImageHome.png"
            className="h-[40pc] opacity-75  transition-all duration-1000 w-full object-cover"
          />
        </div>
        <div className="absolute top-20 left-96 flex flex-col gap-3 text-black">
          <h1 className="text-4xl font-bold">
            Better Healthcare for a Better Life
          </h1>
          <p className="text-2xl font-semibold">Book online or call16676</p>
        </div>
        <div className="bg-white shadow-2xl w-[70pc] text-[rgb(116,116,112)] p-5 absolute top-1/2 left-96  rounded-2xl">
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
                        Language == '"English"'
                          ? "flex-row"
                          : "flex-row-reverse"
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
          <div className="border border-solid border-[#9b9b9b] rounded-xl flex items-center">
            <div className="px-4 py-2 border border-solid border-[#9b9b9b] rounded-l-xl  w-96">
              <p className="text-sm font-semibold text-[#868686]">
                Select a Speciality
              </p>
              <div className="my-2 flex items-center gap-2 text-[#0a84ff7a]">
                <FaStethoscope className="text-lg" />
                <p className="text-lg font-bold">Choose Speciality</p>
              </div>
            </div>
            <div className="px-4 py-2 border border-solid border-[#9b9b9b]   w-96">
              <p className="text-sm font-semibold text-[#868686]">
                Select a Speciality
              </p>
              <div className="my-2 flex items-center gap-2 text-[#0a84ff7a]">
                <FaStethoscope className="text-lg" />
                <p className="text-lg font-bold">Choose Speciality</p>
              </div>
            </div>
            <div className="px-4 py-2 border border-solid border-[#9b9b9b]   w-96">
              <p className="text-sm font-semibold text-[#868686]">
                Select a Speciality
              </p>
              <div className="my-2 flex items-center gap-2 text-[#0a84ff7a]">
                <FaStethoscope className="text-lg" />
                <p className="text-lg font-bold">Choose Speciality</p>
              </div>
            </div>
            <div className="px-4 py-2 border border-solid border-[#9b9b9b]   w-96">
              <p className="text-sm font-semibold text-[#868686]">
                Select a Speciality
              </p>
              <div className="my-2 flex items-center gap-2 text-[#0a84ff7a]">
                <FaStethoscope className="text-lg" />
                <p className="text-lg font-bold">Choose Speciality</p>
              </div>
            </div>
            <div className="px-4 py-7 border border-solid bg-red-600 border-[#9b9b9b] rounded-r-xl flex justify-center  w-96">
              <div>
                <h1 className="text-white font-semibold">Search</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
