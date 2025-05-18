import { Bounce, ToastContainer } from "react-toastify";
import Faq from "../features/MyAppointments/Components/Faq";
import GetAppointments from "../features/MyAppointments/Components/getAppointments";
import Header from "../features/MyAppointments/Components/Header";
import Reschedule from "../features/MyAppointments/Components/Reschedule";
import { useOpenRescheduleContext } from "../features/MyAppointments/Context/OpenReschedule";
const MyAppointements = () => {
  const { OpenReschedule } = useOpenRescheduleContext();
  return (
    <>
      <Header />
      <GetAppointments />
      <Faq />
      {OpenReschedule && <Reschedule />}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </>
  );
};

export default MyAppointements;
