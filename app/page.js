"use client";
import { useEffect, useState } from "react";
import Categories from "./components/Categories";
import CategoriesMobile from "./components/CategoriesMobile";
import CompanyCard from "./components/CompanyCard";
import JobCard from "./components/JobCard";

import dynamic from "next/dynamic";
import JobList from "../src/utilities/db";
import ControlMenu from "./components/ControlMenu";
import Footer from "./components/Footer";
import NoResult from "./components/NoResult";

const MapBoxGL = dynamic(() => import("./components/MapBoxGL"), {
  ssr: false,
});

const MapModal = dynamic(() => import("./components/MapModal"), {
  ssr: false,
});

export default function Home() {
  const [modal, setModal] = useState(false);
  const [loading, setloading] = useState(true);
  const [resetFilter, setResetFilter] = useState("true");
  const [jobData, setJobData] = useState(JobList || []);

  // static data

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 1000);
  }, []);

  // reset filter
  useEffect(() => {
    if (resetFilter) setJobData(JobList);
    if (!resetFilter) setJobData([]);
  }, [resetFilter]);

  return (
    <>
      <div className="w-full max-w-[1500px] mx-auto px-0 sm:px-5">
        <div className="min-h-[calc(100vh-250px)]">
          <div className="relative bg-[#F6F6F6] px-5 sm:px-0">
            <Categories resetFilter={resetFilter} />
            <CategoriesMobile resetFilter={resetFilter} />
            <div
              className={`grid grid-cols-1 lg4:grid-cols-[1fr,1fr] lg6:grid-cols-[1fr,500px] lg8:grid-cols-[1fr,560px] gap-5 bg-transparent ${
                modal === false ? "mb-5" : "mb-2"
              }`}>
              {/*left section starts */}
              <div>
                {/* the search sticky section starts */}
                <ControlMenu
                  modal={modal}
                  setResetFilter={setResetFilter}
                  resetFilter={resetFilter}
                />
                {/* the search sticky section ends */}

                {modal === false ? (
                  <>
                    <div className="flex flex-col gap-3">
                      {jobData?.length ? (
                        <>
                          {jobData?.map((job, i) => (
                            <JobCard
                              key={i}
                              loading={loading}
                              homeView={true}
                              job={job}
                            />
                          ))}
                        </>
                      ) : (
                        <NoResult setResetFilter={setResetFilter} />
                      )}
                    </div>

                    <div className="grid gird-cols-1 sm:grid-cols-2 gap-3 mt-3">
                      <CompanyCard loading={loading} />
                      <CompanyCard loading={loading} />
                      <CompanyCard loading={loading} />
                      <CompanyCard loading={loading} />
                      <CompanyCard loading={loading} />
                      <CompanyCard loading={loading} />
                    </div>
                  </>
                ) : null}
              </div>
              {/*left section end */}

              {/*right section starts */}
              <div className="hidden lg4:block">
                <div className="sticky top-[88px] mt-3">
                  {/* map starts */}

                  {/* loading prop for loading spinner */}
                  {/* <Map loading={loading}/> */}
                  <MapBoxGL />
                  {/* map ends */}
                </div>
              </div>
              {/*right section end */}
            </div>
          </div>

          {/* mobile map */}
          <MapModal modal={modal} setModal={setModal} />
        </div>
      </div>
      {!modal && <Footer />}
    </>
  );
}
