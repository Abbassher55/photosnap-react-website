const TwoColumnsSection = ({ data }) => {
  return (
    <>
      {data.map((sectionData, index) => (
        <div
          key={index}
          className={`flex flex-col-reverse items-center ${sectionData.bgDark && "bg-black"} ${sectionData.rowReverse ? "md:flex-row-reverse" : "md:flex-row"}`}
        >
          <div
            className={`text-side flex h-full flex-col items-center justify-center ${sectionData.bgDark && "text-white"} ${sectionData.hasBefore && "relative before:absolute before:left-6 before:top-0 before:h-1.5 before:w-1/2 before:bg-gradient-to-tr before:from-[#FFC593] before:via-[#BC7198] before:to-[#5A77FF] before:content-[''] md:before:left-0 md:before:h-full md:before:w-1.5"} max-sm:p-6 md:w-2/3 lg:w-1/2`}
          >
            <div className="text-area md:w-2/3 lg:w-1/2">
              <h1 className="heading-one uppercase">
                {sectionData.textHeading}
              </h1>
              <p className="mt-5">{sectionData.phrgh}</p>
              <button
                className={`${sectionData.bgDark ? "darkbg-secondary-btn" : "theme-secondary-btn"} mt-12 flex items-center gap-3`}
              >
                {sectionData.btnText}
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
              </button>
            </div>
          </div>
          <div className="img-side md:w-1/3 lg:w-1/2">
            <img
              src={sectionData.sectionImgDesktop}
              className="hidden max-h-[600px] lg:block"
              alt="Section image"
            />
            <img
              src={sectionData.sectionImgTablet}
              className="hidden sm:max-lg:block"
              alt="Section image"
            />
            <img
              src={sectionData.sectionImgMobile}
              className="hidden max-sm:block"
              alt="Section image"
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default TwoColumnsSection;
