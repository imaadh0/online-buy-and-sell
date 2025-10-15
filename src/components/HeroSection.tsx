"use client";

import Image from "next/image";

const HeroSection = () => {
  const brands = [
    {
      src: "/hero-page/spherule-company-logo.png",
      alt: "Spherule",
      width: 160,
      height: 40,
    },
    {
      src: "/hero-page/sisyphus-company-logo.png",
      alt: "Sisyphus",
      width: 160,
      height: 40,
    },
    {
      src: "/hero-page/focalpoint-company-logo.png",
      alt: "FocalPoint",
      width: 180,
      height: 40,
    },
    {
      src: "/hero-page/biosynthesis-company-logo.png",
      alt: "Biosynthesis",
      width: 180,
      height: 40,
    },
    {
      src: "/hero-page/nietzsche-company-logo.png",
      alt: "Nietzsche",
      width: 180,
      height: 40,
    },
  ];

  return (
    <section id="home" className="bg-[#E9E9E9] flex flex-col">
      <div className="flex-1 flex items-center py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Hero Content - mobile first, desktop left */}
            <div className="order-1 lg:order-1 space-y-4 sm:space-y-6 lg:space-y-8 relative">
              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold leading-tight">
                <span className="bg-gradient-to-r from-[#234C6A] to-[#18B2EA] bg-clip-text text-transparent">
                  Buy & Sell Online
                </span>
                <br />
                <span className="bg-gradient-to-r from-[#234C6A] to-[#18B2EA] bg-clip-text text-transparent">
                  With Confidence
                </span>
              </h1>

              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-xl">
                We help you shop and sell safely on Amazon, eBay, Temu, and
                more. Perfect for first-time shoppers and anyone who wants
                expert guidance.
              </p>

              {/* Call to Action Button */}
              <div className="pt-2 sm:pt-4">
                <button
                  onClick={() => {
                    const element = document.getElementById("get-started");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="bg-[radial-gradient(circle_at_center,#234C6A_0%,#0C769D_100%)] text-white font-bold px-10 sm:px-14 md:px-16 lg:px-20 py-3 sm:py-3.5 md:py-4 rounded-[10px] text-sm sm:text-base md:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none w-full sm:w-auto"
                >
                  Start Now
                </button>
              </div>

              {/* Marketing Logo */}
              <div className="absolute w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 -right-4 sm:right-0 md:right-4 lg:right-8 top-[60%] sm:top-[65%] lg:top-[70%] transform -translate-y-1/2 hidden sm:block z-10 opacity-90">
                <Image
                  src="/hero-page/marketing-logo.png"
                  alt="Marketing Logo"
                  width={144}
                  height={144}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Hero Image - mobile after text, desktop on right */}
            <div className="order-2 lg:order-2 flex justify-center lg:justify-end xl:-mt-8">
              <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
                <Image
                  src="/hero-page/hero-girl.png"
                  alt="Happy woman with shopping bags"
                  width={800}
                  height={960}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Strip - integrated at bottom */}
      <div className="bg-[#21597A] py-4 sm:py-5 md:py-6 overflow-hidden -mt-8 sm:-mt-6 md:-mt-16 lg:-mt-20 xl:-mt-20">
        <div className="overflow-hidden w-full">
          <div className="flex w-fit animate-scroll">
            {brands.map((brand, index) => (
              <Image
                key={`brand-${index}`}
                src={brand.src}
                alt={brand.alt}
                width={brand.width}
                height={brand.height}
                className="h-7 sm:h-8 md:h-9 lg:h-10 w-auto opacity-95 flex-shrink-0 mr-12 sm:mr-16 md:mr-20 lg:mr-24 xl:mr-32"
              />
            ))}
            {brands.map((brand, index) => (
              <Image
                key={`brand-duplicate-${index}`}
                src={brand.src}
                alt={brand.alt}
                width={brand.width}
                height={brand.height}
                className="h-7 sm:h-8 md:h-9 lg:h-10 w-auto opacity-95 flex-shrink-0 mr-12 sm:mr-16 md:mr-20 lg:mr-24 xl:mr-32"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
