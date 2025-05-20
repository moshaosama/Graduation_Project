import JoinUs from "../Components/JoinUs/JoinUs";
import SectionTitle from "../features/About Us/Components/SectionTitle";
import Header from "../features/TermService/Components/Header";
import Introduction from "../features/TermService/Components/Introduction";
import { TermsOfUse } from "../features/TermService/Components/TermsOfUse";
export const TermsService = () => {
  return (
    <>
      <Header />
      <Introduction />
      <TermsOfUse />
      <SectionTitle />
      <JoinUs />
    </>
  );
};
