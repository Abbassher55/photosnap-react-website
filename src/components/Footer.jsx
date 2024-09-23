import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container flex flex-col bg-black px-8 py-14 text-white md:flex-row md:p-16">
      <div className="mx-auto lg:w-3/4">
        <div className="flex flex-col gap-3 md:flex-row">
          <div className="flex flex-col gap-8 md:flex-col md:gap-3 lg:w-1/2 lg:flex-row lg:gap-24">
            <div className="flex flex-col lg:justify-between">
              <img
                src="footer-logo.png"
                className="mb-8 lg:h-4"
                alt="Footer logo"
              />
              <div className="social-icons flex justify-center gap-4 md:hidden lg:flex lg:justify-start">
                <a
                  href="https://www.facebook.com"
                  className="group"
                  target="_blank"
                >
                  <img
                    src="facebook-white.png"
                    className="size-5 group-hover:hidden"
                    alt=""
                  />
                  <img
                    src="facebook.svg"
                    className="hidden size-5 group-hover:block"
                    alt=""
                  />
                </a>
                <a
                  href="https://www.youtube.com"
                  className="group"
                  target="_blank"
                >
                  <img
                    src="youtube-white.png"
                    className="size-5 group-hover:hidden"
                    alt=""
                  />
                  <img
                    src="youtube.svg"
                    className="hidden size-5 group-hover:block"
                    alt=""
                  />
                </a>
                <a
                  href="https://www.twitter.com"
                  className="group"
                  target="_blank"
                >
                  <img
                    src="twitter-white.png"
                    className="size-5 group-hover:hidden"
                    alt=""
                  />
                  <img
                    src="twitter.svg"
                    className="hidden size-5 group-hover:block"
                    alt=""
                  />
                </a>
                <a
                  href="https://www.pinterest.com"
                  className="group"
                  target="_blank"
                >
                  <img
                    src="pinterest-white.png"
                    className="size-5 group-hover:hidden"
                    alt=""
                  />
                  <img
                    src="pinterest.svg"
                    className="hidden size-5 group-hover:block"
                    alt=""
                  />
                </a>
                <a
                  href="https://www.instagram.com"
                  className="group"
                  target="_blank"
                >
                  <img
                    src="instagram-white.png"
                    className="size-5 group-hover:hidden"
                    alt=""
                  />
                  <img
                    src="instagram.svg"
                    className="hidden size-5 group-hover:block"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <ul className="flex flex-col items-center md:flex-row lg:flex-col lg:items-start">
              <li className="max-sm:mb-5 md:max-lg:me-3 lg:mb-3">
                <Link to="/" className="heading-four uppercase tracking-[2px]">
                  home
                </Link>
              </li>
              <li className="max-sm:mb-5 md:max-lg:me-3 lg:mb-3">
                <Link
                  to="/stories"
                  className="heading-four uppercase tracking-[2px]"
                >
                  stories
                </Link>
              </li>
              <li className="max-sm:mb-5 md:max-lg:me-3 lg:mb-3">
                <Link
                  to="/features"
                  className="heading-four uppercase tracking-[2px]"
                >
                  features
                </Link>
              </li>
              <li className="max-sm:mb-5">
                <Link
                  to="/pricing"
                  className="heading-four uppercase tracking-[2px]"
                >
                  pricing
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center justify-between md:w-1/2 md:items-end">
            <button className="darkbg-secondary-btn mb-9 flex items-center gap-3">
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
            <div className="opacity-75">
              Copyright 2019. All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
