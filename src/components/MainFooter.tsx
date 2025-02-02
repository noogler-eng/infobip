// { footerLinks1, footerLinks2, footerLinks3 }
import { Link } from "react-router-dom";
import data from "../data/footerData";

export default function MainFooter() {
  return (
    <div className="flex w-full bg-orange-600 rounded-xl p-8">
      <div className="w-3/12">
        <img
          src="https://cdn-web.infobip.com/uploads/2023/01/infobip-logo-horizontal-black.svg"
          width={120}
        />
      </div>
      <div className="w-9/12 flex gap-12">
        <div className="flex flex-col gap-4">
          <p className="pb-3 border-b border-black w-full">Bussiness</p>
          <div className="flex flex-col gap-1 w-full">
            {data.footerLinks1.map((item, index) => {
              return (
                <Link
                  to={item.link}
                  className="hover:underline text-sm"
                  key={index}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="pb-3 border-b border-black w-full">Solutions</p>
          <div className="flex flex-col gap-1 w-full">
            {data.footerLinks1.map((item, index) => {
              return (
                <Link
                  to={item.link}
                  className="hover:underline text-sm"
                  key={index}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-4 flex-grow">
          <p className="pb-3 border-b border-black w-full">Company</p>
          <div className="flex gap-4">
            <div className="flex flex-col gap-1 w-fit">
              {data.footerLinks3.slice(0, 8).map((item, index) => {
                return (
                  <Link
                    to={item.link}
                    className="hover:underline text-sm"
                    key={index}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>{" "}
            <div className="flex flex-col gap-1 w-full">
              {data.footerLinks3
                .slice(8, data.footerLinks3.length)
                .map((item, index) => {
                  return (
                    <Link
                      to={item.link}
                      className="hover:underline text-sm"
                      key={index}
                    >
                      {item.name}
                    </Link>
                  );
                })}
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
