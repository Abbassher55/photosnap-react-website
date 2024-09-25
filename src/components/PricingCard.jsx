import React, { useState } from "react";
import { PricingCardsData } from "../data";
const PricingCard = () => {
  const [isYearly, setIsYearly] = useState(false);

  const togglePricing = () => {
    setIsYearly(!isYearly);
  };

  return (
    <div className="container py-28">
      <label className="flex cursor-pointer items-center justify-center">
        <span className="mr-8 text-sm font-medium">Monthly</span>
        <div className="relative">
          <input
            type="checkbox"
            className="peer sr-only"
            checked={isYearly}
            onChange={togglePricing}
          />
          <div className="peer h-6 w-11 rounded-full bg-gray-200 transition-all peer-checked:bg-black peer-focus:ring-0"></div>
          <div className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full border border-gray-300 bg-white transition-all peer-checked:translate-x-full"></div>
        </div>
        <span className="ml-8 text-sm font-medium">Yearly</span>
      </label>
      <div className="mt-20 flex flex-wrap items-center justify-center gap-8">
        {PricingCardsData.map((card, index) => (
          <div
            key={index}
            className="group relative transform cursor-pointer bg-gray-200 bg-opacity-60 px-10 py-14 transition-all duration-500 ease-in-out hover:bg-black hover:py-20 hover:before:absolute hover:before:left-0 hover:before:top-0 hover:before:h-1.5 hover:before:w-full hover:before:bg-gradient-to-tr hover:before:from-[#FFC593] hover:before:via-[#BC7198] hover:before:to-[#5A77FF] hover:before:content-[''] sm:max-lg:flex sm:max-lg:w-full sm:max-lg:flex-nowrap lg:max-w-sm"
          >
            <div className="sm:max-lg:order-0 sm:max-lg:w-1/2">
              <h3 className="text-center text-2xl font-bold capitalize group-hover:text-white">
                {card.heading}
              </h3>
              <p className="mt-4 text-center group-hover:text-white group-hover:opacity-75">
                {card.phrgh}
              </p>
            </div>
            <div className="pricing sm:max-lg:order-1 sm:max-lg:w-1/2">
              <h1 className="mt-10 text-center text-4xl font-extrabold group-hover:text-white">
                {isYearly ? card.yearlyPrice : card.monthlyPrice}
              </h1>
              <p className="text-center opacity-75 group-hover:text-white">
                {isYearly ? "per year" : "per month"}
              </p>
            </div>
            <button className="theme-main-btn mx-auto mt-10 block hover:!bg-gray-200 group-hover:!bg-gray-200 group-hover:!text-black sm:max-lg:order-2 sm:max-lg:w-full">
              pick a plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
