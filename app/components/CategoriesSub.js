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
            : "bg-gray-200 text-gray-800 opacity-30"
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
                strokeLinejoin="round"
              />
              <path
                d="M10.9375 0.875L8.8252 2.9873C8.66265 3.14981 8.53371 3.34275 8.44574 3.5551C8.35778 3.76744 8.3125 3.99504 8.3125 4.22488V4.63121C8.31251 4.6887 8.30119 4.74563 8.27918 4.79874C8.25718 4.85185 8.22492 4.9001 8.18426 4.94074L7.875 5.25"
                stroke={`${subCategory === subCt ? "#ffffff" : "#1F2937"}`}
                stroke-linecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.75 6.125L9.05926 5.81574C9.0999 5.77508 9.14815 5.74282 9.20126 5.72082C9.25437 5.69881 9.3113 5.68749 9.36879 5.6875H9.77512C10.005 5.6875 10.2326 5.64222 10.4449 5.55426C10.6573 5.46629 10.8502 5.33735 11.0127 5.1748L13.125 3.0625"
                stroke={`${subCategory === subCt ? "#ffffff" : "#1F2937"}`}
                stroke-linecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.0312 1.96875L9.84375 4.15625"
                stroke={`${subCategory === subCt ? "#ffffff" : "#1F2937"}`}
                stroke-linecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.46852 10.0625L2.7418 12.8045C2.53669 13.0096 2.25854 13.1248 1.96852 13.1248C1.67849 13.1248 1.40034 13.0096 1.19524 12.8045C0.990189 12.5994 0.875 12.3213 0.875 12.0312C0.875 11.7412 0.990189 11.4631 1.19524 11.258L3.49977 8.96875"
                stroke={`${subCategory === subCt ? "#ffffff" : "#1F2937"}`}
                stroke-linecap="round"
                strokeLinejoin="round"
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
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.66667 1.50016V0.458496C1.09137 0.458496 0.625 0.924863 0.625 1.50016H1.66667ZM10.8333 1.50016H11.875C11.875 0.924863 11.4087 0.458496 10.8333 0.458496V1.50016ZM10.8333 6.50016V5.4585C10.5571 5.4585 10.2921 5.56825 10.0968 5.7636C9.90142 5.95895 9.79167 6.2239 9.79167 6.50016H10.8333ZM1.66667 2.54183H10.8333V0.458496H1.66667V2.54183ZM9.79167 1.50016V14.8335H11.875V1.50016H9.79167ZM2.70833 13.1668V1.50016H0.625V13.1668H2.70833ZM10.8333 7.54183H15V5.4585H10.8333V7.54183ZM17.2917 9.8335V13.1668H19.375V9.8335H17.2917ZM11.875 14.8335V6.50016H9.79167V14.8335H11.875ZM15.4419 15.2754C15.1978 15.5195 14.8022 15.5195 14.5581 15.2754L13.0849 16.7486C14.1426 17.8062 15.8574 17.8062 16.9151 16.7486L15.4419 15.2754ZM14.5581 14.3916C14.8022 14.1475 15.1978 14.1475 15.4419 14.3916L16.9151 12.9184C15.8574 11.8607 14.1426 11.8607 13.0849 12.9184L14.5581 14.3916ZM5.44194 15.2754C5.19787 15.5195 4.80213 15.5195 4.55806 15.2754L3.08492 16.7486C4.14259 17.8062 5.85741 17.8062 6.91508 16.7486L5.44194 15.2754ZM4.55806 14.3916C4.80213 14.1475 5.19787 14.1475 5.44194 14.3916L6.91508 12.9184C5.85741 11.8607 4.14259 11.8607 3.08492 12.9184L4.55806 14.3916ZM15.4419 14.3916C15.5642 14.5138 15.625 14.6719 15.625 14.8335H17.7083C17.7083 14.142 17.4437 13.4471 16.9151 12.9184L15.4419 14.3916ZM15.625 14.8335C15.625 14.9951 15.5642 15.1532 15.4419 15.2754L16.9151 16.7486C17.4437 16.2199 17.7083 15.525 17.7083 14.8335H15.625ZM13.3333 13.7918H10.8333V15.8752H13.3333V13.7918ZM14.5581 15.2754C14.4358 15.1532 14.375 14.9951 14.375 14.8335H12.2917C12.2917 15.525 12.5562 16.2199 13.0849 16.7486L14.5581 15.2754ZM14.375 14.8335C14.375 14.6719 14.4358 14.5138 14.5581 14.3916L13.0849 12.9184C12.5562 13.4471 12.2917 14.142 12.2917 14.8335H14.375ZM4.55806 15.2754C4.43582 15.1532 4.375 14.9951 4.375 14.8335H2.29167C2.29167 15.525 2.55629 16.2199 3.08492 16.7486L4.55806 15.2754ZM4.375 14.8335C4.375 14.6719 4.43582 14.5138 4.55806 14.3916L3.08492 12.9184C2.55629 13.4471 2.29167 14.142 2.29167 14.8335H4.375ZM10.8333 13.7918H6.66667V15.8752H10.8333V13.7918ZM5.44194 14.3916C5.56418 14.5138 5.625 14.6719 5.625 14.8335H7.70833C7.70833 14.142 7.44371 13.4471 6.91508 12.9184L5.44194 14.3916ZM5.625 14.8335C5.625 14.9951 5.56418 15.1532 5.44194 15.2754L6.91508 16.7486C7.44371 16.2199 7.70833 15.525 7.70833 14.8335H5.625ZM17.2917 13.1668C17.2917 13.512 17.0118 13.7918 16.6667 13.7918V15.8752C18.1624 15.8752 19.375 14.6626 19.375 13.1668H17.2917ZM15 7.54183C16.2657 7.54183 17.2917 8.56783 17.2917 9.8335H19.375C19.375 7.41725 17.4163 5.4585 15 5.4585V7.54183ZM0.625 13.1668C0.625 14.6626 1.83756 15.8752 3.33333 15.8752V13.7918C2.98816 13.7918 2.70833 13.512 2.70833 13.1668H0.625Z"
              fill={`${subCategory === subCt ? "#ffffff" : "#1F2937"}`}
            />
          </svg>
        )}
        {/* retails and shops */}
        {categoryName === "Retail and Shops" && (
          <svg
            width="22px"
            height="22px"
            viewBox="0 0 14 15"
            fill={`${subCategory === subCt ? "#ffffff" : "#1F2937"}`}
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.48367 14.5H12.5148C12.6976 14.5 12.873 14.433 13.0023 14.3136C13.1316 14.1943 13.2042 14.0324 13.2042 13.8636V6.06945C13.2766 6.00905 13.3456 5.94533 13.411 5.87855C13.6719 5.57204 13.8529 5.21435 13.9403 4.83304C14.0277 4.45174 14.019 4.057 13.915 3.67927L13.1835 0.982364C13.1463 0.844634 13.0603 0.722344 12.9391 0.634941C12.8179 0.547537 12.6686 0.500039 12.5148 0.5H1.48367C1.32989 0.500039 1.18053 0.547537 1.05935 0.634941C0.93817 0.722344 0.852131 0.844634 0.814914 0.982364L0.0854837 3.678C-0.0188134 4.05559 -0.0277983 4.45024 0.0592211 4.83154C0.146241 5.21284 0.326941 5.5706 0.587398 5.87727C0.652844 5.94406 0.721875 6.00777 0.794231 6.06818V13.8636C0.794231 14.0324 0.866869 14.1943 0.996164 14.3136C1.12546 14.433 1.30082 14.5 1.48367 14.5ZM7.68866 13.2273H6.30978V10.0455H7.68866V13.2273ZM11.9763 1.77273L12.5761 3.98664C12.6277 4.17702 12.6315 4.37575 12.5874 4.56772C12.5433 4.75969 12.4523 4.93984 12.3215 5.0945C12.1906 5.24916 12.0232 5.37425 11.8321 5.46027C11.641 5.54628 11.4312 5.59096 11.2186 5.59091C10.8686 5.58886 10.5319 5.46645 10.2744 5.24758C10.0169 5.02871 9.85697 4.72911 9.82594 4.40727L9.58739 1.77273H11.9763ZM5.79476 1.77273H8.20368L8.42154 4.19091C8.43786 4.36902 8.41394 4.54831 8.35129 4.71744C8.28864 4.88658 8.18863 5.04186 8.05758 5.17346C7.92654 5.30507 7.76732 5.41012 7.59 5.48198C7.41269 5.55383 7.22114 5.59093 7.02749 5.59091H6.97095C6.7773 5.59093 6.58575 5.55383 6.40843 5.48198C6.23112 5.41012 6.0719 5.30507 5.94086 5.17346C5.80981 5.04186 5.7098 4.88658 5.64715 4.71744C5.5845 4.54831 5.56058 4.36902 5.5769 4.19091L5.79476 1.77273ZM4.92675 6.03636C5.18724 6.29694 5.50332 6.50495 5.85512 6.64732C6.20692 6.78969 6.58682 6.86334 6.97095 6.86364H7.02749C7.41161 6.86334 7.79152 6.78969 8.14332 6.64732C8.49511 6.50495 8.81119 6.29694 9.07168 6.03636C9.09306 6.01473 9.10754 5.988 9.12822 5.96636C9.45113 6.32095 9.8738 6.5864 10.3497 6.73349C10.8256 6.88058 11.3362 6.90359 11.8253 6.8V13.2273H9.06755V9.40909C9.06755 9.24032 8.99491 9.07845 8.86561 8.95911C8.73632 8.83977 8.56096 8.77273 8.37811 8.77273H5.62033C5.43748 8.77273 5.26212 8.83977 5.13282 8.95911C5.00353 9.07845 4.93089 9.24032 4.93089 9.40909V13.2273H2.17312V6.8C2.66232 6.90352 3.17299 6.8804 3.64887 6.7332C4.12475 6.586 4.54738 6.32043 4.87022 5.96573C4.8909 5.98736 4.90538 6.01409 4.92675 6.03636ZM1.42231 3.98664L2.02213 1.77273H4.41105L4.1725 4.40727C4.14147 4.72911 3.98158 5.02871 3.72406 5.24758C3.46654 5.46645 3.12988 5.58886 2.77983 5.59091C2.56722 5.59096 2.35739 5.54628 2.16629 5.46027C1.97519 5.37425 1.80785 5.24916 1.67698 5.0945C1.54611 4.93984 1.45516 4.75969 1.41103 4.56772C1.3669 4.37575 1.37076 4.17702 1.42231 3.98664Z"
              fill={`${subCategory === subCt ? "#ffffff" : "#1F2937"}`}
            />
          </svg>
        )}
        {/* Logistics & Warehouse */}
        {categoryName === "Logistics & Warehouse" && (
          <svg
            width="22px"
            height="22px"
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12.1545 1.73171V9.91496H11.0274V5.20746H8.96821V0.5H4.01798V5.20746H1.95876V9.91496H0V12.7784H1.13016C1.11919 12.864 1.11315 12.9521 1.11315 13.0423C1.11315 13.8461 1.56873 14.5 2.1287 14.5C2.68868 14.5 3.14426 13.846 3.14426 13.0423C3.14426 12.9521 3.13825 12.864 3.12725 12.7784H9.85878C9.84784 12.864 9.84177 12.9521 9.84177 13.0423C9.84177 13.8461 10.2973 14.5 10.8573 14.5C11.4173 14.5 11.8729 13.846 11.8729 13.0423C11.8729 12.9521 11.8669 12.864 11.8559 12.7784H12.9861V10.5119V9.91496V2.92558H14V1.73171C14.0001 1.73171 12.1545 1.73171 12.1545 1.73171ZM8.96818 7.59697V6.40133H10.1957V9.91496H6.90896V6.40133H8.13646V7.59697H8.96818ZM4.84971 1.69391H6.07721V2.88951H6.90893V1.69391H8.13643V5.2075H6.90893H6.07721H4.84971V1.69391ZM2.79051 6.40137H4.01801V7.59701H4.84974V6.40137H6.07724V9.915H2.79051V6.40137ZM2.12876 13.3061C2.02737 13.3061 1.94493 13.1878 1.94493 13.0423C1.94493 12.8968 2.02739 12.7784 2.12876 12.7784C2.23012 12.7784 2.31259 12.8967 2.31259 13.0423C2.31259 13.1878 2.23012 13.3061 2.12876 13.3061ZM10.8574 13.3061C10.7561 13.3061 10.6736 13.1878 10.6736 13.0423C10.6736 12.8968 10.7561 12.7784 10.8574 12.7784C10.9589 12.7784 11.0413 12.8967 11.0413 13.0423C11.0413 13.1878 10.9588 13.3061 10.8574 13.3061ZM12.1545 11.5845H0.831723V11.1089H1.95876H6.07724H6.90896H11.0274H12.1545V11.5845Z"
              fill={`${subCategory === subCt ? "#ffffff" : "#1F2937"}`}
            />
          </svg>
        )}
        {/* Gym & Sports */}
        {categoryName === "Gym & Sports" && (
          <svg
            width="22px"
            height="22px"
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.38 4.47304L12.1075 3.19766L12.6598 2.64439C12.7155 2.59049 12.7599 2.52603 12.7905 2.45475C12.821 2.38347 12.8371 2.30681 12.8378 2.22923C12.8385 2.15166 12.8237 2.07473 12.7944 2.00293C12.7651 1.93113 12.7218 1.86589 12.667 1.81104C12.6122 1.75618 12.5471 1.7128 12.4755 1.68343C12.4038 1.65405 12.327 1.63927 12.2495 1.63994C12.1721 1.64062 12.0956 1.65673 12.0244 1.68735C11.9533 1.71797 11.8889 1.76248 11.8351 1.81828L11.2828 2.37155L10.0097 1.09675C9.60839 0.713684 9.07534 0.5 8.52104 0.5C7.96673 0.5 7.43368 0.713684 7.03239 1.09675C6.83676 1.29257 6.68157 1.52508 6.57568 1.78101C6.4698 2.03694 6.4153 2.31126 6.4153 2.5883C6.4153 2.86534 6.4698 3.13966 6.57568 3.39559C6.68157 3.65152 6.83676 3.88403 7.03239 4.07985L8.30496 5.35464L4.86752 8.79812L3.59438 7.52332C3.19309 7.14025 2.66004 6.92657 2.10574 6.92657C1.55143 6.92657 1.01838 7.14025 0.617095 7.52332C0.421463 7.71913 0.266269 7.95165 0.160384 8.20758C0.0544998 8.46351 0 8.73783 0 9.01487C0 9.2919 0.0544998 9.56623 0.160384 9.82215C0.266269 10.0781 0.421463 10.3106 0.617095 10.5064L1.88966 11.7812L1.33736 12.3345C1.28166 12.3884 1.23723 12.4528 1.20666 12.5241C1.1761 12.5954 1.16001 12.6721 1.15933 12.7496C1.15866 12.8272 1.17342 12.9041 1.20274 12.9759C1.23207 13.0477 1.27537 13.113 1.33013 13.1678C1.38489 13.2227 1.45001 13.2661 1.52168 13.2954C1.59335 13.3248 1.67015 13.3396 1.74759 13.3389C1.82503 13.3383 1.90156 13.3221 1.97271 13.2915C2.04386 13.2609 2.10822 13.2164 2.16202 13.1606L2.71431 12.6073L3.98746 13.8821C4.18292 14.078 4.41499 14.2334 4.67042 14.3394C4.92584 14.4454 5.19962 14.5 5.4761 14.5C5.75258 14.5 6.02636 14.4454 6.28178 14.3394C6.53721 14.2334 6.76928 14.078 6.96474 13.8821C7.16036 13.6863 7.31554 13.4539 7.42141 13.198C7.52729 12.9421 7.58179 12.6678 7.58179 12.3909C7.58179 12.1139 7.52729 11.8396 7.42141 11.5837C7.31554 11.3278 7.16036 11.0954 6.96474 10.8996L5.69218 9.62481L9.13311 6.18075L10.4057 7.45555C10.6011 7.65144 10.8332 7.80683 11.0886 7.91285C11.3441 8.01887 11.6178 8.07343 11.8943 8.07343C12.1708 8.07343 12.4446 8.01887 12.7 7.91285C12.9554 7.80683 13.1875 7.65144 13.383 7.45555C13.5786 7.25978 13.7338 7.02732 13.8396 6.77144C13.9455 6.51556 14 6.24128 14 5.96429C14 5.6873 13.9455 5.41303 13.8396 5.15715C13.7338 4.90127 13.5786 4.6688 13.383 4.47304H13.38ZM6.41536 12.3911C6.41561 12.5147 6.39141 12.6371 6.34416 12.7512C6.29691 12.8653 6.22755 12.9689 6.14008 13.056C5.96132 13.2273 5.72348 13.3229 5.4761 13.3229C5.22872 13.3229 4.99088 13.2273 4.81212 13.056L1.44175 9.67972C1.26565 9.50331 1.16672 9.26405 1.16672 9.01457C1.16672 8.76509 1.26565 8.52583 1.44175 8.34942C1.61785 8.17302 1.85669 8.07391 2.10574 8.07391C2.35478 8.07391 2.59362 8.17302 2.76972 8.34942L6.14008 11.7257C6.22762 11.8129 6.29702 11.9166 6.34428 12.0308C6.39153 12.145 6.41569 12.2675 6.41536 12.3911ZM12.5554 6.62944C12.3766 6.80075 12.1388 6.89636 11.8914 6.89636C11.644 6.89636 11.4062 6.80075 11.2274 6.62944L7.85705 3.25316C7.76986 3.16581 7.70069 3.06211 7.6535 2.94798C7.60631 2.83386 7.58202 2.71154 7.58202 2.58801C7.58202 2.46448 7.60631 2.34216 7.6535 2.22803C7.70069 2.11391 7.76986 2.01021 7.85705 1.92286C7.94425 1.83551 8.04776 1.76622 8.16169 1.71895C8.27562 1.67168 8.39772 1.64734 8.52104 1.64734C8.64435 1.64734 8.76645 1.67168 8.88038 1.71895C8.99431 1.76622 9.09782 1.83551 9.18502 1.92286L12.5554 5.29914C12.6427 5.38645 12.7119 5.49013 12.7591 5.60427C12.8064 5.7184 12.8307 5.84074 12.8307 5.96429C12.8307 6.08785 12.8064 6.21019 12.7591 6.32432C12.7119 6.43845 12.6427 6.54214 12.5554 6.62944Z"
              fill={`${subCategory === subCt ? "#ffffff" : "#1F2937"}`}
            />
          </svg>
        )}
        {/* Maintenance & Construction */}
        {categoryName === "Maintenance & Construction" && (
          <svg
            width="22px"
            height="22px"
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.944 3.56202C11.5801 4.23306 12.0437 5.05617 12.293 5.95717H14V9.04077H12.293C12.044 9.94251 11.5803 10.7664 10.944 11.438L11.799 12.9587L9.201 14.5L8.348 12.9793C7.46352 13.2085 6.53748 13.2085 5.653 12.9793L4.799 14.5L2.201 12.9587L3.056 11.438C2.41965 10.7664 1.95604 9.94251 1.707 9.04077H0V5.9582H1.707C1.95604 5.05646 2.41965 4.23262 3.056 3.56099L2.2 2.04128L4.797 0.5H4.8L5.654 2.01868C6.53848 1.78946 7.46452 1.78946 8.349 2.01868L9.2 0.5H9.202L11.8 2.04128L10.945 3.56202H10.944ZM10 7.49949C10 6.68194 9.68393 5.89787 9.12132 5.31978C8.55871 4.74169 7.79565 4.41692 7 4.41692C6.20435 4.41692 5.44129 4.74169 4.87868 5.31978C4.31607 5.89787 4 6.68194 4 7.49949C4 8.31703 4.31607 9.1011 4.87868 9.67919C5.44129 10.2573 6.20435 10.5821 7 10.5821C7.79565 10.5821 8.55871 10.2573 9.12132 9.67919C9.68393 9.1011 10 8.31703 10 7.49949Z"
              fill={`${subCategory === subCt ? "#ffffff" : "#1F2937"}`}
            />
          </svg>
        )}
      </button>
    </>
  );
}

export default CategoriesSub;
