export default function CodeButton({
  data,
  setCateogry,
}: {
  data: string[];
  setCateogry: any;
}) {
  return (
    <div className="w-fit flex gap-1 bg-white rounded-xl p-1">
      {data.map((item, index) => {
        return (
          <div
            onClick={() => setCateogry(index)}
            className="hover:bg-gray-200 rounded-xl py-1 px-2 bg-white text-sm"
          >
            {item}
          </div>
        );
      })}
    </div>
  );
}
