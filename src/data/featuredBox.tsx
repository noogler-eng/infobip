const featuredBoxData: {
  text: string;
  types: {
    text: string;
    heading: string;
    image: string;
    des: string;
  }[];
  companies: string[];
}[] = [
  {
    text: "Finance",
    types: [
      {
        text: "Send OTPs",
        heading: "Authenticate users, boost security and build trust",
        des: "Secure transactions and account logins with a user-friendly authentication experience. Ensure global and local compliance and protection against unauthorized access.",
        image:
          "https://cdn-web.infobip.com/uploads/2024/12/finance-send-otps.png",
      },
      {
        text: "Onboard new customers",
        heading: "Start strong to build loyalty with seamless onboarding",
        des: "Streamline customer onboarding with efficient, secure processes that enhance user experience. Simplify account setup, ensure compliance, and establish lasting loyalty from the first interaction",
        image:
          "https://cdn-web.infobip.com/uploads/2025/01/finance-onboard-new-customers.png",
      },
      {
        text: "Inroduce new features",
        heading: "Authenticate users, boost security and build trust",
        des: "Secure transactions and account logins with a user-friendly authentication experience. Ensure global and local compliance and protection against unauthorized access.",
        image:
          "https://cdn-web.infobip.com/uploads/2025/01/finance-introduce-new-features.png",
      },
      {
        text: "Activate services",
        heading: "Authenticate users, boost security and build trust",
        des: "Secure transactions and account logins with a user-friendly authentication experience. Ensure global and local compliance and protection against unauthorized access.",
        image:
          "https://cdn-web.infobip.com/uploads/2025/01/finance-activate-services.png",
      },
      {
        text: "Promote new offers",
        heading: "Authenticate users, boost security and build trust",
        des: "Secure transactions and account logins with a user-friendly authentication experience. Ensure global and local compliance and protection against unauthorized access.",
        image:
          "https://cdn-web.infobip.com/uploads/2024/12/finance-promote-new-offers.png",
      },
      {
        text: "Engage inactive users",
        heading: "Authenticate users, boost security and build trust",
        des: "Secure transactions and account logins with a user-friendly authentication experience. Ensure global and local compliance and protection against unauthorized access.",
        image:
          "https://cdn-web.infobip.com/uploads/2024/12/finance-engage-inactive-users.png",
      },
    ],
    companies: [
      "https://cdn-web.infobip.com/uploads/2024/12/blockchain-1.svg",
      "https://cdn-web.infobip.com/uploads/2024/12/societe-generale-ghana-2.svg",
      "https://cdn-web.infobip.com/uploads/2024/12/santander-1.svg",
      "https://cdn-web.infobip.com/uploads/2019/09/raiffeisen-bank.svg",
    ],
  },
  {
    text: "Retail & eCommerce",
    types: [
      {
        text: "Promote new products",
        heading: "Launch your latest products with impact ",
        des: "Reach your target audience instantly with product announcements and promotions. Drive excitement and boost sales with targeted omnichannel marketing campaigns. ",
        image:
          "https://cdn-web.infobip.com/uploads/2025/01/retail-and-ecommerce-promote-new-products.png",
      },
      {
        text: "Personalized offers",
        heading: "Delight customers with tailored offers ",
        des: "Send tailored promotions based on customer preferences and behavior. Increase customer engagement and loyalty with timely and relevant offers.",
        image:
          "https://cdn-web.infobip.com/uploads/2025/01/retail-and-ecommerce-personalized-offers.png",
      },
      {
        text: "Back in store alerts",
        heading: "Reclaim lost sales with smart cart recovery ",
        des: "Win back customers who abandon their carts with automated reminders and incentives. Recover lost revenue and improve conversion rates. ",
        image:
          "https://cdn-web.infobip.com/uploads/2025/01/retail-and-ecommerce-delivery-notifications.png",
      },
      {
        text: "Delivery notifications",
        heading: "Keep your customers informed and engaged",
        des: "Notify customers as soon as their desired products are back in stock. Drive immediate sales and strengthen customer relationships. ",
        image:
          "https://cdn-web.infobip.com/uploads/2025/01/retail-and-ecommerce-delivery-notifications.png",
      },
      {
        text: "Manage orders",
        heading: "Empower your customers with self-service options ",
        des: "Enable customers to track, modify, and return orders easily through SMS, Email, Voice or chat apps. Improve customer satisfaction and reduce support costs. ",
        image:
          "https://cdn-web.infobip.com/uploads/2025/01/retail-and-ecommerce-manage-orders.png",
      },
      {
        text: "Share loyalty points",
        heading: "Reward your loyal customers ",
        des: "Send personalized loyalty point notifications and redemption reminders. Encourage repeat purchases and foster long-term customer relationships",
        image:
          "https://cdn-web.infobip.com/uploads/2024/12/retail-and-ecommerce-share-loyalty-points.png",
      },
    ],
    companies: [
      "https://cdn-web.infobip.com/uploads/2024/12/carrefour-1.svg",
      "https://cdn-web.infobip.com/uploads/2024/12/costco-1.svg",
      "https://cdn-web.infobip.com/uploads/2024/12/papa-johns-1.svg",
      "https://cdn-web.infobip.com/uploads/2024/12/walmart-1.svg",
    ],
  },
  {
    text: "Telecoms",
    types: [
      {
        text: "Answer FAQ's 24/7",
        heading: "Provide instant support, anytime, anywhere",
        des: "Automate customer support with simple and AI-powered chatbots. Resolve common queries instantly and reduce customer wait times. ",
        image:
          "https://cdn-web.infobip.com/uploads/2025/01/telco-usecases-answer-faqs-1.png",
      },
      {
        text: "Upsell and cross-sell with personalized offers",
        heading: "Boost revenue with targeted offers ",
        des: "Send personalized offers based on customer usage patterns and preferences. Increase average revenue per user (ARPU) and customer lifetime value (CLV)",
        image:
          "https://cdn-web.infobip.com/uploads/2025/01/telco-usecases-upsell-and-cross-sell-1.png",
      },
      {
        text: "Make top-ups easy",
        heading: "Simplify top-ups and boost customer satisfaction ",
        des: "Enable customers to top up their accounts easily. Improve customer experience and reduce churn. ",
        image:
          "https://cdn-web.infobip.com/uploads/2025/01/telco-usecases-make-top-ups-easy-1.png",
      },
      {
        text: "Convert prepaid coustmers to postpaid",
        heading: "Drive postpaid conversions",
        des: "Send personalized offers and incentives to convert prepaid customers to postpaid plans. Increase revenue and customer loyalty.",
        image:
          "https://cdn-web.infobip.com/uploads/2025/01/telco-usecases-convert-prepaid-customers-to-postpaid-1.png",
      },
      {
        text: "Improve dunning process",
        heading: "Proactive reminders so customers don’t miss out ",
        des: "Send timely reminders for bill payments, plan expiration, and other important notifications. Reduce missed payments and improve customer satisfaction. ",
        image:
          "https://cdn-web.infobip.com/uploads/2025/01/telco-usecases-improve-dunning-process-1.png",
      },
      {
        text: "Promote app adoption",
        heading: "Enhance customer engagement through mobile apps ",
        des: "Promote app adoption to provide customers with convenient access to account management, billing, and service features. Simplify customer interactions and reduce dependency on physical stores or call centers. ",
        image:
          "https://cdn-web.infobip.com/uploads/2025/01/telco-usecases-promote-app-adoption-1.png",
      },
    ],
    companies: [
      "https://cdn-web.infobip.com/uploads/2025/01/deutsche-telekom.svg",
      "https://cdn-web.infobip.com/uploads/2025/01/orange.svg",
      "https://cdn-web.infobip.com/uploads/2025/01/jazz.svg",
      "https://cdn-web.infobip.com/uploads/2025/01/virgin-media-o.svg",
    ],
  },
  {
    text: "Healthcare",
    types: [
      {
        text: "Schedule appointments",
        heading: "Simplify appointment scheduling for better care",
        des: "Streamline the scheduling process, reduce wait times, and enhance patient satisfaction with convenient and efficient access to healthcare services. ",
        image:
          "https://cdn-web.infobip.com/uploads/2025/01/healthcare-schedule-appointments.png",
      },
      {
        text: "Send test result",
        heading: "Deliver critical test results instantly and securely ",
        des: "Send time-sensitive test results directly to patients’ mobile devices. Ensure timely patient care and reduce administrative burdens.",
        image:
          "https://cdn-web.infobip.com/uploads/2024/12/healthcare-send-test-results.png",
      },
      {
        text: "Interactive consultation",
        heading: "Enhance patient care with interactive consultations",
        des: "Facilitate real-time, two-way communication between healthcare providers and patients. Improve patient engagement and satisfaction. ",
        image:
          "https://cdn-web.infobip.com/uploads/2024/12/healthcare-interactive-consultation.png",
      },

      {
        text: "Patient Education",
        heading: "Empower patients with knowledge for better health",
        des: "Send personalized health information and educational materials to patients via their favorite channel. Promote healthy behaviors and improve patient outcomes.",
        image:
          "https://cdn-web.infobip.com/uploads/2024/12/healthcare-patient-education.png",
      },
      {
        text: "Symptom checker",
        heading: "Provide instant symptom assessment and guidance ",
        des: "Enable patients to self-assess symptoms through interactive chatbots and voice assistants. Offer immediate advice and triage patients effectively. ",
        image:
          "https://cdn-web.infobip.com/uploads/2024/12/healtchare-symptom-checker.png",
      },
      {
        text: "Other prescription",
        heading: "Streamline prescription ordering and delivery",
        des: "Simplify the prescription process for both patients and healthcare providers. Automate prescription requests and refills, ensuring timely medication access.",
        image:
          "https://cdn-web.infobip.com/uploads/2024/12/healthcare-order-prescriptions.png",
      },
    ],
    companies: [
      "https://cdn-web.infobip.com/uploads/2024/12/unicef-1.svg",
      "https://cdn-web.infobip.com/uploads/2024/12/oladoc-1.svg",
      "https://cdn-web.infobip.com/uploads/2024/12/medicover-1.svg",
      "https://cdn-web.infobip.com/uploads/2024/12/mediclinic-1.svg",
    ],
  },
  {
    text: "Transportation",
    types: [
      {
        text: "Driver registration",
        heading: "Simplify driver onboarding and verification",
        des: "Automate driver registration and verification processes with cost effective, omnichannel authentication. Streamline onboarding and reduce administrative overhead.",
        image:
          "https://cdn-web.infobip.com/uploads/2024/12/transportation-driver-registration.png",
      },
      {
        text: "Track driver location",
        heading:
          "Real-time driver location tracking so passengers are never stranded",
        des: "Track driver locations in real-time to optimize dispatch and ensure timely pickups and deliveries. Enhance operational efficiency and customer satisfaction.",
        image:
          "https://cdn-web.infobip.com/uploads/2024/12/transportation-track-driver-location.png",
      },
      {
        text: "Check pickup location",
        heading: "Give customers the pick-up choice",
        des: "Allow customers to easily modify their pick-up location via chat apps. Provide a seamless and convenient user experience.",
        image:
          "https://cdn-web.infobip.com/uploads/2025/01/transportation-change-pickup-location.png",
      },

      {
        text: "Number masking",
        heading: "Ensure privacy and security for customers",
        des: "Mask caller IDs to protect customer privacy and security. Build trust and confidence with your customers. ",
        image:
          "https://cdn-web.infobip.com/uploads/2024/12/transportation-number-masking.png",
      },
      {
        text: "Ride status",
        heading: "Keep customers informed and engaged ",
        des: "Send real-time ride status updates to customers on the channels they are on. Improve transparency and reduce customer anxiety.",
        image:
          "https://cdn-web.infobip.com/uploads/2024/12/transportation-ride-status.png",
      },
      {
        text: "Coustmer feedback",
        heading: "Gain valuable insights and improve service ",
        des: "Send automated feedback surveys to customers on their preferred channel. Collect valuable feedback and identify areas for improvement.",
        image:
          "https://cdn-web.infobip.com/uploads/2024/12/transportation-customer-feedback.png",
      },
    ],
    companies: [
      "https://cdn-web.infobip.com/uploads/2024/12/uber-1.svg",
      "https://cdn-web.infobip.com/uploads/2024/12/bla-bla-car-2.svg",
      "https://cdn-web.infobip.com/uploads/2024/12/bolt-1.svg",
      "https://cdn-web.infobip.com/uploads/2024/12/carsome-1.svg",
    ],
  },
  {
    text: "Travel",
    types: [
      {
        text: "Ticket promotion",
        heading: "Simplify booking and confirmation",
        des: "Automate booking confirmations and reminders in an omnichannel way. Reduce no-shows and increase revenue.",
        image:
          "https://cdn-web.infobip.com/uploads/2025/01/travel-ticket-promotions.png",
      },
      {
        text: "Last minute offers",
        heading: "Boost last-minute bookings with targeted offers ",
        des: "Send time-sensitive offers on flights and hotel bookings to potential customers and maximize revenue. ",
        image:
          "https://cdn-web.infobip.com/uploads/2025/01/travel-last-minute-offers.png",
      },
      {
        text: "Real-time support",
        heading: "Experience carefree journeys with real-time support",
        des: "Provide travelers with instant assistance at every step of their journey. Resolve issues quickly, enhance satisfaction, and ensure a stress-free travel experience with reliable, real-time support.",
        image:
          "https://cdn-web.infobip.com/uploads/2024/12/travel-real-time-support.png",
      },

      {
        text: "Instruction notifications",
        heading: "Keep guests informed with real-time updates ",
        des: "Send instant updates on flight delays, gate changes, and other travel disruptions. Provide a seamless and stress-free travel experience.",
        image:
          "https://cdn-web.infobip.com/uploads/2024/12/travel-instruction-notifications.png",
      },
      {
        text: "Check-in support",
        heading: "Enhance the check-in experience",
        des: "Provide 24/7 support to guests and passengers with AI-powered chatbots and voice assistants. Increase satisfaction and keep customers stress-free.",
        image:
          "https://cdn-web.infobip.com/uploads/2024/12/travel-check-in-support.png",
      },
      {
        text: "Loyalty ptograms",
        heading: "Reward loyalty and drive repeat business ",
        des: "Send personalized loyalty program updates, rewards, and benefits. Incentivize repeat stays and increase customer loyalty.",
        image:
          "https://cdn-web.infobip.com/uploads/2024/12/travel-loyalty-programs.png",
      },
    ],
    companies: [
      "https://cdn-web.infobip.com/uploads/2024/12/riyadh-air-1.svg",
      "https://cdn-web.infobip.com/uploads/2024/12/qatar-airways-1.svg",
      "https://cdn-web.infobip.com/uploads/2024/12/ninja-van-2.svg",
      "https://cdn-web.infobip.com/uploads/2024/12/pricetravel-1.svg",
    ],
  },
];

export default featuredBoxData;
