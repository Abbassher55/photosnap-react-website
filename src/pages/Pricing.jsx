import BetaBanner from "../components/BetaBanner";
import TwoColumnsSection from "../components/TwoColumnsSection";
import { PricingHeader } from "../data";

const Pricing = () => {
  return (
    <>
      <TwoColumnsSection data={PricingHeader} />
      <div className="container flex h-96 items-center justify-center bg-white">
        <h2 className="heading-two">pricing cards and tables here</h2>
      </div>
      <BetaBanner />
    </>
  );
};

export default Pricing;
