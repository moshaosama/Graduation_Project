import JoinUs from "../Components/JoinUs/JoinUs";
import HeaderAboutUs from "../features/About Us/Components/Header";
import OurStory from "../features/About Us/Components/OurStory";
import OurVision from "../features/About Us/Components/OurVision";
import SectionTitle from "../features/About Us/Components/SectionTitle";
const AboutUs = () => {
  return (
    <>
      <HeaderAboutUs />
      <OurStory />
      <OurVision />
      <SectionTitle />
      <JoinUs />
    </>
  );
};

export default AboutUs;
