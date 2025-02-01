import { useEffect, useState } from 'react';

const brands = ["Nike", "Adidas", "Puma", "Reebok", "Gucci", "Prada", "Chanel"];

export default function BrandCarousel() {
  const [activeIndex, setActiveIndex] = useState(Math.floor(brands.length / 2));
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % brands.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-96 w-full max-w-md mx-auto bg-gray-900 rounded-xl overflow-hidden">
      {/* Gradient overlays */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-gray-900 to-transparent z-10" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-gray-900 to-transparent z-10" />

      {/* Scrolling container */}
      <div className="relative h-full flex items-center justify-center">
        <div 
          className="absolute animate-scroll"
          style={{
            animation: 'scroll 20s linear infinite'
          }}
        >
          {/* Triple the items to ensure smooth infinite scroll */}
          {[...brands, ...brands, ...brands].map((brand, index) => {
            const isActive = index % brands.length === activeIndex;
            
            return (
              <div
                key={index}
                className={`
                  h-20 flex items-center justify-center
                  transition-all duration-500 ease-in-out
                  ${isActive ? 'scale-125' : 'scale-100'}
                `}
              >
                <div className={`
                  text-2xl font-bold whitespace-nowrap
                  transition-all duration-500
                  ${isActive ? 'text-green-400' : 'text-white/70'}
                `}>
                  {brand}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateY(100%);
          }
          100% {
            transform: translateY(-100%);
          }
        }
        .animate-scroll {
          will-change: transform;
        }
      `}</style>
    </div>
  );
}