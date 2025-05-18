import { useOpenRescheduleContext } from "../Context/OpenReschedule";
import useFormData from "../Hooks/useFormData";
import useGetAppointmentByID from "../Hooks/useGetAppointmentByID";
const Reschedule = () => {
  const { handleCloseReschedule } = useOpenRescheduleContext();
  const { AppointmentyById } = useGetAppointmentByID();
  const { register, handleSubmit, errors, onSubmit } = useFormData();
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg shadow-black  w-[40pc]">
        <h1 className="text-2xl font-bold">Reschedule Appointment</h1>
        <form
          className="grid grid-cols-2 gap-4 mt-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          <p className="col-span-2 flex flex-col gap-2">
            <label
              htmlFor="userName"
              className="text-lg font-bold text-gray-500"
            >
              UserName
            </label>
            <input
              type="text"
              placeholder={AppointmentyById.data.result?.[0].Name}
              className="p-2 rounded-lg border-2 border-gray-400"
              {...register("Name")}
            />
            {errors.Name && (
              <p className="text-red-500">{errors.Name.message as string}</p>
            )}
          </p>
          <p className="col-span-2 flex flex-col gap-2">
            <label
              htmlFor="phoneNumber"
              className="text-lg font-bold text-gray-500"
            >
              Phone Number
            </label>
            <input
              type="number"
              inputMode="numeric"
              placeholder={String(
                AppointmentyById.data.result?.[0].PhoneNumber
              )}
              className="p-2 rounded-lg border-2 border-gray-400"
              {...register("PhoneNumber")}
            />
            {errors.PhoneNumber && (
              <p className="text-red-500">
                {errors.PhoneNumber.message as string}
              </p>
            )}
          </p>
          <p className="col-span-2 flex flex-col gap-2">
            <label htmlFor="email" className="text-lg font-bold text-gray-500">
              Email
            </label>
            <input
              type="email"
              placeholder={AppointmentyById.data.result?.[0].Email}
              className="p-2 rounded-lg border-2 border-gray-400"
              {...register("Email")}
            />
            {errors.Email && (
              <p className="text-red-500">{errors.Email.message as string}</p>
            )}
          </p>
          <p className="col-span-2 flex justify-end gap-2">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Save
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              onClick={handleCloseReschedule}
            >
              Cancel
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Reschedule;
