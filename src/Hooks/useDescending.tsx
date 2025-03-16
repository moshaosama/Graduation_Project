const useDescending = () => {
  const Doctors = JSON.parse(window.localStorage.getItem("Doctors")!);
  if (Doctors?.result?.length) {
    const sortedDoctors = Doctors?.result?.sort(
      (a: any, b: any) => +b.ConsultationFee - +a.ConsultationFee
    );
    window.localStorage.setItem(
      "Doctors",
      JSON.stringify({
        result: sortedDoctors,
        statusbar: "success",
      })
    );
    window.location.reload();
  }
};

export default useDescending;
