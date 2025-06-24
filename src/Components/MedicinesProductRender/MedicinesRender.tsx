import { CiShop } from "react-icons/ci";
import TitleForSection from "../TitleForSection/TitleForSection";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Store/Store";
import { useEffect } from "react";
import { fetchGetMedicineProducts } from "../../Store/Reducer/MedicineProducts/getMedicineProducts";
import Processing from "../../Pages/Processing";

export interface MedicineProductsData {
  name: string;
  price: number;
}

const MedicinesRender = () => {
  const MedicineProducts = useSelector(
    (state: RootState) => state.medicineProducts
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchGetMedicineProducts());
  }, [dispatch]);
  return (
    <div className="relative">
      <div className="mx-40 max-sm:mx-7">
        <TitleForSection Text="All Products" />
      </div>
      <div className="grid grid-cols-4 gap-20 mx-40 mt-20 max-sm:gap-10 max-sm:mx-7 max-sm:grid-cols-2">
        {MedicineProducts.data.result?.map(
          (medicineProduct: MedicineProductsData, index: number) => (
            <div className="cursor-pointer w-fit" key={index}>
              <div className="bg-[#006df318] p-4 rounded-tr-full transition-all duration-200 hover:rounded-md">
                <img src="download-removebg-preview (1).png" alt="" />
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
          )
        )}
      </div>

      <div className="fixed top-0 left-0 z-50 w-full h-full bg-[#ffffff63]">
        <Processing />
      </div>
    </div>
  );
};

export default MedicinesRender;
