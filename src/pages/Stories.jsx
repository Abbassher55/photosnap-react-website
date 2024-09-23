import PagesHeader from "../components/PagesHeader";
import StoriesCards from "../components/StoriesCards";
import { storiesCards } from "../data";

const Stories = () => {
  return (
    <>
      <PagesHeader />
      <StoriesCards data={storiesCards} />
    </>
  );
};

export default Stories;
