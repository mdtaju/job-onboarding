import CategoriesMobileSub from "./CategoriesMobileSub";

function CategoriesMobileSingle({
  categoryState,
  subCategory,
  setsubCategory,
  setcategoryState,
  ct,
  scrollToStart,
}) {
  return (
    <>
      {/* back button */}
      <button
        onClick={() => {
          setcategoryState("none");
          setsubCategory("none");
        }}
        className={`customShadow w-full px-4 py-3 rounded-lg text-white flex items-center justify-center gap-2 flex-row-reverse font-semibold text-[15px] transition border-2 border-gray-200 hover:border-black bg-white ${
          categoryState === ct?.categoryName ? "flex" : "hidden"
        }`}>
        <img
          src="/images/arrow-left.svg"
          alt="arrow-left"
          className="min-w-[17px] max-w-[17px] rotate-90"
        />
      </button>

      <button
        onClick={() => {
          setcategoryState(ct?.categoryName);
          setsubCategory("none");
          scrollToStart();

          if (subCategory !== "none") {
            setcategoryState(ct?.categoryName);
            scrollToStart();
          }
        }}
        className={`w-full py-3 rounded-lg text-white flex items-center justify-center gap-2 flex-row-reverse font-semibold text-[15px] transition border-2 hover:border-black ${
          categoryState === ct?.categoryName && subCategory === "none"
            ? "border-black"
            : categoryState === "none"
            ? "border-[#F6F6F6]"
            : "opacity-30"
        } ${
          categoryState === "none"
            ? "flex"
            : categoryState === ct?.categoryName
            ? ""
            : "hidden"
        }`}
        style={{ background: ct?.categoryColor }}>
        <span>{ct?.categoryName}</span>{" "}
        <img
          src={ct?.iconPath}
          alt="hat"
          className="min-w-[22px] max-w-[22px]"
        />
      </button>

      {/* sub categories start */}

      {ct?.subCategories?.map((subCt, i) => (
        <CategoriesMobileSub
          key={i}
          categoryName={ct?.categoryName}
          categoryState={categoryState}
          subCategory={subCategory}
          setsubCategory={setsubCategory}
          ct={ct}
          subCt={subCt}
        />
      ))}
    </>
  );
}

export default CategoriesMobileSingle;
