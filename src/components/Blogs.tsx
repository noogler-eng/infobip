import data from "../data/blogsData";

export default function Blogs() {
  return (
    <div className="flex flex-col gap-6 items-center w-full">
      <div className="w-1/2 text-center text-5xl">
        Stay on top of every tech trend: Explore our resources
      </div>
      <div className="max-w-[1300px] flex gap-4 overflow-x-scroll p-4">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col gap-2 items-start w-8/12">
            <img
              src={item.img}
              alt={item.heading}
              className="rounded-lg w-full"
              width={1000}
            />
            <p className="text-gray-500 text-sm">{item.createdAt}</p>
            <h1 className="text-xl font-semibold w-full">{item.heading}</h1>
            <p className="text-start max-w-5/6">{item.para}</p>
            <ul className="list-disc flex flex-col w-full gap-1 pl-4">
              {item.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
