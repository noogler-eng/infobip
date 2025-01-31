import data from "../data/service";

export default function Services() {
  const items1 = data.slice(0, 5).map((item, index) => {
    return (
      <div key={index} className="w-8 h-8">
        {item.img}
        <p>{item.name}</p>
      </div>
    );
  });

  const items2 = data.slice(0, data.length).map((item, index) => {
    return (
      <div key={index} className="w-8 h-8">
        {item.img}
        <p>{item.name}</p>
      </div>
    );
  });

  return (
    <div className="flex flex-col">
      <div className="flex gap-2">{items1}</div>
      <div className="flex gap-2">{items2}</div>
    </div>
  );
}
