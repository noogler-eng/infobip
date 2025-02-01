import BrandsLoop from "./reusable/BrandsLoop";
import Button from "./reusable/Button";

export default function Patnership() {
  return (
    <div className="w-full flex items-center bg-orange-600 rounded-xl">
      <div className="w-1/2 flex flex-col items-start gap-8 px-16 py-8">
        <h1 className="text-6xl">
          Head into the conversational future with a trusted partner...
        </h1>
        <p className="text-2xl">
          95% of global businesses will be using conversational solutions by
          2025. We’re here to help you build leading conversational experiences
          in your market.{" "}
        </p>
        <div className="flex items-center gap-4">
          <Button text="Explore patnerships" handel={() => {}} variant="VAR3" />
          <Button text="Become a partner" handel={() => {}} variant="VAR2" />
        </div>
      </div>
      <div className="w-1/2 flex items-center">
        <BrandsLoop />
      </div>
    </div>
  );
}
