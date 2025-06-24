import { Bounce, ToastContainer } from "react-toastify";
import FormChangePassword from "./FromChangePassword";

const ChangePassword = () => {
  return (
    <>
      <FormChangePassword
        TitleAR="تغيير كلمه المرور"
        TitleEN="Change Password"
      />
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

export default ChangePassword;
