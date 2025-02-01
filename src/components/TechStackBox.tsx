import Button from "./reusable/Button";

export default function TechStackBox() {
  const brands = [
    "https://cdn-web.infobip.com/uploads/2024/12/google.png",
    "https://cdn-web.infobip.com/uploads/2024/12/oracle.png",
    "https://cdn-web.infobip.com/uploads/2024/12/adobe.png",
    "https://cdn-web.infobip.com/uploads/2024/12/meta.png",
    "https://cdn-web.infobip.com/uploads/2024/12/microsoft.png",
    "https://cdn-web.infobip.com/uploads/2024/12/hubspot.png",
    "https://cdn-web.infobip.com/uploads/2024/12/salesforce.png",
    "https://cdn-web.infobip.com/uploads/2024/12/bigcommerce.png",
  ];

  const boxes = brands.map((item, index) => {
    return (
      <div className="bg-stone-800 p-4 hover:bg-stone-700 rounded-xl" key={index}>
        <img src={item} width={150} />
      </div>
    );
  });

  return (
    <div className="bg-stone-900 w-full p-16 flex flex-col items-center gap-10 rounded-xl">
      <h1 className="w-1/2 text-center text-5xl text-white">
        Compose your own tech stack by integrating our solutions with any app{" "}
      </h1>
      <p className="text-xl text-center w-4/6 text-white">
        With our wide range of integration options, you can use any of our
        solutions to enhance your customer experience on your existing systems. 
      </p>
      <div className="flex flex-wrap gap-2 w-4/6 justify-center text-white">
        {boxes}
      </div>
      <Button
        text={"Explore all integrations ->"}
        variant="VAR1"
        handel={() => {}}
      />
    </div>
  );
}
