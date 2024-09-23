import headerImage from "../assets/stories/desktop/header-bitmap.jpg";
const PagesHeader = () => {
  return (
    <div
      className="container flex items-center bg-[url(${headerImage})] bg-cover px-4 text-white md:h-[650px] md:px-28"
      style={{ backgroundImage: `url(${headerImage})` }}
    >
      <div className="md:w-1/3">
        <p className="heading-four uppercase tracking-[2px]">
          Last month featured story
        </p>
        <h2 className="heading-one mb-16 mt-6 uppercase">
          hazy full moon of appalachia
        </h2>
        <p className="text-[13px]">
          <span className="me-3 opacity-75">March 2nd 2020</span>
          by John Appleseed
        </p>
        <p className="my-6 opacity-75">
          The dissected plateau area, while not actually made up of geological
          mountains, is popularly called "mountains," especially in eastern
          Kentucky and West Virginia, and while the ridges are not high, the
          terrain is extremely rugged.
        </p>
        <button className="darkbg-secondary-btn flex items-center">
          read the story
          <span className="ms-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default PagesHeader;
