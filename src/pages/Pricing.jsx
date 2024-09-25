import BetaBanner from "../components/BetaBanner";
import PricingCard from "../components/PricingCard";
import TwoColumnsSection from "../components/TwoColumnsSection";
import { PricingHeader } from "../data";

const Pricing = () => {
  return (
    <>
      <TwoColumnsSection data={PricingHeader} />
      <PricingCard />
      <div className="container flex flex-col items-center justify-center py-40">
        <h2 className="heading-one mb-14 uppercase">compare</h2>
        <div className="overflow-x-scroll">
          <table className="w-full border-spacing-4 md:w-1/2">
            <thead>
              <tr className="border-b border-black">
                <th className="py-4 pr-16 text-start text-xs uppercase">
                  the features
                </th>
                <th className="py-4 pr-16 text-start text-xs uppercase">
                  basic
                </th>
                <th className="py-4 pr-16 text-start text-xs uppercase">pro</th>
                <th className="py-4 pr-16 text-start text-xs uppercase">
                  business
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-300">
                <td className="py-4 pr-16 text-xs font-bold uppercase">
                  unlimited story posting
                </td>
                <td className="py-4 pr-16 text-xs font-bold uppercase">
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
                <td className="py-4 pr-16 text-xs font-bold uppercase">
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
                <td className="py-4 pr-16 text-xs font-bold uppercase">
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
                <td className="py-4 pr-16 text-xs font-bold uppercase">
                  UNLIMITED PHOTO UPLOAD
                </td>
                <td className="py-4 pr-16 text-xs font-bold uppercase">
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
                <td className="py-4 pr-16 text-xs font-bold uppercase">
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
                <td className="py-4 pr-16 text-xs font-bold uppercase">
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
                <td className="py-4 pr-16 text-xs font-bold uppercase">
                  EMBEDDING CUSTOM CONTENT
                </td>
                <td className="py-4 pr-16 text-xs font-bold uppercase">
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
                <td className="py-4 pr-16 text-xs font-bold uppercase">
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
                <td className="py-4 pr-16 text-xs font-bold uppercase">
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
                <td className="py-4 pr-16 text-xs font-bold uppercase">
                  CUSTOMIZE METADATA
                </td>
                <td className="py-4 pr-16 text-xs font-bold uppercase"></td>
                <td className="py-4 pr-16 text-xs font-bold uppercase">
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
                <td className="py-4 pr-16 text-xs font-bold uppercase">
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
                <td className="py-4 pr-16 text-xs font-bold uppercase">
                  ADVANCED METRICS
                </td>
                <td className="py-4 pr-16 text-xs font-bold uppercase"></td>
                <td className="py-4 pr-16 text-xs font-bold uppercase">
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
                <td className="py-4 pr-16 text-xs font-bold uppercase"></td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-4 pr-16 text-xs font-bold uppercase">
                  PHOTO DOWNLOADS
                </td>
                <td className="py-4 pr-16 text-xs font-bold uppercase"></td>
                <td className="py-4 pr-16 text-xs font-bold uppercase"></td>
                <td className="py-4 pr-16 text-xs font-bold uppercase">
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
                <td className="py-4 pr-16 text-xs font-bold uppercase">
                  SEARCH ENGINE INDEXING
                </td>
                <td className="py-4 pr-16 text-xs font-bold uppercase"></td>
                <td className="py-4 pr-16 text-xs font-bold uppercase">
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
                <td className="py-4 pr-16 text-xs font-bold uppercase"></td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-4 pr-16 text-xs font-bold uppercase">
                  CUSTOM ANALYTICS
                </td>
                <td className="py-4 pr-16 text-xs font-bold uppercase"></td>
                <td className="py-4 pr-16 text-xs font-bold uppercase"></td>
                <td className="py-4 pr-16 text-xs font-bold uppercase">
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
      </div>
      <BetaBanner />
    </>
  );
};

export default Pricing;
