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
    <div className="mx-80 max-2xl:mx-44 max-sm:mx-5 my-3">
      <div className="flex justify-between">
        <TitleForSection
          Text={ChangeTextByLanguage("العناصر الرائجة", "Trending Items")}
        />

        <Link to="/medicine-library">
          <p className="text-blue-600 hover:underline cursor-pointer">
            View All
          </p>
        </Link>
      </div>

      <div className="my-20 grid grid-cols-4 max-sm:gap-72 max-sm:overflow-x-scroll gap-20">
        {MedicineProducts?.data?.result
          ?.slice(0, 4)
          ?.map((medicineProduct: MedicineProductsData, index: number) => (
            <div className="w-fit cursor-pointer max-sm:w-60" key={index}>
              <div className="bg-[#006df318] p-4 rounded-tr-full transition-all duration-200 hover:rounded-md">
                <img
                  src="download-removebg-preview (1).png"
                  alt="Product.png"
                  className="w-96 h-40"
                />
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-2 font-semibold">
                    <h1 className="text-lg font-bold">
                      {medicineProduct.name}
                    </h1>
                    <p className="text-red-500 text-xl">
                      ${medicineProduct.price}
                    </p>
                  </div>
                  <div>
                    <button className="bg-blue-400 hover:bg-blue-900 transition-all duration-200 w-10 h-10 rounded-xl flex justify-center items-center">
                      <CiShop className="text-white text-2xl" />
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
