function CategoriesSub({
  categoryState,
  categoryName,
  subCategory,
  setsubCategory,
  setcategoryState,
  iconPath,
  subCt,
  icon,
}) {
  return (
    <>
      <button
        onClick={() => {
          if (subCategory === subCt) {
            setsubCategory("none");
          } else {
            setsubCategory(subCt);
          }
        }}
        className={`px-4 py-3 rounded-lg items-center gap-2 flex-row-reverse font-semibold text-[15px] transition border-2 border-[#F6F6F6] hover:border-black bg-black ${
          categoryState === categoryName ? "flex" : "hidden"
        } ${
          subCategory === subCt
            ? "bg-[#1F2937] text-white"
            : "bg-gray-200 text-gray-800"
        }`}>
        {subCt}{" "}
        {categoryName === "Restaurants & Bars" && (
          <svg
            width="22"
            height="22"
            viewBox="0 0 14 14"
            fill={`${subCategory === subCt ? "#ffffff" : "#1F2937"}`}
            xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_96_15780)">
              <path
                d="M1.57198 1.30518L11.6462 11.3794C11.8374 11.5706 11.9448 11.8299 11.9448 12.1002C11.9448 12.3706 11.8374 12.6298 11.6462 12.821C11.455 13.0121 11.1958 13.1194 10.9255 13.1194C10.6551 13.1194 10.3959 13.0121 10.2047 12.821L7.74374 10.3177C7.58269 10.1541 7.49234 9.93388 7.49217 9.70436V9.55314C7.49219 9.43725 7.4692 9.32251 7.42451 9.21558C7.37982 9.10865 7.31434 9.01167 7.23186 8.93025L6.91413 8.63686C6.80626 8.53733 6.6751 8.46653 6.53271 8.43098C6.39031 8.39543 6.24127 8.39627 6.09928 8.43342C5.87538 8.49185 5.6401 8.49072 5.41677 8.43014C5.19344 8.36956 4.98983 8.25164 4.82616 8.08807L2.49018 5.75182C1.1044 4.36603 0.594439 2.27342 1.57198 1.30518Z"
                stroke={`${subCategory === subCt ? "#ffffff" : "#1F2937"}`}
                stroke-linejoin="round"
              />
              <path
                d="M10.9375 0.875L8.8252 2.9873C8.66265 3.14981 8.53371 3.34275 8.44574 3.5551C8.35778 3.76744 8.3125 3.99504 8.3125 4.22488V4.63121C8.31251 4.6887 8.30119 4.74563 8.27918 4.79874C8.25718 4.85185 8.22492 4.9001 8.18426 4.94074L7.875 5.25"
                stroke={`${subCategory === subCt ? "#ffffff" : "#1F2937"}`}
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.75 6.125L9.05926 5.81574C9.0999 5.77508 9.14815 5.74282 9.20126 5.72082C9.25437 5.69881 9.3113 5.68749 9.36879 5.6875H9.77512C10.005 5.6875 10.2326 5.64222 10.4449 5.55426C10.6573 5.46629 10.8502 5.33735 11.0127 5.1748L13.125 3.0625"
                stroke={`${subCategory === subCt ? "#ffffff" : "#1F2937"}`}
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.0312 1.96875L9.84375 4.15625"
                stroke={`${subCategory === subCt ? "#ffffff" : "#1F2937"}`}
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.46852 10.0625L2.7418 12.8045C2.53669 13.0096 2.25854 13.1248 1.96852 13.1248C1.67849 13.1248 1.40034 13.0096 1.19524 12.8045C0.990189 12.5994 0.875 12.3213 0.875 12.0312C0.875 11.7412 0.990189 11.4631 1.19524 11.258L3.49977 8.96875"
                stroke={`${subCategory === subCt ? "#ffffff" : "#1F2937"}`}
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_96_15780">
                <rect
                  width="14"
                  height="14"
                  fill={`${subCategory === subCt ? "#ffffff" : "#1F2937"}`}
                />
              </clipPath>
            </defs>
          </svg>
        )}
        {/* delivery and transport */}
        {categoryName === "Delivery & Transportation" && (
          <svg
            width="22"
            height="24"
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <mask
              id="mask0_96_15981"
              //   style="mask-type:luminance"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="22"
              height="24">
              <path
                d="M14 0.5H0V14.5H14V0.5Z"
                fill={`${subCategory === subCt ? "#ffffff" : "#1F2937"}`}
              />
            </mask>
            <g mask="url(#mask0_96_15981)">
              <path
                d="M1.16667 2.25016V1.521C0.763957 1.521 0.4375 1.84745 0.4375 2.25016H1.16667ZM7.58333 2.25016H8.3125C8.3125 1.84745 7.98607 1.521 7.58333 1.521V2.25016ZM7.58333 5.75016V5.021C7.38996 5.021 7.20446 5.09782 7.06773 5.23457C6.93099 5.37131 6.85417 5.55678 6.85417 5.75016H7.58333ZM1.16667 2.97933H7.58333V1.521H1.16667V2.97933ZM6.85417 2.25016V11.5835H8.3125V2.25016H6.85417ZM1.89583 10.4168V2.25016H0.4375V10.4168H1.89583ZM7.58333 6.47933H10.5V5.021H7.58333V6.47933ZM12.1042 8.0835V10.4168H13.5625V8.0835H12.1042ZM8.3125 11.5835V5.75016H6.85417V11.5835H8.3125ZM10.8093 11.8928C10.6385 12.0637 10.3615 12.0637 10.1907 11.8928L9.15944 12.9241C9.89981 13.6644 11.1002 13.6644 11.8406 12.9241L10.8093 11.8928ZM10.1907 11.2742C10.3615 11.1033 10.6385 11.1033 10.8093 11.2742L11.8406 10.2429C11.1002 9.50257 9.89981 9.50257 9.15944 10.2429L10.1907 11.2742ZM3.80936 11.8928C3.63851 12.0637 3.36149 12.0637 3.19064 11.8928L2.15944 12.9241C2.89981 13.6644 4.10019 13.6644 4.84056 12.9241L3.80936 11.8928ZM3.19064 11.2742C3.36149 11.1033 3.63851 11.1033 3.80936 11.2742L4.84056 10.2429C4.10019 9.50257 2.89981 9.50257 2.15944 10.2429L3.19064 11.2742ZM10.8093 11.2742C10.8949 11.3597 10.9375 11.4704 10.9375 11.5835H12.3958C12.3958 11.0994 12.2106 10.613 11.8406 10.2429L10.8093 11.2742ZM10.9375 11.5835C10.9375 11.6966 10.8949 11.8073 10.8093 11.8928L11.8406 12.9241C12.2106 12.554 12.3958 12.0675 12.3958 11.5835H10.9375ZM9.33333 10.8543H7.58333V12.3127H9.33333V10.8543ZM10.1907 11.8928C10.1051 11.8073 10.0625 11.6966 10.0625 11.5835H8.60417C8.60417 12.0675 8.78937 12.554 9.15944 12.9241L10.1907 11.8928ZM10.0625 11.5835C10.0625 11.4704 10.1051 11.3597 10.1907 11.2742L9.15944 10.2429C8.78937 10.613 8.60417 11.0994 8.60417 11.5835H10.0625ZM3.19064 11.8928C3.10507 11.8073 3.0625 11.6966 3.0625 11.5835H1.60417C1.60417 12.0675 1.7894 12.554 2.15944 12.9241L3.19064 11.8928ZM3.0625 11.5835C3.0625 11.4704 3.10507 11.3597 3.19064 11.2742L2.15944 10.2429C1.7894 10.613 1.60417 11.0994 1.60417 11.5835H3.0625ZM7.58333 10.8543H4.66667V12.3127H7.58333V10.8543ZM3.80936 11.2742C3.89493 11.3597 3.9375 11.4704 3.9375 11.5835H5.39583C5.39583 11.0994 5.2106 10.613 4.84056 10.2429L3.80936 11.2742ZM3.9375 11.5835C3.9375 11.6966 3.89493 11.8073 3.80936 11.8928L4.84056 12.9241C5.2106 12.554 5.39583 12.0675 5.39583 11.5835H3.9375ZM12.1042 10.4168C12.1042 10.6584 11.9083 10.8543 11.6667 10.8543V12.3127C12.7137 12.3127 13.5625 11.4639 13.5625 10.4168H12.1042ZM10.5 6.47933C11.386 6.47933 12.1042 7.19753 12.1042 8.0835H13.5625C13.5625 6.39212 12.1914 5.021 10.5 5.021V6.47933ZM0.4375 10.4168C0.4375 11.4639 1.28629 12.3127 2.33333 12.3127V10.8543C2.09171 10.8543 1.89583 10.6584 1.89583 10.4168H0.4375Z"
                fill="white"
              />
            </g>
          </svg>
        )}
      </button>
    </>
  );
}

export default CategoriesSub;
