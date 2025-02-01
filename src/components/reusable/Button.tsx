type variants = "VAR1" | "VAR2" | "VAR3";

export default function Button({
  variant,
  text,
  handel,
}: {
  variant: variants;
  text: string;
  handel: () => void;
}) {
  return (
    <button
      onClick={handel}
      className={`text-sm ${
        variant == "VAR1"
          ? "bg-orange-600 rounded-xl py-4 px-4 font-medium hover:bg-orange-500"
          : variant == "VAR2"
          ? "border border-black rounded-xl py-4 px-4 font-medium bg-white text-black"
          : "bg-black text-white font-semibold py-4 px-4 rounded-xl"
      }`}
    >
      {text}
    </button>
  );
}
