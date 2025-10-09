import Image from "next/image";

const HowCanWeHelpSection = () => {
  return (
    <section className="bg-gray-100 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#234C6A] mb-4">
            How Can We Help You Today?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Driving growth through innovative digital transformation solutions.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-26 md:gap-8 lg:gap-12 mt-20 sm:mt-24">
          {/* I want to Buy Card */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 sm:p-10 pt-20 sm:pt-24 pb-8 sm:pb-10 flex flex-col items-center text-center relative min-h-[350px] sm:min-h-[380px] transition-all duration-300 hover:-translate-y-2 hover:scale-105 group">
            <div className="absolute -top-16 sm:-top-20 left-1/2 transform -translate-x-1/2">
              <Image
                src="/cart.png"
                alt="Shopping Cart"
                width={200}
                height={200}
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain"
              />
            </div>
            <div className="mt-8 sm:mt-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#234C6A] mb-4">
                I want to Buy
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 max-w-sm">
                Send us item details or a link, we'll find the best deal and
                order for you
              </p>
              <button className="bg-[#234C6A] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-2xl font-semibold hover:bg-[#1a3a52] transition-all duration-300 w-full sm:max-w-xs md:max-w-sm lg:max-w-md hover:scale-105 hover:shadow-lg group-hover:shadow-xl">
                I want to buy
              </button>
            </div>
          </div>

          {/* I want to Sell Card */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 sm:p-10 pt-20 sm:pt-24 pb-8 sm:pb-10 flex flex-col items-center text-center relative min-h-[350px] sm:min-h-[380px] transition-all duration-300 hover:-translate-y-2 hover:scale-105 group">
            <div className="absolute -top-16 sm:-top-20 left-1/2 transform -translate-x-1/2">
              <Image
                src="/box.png"
                alt="Shipping Box"
                width={200}
                height={200}
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain"
              />
            </div>
            <div className="mt-8 sm:mt-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#234C6A] mb-4">
                I want to sell
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 max-w-sm">
                Upload photos and details, we'll list your item and help you get
                paid
              </p>
              <button className="bg-[#234C6A] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-2xl font-semibold hover:bg-[#1a3a52] transition-all duration-300 w-full sm:max-w-xs md:max-w-sm lg:max-w-md hover:scale-105 hover:shadow-lg group-hover:shadow-xl">
                Start selling
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowCanWeHelpSection;
