"use client";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [menu, setmenu] = useState(false);

  return (
    <>
      <div className="customShadow bg-white">
        <div className="w-full max-w-[1500px] mx-auto px-5 relative flex items-center justify-between gap-3 py-4 bg-white z-50">
          <div className="h-[32px] px-0 sm:px-1">
            <Link href="/">
              <img src="/logo.svg" alt="logo" className="h-full" />
            </Link>
          </div>

          <div className="flex items-center gap-5">
            <Link
              href="/"
              className="transition text-not-black hover:text-blue-500 hidden sm:flex">
              Offers
            </Link>
            <Link
              href="/companies"
              className="transition text-not-black hover:text-blue-500 hidden sm:flex">
              Companies
            </Link>
            <div className="relative hidden sm:flex">
              <span className="px-2 py-1 bg-red-500 text-white rounded-full absolute top-[-14px] right-[-15px] text-xs font-semibold">
                Free!
              </span>
              <Link
                href="/"
                className="px-3 py-2 rounded-md text-white bg-blue-500 transition hover:bg-blue-600 ">
                Post a job
              </Link>
            </div>
            <button
              onClick={() => {
                setmenu(!menu);
              }}
              className="px-3 py-3 rounded-md border-[1.5px] border-gray-200 flex transition hover:bg-[#f2f2f2]">
              <img src="/images/burger.svg" alt="burger menu" />
            </button>
          </div>
        </div>
      </div>

      {/* menu for all devices */}
      <div
        className={`${
          menu === false ? "translate-x-full" : "translate-x-0"
        }  transition fixed top-0 right-0 flex flex-col gap-5 bg-white w-[250px] h-screen max-h-screen overflow-y-auto p-5 z-[70]`}>
        {/* links for mobile view start */}
        <Link
          href="/"
          className="sm:hidden transition text-not-black hover:text-blue-500">
          <span
            onClick={() => {
              setmenu(false);
            }}>
            Offers
          </span>
        </Link>
        <Link
          href="/companies"
          className="sm:hidden transition text-not-black hover:text-blue-500">
          <span
            onClick={() => {
              setmenu(false);
            }}>
            Companies
          </span>
        </Link>
        <Link
          href="/terms"
          className="sm:hidden transition text-not-black hover:text-blue-500">
          <span
            onClick={() => {
              setmenu(false);
            }}>
            Terms
          </span>
        </Link>
        <div className="relative w-fit sm:hidden">
          <span className="px-2 py-1 bg-red-500 text-white rounded-full absolute top-[-22px] right-[-15px] text-xs font-semibold">
            Free!
          </span>
          <Link
            href="/"
            className="w-fit px-3 py-2 rounded-md text-white bg-blue-500 transition hover:bg-blue-600 ">
            Post a job
          </Link>
        </div>
        {/* links for mobile view end */}

        {/* links for tab and desktop view start */}
        <Link
          href="/terms"
          className="hidden sm:block transition text-not-black hover:text-blue-500">
          <span
            onClick={() => {
              setmenu(false);
            }}>
            Terms
          </span>
        </Link>
        <Link
          href="/"
          className="hidden sm:block transition text-not-black hover:text-blue-500">
          <span
            onClick={() => {
              setmenu(false);
            }}>
            Consulting
          </span>
        </Link>
        <Link
          href="/"
          className="hidden sm:block transition text-not-black hover:text-blue-500">
          <span
            onClick={() => {
              setmenu(false);
            }}>
            HoReCa
          </span>
        </Link>
        <Link
          href="/"
          className="hidden sm:block transition text-not-black hover:text-blue-500">
          <span
            onClick={() => {
              setmenu(false);
            }}>
            Catering
          </span>
        </Link>
        <Link
          href="/"
          className="hidden sm:block transition text-not-black hover:text-blue-500">
          <span
            onClick={() => {
              setmenu(false);
            }}>
            Marketing
          </span>
        </Link>
        <div className="relative w-fit hidden sm:flex">
          <span className="px-2 py-1 bg-red-500 text-white rounded-full absolute top-[-14px] right-[-15px] text-xs font-semibold">
            Free!
          </span>
          <Link
            href="/"
            className="w-fit px-3 py-2 rounded-md text-white bg-blue-500 transition hover:bg-blue-600 ">
            Post a job
          </Link>
        </div>
        {/* links for tab and desktop view end */}
      </div>

      {/* mobile menu black overlay */}
      <div
        onClick={() => {
          setmenu(false);
        }}
        className={`fixed top-0 left-0 bg-[#6B7280] bg-opacity-75 w-full h-screen z-[60] transition ${
          menu === false ? "opacity-0 invisible" : "opacity-100 visible"
        }`}></div>
    </>
  );
};

export default Header;
