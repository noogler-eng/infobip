import data from "../data/productBox";

export default function ProductBar({ setSelectedProduct }: any) {
  const buttons = data.map((item, index) => {
    return (
      <div
        onClick={() => setSelectedProduct(index)}
        className="flex flex-col p-4 rounded-xl items-start bg-gray-100 hover:bg-white"
        key={index}
      >
        <div className="flex gap-2">
          <span>{item.icon}</span>
          <p>{item.text}</p>
        </div>
        <h2 className="mt-6 w-3/4">{item.heading}</h2>
      </div>
    );
  });

  return <div className="flex gap-1 w-full items-center justify-center">{buttons}</div>;
}
