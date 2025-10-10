import Link from 'next/link';
import Image from 'next/image';

export default function IndustriesWeServe() {
  const industries = [
    {
      name: "Food & Feed",
      description: "Ensuring quality and safety in the food and feed industry through rigorous testing protocols.",
      image: "/images/industries/food_feed.jpg",
      href: "/industries/food-feed"
    },
    {
      name: "Consumer Products",
      description: "Testing textiles, footwear, toys, and more for market compliance and consumer safety.",
      image: "/images/industries/consumer_products.jpg",
      href: "/industries/consumer-products"
    },
    {
      name: "Cosmetics & Personal Care",
      description: "Quality assurance for cosmetics and personal care items with advanced analytical methods.",
      image: "/images/industries/cosmetics_and_personal_care.jpg",
      href: "/industries/cosmetics-personal-care"
    },
    {
      name: "Pharmaceutical",
      description: "Ensuring safety and efficacy of pharmaceutical products through comprehensive testing.",
      image: "/images/industries/pharmaceutical.jpg",
      href: "/industries/pharmaceutical"
    }
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 lg:mb-4 px-4" style={{color: '#48009f'}}>
            Industries We Serve
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-neutral-600 max-w-3xl mx-auto px-4 leading-relaxed">
            Our expertise spans across multiple industries, providing specialized testing 
            solutions tailored to meet unique sector requirements and regulations.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
          {industries.map((industry, index) => (
            <Link
              key={index}
              href={industry.href}
              className="group relative bg-white rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 overflow-hidden block min-h-[500px]"
            >
              {/* Image Section */}
              <div className="h-48 relative">
                <Image
                  src={industry.image}
                  alt={industry.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Text Section */}
              <div className="p-6 flex flex-col items-center justify-center text-center flex-1">
                <h3 className="text-xl font-bold text-neutral-900 mb-4 group-hover:text-primary transition-colors duration-300">
                  {industry.name}
                </h3>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  {industry.description}
                </p>
                <div className="mt-auto">
                  <span className="inline-flex items-center text-primary hover:text-primary-dark font-semibold group-hover:translate-x-1 transition-all duration-300">
                    Show More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
