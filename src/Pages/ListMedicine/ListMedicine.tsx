import { useDispatch, useSelector } from "react-redux";
import TitleText from "../../Components/TitleText";
import style from "./ListMedicine.module.css";
import { AppDispatch, RootState } from "../../Store/Store";
import { useEffect, useState } from "react";
import { getAllMedicines } from "../../Store/Reducer/MedicineTracker/getMedicines";
import ButtonForm from "../../Components/Form/ButtonForm";
import { Link } from "react-router-dom";

const ListMedicine = () => {
  const { table } = style;
  const state = useSelector((state: RootState) => state.getMedicine);
  const [Show, setShow] = useState("3");
  const dispatch = useDispatch<AppDispatch>();
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setShow(event.target.value);
  };

  const Options = () => {
    return (
      <>
        {Array(state?.data?.result?.length)
          .fill(0)
          ?.map((_, index) => {
            return (
              <option key={index + 1} value={index + 1}>
                {index + 1}
              </option>
            );
          })}
      </>
    );
  };

  useEffect(() => {
    dispatch(getAllMedicines());
  }, [dispatch]);

  return (
    <>
      <div className=" flex flex-col py-28 justify-center items-center gap-10">
        <TitleText Title="Medicine List" />

        <div className="w-full flex flex-col gap-4 items-center">
          <div className="flex justify-start w-[50%]  items-center gap-3">
            <h1>Show</h1>
            <select
              id="pet-select"
              onChange={handleChange}
              className="bg-[#8e8eff17]"
            >
              <Options />
            </select>
            <h1>entires</h1>
          </div>
          <table className={table}>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {state.data ? (
                state.data.result?.slice(0, Show)?.map((medicine: any) => (
                  <tr key={medicine.id}>
                    <td>{medicine.id}</td>
                    <td>{medicine.Name}</td>
                    <td className="break-words">{medicine.Description}</td>
                    <td className="flex gap-5 max-sm:gap-2">
                      <Link to={`${medicine?.id}`}>
                        <button className="bg-gray-600 text-white font-bold p-2 max-sm:p-1 rounded-lg">
                          Edit
                        </button>
                      </Link>
                      <button className="bg-red-400 text-white font-bold p-2 max-sm:p-1 rounded-lg">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3}>لا توجد بيانات متاحة</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ListMedicine;
