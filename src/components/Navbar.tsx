import { Link } from "react-router-dom";
import { Globe } from "lucide-react";
import { Search } from "lucide-react";
import Button from "./reusable/Button";

export default function Navbar() {
  const tabLinks: {
    text: string;
    link: string;
  }[] = [
    {
      text: "Products",
      link: "/",
    },
    {
      text: "Solutions",
      link: "/",
    },
    {
      text: "Telecoms",
      link: "/",
    },
    {
      text: "Partnership",
      link: "/",
    },
    {
      text: "Developers",
      link: "/",
    },
    {
      text: "Resources",
      link: "/",
    },
  ];

  return (
    <div className="w-full px-16 fixed z-10">
      <div className="backdrop-blur-sm bg-white/30">
        <div className="flex justify-between p-1 items-center">
          <div className="text-xs flex gap-6">
            <Link to="/">SERVICE STATUS</Link>
            <Link to="/">EXTERNAL CONNECTIVITY STATUS</Link>
            <Link to="/">STARTUPS</Link>
            <Link to="/">SUPPORT CENTER</Link>
          </div>
          <div className="text-xs flex gap-6">
            <Link to="/" className="flex items-center gap-1">
              <Globe size={15} /> EN
            </Link>
            <Link to="/" className="bg-white rounded-lg px-1 py-1">
              LOGIN
            </Link>
          </div>
        </div>
        <div className="rounded-xl bg-white flex items-center justify-between p-2">
          <img
            src="https://cdn-web.infobip.com/uploads/2023/01/infobip-logo-horizontal-black.svg"
            className="pl-3"
          />
          <div className="flex gap-8">
            {tabLinks.map((item, index) => {
              return (
                <div
                  key={index}
                  className="hover:bg-gray-200 rounded-xl px-2 py-1"
                >
                  <Link to={item.link}>{item.text}</Link>
                </div>
              );
            })}
          </div>
          <div className="flex gap-2 items-center">
            <Search size={20} className="mr-4" onClick={() => {}} />
            <Button text="Try for free" variant="VAR1" handel={() => {}} />
            <Button text="Contact" variant="VAR2" handel={() => {}} />
          </div>
        </div>
      </div>
    </div>
  );
}
