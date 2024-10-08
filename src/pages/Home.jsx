import React from "react";
import { homeSectionsData } from "../data";
import { storiesCards } from "../data";
import TwoColumnsSection from "../components/TwoColumnsSection";
import StoriesCards from "../components/StoriesCards";
import ThreeColumnsSection from "../components/ThreeColumnsSection";
import { homeThreeSetionData } from "../data";

const Home = () => {
  return (
    <>
      <TwoColumnsSection data={homeSectionsData} />
      <StoriesCards data={storiesCards} showDate={false} count={4} />
      <ThreeColumnsSection threeSectionData={homeThreeSetionData} />
    </>
  );
};

export default Home;
