import { MdKeyboardArrowRight } from "react-icons/md";
import ImageRender from "../ImageRender";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Store/Store";
import { useEffect } from "react";
import { fetchSpeciality } from "../../Store/Reducer/Speciality/SpecialityReducer";

const SpecialityForm = ({ image }: { image: string }) => {
  return (
    <>
      <div className="bg-[#184C99] w-32 h-32 flex justify-center items-center rounded-full">
        <ImageRender src={image} alt="icon.png" width="20" />
      </div>
    </>
  );
};

const ExploreUs = () => {
  const state = useSelector((state: RootState) => state.Speciality);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchSpeciality());
  }, []);

  return (
    <>
      <div className="flex flex-col gap-5">
        <h1 className="text-[#184C99] text-5xl font-bold">Explore US</h1>
        <div className="flex items-center gap-10 text-xl font-semibold text-[#184C99]">
          <p>Specialties</p>
          <p>Top rated</p>
        </div>
        <div className="flex justify-between gap-20 items-center">
          {/* <SpecialityForm image="src\assets\WhatsApp_Image_2025-02-26_at_20.07.23_a843170e-removebg-preview.png" />
          <SpecialityForm image="src\assets\WhatsApp_Image_2025-02-26_at_20.07.23_a843170e-removebg-preview.png" />
          <SpecialityForm image="src\assets\WhatsApp_Image_2025-02-26_at_20.07.23_a843170e-removebg-preview.png" />
          <SpecialityForm image="src\assets\WhatsApp_Image_2025-02-26_at_20.07.23_a843170e-removebg-preview.png" />
          <SpecialityForm image="src\assets\WhatsApp_Image_2025-02-26_at_20.07.23_a843170e-removebg-preview.png" /> */}
          {state.data?.result
            ?.slice(0, 5)
            .map((el: { Specialty_name: string }, index: number) => {
              return (
                <div key={index} className="text-center cursor-pointer">
                  <SpecialityForm image="src\assets\WhatsApp_Image_2025-02-26_at_20.07.23_a843170e-removebg-preview.png" />
                  <p className="my-2 text-[#184C99] font-bold">
                    {el.Specialty_name}
                  </p>
                </div>
              );
            })}
        </div>

        <div className="flex items-center cursor-pointer hover:underline w-fit">
          <p className="text-[#184C99]">View all specialties</p>
          <p>
            <MdKeyboardArrowRight className="text-xl text-[#184C99]" />
          </p>
        </div>
      </div>
    </>
  );
};

export default ExploreUs;
