import { Bounce, ToastContainer } from "react-toastify";
import Faq from "../features/MyAppointments/Components/Faq";
import GetAppointments from "../features/MyAppointments/Components/getAppointments";
import Header from "../features/MyAppointments/Components/Header";

const MyAppointements = () => {
  return (
    <>
      <Header />
      <GetAppointments />
      <Faq />
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
