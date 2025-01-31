import FormDoctors from "./FormDoctors";

const Clinic_Visit = () => {
  return (
    <FormDoctors
      Title="Mosha"
      Element={
        <>
          <div>
            <div>
              <h1 className="text-[#818181] font-semibold p-3">
                Search For Speciality, doctor or hospital
              </h1>
            </div>
            <hr className="w-full  bg-[#ddd]" />
            <div>
              <h1 className="text-[#818181] font-semibold p-3">
                Choose the Area
              </h1>
            </div>
          </div>
        </>
      }
    />
  );
};

export default Clinic_Visit;
