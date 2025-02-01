import { useEffect, useState } from "react";

const brands = [
  "https://cdn-web.infobip.com/uploads/2024/12/google.png",
  "https://cdn-web.infobip.com/uploads/2024/12/oracle.png",
  "https://cdn-web.infobip.com/uploads/2024/12/adobe.png",
  "https://cdn-web.infobip.com/uploads/2024/12/meta.png",
  "https://cdn-web.infobip.com/uploads/2024/12/microsoft.png",
  "https://cdn-web.infobip.com/uploads/2024/12/hubspot.png",
  "https://cdn-web.infobip.com/uploads/2024/12/salesforce.png",
];

export default function BrandCarousel() {
  const [activeIndex, setActiveIndex] = useState(Math.floor(brands.length / 2));

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % brands.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Create array with 4 copies to ensure no blank spaces
  const displayBrands = [...brands, ...brands, ...brands, ...brands];

  return (
    <div className="relative max-h-[500px] w-full max-w-md mx-auto rounded-xl overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b to-transparent z-10" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t to-transparent z-10" />

      <div className="relative h-full flex items-center justify-center gap-12">
        <div className="flex flex-col">
          <div
            className="animate-scroll flex flex-col gap-12"
            style={{
              animation: "scroll 14s linear infinite",
            }}
          >
            {displayBrands.map((brand, index) => {
              const isActive = index % brands.length === activeIndex;

              return (
                <div
                  key={index}
                  className={`
                    h-20 flex items-center justify-center
                    transition-all duration-500 ease-in-out
                    ${isActive ? "scale-125 z-10" : "scale-100"}
                  `}
                >
                  <img
                    className={`
                    text-2xl font-bold whitespace-nowrap
                    transition-all duration-500 px-12
                    ${
                      isActive
                        ? "bg-green-800 rounded-full"
                        : "rounded-full bg-black"
                    }
                  `}
                    width={250}
                    src={brand}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(calc(-100% / 4));
          }
        }
        .animate-scroll {
          will-change: transform;
        }
      `}</style>
    </div>
  );
}
