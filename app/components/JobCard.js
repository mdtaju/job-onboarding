"use client";
import Link from "next/link";
import { useState } from "react";

const JobCard = (props) => {
  const {
    JobName,
    CompanyName,
    CompanyLogoSvg,
    Salary,
    JobLocation,
    ContractType,
    English,
    Remote: IsJobRemote,
    Tag1,
    Tag2,
    Tag3,
    New,
    CompanyLocation,
    CompanyCategory,
    ComapnyCategoryColour,
  } = props.job || {};

  const [heart, setheart] = useState(false);

  return (
    <>
      {props.loading === false ? (
        <Link
          href="/job"
          className="customShadow relative flex items-start gap-3 rounded-lg bg-white border-2 border-gray-200 transition hover:bg-[#f2f2f2] p-2">
          <div className="min-w-[88px] max-w-[88px] h-[88px] rounded-lg bg-black text-center flex items-center justify-center text-white translate-y-[1px]">
            {/* Logo div */}
            <div
              className="w-full h-full p-2 grid place-items-center"
              dangerouslySetInnerHTML={{ __html: CompanyLogoSvg }}
            />
          </div>
          <div className="w-full">
            <div className="w-full flex items-center gap-0 sm:gap-5 justify-between">
              <div className="w-full flex gap-3 justify-between sm:justify-normal">
                <div className="text-[#2b323d] text-[17px] sm:text-[19px] font-[600]">
                  {JobName}
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
              <div
                className={`relative ${
                  props.homeView === true
                    ? "translate-y-6 lg7:translate-y-[9px]"
                    : ""
                }`}>
                <div className="hidden lg6:flex whitespace-nowrap text-[#1ABB47] text-[20px] font-medium">
                  {Salary}
                </div>

                {/* tags only show on home page starts */}
                {props.homeView === true ? (
                  <div className="absolute top-6 right-0 hidden lg7:flex items-center gap-2 whitespace-nowrap mt-4">
                    {Tag1 !== 0 && (
                      <div className="flex items-center gap-2.5 rounded-full text-[#7a8497] text-[12px] font-semibold text-center px-2 h-[30px] border border-gray-200">
                        {Tag1}
                      </div>
                    )}
                    {Tag2 !== 0 && (
                      <div className="flex items-center gap-2.5 rounded-full text-[#7a8497] text-[12px] font-semibold text-center px-2 h-[30px] border border-gray-200">
                        {Tag2}
                      </div>
                    )}
                    {Tag3 !== 0 && (
                      <div className="flex items-center gap-2.5 rounded-full text-[#7a8497] text-[12px] font-semibold text-center px-2 h-[30px] border border-gray-200">
                        {Tag3}
                      </div>
                    )}
                    {New !== 0 && (
                      <div className="flex items-center gap-2.5 rounded-md bg-gray-100 text-gray-800 text-[12px] font-semibold text-center px-2 h-[30px]">
                        New
                      </div>
                    )}
                  </div>
                ) : null}
                {/* tags only show on home page ends */}
              </div>
            </div>
            <div className="text-[#7a8497] font-[500] text-[15px] lg6:text-[14px] mt-1 lg6:mt-0">
              {CompanyName}
            </div>
            <div className="flex lg6:hidden whitespace-nowrap text-[#1ABB47] text-[19px] font-medium mt-1">
              {Salary}
            </div>

            <div className="flex items-center gap-2.5 flex-wrap mb-1 -ml-[98px] sm2:ml-0 mt-[12px] lg6:mt-2">
              <div className="flex items-center gap-1.5 rounded-lg text-[#7a8497] border-2 border-gray-200 overflow-hidden h-[30px] px-1.5">
                <img
                  src="/images/location.svg"
                  alt="location"
                  className="min-w-[14px] max-w-[14px]"
                />
                <div className="font-semibold text-[13px]">{JobLocation}</div>
              </div>

              <div className="flex items-center gap-2 rounded-lg text-[#7a8497] border-2 border-gray-200 overflow-hidden h-[30px] px-1.5">
                <img
                  src="/images/clock.svg"
                  alt="clock"
                  className="min-w-[14px] max-w-[14px]"
                />
                <div className="font-semibold text-[13px]">Contract Time</div>
              </div>

              {English === 1 && (
                <img src="/images/flag.svg" alt="flag" className="w-[20px]" />
              )}

              {IsJobRemote === 1 && (
                <div className="flex items-center gap-2 rounded-full bg-[#3B82F6] bg-opacity-10 text-[#3B82F6] text-[13px] font-semibold text-center px-3 h-[30px]">
                  <div className="rounded-full bg-[#3B82F6] w-1.5 h-1.5"></div>{" "}
                  Remote
                </div>
              )}
            </div>
          </div>
        </Link>
      ) : (
        // loading state for the card
        <>
          <div className="customShadow rounded-lg bg-white border-2 border-gray-200 p-2">
            <div className="flex animate-pulse">
              <div className="flex-shrink-0">
                <span className="w-12 h-12 block bg-gray-200 rounded-full"></span>
              </div>

              <div className="ml-4 mt-2 w-full">
                <div className="h-6 bg-gray-200 rounded-md w-[40%]"></div>

                <ul className="mt-5 space-y-3">
                  <li className="w-[90%] h-4 bg-gray-200 rounded-md"></li>
                  <li className="w-[90%] h-4 bg-gray-200 rounded-md"></li>
                  <li className="w-[90%] h-4 bg-gray-200 rounded-md"></li>
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default JobCard;
