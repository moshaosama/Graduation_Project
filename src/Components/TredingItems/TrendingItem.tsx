import { CiShop } from "react-icons/ci";
import { ChangeTextByLanguage } from "../../Language/Language";
import TitleForSection from "../TitleForSection/TitleForSection";

const TrendingItem = () => {
  return (
    <div className="mx-80 max-2xl:mx-44 max-sm:mx-5 my-3">
      <div className="flex justify-between">
        <TitleForSection
          Text={ChangeTextByLanguage("العناصر الرائجة", "Trending Items")}
        />

        <p className="text-blue-600 hover:underline cursor-pointer">View All</p>
      </div>

      <div className="my-20 grid grid-cols-4 max-sm:overflow-x-scroll gap-20">
        <div className="w-fit cursor-pointer">
          <div className="bg-[#006df318] p-4 rounded-tr-full transition-all duration-200 hover:rounded-md">
            <img src="download-removebg-preview (1).png" alt="" />
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-2 font-semibold">
                <h1 className="text-lg font-bold">Surgical Face Mask</h1>
                <p className="text-red-500 text-xl">$20</p>
              </div>
              <div>
                <button className="bg-blue-400 hover:bg-blue-900 transition-all duration-200 w-10 h-10 rounded-xl flex justify-center items-center">
                  <CiShop className="text-white text-2xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-fit cursor-pointer">
          <div className="bg-[#006df318] p-4 rounded-tr-full transition-all duration-200 hover:rounded-md">
            <img src="download-removebg-preview (1).png" alt="" />
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-2 font-semibold">
                <h1 className="text-lg font-bold">Surgical Face Mask</h1>
                <p className="text-red-500 text-xl">$20</p>
              </div>
              <div>
                <button className="bg-blue-400 w-10 hover:bg-blue-900 transition-all duration-200 h-10 rounded-xl flex justify-center items-center">
                  <CiShop className="text-white text-2xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-fit cursor-pointer">
          <div className="bg-[#006df318] p-4 rounded-tr-full transition-all duration-200 hover:rounded-md">
            <img src="download-removebg-preview (1).png" alt="" />
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-2 font-semibold">
                <h1 className="text-lg font-bold">Surgical Face Mask</h1>
                <p className="text-red-500 text-xl">$20</p>
              </div>
              <div>
                <button className="bg-blue-400 w-10 hover:bg-blue-900 transition-all duration-200 h-10 rounded-xl flex justify-center items-center">
                  <CiShop className="text-white text-2xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-fit cursor-pointer">
          <div className="bg-[#006df318] p-4 rounded-tr-full transition-all duration-200 hover:rounded-md">
            <img src="download-removebg-preview (1).png" alt="" />
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-2 font-semibold">
                <h1 className="text-lg font-bold">Surgical Face Mask</h1>
                <p className="text-red-500 text-xl">$20</p>
              </div>
              <div>
                <button className="bg-blue-400 hover:bg-blue-900 transition-all duration-200 w-10 h-10 rounded-xl flex justify-center items-center">
                  <CiShop className="text-white text-2xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingItem;
