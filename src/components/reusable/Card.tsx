import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";

export default function Card({
  data,
}: {
  data: {
    image: string;
    title: string;
    heading: string;
    des: string;
    link: string;
    shadow: string;
  };
}) {
  return (
    <div
      className={`flex flex-col items-start gap-5 rounded-xl p-2 shadow-lg ${data.shadow} bg-white`}
    >
      <img src={data.image} className="rounded-xl overflow-y-hidden max-w-60" />
      <p className="bg-orange-600 rounded-lg px-1 py-1 text-sm">{data.title}</p>
      <h1 className="text-3xl">{data.heading}</h1>
      <p className="flex-grow">{data.des}</p>{" "}
      <Link
        to={data.link}
        className="w-fit self-start flex items-center gap-2 group"
      >
        Explore
        <MoveRight
          size={20}
          className="transition-transform duration-300 group-hover:rotate-[-30deg] group-hover:bg-orange-600 group-hover:rounded-full group-hover:p-1"
        />
      </Link>
    </div>
  );
}
