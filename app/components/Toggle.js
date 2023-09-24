"use client";

const Toggle = ({ title, state, setState }) => {
  return (
    <>
      <button
        onClick={() => {
          setState((state) => !state);
        }}
        className={`relative rounded-full group p-[3px] h-[45px] w-[85px] sm4:w-[100px] flex  ${
          state === false
            ? "bg-[#CDCDCD] justify-start"
            : "bg-[#5AD61F] justify-end hover:bg-[#4dc515]"
        }`}>
        <div
          className={`w-fit px-2 py-2 bg-white text-[#6B7280] rounded-full leading-none text-center flex items-center justify-center text-[13px] sm4:text-[14px] h-full transition group-hover:bg-[#f2f2f2]`}>
          {title}
        </div>
      </button>
    </>
  );
};

export default Toggle;
