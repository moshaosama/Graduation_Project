import JoinNewDoctorForm from "../Components/JoinNewDoctor/Components/JoinNewDoctorForm";
import MainComponent from "../Components/JoinNewDoctor/Components/MainComponent";
import PersonalInfo from "../Components/JoinNewDoctor/Components/PersonalInfo";
import { usePersonalInfoContext } from "../Components/JoinNewDoctor/Context/PersonalInfoContext";

const JoinNewDoctor = () => {
  const { OpenModelPersonalInfo, toogleOpenModelPersonalInfo } =
    usePersonalInfoContext();
  return (
    <>
      {OpenModelPersonalInfo ? (
        <MainComponent Title="Create a new account">
          <JoinNewDoctorForm
            handleContinueWithEmail={toogleOpenModelPersonalInfo}
          />
        </MainComponent>
      ) : null}
      {OpenModelPersonalInfo ? null : (
        <MainComponent Title="Enter your personal info">
          <PersonalInfo />
        </MainComponent>
      )}
      {/* {OpenModelPersonalInfo ? null : <LoginFormAsDoctor />} */}
    </>
  );
};

export default JoinNewDoctor;
