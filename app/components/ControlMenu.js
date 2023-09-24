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

  return (
    <div className="md2:sticky md2:top-[66px] bg-[#F6F6F6] z-20 pb-2 pt-2">
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

          <SortButton />
        </div>
        <div className="absolute -top-4 left-0 bg-[#F6F6F6] w-full h-4"></div>
      </div>
    </div>
  );
};

export default ControlMenu;
