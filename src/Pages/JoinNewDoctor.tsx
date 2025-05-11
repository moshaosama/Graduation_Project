import { useNavigate } from "react-router";
import JoinNewDoctorForm from "../features/JoinNewDoctor/Components/JoinNewDoctorForm";
import MainComponent from "../features/JoinNewDoctor/Components/MainComponent";
import PersonalInfo from "../features/JoinNewDoctor/Components/PersonalInfo";
import { usePersonalInfoContext } from "../features/JoinNewDoctor/Context/PersonalInfoContext";
import { ToastContainer, Bounce } from "react-toastify";

const JoinNewDoctor = () => {
  const { OpenModelPersonalInfo, toogleOpenModelPersonalInfo } =
    usePersonalInfoContext();
  const Navigate = useNavigate();

  const handleClickBack = () => {
    Navigate("/");
  };

  const handleContinueWithLogin = () => {
    Navigate("/login");
  };
  return (
    <>
      {OpenModelPersonalInfo ? (
        <MainComponent
          Title="Create a new account"
          handleClickBack={handleClickBack}
        >
          <JoinNewDoctorForm
            handleContinueWithEmail={toogleOpenModelPersonalInfo}
            handleContinueWithLogin={handleContinueWithLogin}
          />
        </MainComponent>
      ) : null}
      {OpenModelPersonalInfo ? null : (
        <MainComponent
          Title="Enter your personal info"
          handleClickBack={toogleOpenModelPersonalInfo}
        >
          <PersonalInfo />
        </MainComponent>
      )}

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

export default JoinNewDoctor;
