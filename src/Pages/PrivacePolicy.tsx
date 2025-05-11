import JoinUs from "../Components/JoinUs/JoinUs";
import SectionTitle from "../features/About Us/Components/SectionTitle";
import Header from "../features/PrivacyPolicy/Components/Header";
import Security from "../features/PrivacyPolicy/Components/Security";
import Statements from "../features/PrivacyPolicy/Components/Statements";

const PrivacePolicy = () => {
  return (
    <>
      <Header />
      <Statements />
      <Security />
      <SectionTitle />
      <JoinUs />
    </>
  );
};

export default PrivacePolicy;
