const useFindDoctor = (id: number) => {
  const Doctors = JSON.parse(window.localStorage.getItem("Doctors")!);

  const Doctor = Doctors?.result?.filter(
    (el: { DoctorID: number }) => el.DoctorID == id
  );

  return Doctor;
};

export default useFindDoctor;
