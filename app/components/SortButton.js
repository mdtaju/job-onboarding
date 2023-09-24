import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const SortButton = () => {
  const [menu, setmenu] = useState("Default");

  return (
    <>
      <Menu
        as="div"
        className="relative inline-block text-left w-full sm:w-fit">
        <div>
          {/* button itself starts */}
          <Menu.Button className="customShadow flex items-center gap-1 rounded-lg bg-white border-2 border-gray-200 overflow-hidden h-[40px] transition hover:bg-[#f2f2f2] w-full sm4:w-auto px-3">
            <img
              src="/images/sort.svg"
              alt="sort"
              className="min-w-[18px] max-w-[18px]"
            />
            <div className="text-[#374151] font-medium text-[15px]">
              Sort by: <span className="font-semibold">{menu}</span>
            </div>
          </Menu.Button>
          {/* button itself end*/}
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95">
          <Menu.Items className="absolute right-0 mt-2 w-full sm4:w-56 origin-top-right divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
            <div className="space-y-1 p-1">
              <Menu.Item>
                <button
                  onClick={() => {
                    setmenu("Default");
                  }}
                  className={`w-full py-1.5 px-2 text-left rounded-md transition hover:bg-[#F3F4F6] font-medium text-[#374151] ${
                    menu === "Default" ? "bg-[#F3F4F6]" : "bg-white"
                  }`}>
                  Default
                </button>
              </Menu.Item>
              <Menu.Item>
                <button
                  onClick={() => {
                    setmenu("Latest");
                  }}
                  className={`w-full py-1.5 px-2 text-left rounded-md transition hover:bg-[#F3F4F6] font-medium text-[#374151] ${
                    menu === "Latest" ? "bg-[#F3F4F6]" : "bg-white"
                  }`}>
                  Latest
                </button>
              </Menu.Item>
              <Menu.Item>
                <button
                  onClick={() => {
                    setmenu("Highest salary");
                  }}
                  className={`w-full py-1.5 px-2 text-left rounded-md transition hover:bg-[#F3F4F6] font-medium text-[#374151] ${
                    menu === "Highest salary" ? "bg-[#F3F4F6]" : "bg-white"
                  }`}>
                  Highest salary
                </button>
              </Menu.Item>
              <Menu.Item>
                <button
                  onClick={() => {
                    setmenu("Lowest salary");
                  }}
                  className={`w-full py-1.5 px-2 text-left rounded-md transition hover:bg-[#F3F4F6] font-medium text-[#374151] ${
                    menu === "Lowest salary" ? "bg-[#F3F4F6]" : "bg-white"
                  }`}>
                  Lowest salary
                </button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};

export default SortButton;
