import { useState } from "react";
import data from "../data/featuredBox";
import CategoryBox from "./CategoryBox";
import SubCategoryList from "./SubCategoryList";
import Button from "./reusable/Button";

export default function FeatureBox() {
  const [category, setCategory] = useState<number>(0);
  const [subCategoryIndex, setSubCatgoryIndex] = useState<number>(0);

  return (
    <div className="w-5/6 rounded-xl bg-indigo-200 py-8 px-16 flex flex-col items-center h-[650px]">
      <CategoryBox
        category={category}
        setCategory={setCategory}
        setSubCatgoryIndex={setSubCatgoryIndex}
      />

      <div className="w-full mt-16 flex justify-between">
        <SubCategoryList
          category={category}
          subCategoryIndex={subCategoryIndex}
          setSubCatgoryIndex={setSubCatgoryIndex}
        />
        <div className="flex gap-4 w-4/6 justify-between items-center">
          <div className="3/6">
            <img
              src={data[category].types[subCategoryIndex].image}
              width={360}
            />
          </div>
          <div className="w-3/6 flex flex-col gap-8">
            <h1 className="text-4xl text-start">
              {data[category].types[subCategoryIndex].heading}
            </h1>
            <p className="text-wrap text-start">
              {data[category].types[subCategoryIndex].des}
            </p>
            <div className="w-fit">
              <Button text={"Contact us ->"} handel={() => {}} variant="VAR1" />
            </div>
            <div className="flex justify-between">
              {data[category].companies.map((item, index) => {
                return <img src={item} key={index} width={70} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
