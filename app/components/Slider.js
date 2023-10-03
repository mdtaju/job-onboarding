import Slider from "react-slick";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`absolute right-3 top-[50%] translate-y-[-50%] z-50 cursor-pointer`}
      // style={{ ...style, display: "block" }}
      onClick={onClick}>
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_19_2347)">
          <rect x="2" y="1" width="46" height="46" rx="23" fill="white" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22.0651 18.4403C22.1057 18.3996 22.154 18.3672 22.2071 18.3452C22.2603 18.3231 22.3173 18.3118 22.3748 18.3118C22.4324 18.3118 22.4893 18.3231 22.5425 18.3452C22.5956 18.3672 22.6439 18.3996 22.6846 18.4403L27.9346 23.6903C27.9753 23.7309 28.0076 23.7792 28.0297 23.8324C28.0517 23.8855 28.0631 23.9425 28.0631 24C28.0631 24.0576 28.0517 24.1146 28.0297 24.1677C28.0076 24.2209 27.9753 24.2692 27.9346 24.3098L22.6846 29.5598C22.6024 29.642 22.491 29.6881 22.3748 29.6881C22.2586 29.6881 22.1472 29.642 22.0651 29.5598C21.9829 29.4776 21.9368 29.3662 21.9368 29.25C21.9368 29.1339 21.9829 29.0225 22.0651 28.9403L27.0062 24L22.0651 19.0598C22.0243 19.0192 21.992 18.9709 21.9699 18.9177C21.9479 18.8646 21.9365 18.8076 21.9365 18.75C21.9365 18.6925 21.9479 18.6355 21.9699 18.5824C21.992 18.5292 22.0243 18.4809 22.0651 18.4403Z"
            fill="#1F2937"
          />
          <rect
            x="2.5"
            y="1.5"
            width="45"
            height="45"
            rx="22.5"
            stroke="#E5E7EB"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_19_2347"
            x="0"
            y="0"
            width="50"
            height="50"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_19_2347"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_19_2347"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`absolute left-3 top-[50%] translate-y-[-50%] z-50 cursor-pointer`}
      // style={{ ...style, display: "block" }}
      onClick={onClick}>
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_19_2346)">
          <rect x="2" y="1" width="46" height="46" rx="23" fill="white" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M27.9348 18.4403C27.9755 18.4809 28.0079 18.5292 28.0299 18.5824C28.052 18.6355 28.0633 18.6925 28.0633 18.75C28.0633 18.8076 28.052 18.8646 28.0299 18.9177C28.0079 18.9709 27.9755 19.0192 27.9348 19.0598L22.9937 24L27.9348 28.9403C28.017 29.0225 28.0631 29.1339 28.0631 29.25C28.0631 29.3662 28.017 29.4776 27.9348 29.5598C27.8526 29.642 27.7412 29.6881 27.6251 29.6881C27.5089 29.6881 27.3975 29.642 27.3153 29.5598L22.0653 24.3098C22.0246 24.2692 21.9922 24.2209 21.9702 24.1677C21.9481 24.1146 21.9368 24.0576 21.9368 24C21.9368 23.9425 21.9481 23.8855 21.9702 23.8324C21.9922 23.7792 22.0246 23.7309 22.0653 23.6903L27.3153 18.4403C27.3559 18.3996 27.4042 18.3672 27.4574 18.3452C27.5105 18.3231 27.5675 18.3118 27.6251 18.3118C27.6826 18.3118 27.7396 18.3231 27.7927 18.3452C27.8459 18.3672 27.8942 18.3996 27.9348 18.4403Z"
            fill="#1F2937"
          />
          <rect
            x="2.5"
            y="1.5"
            width="45"
            height="45"
            rx="22.5"
            stroke="#E5E7EB"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_19_2346"
            x="0"
            y="0"
            width="50"
            height="50"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_19_2346"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_19_2346"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function SliderComponent() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-full">
      <Slider {...settings}>
        <div className="px-1">
          <img
            src="/images/company_one.png"
            alt="company_one"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="px-1">
          <img
            src="/images/company_two.png"
            alt="company_two"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="px-1">
          <img
            src="/images/company_three.png"
            alt="company_three"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="px-1">
          <img
            src="/images/company_one.png"
            alt="company_four"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </Slider>
    </div>
  );
}

export default SliderComponent;
