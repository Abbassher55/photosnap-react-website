import { Link } from "react-router-dom";

const StoriesCards = ({ data, showDate = true, count }) => {
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-4">
        {data.slice(0, count).map((cardData, index) => (
          <div
            key={index}
            className="card relative h-[500px] transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:z-50 after:h-1.5 after:w-full after:bg-gradient-to-t after:from-[#FFC593] after:via-[#BC7198] after:to-[#5A77FF] after:opacity-0 after:content-[''] hover:z-50 hover:-translate-y-6 hover:cursor-pointer hover:after:opacity-100"
          >
            <img
              src={cardData.storyImage}
              className="absolute top-0 z-10 h-full w-full"
              alt={cardData.title}
            />
            <div className="absolute top-0 z-20 h-full w-full bg-black bg-opacity-30"></div>

            <div className="story-detail absolute bottom-20 z-40 mx-10 text-white">
              <p className={`${showDate ? "block" : "hidden"} text-xs`}>
                {cardData.date}
              </p>
              <h3 className="heading-three my-1 capitalize">
                {cardData.title}
              </h3>
              <p className="text-xs">{cardData.storyBy}</p>
              <hr className="mt-4 w-3/4 bg-white opacity-75" />
            </div>
            <Link
              to="/stories"
              className="absolute bottom-10 z-40 mx-10 flex w-3/4 items-center justify-between text-white"
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
        ))}
      </div>
    </>
  );
};
export default StoriesCards;
