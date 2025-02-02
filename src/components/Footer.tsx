import { Globe } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-stone-900 px-8 py-5 w-full rounded-xl">
      <div className="flex gap-8 items-center w-full">
        <p className="text-white">Copyright @ 2006-2024 Infobip ltd.</p>
        <div className="flex gap-5 text-white">
          <Link to="/" className="hover:underline text-sm">
            Terms & Conditions
          </Link>
          <Link to="/" className="hover:underline text-sm">
            Privacy Notice
          </Link>
          <Link to="/" className="hover:underline text-sm">
            Short Code
          </Link>
          <Link to="/" className="hover:underline text-sm">
            Terms of Use
          </Link>
          <Link to="/" className="hover:underline text-sm">
            UK Tax Strategy
          </Link>
        </div>
        <div className="flex flex-grow justify-end">
          <button
            className="bg-stone-600 hover:bg-stone-800 text-white place-items-end	 flex gap-2 items-center p-2 rounded-lg w-fit"
            onClick={() => {}}
          >
            <Globe size={18} /> English
          </button>
        </div>
      </div>
    </div>
  );
}
