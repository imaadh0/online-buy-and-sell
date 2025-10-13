"use client";

import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#E9E9E9] flex items-center py-12 md:py-0"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Hero Image - mobile after text, desktop on right */}
          <div className="order-2 lg:order-2 flex justify-center lg:justify-end mt-6 sm:mt-0 lg:-mt-14">
            <div className="relative w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
              <Image
                src="/hero-page/hero-girl.png"
                alt="Happy woman with shopping bags"
                width={1200}
                height={1440}
                className="w-full h-auto object-contain object-top"
                priority
              />
            </div>
          </div>

          {/* Hero Content - mobile first, desktop left */}
          <div className="order-1 lg:order-1 space-y-4 sm:space-y-6 lg:space-y-8 relative">
            {/* Main Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-none">
              <span className="bg-gradient-to-r from-[#234C6A] to-[#18B2EA] bg-clip-text text-transparent">
                Buy & Sell Online
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#234C6A] to-[#18B2EA] bg-clip-text text-transparent">
                With Confidence
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl">
              We help you shop and sell safely on Amazon, eBay, Temu, and more.
              Perfect for first-time shoppers and anyone who wants expert
              guidance.
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
                className="bg-[radial-gradient(circle_at_center,#234C6A_0%,#0C769D_100%)] text-white font-bold px-8 sm:px-12 md:px-16 lg:px-20 py-3 sm:py-4 rounded-[10px] text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none w-full sm:w-auto sm:min-w-[240px] md:min-w-[276px]"
              >
                Start Now
              </button>
            </div>

            {/* Marketing Logo */}
            <div className="absolute w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 right-2 sm:right-4 top-3/4 transform -translate-y-1/2 hidden md:block z-10">
              <Image
                src="/hero-page/marketing-logo.png"
                alt="Marketing Logo"
                width={128}
                height={128}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
