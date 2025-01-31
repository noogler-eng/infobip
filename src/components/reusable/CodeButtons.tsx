export default function CodeButton({
  data,
  platform,
  channel,
  setCateogry,
  type,
}: {
  data: string[];
  platform: number;
  channel: number;
  setCateogry: any;
  type: string;
}) {
  return (
    <div className="w-fit flex gap-1 bg-white rounded-xl p-1">
      {data.map((item, index) => {
        return (
          <div
            onClick={() => setCateogry(index)}
            className={`hover:bg-gray-200 rounded-xl py-1 px-2 text-sm ${
              type == "platform" && platform == index
                ? "bg-gray-200"
                : type == "channel" && channel == index
                ? "bg-gray-200"
                : "bg-white"
            }`}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
}
