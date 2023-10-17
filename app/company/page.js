"use client";
import JobList from "@/src/utilities/db";

import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import CompanyInfoCard from "../components/CompanyInfoCard";
import Footer from "../components/Footer";
import JobCard from "../components/JobCard";
import ShareButton from "../components/ShareButton";
// import CompanyMap from "../components/CompanyMap";
const CompanyMap = dynamic(() => import("../components/CompanyMap"), {
  ssr: false,
});
// import Slider from "../components/Slider";
const SliderComponent = dynamic(() => import("../components/Slider"), {
  ssr: false,
});

function Company() {
  const router = useRouter();
  const [loading, setloading] = useState(true);
  const [jobData, setJobData] = useState(JobList || []);

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 1000);
  }, []);
  return (
    <>
      <div className="w-full max-w-[1500px] mx-auto px-0 sm:px-5">
        <div className="min-h-[calc(100vh-250px)]">
          <div className="relative bg-[#F6F6F6]">
            <div className="my-5">
              {/*left section starts */}
              <div className="customShadow rounded-lg bg-white border-2 border-gray-200 overflow-hidden">
                <div className="bg-[#EBEBFF] p-3">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => router.back()}
                      className="customShadow flex items-center gap-2 rounded-lg bg-white border-2 border-gray-200 text-[#6B7280] text-[14px] font-[500] transition hover:bg-[#f2f2f2] px-3 py-1.5">
                      <img
                        src="/images/arrow-left.svg"
                        alt="arrow-left"
                        className="w-[15px]"
                      />
                      <div>Go back</div>
                    </button>

                    <ShareButton />
                  </div>

                  <div className="mt-3">
                    <CompanyInfoCard loading={loading} />
                  </div>
                </div>

                {/* about company start */}
                <div className="">
                  <div className="text-[19px] font-[700] mb-4 p-4 bg-[#f6f6f6]">
                    About Our Company
                  </div>

                  <div className="text-[#6B7280] font-medium leading-[23px] p-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                    <br />
                    <br />
                    <ul className="list-disc ml-5">
                      <li className="mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        ex ea commodo consequat
                      </li>
                      <li className="mb-5">
                        Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur
                      </li>
                      <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </li>
                    </ul>
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </div>
                </div>
                {/* about company end */}

                {/* active offers start */}
                <div className="mt-4">
                  <div className="text-[19px] font-[700] p-4 bg-[#f6f6f6]">
                    Active Offers
                  </div>

                  <div className="flex flex-col gap-3 p-4">
                    {jobData?.slice(0, 4)?.map((job, i) => (
                      <JobCard
                        key={i}
                        loading={loading}
                        homeView={true}
                        job={job}
                      />
                    ))}
                  </div>
                </div>
                {/* active offers end */}

                {/* life at the company start */}
                <div className="">
                  <div className="text-[19px] font-[700] mb-4 p-4 bg-[#f6f6f6]">
                    Life At The Company
                  </div>

                  <div className="text-[#6B7280] font-medium leading-[23px] p-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                    <br />
                  </div>

                  <div className="p-4">
                    <SliderComponent />
                  </div>
                </div>
                {/* life at the company start end */}

                {/* Out Location start */}
                <div className="">
                  <div className="text-[19px] font-[700] p-4 bg-[#f6f6f6]">
                    Out Location
                  </div>

                  {/* map */}
                  <div className="w-full h-[400px] overflow-hidden">
                    <CompanyMap />
                  </div>
                </div>
                {/* Out Location start end */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Company;
