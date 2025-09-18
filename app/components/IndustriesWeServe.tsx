import Link from 'next/link';

export default function IndustriesWeServe() {
  const industries = [
    {
      name: "Food & Feed",
      description: "Ensuring quality and safety in the food and feed industry through rigorous testing protocols.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      stats: "20+ Projects",
      color: "from-blue-500 to-blue-600",
      href: "/industries/food-feed"
    },
    {
      name: "Consumer Products",
      description: "Testing textiles, footwear, toys, and more for market compliance and consumer safety.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      stats: "15+ Clients",
      color: "from-green-500 to-green-600",
      href: "/industries/consumer-products"
    },
    {
      name: "Cosmetics & Personal Care",
      description: "Quality assurance for cosmetics and personal care items with advanced analytical methods.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      stats: "30+ Tests/Month",
      color: "from-pink-500 to-pink-600",
      href: "/industries/cosmetics-personal-care"
    },
    {
      name: "Pharmaceutical",
      description: "Ensuring safety and efficacy of pharmaceutical products through comprehensive testing.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      stats: "10+ Products",
      color: "from-purple-500 to-purple-600",
      href: "/industries/pharmaceutical"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-3 sm:mb-4">
            Industries We <span className="text-gradient">Serve</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-neutral-600 max-w-3xl mx-auto">
            Our expertise spans across multiple industries, providing specialized testing 
            solutions tailored to meet unique sector requirements and regulations.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {industries.map((industry, index) => (
            <Link
              key={index}
              href={industry.href}
              className="group relative bg-white rounded-xl p-4 sm:p-6 lg:p-8 border border-neutral-200 hover:border-primary hover:shadow-medium transition-all duration-300 hover:-translate-y-1 overflow-hidden block"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className={`flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${industry.color} text-white rounded-xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {industry.icon}
                </div>
                
                <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 mb-3 sm:mb-4 group-hover:text-primary transition-colors duration-300">
                  {industry.name}
                </h3>
                
                <p className="text-sm sm:text-base text-neutral-600 mb-4 leading-relaxed">
                  {industry.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-semibold text-primary">
                    {industry.stats}
                  </span>
                  <div className="inline-flex items-center text-primary hover:text-primary-dark font-semibold group-hover:translate-x-1 transition-all duration-300 text-xs sm:text-sm">
                    Learn More
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Industry Stats */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-12 sm:mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">50+</div>
              <div className="text-sm sm:text-base text-neutral-600">Clients Served</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">2+</div>
              <div className="text-sm sm:text-base text-neutral-600">Years Experience</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">5+</div>
              <div className="text-sm sm:text-base text-neutral-600">Industries Covered</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">99.9%</div>
              <div className="text-sm sm:text-base text-neutral-600">Accuracy Rate</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
