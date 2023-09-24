import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";

const SearchButton = ({ resetFilter }) => {
  const [modal, setmodal] = useState(false);
  const [showSuggestion, setshowSuggestion] = useState("false");
  const [searchText, setSearchText] = useState("");
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    if (resetFilter) setSearchText("");
  }, [resetFilter]);

  const mainList = [
    "Paris",
    "Milan",
    "Helsinki",
    "Paris",
    "Milan",
    "HHai",
    "Helsinki",
  ];

  function closeModal() {
    setmodal(false);
  }

  const handleChange = (event) => {
    const keyword = event.target.value.toLowerCase();
    setSearchText(keyword);

    const filetStrings = mainList.filter((sl) =>
      sl.toLowerCase().includes(keyword)
    );

    // Sort the strings based on the keyword
    const sortedStrings = filetStrings.sort((a, b) => {
      // Custom comparison logic here
      return a.toLowerCase().includes(keyword)
        ? -1
        : b.toLowerCase().includes(keyword)
        ? 1
        : 0;
    });

    if (sortedStrings.length) {
      setSearchList(sortedStrings);
      return;
    } else {
      setSearchList(["No Item Found"]);
    }
  };

  const handleSearchResultClick = (value) => {
    setSearchText(value);
    setSearchList([]);
  };

  return (
    <>
      {/* input field starts */}
      <div className="hidden sm:flex relative w-full">
        <div className="customShadow flex items-center gap-3 rounded-lg bg-white border-2 border-gray-200 h-[45px] focus-within:border-blue-500 w-full transition hover:bg-[#f2f2f2] px-2">
          <img src="/images/search.svg" alt="Search" />
          <input
            type="text"
            onFocus={() => {
              setshowSuggestion(true);
            }}
            // onBlur={() => {
            //   setshowSuggestion(false);
            // }}
            onBlur={() => {
              setTimeout(() => {
                setshowSuggestion(false);
                setSearchList([]);
              }, 200);
            }}
            value={searchText}
            onChange={handleChange}
            placeholder="Position, company, keyword"
            className="w-full h-full bg-transparent border-none outline-none"
          />
        </div>

        {/* suggested locations when user is typing starts */}

        {showSuggestion === true && searchText.length ? (
          <div className="customScroll absolute top-[calc(100%+3px)] left-0 w-full p-1 flex flex-col space-y-1 bg-white border-2 border-gray-200 rounded-lg max-h-[130px] overflow-y-auto z-20">
            {searchList.map((item, i) => (
              <button
                onClick={() => handleSearchResultClick(item)}
                key={i}
                className="w-full py-1.5 px-2 text-left rounded-md hover:bg-[#F3F4F6] font-medium text-[#374151]">
                {item}
              </button>
            ))}
          </div>
        ) : null}

        {/* suggested locations when user is typing ends */}
      </div>
      {/* input field ends */}

      {/* mobile search button */}
      <button
        onClick={() => {
          setmodal(true);
        }}
        className="customShadow flex sm:hidden items-center gap-3 rounded-lg bg-white border-2 border-gray-200 overflow-hidden h-[45px] transition hover:bg-[#f2f2f2] px-3">
        <img src="/images/search.svg" alt="Search" />
      </button>
      {/* mobile search button */}

      {/* search modal */}
      <Transition appear show={modal} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-[#6B7280] bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-5 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95">
                <Dialog.Panel className="w-full transform overflow-hidden rounded-xl bg-white p-4 text-center align-middle transition-all">
                  {/* mobile input field starts */}

                  <div className="relative w-full">
                    <div className="customShadow flex items-center gap-3 rounded-lg bg-white border-2 border-gray-200 overflow-hidden h-[45px] focus-within:border-blue-500 hover:border-blue-500 w-full px-2">
                      <img src="/images/search.svg" alt="Search" />
                      <input
                        type="text"
                        placeholder="Position, company, keyword"
                        onFocus={() => {
                          setshowSuggestion(true);
                        }}
                        onBlur={() => {
                          setTimeout(() => {
                            setshowSuggestion(false);
                            setSearchList([]);
                          }, 200);
                        }}
                        value={searchText}
                        onChange={handleChange}
                        className="w-full h-full bg-transparent border-none outline-none"
                      />
                    </div>

                    {/* suggested locations when user is typing starts */}

                    {showSuggestion === true && searchText.length ? (
                      <div className="customScroll w-full p-1 flex flex-col space-y-1 bg-white border-2 border-gray-200 rounded-lg max-h-[130px] mt-1 overflow-y-auto z-20">
                        {searchList.map((item, i) => (
                          <button
                            onClick={() => handleSearchResultClick(item)}
                            key={i}
                            className="w-full py-1.5 px-2 text-left rounded-md hover:bg-[#F3F4F6] font-medium text-[#374151]">
                            {item}
                          </button>
                        ))}
                      </div>
                    ) : null}

                    {/* suggested locations when user is typing ends */}
                  </div>

                  {/* mobile input field ends */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default SearchButton;
