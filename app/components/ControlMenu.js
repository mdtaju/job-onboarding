import { useEffect, useState } from "react";
import FavouritesButton from "./FavouritesButton";
import LocationButton from "./LocationButton";
import SearchButton from "./SearchButton";
import SortButton from "./SortButton";
import Toggle from "./Toggle";

const ControlMenu = (props) => {
  const { resetFilter, setResetFilter } = props || {};
  const [remoteState, setRemoteState] = useState(false);
  const [englishState, setEnglishState] = useState(false);
  const [salaryState, setSalaryState] = useState(false);

  useEffect(() => {
    if (resetFilter) {
      setRemoteState(false);
      setEnglishState(false);
      setSalaryState(false);
    }
  }, [resetFilter]);
  console.log(props.modal);

  return (
    <div className={`md2:sticky md2:top-[66px] bg-[#F6F6F6] z-20 pb-2 pt-2 `}>
      <div className="relative">
        <div className="flex gap-3 justify-between flex-col lg7:flex-row whitespace-nowrap">
          <div className="flex items-center gap-3 w-full">
            <SearchButton resetFilter={resetFilter} />

            <LocationButton
              resetFilter={resetFilter}
              setResetFilter={setResetFilter}
            />

            <FavouritesButton resetFilter={resetFilter} />
          </div>

          <div className="flex items-center sm:justify-end gap-2 sm4:gap-3 w-fit">
            <Toggle
              title="Remote"
              state={remoteState}
              setState={setRemoteState}
            />
            <Toggle
              title="English"
              state={englishState}
              setState={setEnglishState}
            />
            <Toggle
              title="Salary"
              state={salaryState}
              setState={setSalaryState}
            />
          </div>
        </div>

        <div
          className={`sm4:items-center justify-between flex-col-reverse sm4:flex-row gap-3 mt-4 mb-2 sm4:mb-0 ${
            props.modal === false ? "flex" : "hidden"
          }`}>
          <div className="text-[#374151] font-medium whitespace-nowrap">
            Job Listings: 24 192 offers
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() =>
                setResetFilter(Math.floor(Math.random() * 90000) + 10000)
              }
              className="w-full sm:w-fit px-3 py-1 flex items-center gap-1 mx-auto text-[15px] bg-white hover:bg-[#f2f2f2] text-[#374151] border-2 border-gray-200 h-[40px] rounded-lg shadow-sm font-semibold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Clear filters
            </button>

            <SortButton />
          </div>
        </div>
        <div className="absolute -top-4 left-0 bg-[#F6F6F6] w-full h-4"></div>
      </div>
    </div>
  );
};

export default ControlMenu;
