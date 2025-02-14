import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Store/Store";
import { useEffect } from "react";
import { fetchMedicineById } from "../../Store/Reducer/MedicineTracker/getMedicineById";
import { useParams } from "react-router";
import TitleText from "../../Components/TitleText";
import ButtonForm from "../../Components/Form/ButtonForm";
import Inputs from "../../Components/Form/Inputs";

const EditMedicine = () => {
  const state = useSelector((state: RootState) => state.getMedicineById);
  const Dispatch = useDispatch<AppDispatch>();
  const id = useParams();

  useEffect(() => {
    Dispatch(fetchMedicineById(id && id.id));
  }, [Dispatch]);

  return (
    <>
      <div className=" flex flex-col py-28 justify-center items-center gap-10">
        <TitleText Title="Edit Medicine" />
        {state?.data?.result?.map((medicine: any, index: number) => {
          return (
            <div key={index} className="flex flex-col gap-2">
              <Inputs
                Label="Medicine Name"
                Type="text"
                Value={medicine?.Name}
                ChangeEvent={() => {}}
              />
              <p
                className={`flex  max-sm:flex-col my-4 gap-4 items-center  justify-between`}
              >
                <label
                  htmlFor="Description"
                  className={`font-bold flex gap-2 `}
                >
                  <span>Description</span>
                  <span className="text-[red]">*</span>
                </label>
                <textarea
                  className="w-96 px-3 max-sm:w-full h-24 border-[#ddd] border-[1px] rounded-lg shadow-sm"
                  value={medicine?.Description}
                  name="Description"
                />
              </p>
              <div className="flex justify-center gap-10">
                <ButtonForm Value="Save" Width="28" handleClick={() => {}} />

                <ButtonForm Value="Cancel" Width="28" handleClick={() => {}} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default EditMedicine;
