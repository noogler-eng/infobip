import Button from "./reusable/Button";

export default function SubscribeBox() {
  return (
    <div className="bg-stone-900 flex items-center p-12 py-20 w-full rounded-xl">
      <h2 className="text-white text-5xl w-1/2 px-12">
        Get the latest insights and tips to elevate your business
      </h2>
      <div className="flex flex-col gap-8 w-1/2 px-12">
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="enter your email"
            className="rounded-xl w-4/6 px-4 outline-none"
          />
          <Button text="Subscribe" variant="VAR1" handel={() => {}} />
        </div>
        <div className="text-sm text-white">
          By subscribing, you consent to receive email marketing communications
          from INFOBIP. You have the right to withdraw your consent at any time
          using the unsubscribe link provided in all INFOBIP’s email
          communications. For more information please read our Privacy Notice
        </div>
      </div>
    </div>
  );
}
