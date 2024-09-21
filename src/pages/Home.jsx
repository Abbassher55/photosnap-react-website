import React from "react";
import { homeSectionsData } from "../data";
import TwoColumnsSection from "../components/TwoColumnsSection";
import StoriesCards from "../components/StoriesCards";

const Home = () => {
  return (
    <>
      <TwoColumnsSection data={homeSectionsData} />
      <StoriesCards />
    </>
  );
};

export default Home;
