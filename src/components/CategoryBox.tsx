import data from "../data/featuredBox";

export default function CategoryBox({
  category,
  setCategory,
  setSubCatgoryIndex,
}: any) {
  const handleSetCateogry = (index: Number) => {
    setCategory(index);
    setSubCatgoryIndex(0);
  };

  return (
    <div className="rounded-xl flex w-fit gap-1 bg-white p-1">
      {data.map((item, index) => {
        return (
          <button
            className={`w-full py-2 px-2 w-fit rounded-xl ${
              category == index ? "bg-gray-200" : "hover:bg-gray-100"
            }`}
            key={index}
            onClick={() => handleSetCateogry(index)}
          >
            {item.text}
          </button>
        );
      })}
    </div>
  );
}
