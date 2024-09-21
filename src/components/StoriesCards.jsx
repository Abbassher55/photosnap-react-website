import { Link } from "react-router-dom";
import mountainImage from "../assets/stories/desktop/mountains.jpg";

const StoriesCards = () => {
  return (
    <>
      <div className="grid gap-0 md:grid-cols-2 lg:grid-cols-4">
        <div className="card relative h-[500px]">
          <img
            src={mountainImage}
            className="absolute top-0 z-10 h-full w-full"
            alt="Story image"
          />
          <div className="absolute top-0 z-20 h-full w-full bg-black bg-opacity-30"></div>

          <div className="story-detail absolute bottom-10 z-40 mx-10 w-full text-white">
            <h3 className="heading-three">The Mountains</h3>
            <p>by John Appleseed</p>
            <hr className="mt-4 w-3/4 bg-white opacity-75" />
          </div>
          <Link
            to="/stories"
            className="absolute bottom-2 z-40 mx-10 flex w-3/4 items-center justify-between text-white"
          >
            <div className="font-bold uppercase">read story</div>
            <div className="font-bold uppercase">
              <span>
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
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
export default StoriesCards;
