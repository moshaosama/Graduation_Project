import JoinNewDoctorForm from "../Components/JoinNewDoctor/Components/JoinNewDoctorForm";
import PersonalInfo from "../Components/JoinNewDoctor/Components/PersonalInfo";
import { usePersonalInfoContext } from "../Components/JoinNewDoctor/Context/PersonalInfoContext";

const JoinNewDoctor = () => {
  const { OpenModelPersonalInfo, toogleOpenModelPersonalInfo } =
    usePersonalInfoContext();
  return (
    <>
      {OpenModelPersonalInfo ? (
        <JoinNewDoctorForm
          handleContinueWithEmail={toogleOpenModelPersonalInfo}
        />
      ) : null}
      {OpenModelPersonalInfo ? null : <PersonalInfo />}
      {/* {OpenModelPersonalInfo ? null : <LoginFormAsDoctor />} */}
    </>
  );
};

export default JoinNewDoctor;
