import CategoriesSub from "./CategoriesSub";

function CategorySingle({
  categoryState,
  subCategory,
  setsubCategory,
  setcategoryState,
  ct,
}) {
  return (
    <>
      {/* back button */}
      <button
        onClick={() => {
          setcategoryState("none");
          setsubCategory("none");
        }}
        className={`customShadow px-4 py-3 rounded-lg text-white flex items-center gap-2 flex-row-reverse font-semibold text-[15px] transition border-2 border-gray-200 hover:border-black bg-white ${
          categoryState === "none"
            ? "hidden"
            : categoryState === ct?.categoryName
            ? "flex"
            : "hidden"
        }`}>
        <img
          src="/images/arrow-left.svg"
          alt="arrow-left"
          className="min-w-[17px] max-w-[17px]"
        />
      </button>

      <button
        onClick={() => {
          setcategoryState(ct?.categoryName);
          setsubCategory("none");
        }}
        className={`px-4 py-3 rounded-lg text-white flex items-center gap-2 flex-row-reverse font-semibold text-[15px] transition border-2  hover:border-black ${
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
        {ct?.categoryName}{" "}
        <img
          src={ct?.iconPath}
          alt="hat"
          className="min-w-[22px] max-w-[22px]"
        />
      </button>

      {ct?.subCategories?.map((subCt, i) => (
        <CategoriesSub
          key={i}
          subCt={subCt}
          categoryState={categoryState}
          categoryName={ct?.categoryName}
          subCategory={subCategory}
          setsubCategory={setsubCategory}
          setcategoryState={setcategoryState}
          iconPath={ct?.iconPath}
          icon={ct?.icon || ""}
        />
      ))}
    </>
  );
}

export default CategorySingle;
