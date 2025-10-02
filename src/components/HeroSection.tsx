"use client";

import Image from "next/image";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen bg-[#E9E9E9] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Hero Image - mobile after text, desktop on right */}
          <div className="order-2 lg:order-2 flex justify-center lg:justify-end mt-6 lg:mt-0">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <Image
                src="/hero-page/hero-girl.png"
                alt="Happy woman with shopping bags"
                width={500}
                height={600}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>

          {/* Hero Content - mobile first, desktop left */}
          <div className="order-1 lg:order-1 space-y-6 lg:space-y-8 relative">
            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight">
                <span className="text-gray-800">Buy & Sell</span>
                <br />
                <span className="bg-gradient-to-r from-[#234C6A] to-[#18B2EA] bg-clip-text text-transparent">
                  Online With Confidence
                </span>
              </h1>
            </div>

            {/* Decorative Lines */}
            <div className="flex items-center space-x-4">
              <div className="w-8 h-0.5 bg-gray-300"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="w-16 h-0.5 bg-gray-300"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-lg sm:text-xl leading-relaxed max-w-2xl">
              We help you shop and sell safely on Amazon, eBay, Temu, and more.
              Perfect for first-time shoppers and anyone who wants expert
              guidance.
            </p>

            {/* Call to Action Button */}
            <div className="pt-4">
              <button
                onClick={() => {
                  const element = document.getElementById("get-started");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-gradient-to-r from-[#18B2EA] to-[#0F8BC2] hover:from-[#0F8BC2] hover:to-[#0A6B96] text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-200"
              >
                Start Now
              </button>
            </div>

            {/* Subtle Background Circle */}
            <div className="absolute -z-10 w-64 h-64 bg-gray-200 rounded-full opacity-20 -left-32 top-1/2 transform -translate-y-1/2 hidden lg:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
