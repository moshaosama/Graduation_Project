import { CiShop } from "react-icons/ci";
import { ChangeTextByLanguage } from "../../../../Language/Language";
import TitleForSection from "../../../../Components/TitleForSection/TitleForSection";
import { Link } from "react-router";
import { AppDispatch, RootState } from "../../../../Store/Store";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetMedicineProducts } from "../../../../Store/Reducer/MedicineProducts/getMedicineProducts";
import { useEffect } from "react";
import { MedicineProductsData } from "../../../../Components/MedicinesProductRender/MedicinesRender";

const TrendingItem = () => {
  const MedicineProducts = useSelector(
    (state: RootState) => state.medicineProducts
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchGetMedicineProducts());
  }, [dispatch]);
  return (
    <div className="mx-80 my-3 max-2xl:mx-44 max-sm:mx-5">
      <div className="flex justify-between">
        <TitleForSection
          Text={ChangeTextByLanguage("العناصر الرائجة", "Trending Items")}
        />

        <Link to="/medicine-library">
          <p className="text-blue-600 cursor-pointer hover:underline">
            View All
          </p>
        </Link>
      </div>

      <div className="flex gap-10 items-center max-sm:overflow-x-scroll max-sm:w-[24.4pc]">
        {MedicineProducts?.data?.result
          ?.slice(0, 4)
          ?.map((medicineProduct: MedicineProductsData, index: number) => (
            <div className="cursor-pointer w-fit max-sm:w-60" key={index}>
              <div className="bg-[#006df318] p-4 rounded-tr-full transition-all duration-200 hover:rounded-md">
                <img
                  src="download-removebg-preview (1).png"
                  alt="Product.png"
                  className="w-96 h-40"
                />
                <div className="flex justify-between items-center">
                  <div className="flex flex-col gap-2 font-semibold">
                    <h1 className="text-lg font-bold">
                      {medicineProduct.name}
                    </h1>
                    <p className="text-xl text-red-500">
                      ${medicineProduct.price}
                    </p>
                  </div>
                  <div>
                    <button className="flex justify-center items-center w-10 h-10 bg-blue-400 rounded-xl transition-all duration-200 hover:bg-blue-900">
                      <CiShop className="text-2xl text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TrendingItem;
