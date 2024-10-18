import BetaBanner from "../components/BetaBanner";
import PricingCard from "../components/PricingCard";
import TwoColumnsSection from "../components/TwoColumnsSection";
import { PricingHeader } from "../data";

const Pricing = () => {
  return (
    <>
      <TwoColumnsSection data={PricingHeader} />
      <PricingCard />
      <div className="container mx-auto flex flex-col items-center justify-center py-40">
        <h2 className="heading-one mb-14 uppercase">compare</h2>
        <table className="w-11/12 border-spacing-4 md:w-10/12">
          <thead>
            <tr className="border-b border-black">
              <th className="py-4 text-start text-xs uppercase md:pr-16">
                the features
              </th>
              <th className="py-4 text-start text-xs uppercase md:pr-16">
                basic
              </th>
              <th className="py-4 text-start text-xs uppercase md:pr-16">
                pro
              </th>
              <th className="py-4 text-start text-xs uppercase md:pr-16">
                business
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-300">
              <td className="py-4 text-xs font-bold uppercase md:pr-16">
                unlimited story posting
              </td>
              <td className="py-4 text-xs font-bold uppercase md:pr-16">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4 text-center"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
              </td>
              <td className="py-4 text-xs font-bold uppercase md:pr-16">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4 text-center"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
              </td>
              <td className="py-4 text-xs font-bold uppercase md:pr-16">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4 text-center"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
              </td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="py-4 text-xs font-bold uppercase md:pr-16">
                UNLIMITED PHOTO UPLOAD
              </td>
              <td className="py-4 text-xs font-bold uppercase md:pr-16">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4 text-center"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
              </td>
              <td className="py-4 text-xs font-bold uppercase md:pr-16">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4 text-center"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
              </td>
              <td className="py-4 text-xs font-bold uppercase md:pr-16">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4 text-center"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
              </td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="py-4 text-xs font-bold uppercase md:pr-16">
                EMBEDDING CUSTOM CONTENT
              </td>
              <td className="py-4 text-xs font-bold uppercase md:pr-16">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4 text-center"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
              </td>
              <td className="py-4 text-xs font-bold uppercase md:pr-16">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4 text-center"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
              </td>
              <td className="py-4 text-xs font-bold uppercase md:pr-16">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4 text-center"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
              </td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="py-4 text-xs font-bold uppercase md:pr-16">
                CUSTOMIZE METADATA
              </td>
              <td className="py-4 text-xs font-bold uppercase md:pr-16"></td>
              <td className="py-4 text-xs font-bold uppercase md:pr-16">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4 text-center"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
              </td>
              <td className="py-4 text-xs font-bold uppercase md:pr-16">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4 text-center"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
              </td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="py-4 text-xs font-bold uppercase md:pr-16">
                ADVANCED METRICS
              </td>
              <td className="py-4 text-xs font-bold uppercase md:pr-16"></td>
              <td className="py-4 text-xs font-bold uppercase md:pr-16">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4 text-center"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
              </td>
              <td className="py-4 text-xs font-bold uppercase md:pr-16"></td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="py-4 text-xs font-bold uppercase md:pr-16">
                PHOTO DOWNLOADS
              </td>
              <td className="py-4 text-xs font-bold uppercase md:pr-16"></td>
              <td className="py-4 text-xs font-bold uppercase md:pr-16"></td>
              <td className="py-4 text-xs font-bold uppercase md:pr-16">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4 text-center"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
              </td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="py-4 text-xs font-bold uppercase md:pr-16">
                SEARCH ENGINE INDEXING
              </td>
              <td className="py-4 text-xs font-bold uppercase md:pr-16"></td>
              <td className="py-4 text-xs font-bold uppercase md:pr-16">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4 text-center"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
              </td>
              <td className="py-4 text-xs font-bold uppercase md:pr-16"></td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="py-4 text-xs font-bold uppercase md:pr-16">
                CUSTOM ANALYTICS
              </td>
              <td className="py-4 text-xs font-bold uppercase md:pr-16"></td>
              <td className="py-4 text-xs font-bold uppercase md:pr-16"></td>
              <td className="py-4 text-xs font-bold uppercase md:pr-16">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4 text-center"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <BetaBanner />
    </>
  );
};

export default Pricing;
