import { Link } from "react-router-dom";
import data from "../data/customerStory";

export default function CompanyServices() {
  const stories = data.map((item, index) => {
    return (
      <Link to="/">
        <div
          key={index}
          className="bg-slate-800 text-white p-4 rounded-xl flex flex-col gap-6 w-[650px] hover:bg-slate-700 min-h-[360px]"
        >
          <div className="bg-slate-900 w-fit p-2 rounded-xl">
            <img src={item.img} />
          </div>
          <p className="text-xl">{item.text}</p>
          <div className="flex w-full gap-4">
            {item.stat.map((internalItem, ind) => {
              return (
                <div key={ind} className="border-t border-slate-600 w-full">
                  <h2 className="text-2xl">{internalItem.num}</h2>
                  <p className="text-sm">{internalItem.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Link>
    );
  });

  return (
    <div className="w-full flex flex-col gap-6 items-center">
      <h1 className="text-5xl w-1/2 text-center">
        Transforming 10,000+ businesses worldwide{" "}
      </h1>
      <Link to="/">Explore customer stories {"->"}</Link>
      <div className="w-full flex flex-wrap gap-2">{stories}</div>
    </div>
  );
}
