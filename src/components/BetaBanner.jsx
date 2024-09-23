const BetaBanner = () => {
  return (
    <div
      className="relative bg-cover before:absolute before:left-6 before:top-0 before:h-1.5 before:w-1/2 before:bg-gradient-to-tr before:from-[#FFC593] before:via-[#BC7198] before:to-[#5A77FF] before:content-[''] max-md:px-8 max-md:py-16 md:p-16 md:before:left-0 md:before:h-full md:before:w-1.5"
      style={{ backgroundImage: "url('beta-bg.jpg')" }}
    >
      <div className="mx-auto flex flex-col justify-between gap-12 text-white md:flex-row md:items-center md:gap-2 lg:w-2/3">
        <h2 className="heading-one md:w-3/5 lg:w-2/5">
          We’re in beta. Get your invite today!
        </h2>
        <button className="darkbg-secondary-btn flex items-center gap-3">
          get an invite
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              ></path>
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};
export default BetaBanner;
