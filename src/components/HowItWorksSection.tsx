import Image from "next/image";

const HowItWorksSection = () => {
  const buyerSteps = [
    {
      icon: "/how-it-works/icon-1.png",
      title: "Tell what you need",
      description:
        "Send us item details or share a link to what you want to buy",
    },
    {
      icon: "/how-it-works/icon-2.png",
      title: "We find it",
      description:
        "Our experts search multiple platforms to find the best deals",
    },
    {
      icon: "/how-it-works/icon-3.png",
      title: "We order",
      description: "We handle the purchase process and payment securely",
    },
    {
      icon: "/how-it-works/icon-4.png",
      title: "Delivered to you",
      description: "Your item arrives safely at your doorstep",
    },
  ];

  const sellerSteps = [
    {
      icon: "/how-it-works/icon-5.png",
      title: "Send item details",
      description: "Upload photos and description of what you want to sell",
    },
    {
      icon: "/how-it-works/icon-6.png",
      title: "We list it",
      description: "We create optimized listings on the best platforms",
    },
    {
      icon: "/how-it-works/icon-7.png",
      title: "We handle sale",
      description: "We manage inquiries, negotiations, and the sale process",
    },
    {
      icon: "/how-it-works/icon-8.png",
      title: "You get paid",
      description: "Receive your payment safely after the sale is complete",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#E9E9E9]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#234C6A] mb-4">
            How it works
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Driving growth through innovative digital transformation solutions.
          </p>
        </div>

        {/* For Buyers Section */}
        <div className="mb-16 sm:mb-20 md:mb-24 lg:mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Steps */}
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#234C6A] mb-8 sm:mb-10">
                For Buyers
              </h3>
              <div className="space-y-6 sm:space-y-8">
                {buyerSteps.map((step, index) => (
                  <div key={index} className="flex items-start gap-4 sm:gap-6">
                    <div className="flex-shrink-0">
                      <Image
                        src={step.icon}
                        alt={`Step ${index + 1}`}
                        width={60}
                        height={60}
                        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-[#234C6A] mb-2">
                        {step.title}
                      </h4>
                      <p className="text-sm sm:text-base text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Image */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md lg:max-w-lg">
                <Image
                  src="/how-it-works/how-it-works-image-1.png"
                  alt="For Buyers"
                  width={500}
                  height={400}
                  className="w-full h-auto rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* For Sellers Section */}
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-full max-w-md lg:max-w-lg">
                <Image
                  src="/how-it-works/how-it-works-image-2.png"
                  alt="For Sellers"
                  width={500}
                  height={400}
                  className="w-full h-auto rounded-3xl"
                />
              </div>
            </div>

            {/* Right side - Steps */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#234C6A] mb-8 sm:mb-10">
                For Sellers
              </h3>
              <div className="space-y-6 sm:space-y-8">
                {sellerSteps.map((step, index) => (
                  <div key={index} className="flex items-start gap-4 sm:gap-6">
                    <div className="flex-shrink-0">
                      <Image
                        src={step.icon}
                        alt={`Step ${index + 1}`}
                        width={60}
                        height={60}
                        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-[#234C6A] mb-2">
                        {step.title}
                      </h4>
                      <p className="text-sm sm:text-base text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
