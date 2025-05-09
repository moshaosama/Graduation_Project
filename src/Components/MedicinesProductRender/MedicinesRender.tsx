import { CiShop } from "react-icons/ci";
import TitleForSection from "../TitleForSection/TitleForSection";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Store/Store";
import { useEffect } from "react";
import { fetchGetMedicineProducts } from "../../Store/Reducer/MedicineProducts/getMedicineProducts";

export interface MedicineProductsData {
    name: string,
    price: number,
    
}

const MedicinesRender = () => {   
    const MedicineProducts = useSelector((state: RootState) => state.medicineProducts); 
    const dispatch = useDispatch<AppDispatch>();


    useEffect(() => {
        dispatch(fetchGetMedicineProducts())
    },[dispatch])
    return (
        <div>
            <div className="mx-40 max-sm:mx-7">
                <TitleForSection Text="All Products" />
            </div>
            <div className="grid grid-cols-4 gap-20 max-sm:gap-10 max-sm:mx-7 max-sm:grid-cols-2 mx-40 mt-20">
                {
                    MedicineProducts.data.result?.map((medicineProduct: MedicineProductsData, index: number) => (
                        <div className="w-fit cursor-pointer " key={index}>
                            <div className="bg-[#006df318] p-4 rounded-tr-full transition-all duration-200 hover:rounded-md">
                                <img src="download-removebg-preview (1).png" alt="" />
                                <div className="flex items-center justify-between">
                                <div className="flex flex-col gap-2 font-semibold">
                                    <h1 className="text-lg font-bold">{medicineProduct.name}</h1>
                                    <p className="text-red-500 text-xl">${medicineProduct.price}</p>
                                </div>
                                <div>
                                    <button className="bg-blue-400 hover:bg-blue-900 transition-all duration-200 w-10 h-10 rounded-xl flex justify-center items-center">
                                    <CiShop className="text-white text-2xl" />
                                    </button>
                                </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default MedicinesRender;