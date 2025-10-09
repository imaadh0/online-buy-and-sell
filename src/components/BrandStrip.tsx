"use client";

import Image from "next/image";

const BrandStrip = () => {
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
    <section
      aria-label="Trusted brands"
      className="bg-[#21597A] py-6 sm:py-8 overflow-hidden -mt-8 sm:-mt-12 md:-mt-16 lg:-mt-26"
    >
      <div className="overflow-hidden w-full">
        <div className="flex w-fit animate-scroll">
          {brands.map((brand, index) => (
            <Image
              key={`brand-${index}`}
              src={brand.src}
              alt={brand.alt}
              width={brand.width}
              height={brand.height}
              className="h-8 sm:h-9 md:h-10 lg:h-12 w-auto opacity-95 flex-shrink-0 mr-16 sm:mr-20 md:mr-24 lg:mr-32"
            />
          ))}
          {brands.map((brand, index) => (
            <Image
              key={`brand-duplicate-${index}`}
              src={brand.src}
              alt={brand.alt}
              width={brand.width}
              height={brand.height}
              className="h-8 sm:h-9 md:h-10 lg:h-12 w-auto opacity-95 flex-shrink-0 mr-16 sm:mr-20 md:mr-24 lg:mr-32"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandStrip;
