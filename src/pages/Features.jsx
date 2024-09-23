import BetaBanner from "../components/BetaBanner";
import ThreeColumnsSection from "../components/ThreeColumnsSection";
import TwoColumnsSection from "../components/TwoColumnsSection";
import { featuresHeader } from "../data";
import { featureThreeSectionData } from "../data";

const Features = () => {
  return (
    <>
      <TwoColumnsSection data={featuresHeader} />
      <ThreeColumnsSection threeSectionData={featureThreeSectionData} />
      <BetaBanner />
    </>
  );
};

export default Features;
