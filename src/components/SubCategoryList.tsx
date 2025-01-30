import data from "../data/featuredBox";

export default function SubCategoryList({
  category,
  subCategoryIndex,
  setSubCatgoryIndex,
}: any) {
  const handleSetSubCateogry = (index: Number) => {
    setSubCatgoryIndex(index);
  };

  return (
    <div className="rounded-xl flex flex-col w-1/4 gap-1 p-1">
      {data[category].types.map((item, index) => {
        return (
          <button
            className={`w-full text-start px-4 py-3 rounded-xl ${
              subCategoryIndex == index ? "bg-white" : "hover:bg-gray-100"
            }`}
            key={index}
            onClick={() => handleSetSubCateogry(index)}
          >
            {item.text}
          </button>
        );
      })}
    </div>
  );
}
