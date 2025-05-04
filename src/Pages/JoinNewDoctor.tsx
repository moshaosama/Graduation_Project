import {  useNavigate } from "react-router";
import JoinNewDoctorForm from "../Components/JoinNewDoctor/Components/JoinNewDoctorForm";
import MainComponent from "../Components/JoinNewDoctor/Components/MainComponent";
import PersonalInfo from "../Components/JoinNewDoctor/Components/PersonalInfo";
import { usePersonalInfoContext } from "../Components/JoinNewDoctor/Context/PersonalInfoContext";

const JoinNewDoctor = () => {
  const { OpenModelPersonalInfo, toogleOpenModelPersonalInfo } =
    usePersonalInfoContext();
  const Navigate = useNavigate();

  const handleClickBack = () => {
    Navigate("/");
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
      {/* {OpenModelPersonalInfo ? null : <LoginFormAsDoctor />} */}
    </>
  );
};

export default JoinNewDoctor;
