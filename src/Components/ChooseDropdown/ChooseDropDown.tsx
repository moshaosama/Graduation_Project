import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Store/Store";
import { useEffect } from "react";
import { ChangeTextByLanguage } from "../../Language/Language";

interface ChooseDropDownProps {
  Row: string;
  stateData: string;
  fetchData: () => any;
  handleClick: (el: string) => void;
}

const ChooseDropDown = ({
  stateData,
  fetchData,
  Row,
  handleClick,
}: ChooseDropDownProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const state = useSelector(
    (state: RootState) => state[stateData as keyof RootState]
  );

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <>
      <div className="bg-white absolute w-96 border-[1px] border-gray-700 rounded-xl py-3 px-7">
        <h1 className="text-sm font-bold text-gray-400">
          {ChangeTextByLanguage("Most Popular", "الأكثر اختيارا")}
        </h1>

        <div className="grid  grid-cols-2 my-3">
          {state?.data?.result?.slice(0, 20)?.map((el: any) => (
            <h1
              key={el[Row]}
              className="text-[#0a84ff7a] font-bold cursor-pointer hover:bg-[#eee] p-1 rounded-lg"
              onClick={() => handleClick(el[Row])}
            >
              {el[Row].slice(0, 20)}
            </h1>
          ))}
        </div>
      </div>
    </>
  );
};

export default ChooseDropDown;
