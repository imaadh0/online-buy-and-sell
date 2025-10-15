import Image from "next/image";

const OurMissionSection = () => {
  const features = [
    {
      title: "Guidance",
      description: "Step-by-step support",
    },
    {
      title: "Platform Expertise",
      description: "We know all the sites",
    },
    {
      title: "Tailored Support",
      description: "Personalized Service",
    },
    {
      title: "Transparent Fees",
      description: "No hidden costs",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#E9E9E9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#234C6A] mb-4 sm:mb-6">
            Our Mission
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We make online shopping and selling simple for everyone. Whether
            you're new to technology or just want expert help. We're here to
            guide you through every step of the process
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-6 md:gap-8 lg:gap-10 max-w-4xl mx-auto lg:ml-60">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3 sm:gap-4 group">
              {/* Icon */}
              <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110 mt-1 sm:mt-2">
                <Image
                  src="/tabler-circle.png"
                  alt={feature.title}
                  width={32}
                  height={32}
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />
              </div>
              {/* Content */}
              <div className="flex-1">
                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-[#234C6A] mb-1 sm:mb-2">
                  {feature.title}
                </h3>
                {/* Description */}
                <p className="text-sm sm:text-base text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurMissionSection;
