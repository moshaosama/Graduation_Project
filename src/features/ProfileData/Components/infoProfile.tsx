import ProfileData from "./ProfileData";
import { ToastContainer, Bounce } from "react-toastify";

const InfoProfile = () => {
  return (
    <>
      <ProfileData TitleEN="ادارة الملف الشخصي " TitleAR="Manage Profile" />
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

export default InfoProfile;
