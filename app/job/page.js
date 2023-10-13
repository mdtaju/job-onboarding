"use client";
import { useRouter } from "next/navigation";
// import { useRouter as nextRouter } from "next/router";
import { useEffect, useState } from "react";
import ApplyForm from "../components/ApplyForm";
import JobCard from "../components/JobCard";

import JobList from "@/src/utilities/db";
import { Dialog, Transition } from "@headlessui/react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Fragment } from "react";
import JobInfoCard from "../components/JobInfoCard";
import ShareButton from "../components/ShareButton";

const Map = dynamic(() => import("../components/Map"), {
  ssr: false,
});
const MapModal = dynamic(() => import("../components/MapModal"), {
  ssr: false,
});

export default function Job() {
  const router = useRouter();
  const [linkHash, setLinkHash] = useState("");
  const [loading, setloading] = useState(true);
  const [modal, setmodal] = useState(false);
  const [jobData, setJobData] = useState(JobList || []);

  function closeModal() {
    setmodal(false);
  }

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    setLinkHash(window?.location?.hash);
  }, []);

  return (
    <>
      {/* modal start */}
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
                <Dialog.Panel className="w-full max-w-[480px] transform overflow-hidden rounded-xl bg-white pt-4 text-center align-middle transition-all">
                  <div className="flex items-center justify-end px-4">
                    <button
                      onClick={closeModal}
                      className="text-not-white outline-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        fill="currentColor"
                        viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                      </svg>
                    </button>
                  </div>

                  <div className="mt-1 mb-10">
                    <div className="px-4 sm:px-8">
                      <div className="bg-[#F0FDFA] w-[60px] h-[60px] rounded-full grid place-items-center mx-auto">
                        <div className="w-[45px] h-[45px] rounded-full bg-[#CCFBF1] grid place-items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="#1DBBA9"
                            className="w-6 h-6">
                            <path
                              fillRule="evenodd"
                              d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="text-[22px] text-[#1F2937] font-bold mt-4">
                        We have redirected you to an external application form
                      </div>
                      <Link href={"/"}>
                        <button className="text-[15px] text-[#6B7280] font-bold mt-2.5 py-2 px-3 border-2 border-gray-200 rounded-lg">
                          Go back to main page
                        </button>
                      </Link>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      {/* modal end */}
      <div className="relative bg-[#F6F6F6]">
        <div className="grid grid-cols-1 lg4:grid-cols-[1fr,400px] lg6:grid-cols-[1fr,500px] lg8:grid-cols-[1fr,560px] gap-5 my-5">
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

                <div className=" flex items-center gap-2">
                  <Link href={"/companies/specific_company_page_about"}>
                    <div className="customShadow flex items-center gap-1.5 rounded-lg bg-white text-[#7a8497] border-2 border-gray-200 overflow-hidden py-1.5 px-3 cursor-pointer hover:bg-[#f2f2f2]">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_19_2049)">
                          <mask id="path-1-inside-1_19_2049" fill="white">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M11.0722 0.0562763C11.1266 0.0898721 11.1714 0.136786 11.2025 0.192569C11.2336 0.248352 11.25 0.311156 11.25 0.375026V11.625C11.25 11.7245 11.2105 11.8199 11.1402 11.8902C11.0698 11.9605 10.9745 12 10.875 12H8.625C8.52554 12 8.43016 11.9605 8.35983 11.8902C8.28951 11.8199 8.25 11.7245 8.25 11.625V10.5H7.5V11.625C7.5 11.7245 7.46049 11.8199 7.39017 11.8902C7.31984 11.9605 7.22446 12 7.125 12H0.375C0.275544 12 0.180161 11.9605 0.109835 11.8902C0.0395088 11.8199 0 11.7245 0 11.625V7.50003C5.97351e-05 7.42135 0.0248611 7.34469 0.0708937 7.28089C0.116926 7.21709 0.181859 7.16939 0.2565 7.14453L4.5 5.73003V3.37503C4.5 3.30544 4.51937 3.23723 4.55592 3.17802C4.59248 3.11882 4.64479 3.07095 4.707 3.03978L10.707 0.0397763C10.7642 0.0111306 10.8278 -0.00239161 10.8918 0.000496551C10.9557 0.00338471 11.0178 0.0225872 11.0722 0.0562763ZM4.5 6.52053L0.75 7.77003V11.25H4.5V6.52053ZM5.25 11.25H6.75V10.125C6.75 10.0256 6.78951 9.93019 6.85983 9.85986C6.93016 9.78953 7.02554 9.75003 7.125 9.75003H8.625C8.72446 9.75003 8.81984 9.78953 8.89017 9.85986C8.96049 9.93019 9 10.0256 9 10.125V11.25H10.5V0.981776L5.25 3.60678V11.25Z"
                            />
                          </mask>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.0722 0.0562763C11.1266 0.0898721 11.1714 0.136786 11.2025 0.192569C11.2336 0.248352 11.25 0.311156 11.25 0.375026V11.625C11.25 11.7245 11.2105 11.8199 11.1402 11.8902C11.0698 11.9605 10.9745 12 10.875 12H8.625C8.52554 12 8.43016 11.9605 8.35983 11.8902C8.28951 11.8199 8.25 11.7245 8.25 11.625V10.5H7.5V11.625C7.5 11.7245 7.46049 11.8199 7.39017 11.8902C7.31984 11.9605 7.22446 12 7.125 12H0.375C0.275544 12 0.180161 11.9605 0.109835 11.8902C0.0395088 11.8199 0 11.7245 0 11.625V7.50003C5.97351e-05 7.42135 0.0248611 7.34469 0.0708937 7.28089C0.116926 7.21709 0.181859 7.16939 0.2565 7.14453L4.5 5.73003V3.37503C4.5 3.30544 4.51937 3.23723 4.55592 3.17802C4.59248 3.11882 4.64479 3.07095 4.707 3.03978L10.707 0.0397763C10.7642 0.0111306 10.8278 -0.00239161 10.8918 0.000496551C10.9557 0.00338471 11.0178 0.0225872 11.0722 0.0562763ZM4.5 6.52053L0.75 7.77003V11.25H4.5V6.52053ZM5.25 11.25H6.75V10.125C6.75 10.0256 6.78951 9.93019 6.85983 9.85986C6.93016 9.78953 7.02554 9.75003 7.125 9.75003H8.625C8.72446 9.75003 8.81984 9.78953 8.89017 9.85986C8.96049 9.93019 9 10.0256 9 10.125V11.25H10.5V0.981776L5.25 3.60678V11.25Z"
                            fill="#1F2937"
                          />
                          <path
                            d="M11.25 0.375026H12.25V0.374542L11.25 0.375026ZM8.25 10.5H9.25V9.50003H8.25V10.5ZM7.5 10.5V9.50003H6.5V10.5H7.5ZM0 11.625H-1H0ZM0 7.50003L-1 7.49927V7.50003H0ZM0.2565 7.14453L0.5725 8.09329L0.572728 8.09321L0.2565 7.14453ZM4.5 5.73003L4.81623 6.67871L5.5 6.45079V5.73003H4.5ZM4.5 3.37503L3.5 3.37499V3.37503H4.5ZM4.707 3.03978L4.25979 2.14535L4.259 2.14574L4.707 3.03978ZM10.707 0.0397763L11.1542 0.934204L11.1546 0.934012L10.707 0.0397763ZM11.0722 0.0562763L10.5458 0.906512L10.5462 0.906761L11.0722 0.0562763ZM4.5 6.52053H5.5V5.13328L4.18389 5.57181L4.5 6.52053ZM0.75 7.77003L0.433886 6.8213L-0.25 7.04918V7.77003H0.75ZM0.75 11.25H-0.25V12.25H0.75V11.25ZM4.5 11.25V12.25H5.5V11.25H4.5ZM5.25 11.25H4.25V12.25H5.25V11.25ZM6.75 11.25V12.25H7.75V11.25H6.75ZM9 11.25H8V12.25H9V11.25ZM10.5 11.25V12.25H11.5V11.25H10.5ZM10.5 0.981776H11.5V-0.636258L10.0528 0.0873491L10.5 0.981776ZM5.25 3.60678L4.80279 2.71235L4.25 2.98874V3.60678H5.25ZM10.5462 0.906761C10.4557 0.850769 10.381 0.772581 10.3291 0.679607L12.0759 -0.29447C11.9618 -0.49901 11.7974 -0.671025 11.5982 -0.794208L10.5462 0.906761ZM10.3291 0.679607C10.2773 0.586635 10.2501 0.481962 10.25 0.375511L12.25 0.374542C12.2499 0.14035 12.19 -0.0899317 12.0759 -0.29447L10.3291 0.679607ZM10.25 0.375026V11.625H12.25V0.375026H10.25ZM10.25 11.625C10.25 11.4593 10.3158 11.3003 10.4331 11.1831L11.8473 12.5973C12.1051 12.3394 12.25 11.9897 12.25 11.625H10.25ZM10.4331 11.1831C10.5503 11.0659 10.7092 11 10.875 11V13C11.2397 13 11.5894 12.8552 11.8473 12.5973L10.4331 11.1831ZM10.875 11H8.625V13H10.875V11ZM8.625 11C8.79076 11 8.94973 11.0659 9.06694 11.1831L7.65273 12.5973C7.91059 12.8552 8.26033 13 8.625 13V11ZM9.06694 11.1831C9.18415 11.3003 9.25 11.4593 9.25 11.625H7.25C7.25 11.9897 7.39486 12.3394 7.65273 12.5973L9.06694 11.1831ZM9.25 11.625V10.5H7.25V11.625H9.25ZM8.25 9.50003H7.5V11.5H8.25V9.50003ZM6.5 10.5V11.625H8.5V10.5H6.5ZM6.5 11.625C6.5 11.4593 6.56585 11.3003 6.68306 11.1831L8.09727 12.5973C8.35514 12.3394 8.5 11.9897 8.5 11.625H6.5ZM6.68306 11.1831C6.80027 11.0659 6.95924 11 7.125 11V13C7.48967 13 7.83941 12.8552 8.09727 12.5973L6.68306 11.1831ZM7.125 11H0.375V13H7.125V11ZM0.375 11C0.540758 11 0.69973 11.0659 0.816942 11.1831L-0.597272 12.5973C-0.339408 12.8552 0.0103293 13 0.375 13V11ZM0.816942 11.1831C0.934153 11.3003 1 11.4593 1 11.625H-1C-1 11.9897 -0.855135 12.3394 -0.597272 12.5973L0.816942 11.1831ZM1 11.625V7.50003H-1V11.625H1ZM1 7.50079C0.9999 7.63191 0.958565 7.75968 0.881844 7.86601L-0.740056 6.69578C-0.908842 6.92971 -0.999781 7.2108 -1 7.49927L1 7.50079ZM0.881844 7.86601C0.805123 7.97234 0.696902 8.05185 0.5725 8.09329L-0.0594997 6.19577C-0.333185 6.28692 -0.57127 6.46185 -0.740056 6.69578L0.881844 7.86601ZM0.572728 8.09321L4.81623 6.67871L4.18377 4.78134L-0.0597279 6.19584L0.572728 8.09321ZM5.5 5.73003V3.37503H3.5V5.73003H5.5ZM5.5 3.37506C5.5 3.49103 5.46772 3.60472 5.4068 3.7034L3.70505 2.65265C3.57101 2.86975 3.50001 3.11985 3.5 3.37499L5.5 3.37506ZM5.4068 3.7034C5.34587 3.80207 5.25868 3.88185 5.155 3.93381L4.259 2.14574C4.0309 2.26005 3.83909 2.43556 3.70505 2.65265L5.4068 3.7034ZM5.15421 3.9342L11.1542 0.934203L10.2598 -0.854651L4.25979 2.14535L5.15421 3.9342ZM11.1546 0.934012C11.0592 0.981754 10.9532 1.00429 10.8466 0.999478L10.9369 -0.998485C10.7025 -1.00907 10.4692 -0.959493 10.2594 -0.854459L11.1546 0.934012ZM10.8466 0.999478C10.7401 0.994664 10.6365 0.96266 10.5458 0.906512L11.5987 -0.793959C11.3991 -0.917485 11.1713 -0.987895 10.9369 -0.998485L10.8466 0.999478ZM4.18389 5.57181L0.433886 6.8213L1.06611 8.71875L4.81611 7.46925L4.18389 5.57181ZM-0.25 7.77003V11.25H1.75V7.77003H-0.25ZM0.75 12.25H4.5V10.25H0.75V12.25ZM5.5 11.25V6.52053H3.5V11.25H5.5ZM5.25 12.25H6.75V10.25H5.25V12.25ZM7.75 11.25V10.125H5.75V11.25H7.75ZM7.75 10.125C7.75 10.2908 7.68415 10.4498 7.56694 10.567L6.15273 9.15275C5.89486 9.41062 5.75 9.76036 5.75 10.125H7.75ZM7.56694 10.567C7.44973 10.6842 7.29076 10.75 7.125 10.75V8.75003C6.76033 8.75003 6.41059 8.89489 6.15273 9.15275L7.56694 10.567ZM7.125 10.75H8.625V8.75003H7.125V10.75ZM8.625 10.75C8.45924 10.75 8.30027 10.6842 8.18306 10.567L9.59727 9.15275C9.33941 8.89489 8.98967 8.75003 8.625 8.75003V10.75ZM8.18306 10.567C8.06585 10.4498 8 10.2908 8 10.125H10C10 9.76036 9.85514 9.41062 9.59727 9.15275L8.18306 10.567ZM8 10.125V11.25H10V10.125H8ZM9 12.25H10.5V10.25H9V12.25ZM11.5 11.25V0.981776H9.5V11.25H11.5ZM10.0528 0.0873491L4.80279 2.71235L5.69721 4.5012L10.9472 1.8762L10.0528 0.0873491ZM4.25 3.60678V11.25H6.25V3.60678H4.25Z"
                            fill="#1F2937"
                            mask="url(#path-1-inside-1_19_2049)"
                          />
                          <path
                            d="M1.5 8.25H2.25V9H1.5V8.25ZM3 8.25H3.75V9H3V8.25ZM1.5 9.75H2.25V10.5H1.5V9.75ZM3 9.75H3.75V10.5H3V9.75ZM6 6.75H6.75V7.5H6V6.75ZM7.5 6.75H8.25V7.5H7.5V6.75ZM6 8.25H6.75V9H6V8.25ZM7.5 8.25H8.25V9H7.5V8.25ZM9 6.75H9.75V7.5H9V6.75ZM9 8.25H9.75V9H9V8.25ZM6 5.25H6.75V6H6V5.25ZM7.5 5.25H8.25V6H7.5V5.25ZM9 5.25H9.75V6H9V5.25ZM6 3.75H6.75V4.5H6V3.75ZM7.5 3.75H8.25V4.5H7.5V3.75ZM9 3.75H9.75V4.5H9V3.75ZM9 2.25H9.75V3H9V2.25Z"
                            fill="#1F2937"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_19_2049">
                            <rect width="12" height="12" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span className="font-semibold text-[14px]">
                        Company Info
                      </span>
                    </div>
                  </Link>
                  <ShareButton />
                </div>
              </div>

              <div className="mt-2">
                <JobInfoCard loading={loading} />
              </div>
            </div>

            <div className="">
              <div className="text-[19px] font-[700] mb-5 p-4 bg-[#f6f6f6]">
                Job Description
              </div>

              <div className="text-[#6B7280] font-medium leading-[23px] p-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                <br />
                <br />
                <ul className="list-disc ml-5">
                  <li className="mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ex
                    ea commodo consequat
                  </li>
                  <li className="mb-5">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </li>
                </ul>
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>

              {linkHash ? (
                <div className="mt-8">
                  <div className="text-[19px] font-[700] mb-4 p-4 bg-[#f6f6f6]">
                    Apply for this job
                  </div>
                  <div className="p-4 space-y-4">
                    <p className="text-[#6B7280] font-medium leading-[23px]">
                      Click the button below to apply for this job directly with
                      the vendor.
                    </p>
                    <Link href={"https://youtube.com/"} target="_blank">
                      <button
                        onClick={() => setmodal(true)}
                        className="w-full px-3 py-2.5 rounded-md text-white flex items-center justify-center text-center bg-blue-500 transition hover:bg-blue-600 mt-2">
                        Apply
                      </button>
                    </Link>
                  </div>
                </div>
              ) : (
                <ApplyForm />
              )}
            </div>
          </div>
          {/*left section end */}

          {/*left section starts */}
          {/* map starts */}
          <div>
            <Map loading={loading} />
            {/* map ends */}

            <div className="sticky top-5">
              <div className="text-[20px] font-[700] mt-5">
                Check out similar offers
              </div>
              <div className="w-full bg-gray-200 h-[1px] my-3"></div>

              <div className="flex flex-col gap-3">
                <>
                  {jobData?.slice(4, 7)?.map((job, i) => (
                    <JobCard
                      key={i}
                      loading={loading}
                      homeView={false}
                      job={job}
                    />
                  ))}
                </>
              </div>
            </div>
          </div>
          {/*left section ends */}
        </div>
      </div>

      {/* Footer
      <Footer /> */}
    </>
  );
}
