import Card from "./reusable/Card";

export default function CardsBar() {
  const featureCard: {
    image: string;
    title: string;
    heading: string;
    des: string;
    link: string;
    shadow: string;
  }[] = [
    {
      image: "https://cdn-web.infobip.com/uploads/2024/12/app-layer-2.png",
      title: "Verticalized & AI use cases",
      heading: "Design coustmer journeys",
      des: "Build any use case on messaging or voice channels for your industry e.g. Finance, Healthcare, retail, using AI and our conversational experience platform",
      link: "/",
      shadow: "hover:shadow-cyan-500/100",
    },
    {
      image: "https://cdn-web.infobip.com/uploads/2024/12/chatbot-1.png",
      title: "Composable CX modules",
      heading: "Create conversations that click",
      des: "Enable dynamic two-way interactions for marketing and customer support through messaging or programmable voice",
      link: "/",
      shadow: "hover:shadow-blue-500/100",
    },
    {
      image:
        "https://cdn-web.infobip.com/uploads/2024/12/connect-on-any-channel.png",
      title: "Programmable Channels",
      heading: "Connect on any channel",
      des: "Effortlessly deliver messages across all channels from a unified messaging platform using the most advanced channel APIs in the world",
      link: "/",
      shadow: "hover:shadow-indigo-500/100",
    },
    {
      image: "https://cdn-web.infobip.com/uploads/2024/12/otp-hp.png",
      title: "Network and APIs",
      heading: "Secure and scale every interaction",
      des: "Protect your customers and their data with authentication tools or simply build communication workflows on our secure, flexible CPaaS APIs, and the most powerful network in the world",
      link: "/",
      shadow: "hover:shadow-red-500/100",
    },
  ];

  return (
    <div className="w-4/5">
      <div className="flex gap-4">
        {featureCard.map((item, index) => {
          return <Card data={item} key={index} />;
        })}
      </div>
    </div>
  );
}
