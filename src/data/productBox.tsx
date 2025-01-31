import { MessageSquare } from "lucide-react";
import { Album } from "lucide-react";
import { LandPlot } from "lucide-react";
import { SquareActivity } from "lucide-react";
import { Users } from "lucide-react";

const productData: {
  icon: React.ReactNode;
  text: string;
  heading: string;
  main: {
    heading: string;
    data: string[];
    link: string;
    explore: string;
    img: string;
  };
}[] = [
  {
    icon: <MessageSquare />,
    text: "Moments",
    heading: "Customer engagement platform",
    main: {
      heading:
        "Automate and personalize interactions across the customer journey ",
      data: [
        "Foster deeper connections: Build lasting relationships with personalized interactions.",
        "Proactive engagement: Anticipate and predict customer needs before they arise.",
        "Real-time insights: Gain actionable insights to optimize customer experiences.",
        "Seamless omnichannel experience: Deliver consistent experiences across all channels",
      ],
      link: "/",
      explore: "Explore Moments",
      img: "https://cdn-web.infobip.com/uploads/2024/12/moments-hp-header.png",
    },
  },
  {
    icon: <Album />,
    text: "Conversations",
    heading: "Cloud contact solution center",
    main: {
      heading: "Provide customer support with a human touch",
      data: [
        "Unify your channels: Seamlessly integrate voice, chat, email, and social media into one solution.",
        "Empower your agents: Equip agents with the tools to deliver exceptional customer service.",
        "Improve first contact resolution: Resolve issues efficiently on the first contact.",
        "Optimize resource allocation: Efficiently manage workloads and improve agent productivity",
      ],
      link: "/",
      explore: "Explore Conversations",
      img: "https://cdn-web.infobip.com/uploads/2024/12/conversations-header.png",
    },
  },
  {
    icon: <LandPlot />,
    text: "Answers",
    heading: "Chatbot building platform",
    main: {
      heading:
        "Intelligent and empathetic chatbots that support, sell and engage",
      data: [
        "Create engaging conversations: Design chatbots that feel natural and human-like.",
        "Automate routine tasks: Handle repetitive inquiries and free up human agents.",
        "Personalize customer experiences: Deliver tailored interactions based on individual needs.",
        "24/7 customer support: Provide round-the-clock assistance to your customers.",
      ],
      link: "/",
      explore: "Explore Answers",
      img: "https://cdn-web.infobip.com/uploads/2024/12/answers-header-1.png",
    },
  },
  {
    icon: <Users />,
    text: "People",
    heading: "Cuostmer data platform",
    main: {
      heading: "Unify your customer data",
      data: [
        "Gain deep customer insights: Uncover valuable insights from your customer data.",
        "Personalize marketing campaigns: Deliver targeted campaigns that resonate with your audience.",
        "Improve customer segmentation: Identify and target specific customer segments.",
        "Optimize customer journeys: Create seamless and efficient customer journeys.",
      ],
      link: "/",
      explore: "Explore People",
      img: "https://cdn-web.infobip.com/uploads/2024/12/people-f-app-tracking-5.png",
    },
  },
  {
    icon: <SquareActivity />,
    text: "Experiences",
    heading: "Templates for any usecase",
    main: {
      heading: "Customizable conversational templates ",
      data: [
        "Tailored task library: Choose from a variety of tasks to fit your specific industry and user needs.",
        "Intuitive builder tool: Customize your experiences in just a few simple steps. ",
        "Seamless integrations: Connect Experiences to your existing technology stack. ",
        "Accelerated journey creation: Quickly create and orchestrate customer journeys with a unified view.",
      ],
      link: "/",
      explore: "Explore Experiences",
      img: "https://cdn-web.infobip.com/uploads/2024/12/conversational-ai-platforms-hero.png",
    },
  },
];

export default productData;
