import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import CategoriesMobileSingle from "./CategoriesMobileSingle";
import CategorySingle from "./CategorySingle";

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

const CategoriesMobile = ({ resetFilter }) => {
  const [categoryState, setcategoryState] = useState("none");
  const [modal, setmodal] = useState(false);
  const [subCategory, setsubCategory] = useState("none");

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
        className="customScroll bg-[#F6F6F6] sticky top-0 z-30 flex md2:hidden items-center gap-3 whitespace-nowrap overflow-x-auto pt-2 pb-1.5">
        {/* mobile dropdown button */}
        <button
          onClick={() => {
            setmodal(true);
          }}
          className="customShadow px-4 py-3 rounded-lg text-white flex items-center gap-2 flex-row-reverse font-semibold text-[15px] transition border-2 border-gray-200 hover:border-black bg-white">
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
                    {/* <button
                      onClick={() => {
                        if (categoryState === "Real Estate") {
                          setcategoryState("none");
                          setsubCategory("none");
                        } else {
                          setcategoryState("Real Estate");
                          setsubCategory("none");
                        }
                      }}
                      className={`w-full px-4 py-3 rounded-lg text-white flex items-center justify-center gap-2 flex-row-reverse font-semibold text-[15px] transition border-2  hover:border-black bg-[#FF9900] ${
                        categoryState === "Real Estate"
                          ? "border-black"
                          : categoryState === "none"
                          ? "border-[#F6F6F6]"
                          : "opacity-30"
                      } ${categoryState === "HoReCa" ? "hidden" : ""}`}>
                      Real Estate{" "}
                      <img
                        src="/images/hat.svg"
                        alt="hat"
                        className="min-w-[22px] max-w-[22px]"
                      />
                    </button>
                    <button
                      onClick={() => {
                        if (categoryState === "Consulting") {
                          setcategoryState("none");
                          setsubCategory("none");
                        } else {
                          setcategoryState("Consulting");
                          setsubCategory("none");
                        }
                      }}
                      className={`w-full px-4 py-3 rounded-lg text-white flex items-center justify-center gap-2 flex-row-reverse font-semibold text-[15px] transition border-2 hover:border-black bg-[#0094FF] ${
                        categoryState === "Consulting"
                          ? "border-black"
                          : categoryState === "none"
                          ? "border-[#F6F6F6]"
                          : "opacity-30"
                      } ${categoryState === "HoReCa" ? "hidden" : ""}`}>
                      Consulting{" "}
                      <img
                        src="/images/hat.svg"
                        alt="hat"
                        className="min-w-[22px] max-w-[22px]"
                      />
                    </button> */}
                    {categoriesArray.map((ct, i) => (
                      <CategoriesMobileSingle
                        key={i}
                        categoryState={categoryState}
                        subCategory={subCategory}
                        setsubCategory={setsubCategory}
                        setcategoryState={setcategoryState}
                        scrollToStart={scrollToStart}
                        ct={ct}
                      />
                    ))}

                    {/* back button */}
                    {/* <button
                      onClick={() => {
                        setcategoryState("none");
                        setsubCategory("none");
                      }}
                      className={`customShadow w-full px-4 py-3 rounded-lg text-white flex items-center justify-center gap-2 flex-row-reverse font-semibold text-[15px] transition border-2 border-gray-200 hover:border-black bg-white ${
                        categoryState === "HoReCa" ? "flex" : "hidden"
                      }`}>
                      <img
                        src="/images/arrow-left.svg"
                        alt="arrow-left"
                        className="min-w-[17px] max-w-[17px] rotate-90"
                      />
                    </button> */}

                    {/* <button
                      onClick={() => {
                        if (categoryState === "HoReCa") {
                          setcategoryState("none");
                          setsubCategory("none");
                        } else {
                          setcategoryState("HoReCa");
                          setsubCategory("none");
                          scrollToStart();
                        }

                        if (subCategory !== "none") {
                          setcategoryState("HoReCa");
                          scrollToStart();
                        }
                      }}
                      className={`w-full px-4 py-3 rounded-lg text-white flex items-center justify-center gap-2 flex-row-reverse font-semibold text-[15px] transition border-2 hover:border-black bg-[#FF4F4F] ${
                        categoryState === "HoReCa"
                          ? "border-black"
                          : categoryState === "none"
                          ? "border-[#F6F6F6]"
                          : "opacity-30"
                      } ${
                        subCategory !== "none" ? "opacity-30 border-white" : ""
                      }`}>
                      HoReCa{" "}
                      <img
                        src="/images/hat.svg"
                        alt="hat"
                        className="min-w-[22px] max-w-[22px]"
                      />
                    </button> */}

                    {/* sub categories start */}
                    {/* <button
                      onClick={() => {
                        if (subCategory === "Job Sub-category #1") {
                          setsubCategory("none");
                        } else {
                          setsubCategory("Job Sub-category #1");
                        }
                      }}
                      className={`w-full px-4 py-3 rounded-lg items-center gap-2 flex-justify-center row-reverse font-semibold text-[15px] transition border-2 border-[#F6F6F6] hover:border-black bg-black ${
                        categoryState === "HoReCa" ? "flex" : "hidden"
                      } ${
                        subCategory === "Job Sub-category #1"
                          ? "bg-black text-white"
                          : "bg-gray-200 text-gray-800 opacity-30"
                      }`}>
                      Job Sub-category #1{" "}
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 14 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M7 14.5C8.85652 14.5 10.637 13.7625 11.9497 12.4497C13.2625 11.137 14 9.35652 14 7.5C14 5.64348 13.2625 3.86301 11.9497 2.55025C10.637 1.2375 8.85652 0.5 7 0.5C5.14348 0.5 3.36301 1.2375 2.05025 2.55025C0.737498 3.86301 0 5.64348 0 7.5C0 9.35652 0.737498 11.137 2.05025 12.4497C3.36301 13.7625 5.14348 14.5 7 14.5V14.5ZM12.6263 9.9255C12.0053 11.3607 10.8607 12.5053 9.4255 13.1263L8.44987 10.6868C9.21896 10.3356 9.83564 9.71896 10.1868 8.94987L12.6263 9.9255ZM4.5745 13.1263C3.13929 12.5053 1.99469 11.3607 1.37375 9.9255L3.81325 8.94987C4.16436 9.71896 4.78104 10.3356 5.55012 10.6868L4.5745 13.1263ZM12.6263 5.0745L10.1868 6.05012C9.83564 5.28104 9.21896 4.66436 8.44987 4.31325L9.4255 1.87375C10.8607 2.49469 12.0053 3.63929 12.6263 5.0745V5.0745ZM5.55012 4.31325C4.78104 4.66436 4.16436 5.28104 3.81325 6.05012L1.37375 5.0745C1.99469 3.63929 3.13929 2.49469 4.5745 1.87375L5.55012 4.31325ZM7 10.125C6.30381 10.125 5.63613 9.84844 5.14384 9.35616C4.65156 8.86387 4.375 8.19619 4.375 7.5C4.375 6.80381 4.65156 6.13613 5.14384 5.64384C5.63613 5.15156 6.30381 4.875 7 4.875C7.69619 4.875 8.36387 5.15156 8.85616 5.64384C9.34844 6.13613 9.625 6.80381 9.625 7.5C9.625 8.19619 9.34844 8.86387 8.85616 9.35616C8.36387 9.84844 7.69619 10.125 7 10.125Z"
                          fill={
                            subCategory === "Job Sub-category #1"
                              ? "white"
                              : "black"
                          }
                        />
                      </svg>
                    </button>

                    <button
                      onClick={() => {
                        if (subCategory === "Job Sub-category #2") {
                          setsubCategory("none");
                        } else {
                          setsubCategory("Job Sub-category #2");
                        }
                      }}
                      className={`w-full px-4 py-3 rounded-lg items-center gap-2 flex-justify-center row-reverse font-semibold text-[15px] transition border-2 border-[#F6F6F6] hover:border-black bg-black ${
                        categoryState === "HoReCa" ? "flex" : "hidden"
                      } ${
                        subCategory === "Job Sub-category #2"
                          ? "bg-black text-white"
                          : "bg-gray-200 text-gray-800 opacity-30"
                      }`}>
                      Job Sub-category #2{" "}
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 14 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M7 14.5C8.85652 14.5 10.637 13.7625 11.9497 12.4497C13.2625 11.137 14 9.35652 14 7.5C14 5.64348 13.2625 3.86301 11.9497 2.55025C10.637 1.2375 8.85652 0.5 7 0.5C5.14348 0.5 3.36301 1.2375 2.05025 2.55025C0.737498 3.86301 0 5.64348 0 7.5C0 9.35652 0.737498 11.137 2.05025 12.4497C3.36301 13.7625 5.14348 14.5 7 14.5V14.5ZM12.6263 9.9255C12.0053 11.3607 10.8607 12.5053 9.4255 13.1263L8.44987 10.6868C9.21896 10.3356 9.83564 9.71896 10.1868 8.94987L12.6263 9.9255ZM4.5745 13.1263C3.13929 12.5053 1.99469 11.3607 1.37375 9.9255L3.81325 8.94987C4.16436 9.71896 4.78104 10.3356 5.55012 10.6868L4.5745 13.1263ZM12.6263 5.0745L10.1868 6.05012C9.83564 5.28104 9.21896 4.66436 8.44987 4.31325L9.4255 1.87375C10.8607 2.49469 12.0053 3.63929 12.6263 5.0745V5.0745ZM5.55012 4.31325C4.78104 4.66436 4.16436 5.28104 3.81325 6.05012L1.37375 5.0745C1.99469 3.63929 3.13929 2.49469 4.5745 1.87375L5.55012 4.31325ZM7 10.125C6.30381 10.125 5.63613 9.84844 5.14384 9.35616C4.65156 8.86387 4.375 8.19619 4.375 7.5C4.375 6.80381 4.65156 6.13613 5.14384 5.64384C5.63613 5.15156 6.30381 4.875 7 4.875C7.69619 4.875 8.36387 5.15156 8.85616 5.64384C9.34844 6.13613 9.625 6.80381 9.625 7.5C9.625 8.19619 9.34844 8.86387 8.85616 9.35616C8.36387 9.84844 7.69619 10.125 7 10.125Z"
                          fill={
                            subCategory === "Job Sub-category #2"
                              ? "white"
                              : "black"
                          }
                        />
                      </svg>
                    </button>

                    <button
                      onClick={() => {
                        if (subCategory === "Job Sub-category #3") {
                          setsubCategory("none");
                        } else {
                          setsubCategory("Job Sub-category #3");
                        }
                      }}
                      className={`w-full px-4 py-3 rounded-lg items-center gap-2 flex-justify-center row-reverse font-semibold text-[15px] transition border-2 border-[#F6F6F6] hover:border-black bg-black ${
                        categoryState === "HoReCa" ? "flex" : "hidden"
                      } ${
                        subCategory === "Job Sub-category #3"
                          ? "bg-black text-white"
                          : "bg-gray-200 text-gray-800 opacity-30"
                      }`}>
                      Job Sub-category #3{" "}
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 14 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M7 14.5C8.85652 14.5 10.637 13.7625 11.9497 12.4497C13.2625 11.137 14 9.35652 14 7.5C14 5.64348 13.2625 3.86301 11.9497 2.55025C10.637 1.2375 8.85652 0.5 7 0.5C5.14348 0.5 3.36301 1.2375 2.05025 2.55025C0.737498 3.86301 0 5.64348 0 7.5C0 9.35652 0.737498 11.137 2.05025 12.4497C3.36301 13.7625 5.14348 14.5 7 14.5V14.5ZM12.6263 9.9255C12.0053 11.3607 10.8607 12.5053 9.4255 13.1263L8.44987 10.6868C9.21896 10.3356 9.83564 9.71896 10.1868 8.94987L12.6263 9.9255ZM4.5745 13.1263C3.13929 12.5053 1.99469 11.3607 1.37375 9.9255L3.81325 8.94987C4.16436 9.71896 4.78104 10.3356 5.55012 10.6868L4.5745 13.1263ZM12.6263 5.0745L10.1868 6.05012C9.83564 5.28104 9.21896 4.66436 8.44987 4.31325L9.4255 1.87375C10.8607 2.49469 12.0053 3.63929 12.6263 5.0745V5.0745ZM5.55012 4.31325C4.78104 4.66436 4.16436 5.28104 3.81325 6.05012L1.37375 5.0745C1.99469 3.63929 3.13929 2.49469 4.5745 1.87375L5.55012 4.31325ZM7 10.125C6.30381 10.125 5.63613 9.84844 5.14384 9.35616C4.65156 8.86387 4.375 8.19619 4.375 7.5C4.375 6.80381 4.65156 6.13613 5.14384 5.64384C5.63613 5.15156 6.30381 4.875 7 4.875C7.69619 4.875 8.36387 5.15156 8.85616 5.64384C9.34844 6.13613 9.625 6.80381 9.625 7.5C9.625 8.19619 9.34844 8.86387 8.85616 9.35616C8.36387 9.84844 7.69619 10.125 7 10.125Z"
                          fill={
                            subCategory === "Job Sub-category #3"
                              ? "white"
                              : "black"
                          }
                        />
                      </svg>
                    </button> */}
                    {/* sub categories end */}

                    {/* <button
                      onClick={() => {
                        if (categoryState === "Catering") {
                          setcategoryState("none");
                          setsubCategory("none");
                        } else {
                          setcategoryState("Catering");
                          setsubCategory("none");
                        }
                      }}
                      className={`w-full px-4 py-3 rounded-lg text-white flex items-center justify-center gap-2 flex-row-reverse font-semibold text-[15px] transition border-2 hover:border-black bg-[#D0B387] ${
                        categoryState === "Catering"
                          ? "border-black"
                          : categoryState === "none"
                          ? "border-[#F6F6F6]"
                          : "opacity-30"
                      } ${categoryState === "HoReCa" ? "hidden" : ""}`}>
                      Catering{" "}
                      <img
                        src="/images/hat.svg"
                        alt="hat"
                        className="min-w-[22px] max-w-[22px]"
                      />
                    </button>
                    <button
                      onClick={() => {
                        if (categoryState === "Marketing") {
                          setcategoryState("none");
                          setsubCategory("none");
                        } else {
                          setcategoryState("Marketing");
                          setsubCategory("none");
                        }
                      }}
                      className={`w-full px-4 py-3 rounded-lg text-white flex items-center justify-center gap-2 flex-row-reverse font-semibold text-[15px] transition border-2 hover:border-black bg-[#39DD1E] ${
                        categoryState === "Marketing"
                          ? "border-black"
                          : categoryState === "none"
                          ? "border-[#F6F6F6]"
                          : "opacity-30"
                      } ${categoryState === "HoReCa" ? "hidden" : ""}`}>
                      Marketing{" "}
                      <img
                        src="/images/hat.svg"
                        alt="hat"
                        className="min-w-[22px] max-w-[22px]"
                      />
                    </button>
                    <button
                      onClick={() => {
                        if (categoryState === "Gastronomy") {
                          setcategoryState("none");
                          setsubCategory("none");
                        } else {
                          setcategoryState("Gastronomy");
                          setsubCategory("none");
                        }
                      }}
                      className={`w-full px-4 py-3 rounded-lg text-white flex items-center justify-center gap-2 flex-row-reverse font-semibold text-[15px] transition border-2 hover:border-black bg-[#7E1EDD] ${
                        categoryState === "Gastronomy"
                          ? "border-black"
                          : categoryState === "none"
                          ? "border-[#F6F6F6]"
                          : "opacity-30"
                      } ${categoryState === "HoReCa" ? "hidden" : ""}`}>
                      Gastronomy{" "}
                      <img
                        src="/images/hat.svg"
                        alt="hat"
                        className="min-w-[22px] max-w-[22px]"
                      />
                    </button>
                    <button
                      onClick={() => {
                        if (categoryState === "Racer") {
                          setcategoryState("none");
                          setsubCategory("none");
                        } else {
                          setcategoryState("Racer");
                          setsubCategory("none");
                        }
                      }}
                      className={`w-full px-4 py-3 rounded-lg text-white flex items-center justify-center gap-2 flex-row-reverse font-semibold text-[15px] transition border-2 hover:border-black bg-[#DD1E1E] ${
                        categoryState === "Racer"
                          ? "border-black"
                          : categoryState === "none"
                          ? "border-[#F6F6F6]"
                          : "opacity-30"
                      } ${categoryState === "HoReCa" ? "hidden" : ""}`}>
                      Racer{" "}
                      <img
                        src="/images/hat.svg"
                        alt="hat"
                        className="min-w-[22px] max-w-[22px]"
                      />
                    </button>
                    <button
                      onClick={() => {
                        if (categoryState === "YouTuber") {
                          setcategoryState("none");
                          setsubCategory("none");
                        } else {
                          setcategoryState("YouTuber");
                          setsubCategory("none");
                        }
                      }}
                      className={`w-full px-4 py-3 rounded-lg text-white flex items-center justify-center gap-2 flex-row-reverse font-semibold text-[15px] transition border-2 hover:border-black bg-[#1EDDC6] ${
                        categoryState === "YouTuber"
                          ? "border-black"
                          : categoryState === "none"
                          ? "border-[#F6F6F6]"
                          : "opacity-30"
                      } ${categoryState === "HoReCa" ? "hidden" : ""}`}>
                      YouTuber{" "}
                      <img
                        src="/images/hat.svg"
                        alt="hat"
                        className="min-w-[22px] max-w-[22px]"
                      />
                    </button>
                    <button
                      onClick={() => {
                        if (categoryState === "Finances") {
                          setcategoryState("none");
                          setsubCategory("none");
                        } else {
                          setcategoryState("Finances");
                          setsubCategory("none");
                        }
                      }}
                      className={`w-full px-4 py-3 rounded-lg text-white flex items-center justify-center gap-2 flex-row-reverse font-semibold text-[15px] transition border-2 hover:border-black bg-[#C780FF] ${
                        categoryState === "Finances"
                          ? "border-black"
                          : categoryState === "none"
                          ? "border-[#F6F6F6]"
                          : "opacity-30"
                      } ${categoryState === "HoReCa" ? "hidden" : ""}`}>
                      Finances{" "}
                      <img
                        src="/images/hat.svg"
                        alt="hat"
                        className="min-w-[22px] max-w-[22px]"
                      />
                    </button>

                    <button
                      onClick={() => {
                        if (categoryState === "More Category 1") {
                          setcategoryState("none");
                          setsubCategory("none");
                        } else {
                          setcategoryState("More Category 1");
                          setsubCategory("none");
                        }
                      }}
                      className={`w-full px-4 py-3 rounded-lg text-white flex items-center justify-center gap-2 flex-row-reverse font-semibold text-[15px] transition border-2 hover:border-black bg-[#0094FF] ${
                        categoryState === "More Category 1"
                          ? "border-black"
                          : categoryState === "none"
                          ? ""
                          : "opacity-30"
                      } ${categoryState === "HoReCa" ? "hidden" : ""}`}>
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
                        } else {
                          setcategoryState("More Category 2");
                          setsubCategory("none");
                        }
                      }}
                      className={`w-full px-4 py-3 rounded-lg text-white flex items-center justify-center gap-2 flex-row-reverse font-semibold text-[15px] transition border-2 hover:border-black bg-[#FF4F4F] ${
                        categoryState === "More Category 2"
                          ? "border-black"
                          : categoryState === "none"
                          ? ""
                          : "opacity-30"
                      } ${categoryState === "HoReCa" ? "hidden" : ""}`}>
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
                        } else {
                          setcategoryState("More Category 3");
                          setsubCategory("none");
                        }
                      }}
                      className={`w-full px-4 py-3 rounded-lg text-white flex items-center justify-center gap-2 flex-row-reverse font-semibold text-[15px] transition border-2 hover:border-black bg-[#7E1EDD] ${
                        categoryState === "More Category 3"
                          ? "border-black"
                          : categoryState === "none"
                          ? ""
                          : "opacity-30"
                      } ${categoryState === "HoReCa" ? "hidden" : ""}`}>
                      More Category 3{" "}
                      <img
                        src="/images/hat.svg"
                        alt="hat"
                        className="min-w-[22px] max-w-[22px]"
                      />
                    </button> */}

                    <div className="sticky bottom-0 w-full bg-white py-3">
                      <button
                        onClick={() => {
                          setmodal(false);
                        }}
                        className="px-4 py-3 w-full rounded-lg text-white flex items-center justify-center gap-2 flex-row-reverse font-semibold text-[15px] bg-black">
                        Show Job Positions
                      </button>
                    </div>
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

export default CategoriesMobile;
