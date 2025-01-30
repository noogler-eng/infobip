import Button from "./reusable/Button";

export default function Hero() {
  return (
    <div className="min-h-screen">
      <div className="w-full flex flex-col items-center justify-center gap-10 mt-72">
        <h1 className="text-center text-7xl px-8">
          Reach more customers wherever they are,{" "}
          <span className="line-through">whatever</span> they’re on
        </h1>
        <p className="text-xl w-full flex justify-center">
          Engage them on every channel, in every scenario – from our platform or
          yours
        </p>
        <div className="w-full flex gap-4 items-center justify-center">
          <Button text="Try for free ->" variant="VAR1" handel={() => {}} />
          <Button
            text="Contact an expert ->"
            variant="VAR3"
            handel={() => {}}
          />
        </div>
      </div>
      <div className="w-full mt-10">
        <img src="https://cdn-web.infobip.com/uploads/2024/12/header-hero-home-page.png" />
      </div>
    </div>
  );
}
