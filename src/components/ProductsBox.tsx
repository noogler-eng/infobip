import { useState } from "react";
import ProductBar from "./ProductBar";
import data from "../data/productBox";
import { Link } from "react-router-dom";

export default function ProductsBox() {
  const [selectedProduct, setSelectedProduct] = useState<number>(0);

  return (
    <div className="w-full">
      <ProductBar setSelectedProduct={setSelectedProduct} />
      <div className="flex justify-between mt-12 w-full p-10">
        <div className="w-3/6">
          <img src={data[selectedProduct].main.img} width={800} />
        </div>
        <div className="w-3/6 flex flex-col gap-10 pl-24 justify-center">
          <h1 className="text-5xl">{data[selectedProduct].main.heading}</h1>
          <ul className="flex flex-col gap-3 pl-10">
            {data[selectedProduct].main.data.map((item, index) => {
              return (
                <li key={index} className="list-disc">
                  {item}
                </li>
              );
            })}
          </ul>
          <Link to={data[selectedProduct].main.link}>
            {data[selectedProduct].main.explore}
          </Link>
        </div>
      </div>
    </div>
  );
}
