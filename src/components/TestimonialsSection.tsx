import Image from "next/image";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Wade Warren",
      rating: "4.75",
      testimonial: "Awesome website and funnel for your business",
      profileImage: "/what-our-customers-say/profile-image.png",
    },
    {
      name: "Wade Warren",
      rating: "4.75",
      testimonial: "Awesome website and funnel for your business",
      profileImage: "/what-our-customers-say/profile-image.png",
    },
    {
      name: "Wade Warren",
      rating: "4.75",
      testimonial: "Awesome website and funnel for your business",
      profileImage: "/what-our-customers-say/profile-image.png",
    },
    {
      name: "Wade Warren",
      rating: "4.75",
      testimonial: "Awesome website and funnel for your business",
      profileImage: "/what-our-customers-say/profile-image.png",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#E9E9E9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#234C6A] mb-4 sm:mb-6">
            What Our Customers Say
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Real experiences from people who've used our service
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group"
            >
              {/* Profile Image */}
              <div className="mb-4 sm:mb-5">
                <Image
                  src={testimonial.profileImage}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover"
                />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <Image
                  src="/what-our-customers-say/star.png"
                  alt="Star Rating"
                  width={24}
                  height={24}
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
                <span className="text-lg sm:text-xl font-bold text-[#234C6A]">
                  {testimonial.rating}
                </span>
              </div>

              {/* Name */}
              <h3 className="text-lg sm:text-xl font-bold text-[#234C6A] mb-3 sm:mb-4">
                {testimonial.name}
              </h3>

              {/* Testimonial */}
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {testimonial.testimonial}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
