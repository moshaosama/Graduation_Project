import clsx from "clsx";
import { container } from "../../../Style";
import useGetMyAppointements from "../Hooks/useGetMyAppointements";
import useDeleteAppointment from "../Hooks/useDeleteAppointment";
const getAppointments = () => {
  const { AppointementsData } = useGetMyAppointements();
  const { handleDeleteAppointment } = useDeleteAppointment();

  if (AppointementsData?.data?.result?.length === 0) {
    return (
      <h1 className="text-red-500 flex justify-center items-center mb-8 text-2xl font-bold">
        No Appointments
      </h1>
    );
  }
  return (
    <>
      <div className={clsx(container, "flex-col gap-5")}>
        {AppointementsData?.data?.result?.map((data, index) => (
          <div
            className="bg-white flex max-sm:flex-col justify-between items-center border-solid border-2 border-gray-400 rounded-lg p-4 w-full"
            key={index}
          >
            <div className="flex gap-10">
              <img
                src="https://img.freepik.com/free-photo/female-doctor-hospital-with-stethoscope_23-2148827774.jpg"
                alt="DoctorImage.png"
                loading="lazy"
                className="w-24 h-24 object-cover rounded-full border-[3px] border-gray-700"
              />
              <div className="flex flex-col gap-2">
                <h1 className="text-xl text-blue-500 font-bold">
                  Dr/ {data.DoctorName}
                </h1>
                <div className="max-sm:mt-4">
                  <p>Date: {data.Date}</p>
                  <p>Place: {data.Place}</p>
                  <p>Time: {data.Time}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col max-sm:mt-5  gap-4 mx-24">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                onClick={() => handleDeleteAppointment(data.id)}
              >
                Cancel
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                Reschedule
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default getAppointments;
