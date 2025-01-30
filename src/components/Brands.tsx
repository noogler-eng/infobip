export default function Brands() {
  const logos: {
    imgLink: string;
  }[] = [
    {
      imgLink: "https://cdn-web.infobip.com/uploads/2024/12/uber-1.png",
    },
    {
      imgLink: "https://cdn-web.infobip.com/uploads/2024/12/unicef-1.png",
    },
    {
      imgLink: "https://cdn-web.infobip.com/uploads/2024/12/strava-1.png",
    },
    {
      imgLink: "https://cdn-web.infobip.com/uploads/2024/12/papa-johns-1.png",
    },
    {
      imgLink: "https://cdn-web.infobip.com/uploads/2024/12/coca-cola-1.png",
    },
    {
      imgLink: "https://cdn-web.infobip.com/uploads/2024/12/uber-1.png",
    },
    {
      imgLink: "https://cdn-web.infobip.com/uploads/2024/12/braze-1.svg",
    },
    {
      imgLink: "https://cdn-web.infobip.com/uploads/2024/12/bolt-1.svg",
    },
    {
      imgLink: "https://cdn-web.infobip.com/uploads/2024/12/adobe-1.svg",
    },
    {
      imgLink: "https://cdn-web.infobip.com/uploads/2024/12/santander-1.svg",
    },
    {
      imgLink: "https://cdn-web.infobip.com/uploads/2024/12/slack-1.svg",
    },
    {
      imgLink: "https://cdn-web.infobip.com/uploads/2024/12/meta-1.svg",
    },
  ];

  return (
    <div className="w-4/6">
      <div className="flex justify-between items-center">
        {logos.slice(0, 6).map((item, index) => {
          return (
            <img src={item.imgLink} key={index} height={100} width={120} />
          );
        })}
      </div>
      <div className="flex justify-between items-center">
        {logos.slice(6, logos.length).map((item, index) => {
          return (
            <img src={item.imgLink} key={index} height={100} width={120} />
          );
        })}
      </div>
    </div>
  );
}
