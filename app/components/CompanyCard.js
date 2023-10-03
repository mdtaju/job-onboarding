import Link from "next/link";
import { useState } from "react";

const CompanyCard = (props) => {
  const [heart, setheart] = useState(false);

  return (
    <>
      {props.loading === false ? (
        <Link
          href="/company"
          className="customShadow rounded-lg bg-white border-2 border-gray-200 transition hover:bg-[#f2f2f2] p-2">
          <div className="flex items-start gap-4 flex-col sm2:flex-row sm:flex-col lg3:flex-row">
            <div className="min-w-[110px] max-w-[110px] h-[110px] rounded-lg bg-black text-center flex items-center justify-center text-white translate-y-1">
              LOGO
            </div>
            <div>
              <div className="flex gap-3">
                <div className="text-[#2b323d] text-[19px] font-[600]">
                  Linear Company
                </div>
                <div className="">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setheart(true);
                    }}>
                    <img
                      src="/images/heart.svg"
                      alt="heart"
                      className={`min-w-[20px] max-w-[20px] translate-y-1 ${
                        heart === false ? "flex" : "hidden"
                      }`}
                    />
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setheart(false);
                    }}>
                    <img
                      src="/images/heart-fill.svg"
                      alt="heart"
                      className={`min-w-[20px] max-w-[20px] translate-y-1 ${
                        heart === true ? "flex" : "hidden"
                      }`}
                    />
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-2.5 flex-wrap whitespace-nowrap mt-2.5">
                <div className="flex items-center gap-1.5 rounded-lg text-[#7a8497] border-2 border-gray-200 overflow-hidden h-[30px] px-1.5">
                  <img
                    src="/images/location.svg"
                    alt="location"
                    className="min-w-[14px] max-w-[14px]"
                  />
                  <div className="font-semibold text-[13px]">Brussels</div>
                </div>

                <div className="flex items-center gap-1.5 rounded-lg text-[#7a8497] border-2 border-gray-200 overflow-hidden h-[30px] px-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16">
                    <path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z" />
                    <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V1Zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3V1Z" />
                  </svg>
                  <div className="font-semibold text-[13px]">Construction</div>
                </div>
              </div>

              <div className="flex items-center gap-2 flex-wrap whitespace-nowrap mb-2 mt-2.5">
                <div className="flex items-center gap-2.5 rounded-full bg-[#3B82F6] bg-opacity-10 text-[#3B82F6] text-[13px] font-semibold text-center px-3 h-[30px]">
                  <div className="rounded-full bg-[#3B82F6] w-2 h-2"></div>{" "}
                  Remote
                </div>
                <div className="flex items-center gap-2.5 rounded-full bg-[#F63B3B] bg-opacity-10 text-[#F63B3B] text-[13px] font-semibold text-center px-3 h-[30px]">
                  <div className="rounded-full bg-[#F63B3B] w-2 h-2"></div> 10
                  Active Jobs
                </div>
              </div>
            </div>
          </div>

          <div className=" text-[#7a8497] leading-[24px] mt-3">
            Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the
            card title and make up the bulk of the card's content. Text is going
            and let’s say it is already getting too old, then if it’s too long
            it starts to go like this dots ...
          </div>
        </Link>
      ) : (
        // loading state for the card
        <>
          <div className="rounded-lg bg-white border-2 border-gray-200 p-2">
            <div className="animate-pulse">
              <div className="flex">
                <div className="flex-shrink-0">
                  <span className="w-12 h-12 block bg-gray-200 rounded-full"></span>
                </div>

                <div className="customShadow ml-4 mt-2 w-full">
                  <div className="h-6 bg-gray-200 rounded-md w-[40%]"></div>
                  <div className="grid grid-cols-2 gap-3 mt-3">
                    <div className="h-4 bg-gray-200 rounded-md"></div>
                    <div className="h-4 bg-gray-200 rounded-md"></div>
                  </div>
                </div>
              </div>
              <ul className="mt-5 space-y-3">
                <li className="w-[90%] h-4 bg-gray-200 rounded-md"></li>
                <li className="w-[90%] h-4 bg-gray-200 rounded-md"></li>
                <li className="w-[90%] h-4 bg-gray-200 rounded-md"></li>
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CompanyCard;
