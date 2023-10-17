import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import CategorySingle from "./CategorySingle";

const Categories = ({ resetFilter }) => {
  const [categoryState, setcategoryState] = useState("none");
  const [modal, setmodal] = useState(false);
  const [subCategory, setsubCategory] = useState("none");

  const categoriesArray = [
    {
      categoryName: "Restaurants & Bars",
      categoryColor: "#FF9F47",
      iconPath: "/images/categories/restaurant_bars_button.svg",
      subCategories: [
        "General Manager",
        "Manager",
        "Floor Manager",
        "Bartender",
        "Service Staff",
      ],
    },
    {
      categoryName: "Hotels",
      categoryColor: "#5F9FFF",
      iconPath: "/images/categories/hotels_button.svg",
      subCategories: [],
    },
    {
      categoryName: "Delivery & Transportation",
      categoryColor: "#FF5353",
      iconPath: "/images/categories/retail_shops_button.svg",
      subCategories: ["Delivery Driver", "Food Delivery"],
    },
    {
      categoryName: "Retail and Shops",
      categoryColor: "#FF65B8",
      iconPath: "/images/categories/delivery_transport_button.svg",
      subCategories: [
        "Shop Manager",
        "Sales Assistance",
        "Visual Merchandiser",
        "Department Manager",
        "Cashier",
      ],
    },
    {
      categoryName: "Logistics & Warehouse",
      categoryColor: "#37D2A4",
      iconPath: "/images/categories/logistics_warehouse_button.svg",
      subCategories: ["Warehouse Worker", "Store Warehouse"],
    },
    {
      categoryName: "Gym & Sports",
      categoryColor: "#FFD02A",
      iconPath: "/images/categories/gym_sports_button.svg",
      subCategories: [
        "Personal Trainer",
        "Host",
        "Fitness Instructor",
        "Personal Coach",
        "Dietitian",
      ],
    },
    {
      categoryName: "Maintenance & Construction",
      categoryColor: "#B93AE5",
      iconPath: "/images/categories/maintenance_construction_button.svg",
      subCategories: [
        "Property Manager",
        "Maintenance Technician",
        "Housekeeper",
        "Security Officer",
        "Tenant Coordinator",
      ],
    },
  ];

  useEffect(() => {
    if (resetFilter) {
      setcategoryState("none");
      setmodal(false);
      setsubCategory("none");
    }
  }, [resetFilter]);

  function closeModal() {
    setmodal(false);
  }

  // scroll start position
  const scrollableDivRef = useRef(null);

  const scrollToStart = () => {
    if (scrollableDivRef.current) {
      scrollableDivRef.current.scrollLeft = 0;
    }
  };

  return (
    <>
      <div
        ref={scrollableDivRef}
        className="customScroll bg-[#F6F6F6] sticky top-0 z-30 hidden md2:flex items-center gap-3 whitespace-nowrap overflow-x-auto pt-2 pb-1.5">
        {/* mobile dropdown button */}
        <button
          onClick={() => {
            setmodal(true);
          }}
          className="customShadow px-4 py-3 rounded-lg text-white flex md2:hidden items-center gap-2 flex-row-reverse font-semibold text-[15px] transition border-2 border-gray-200 hover:border-black bg-white">
          <img
            src="/images/arrow-left.svg"
            alt="arrow-left"
            className="min-w-[17px] max-w-[17px] -rotate-90"
          />
        </button>

        {/* modal buttons show when active starts */}
        <button
          onClick={() => {
            setcategoryState("none");
            setsubCategory("none");
          }}
          className={`px-4 py-3 flex whitespace-nowrap rounded-lg text-white items-center gap-2 flex-row-reverse font-semibold text-[15px] transition border-2 hover:border-black bg-[#0094FF] ${
            categoryState !== "More Category 1"
              ? "hidden"
              : categoryState === "More Category 1"
              ? "border-black"
              : "opacity-30"
          }`}>
          More Category 1{" "}
          <img
            src="/images/hat.svg"
            alt="hat"
            className="min-w-[22px] max-w-[22px]"
          />
        </button>

        <button
          onClick={() => {
            setcategoryState("none");
            setsubCategory("none");
          }}
          className={`px-4 py-3 flex whitespace-nowrap rounded-lg text-white items-center gap-2 flex-row-reverse font-semibold text-[15px] transition border-2 hover:border-black bg-[#FF4F4F] ${
            categoryState !== "More Category 2"
              ? "hidden"
              : categoryState === "More Category 2"
              ? "border-black"
              : "opacity-30"
          }`}>
          More Category 2{" "}
          <img
            src="/images/hat.svg"
            alt="hat"
            className="min-w-[22px] max-w-[22px]"
          />
        </button>

        <button
          onClick={() => {
            setcategoryState("none");
            setsubCategory("none");
          }}
          className={`px-4 py-3 flex whitespace-nowrap rounded-lg text-white items-center gap-2 flex-row-reverse font-semibold text-[15px] transition border-2 hover:border-black bg-[#7E1EDD] ${
            categoryState !== "More Category 3"
              ? "hidden"
              : categoryState === "More Category 3"
              ? "border-black"
              : "opacity-30"
          }`}>
          More Category 3{" "}
          <img
            src="/images/hat.svg"
            alt="hat"
            className="min-w-[22px] max-w-[22px]"
          />
        </button>
        {/* modal buttons show when active ends */}

        {/* desktop categories start */}
        {categoriesArray.map((ct, i) => (
          <CategorySingle
            key={i}
            categoryState={categoryState}
            subCategory={subCategory}
            setsubCategory={setsubCategory}
            setcategoryState={setcategoryState}
            ct={ct}
          />
        ))}

        {/* show more button */}
        <button
          onClick={() => {
            setmodal(true);
          }}
          className={`px-4 py-3 rounded-lg text-[#4B5563] flex items-center gap-2 flex-row-reverse font-semibold text-[15px] transition border-2 border-[#F6F6F6] hover:border-black bg-[#E7E7E7] ${
            categoryState !== "none" ? "opacity-30" : ""
          } ${categoryState === "none" ? "" : "hidden"}`}>
          Show More{" "}
          <img
            src="/images/dots.svg"
            alt="dots"
            className="min-w-[4px] max-w-[4px]"
          />
        </button>

        {/* desktop categories end */}
      </div>

      {/* more categories modal */}
      <Transition appear show={modal} as={Fragment}>
        <Dialog as="div" className="relative z-[60]" onClose={closeModal}>
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
                <Dialog.Panel className="w-full max-w-[500px] transform overflow-hidden rounded-xl bg-white max-h-[calc(100vh-96px)] overflow-y-auto pt-4 text-center align-middle transition-all p-3 pb-0 md2:pb-3">
                  <div className="flex items-center justify-between mb-5">
                    <div className="text-[18px] font-medium">
                      More Categories
                    </div>
                    <button
                      onClick={closeModal}
                      className="cursor-pointer w-[30px] h-[30px] flex items-center justify-center text-[13px] rounded-full bg-white border-2 border-2-gray-200 transition hover:bg-[#f2f2f2]">
                      <img
                        src="/images/close.svg"
                        alt="close"
                        className="min-w-[11px] max-w-[11px]"
                      />
                    </button>
                  </div>

                  <div className="bg-white flex items-center flex-col gap-3 flex-wrap">
                    <button
                      onClick={() => {
                        if (categoryState === "More Category 1") {
                          setcategoryState("none");
                          setsubCategory("none");
                          setmodal(false);
                        } else {
                          setcategoryState("More Category 1");
                          setsubCategory("none");
                          setmodal(false);
                        }
                      }}
                      className={`w-full px-4 py-3 rounded-lg text-white flex items-center justify-center gap-2 flex-row-reverse font-semibold text-[15px] transition border-2 hover:border-black bg-[#0094FF] ${
                        categoryState === "More Category 1"
                          ? "border-black"
                          : categoryState === "none"
                          ? ""
                          : "opacity-30"
                      } ${
                        categoryState === "Retail and Shops" ? "hidden" : ""
                      }`}>
                      More Category 1{" "}
                      <img
                        src="/images/hat.svg"
                        alt="hat"
                        className="min-w-[22px] max-w-[22px]"
                      />
                    </button>
                    <button
                      onClick={() => {
                        if (categoryState === "More Category 2") {
                          setcategoryState("none");
                          setsubCategory("none");
                          setmodal(false);
                        } else {
                          setcategoryState("More Category 2");
                          setsubCategory("none");
                          setmodal(false);
                        }
                      }}
                      className={`w-full px-4 py-3 rounded-lg text-white flex items-center justify-center gap-2 flex-row-reverse font-semibold text-[15px] transition border-2 hover:border-black bg-[#FF4F4F] ${
                        categoryState === "More Category 2"
                          ? "border-black"
                          : categoryState === "none"
                          ? ""
                          : "opacity-30"
                      } ${
                        categoryState === "Retail and Shops" ? "hidden" : ""
                      }`}>
                      More Category 2{" "}
                      <img
                        src="/images/hat.svg"
                        alt="hat"
                        className="min-w-[22px] max-w-[22px]"
                      />
                    </button>
                    <button
                      onClick={() => {
                        if (categoryState === "More Category 3") {
                          setcategoryState("none");
                          setsubCategory("none");
                          setmodal(false);
                        } else {
                          setcategoryState("More Category 3");
                          setsubCategory("none");
                          setmodal(false);
                        }
                      }}
                      className={`w-full px-4 py-3 rounded-lg text-white flex items-center justify-center gap-2 flex-row-reverse font-semibold text-[15px] transition border-2 hover:border-black bg-[#7E1EDD] ${
                        categoryState === "More Category 3"
                          ? "border-black"
                          : categoryState === "none"
                          ? ""
                          : "opacity-30"
                      } ${
                        categoryState === "Retail and Shops" ? "hidden" : ""
                      }`}>
                      More Category 3{" "}
                      <img
                        src="/images/hat.svg"
                        alt="hat"
                        className="min-w-[22px] max-w-[22px]"
                      />
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Categories;
