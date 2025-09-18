
export default function OurServices() {
  const services = [
    {
      title: "Testing Services",
      description: "Our advanced testing services ensure that your products and processes meet the highest quality and national and international standards. From material testing to product performance evaluation, we provide reproducible and reliable results to help you make informed decisions.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      features: ["Food & Feed", "Consumer Products", "Cosmetics & Personal Care", "Pharmaceutical"]
    },
    {
      title: "Inspection Services",
      description: "Our Inspection Services meticulously identify defects that can pose risks to consumers, impact product performance, and diminish customer satisfaction. We conduct meticulous examinations to ensure your products meet the highest quality standards, providing assurance to both businesses and consumers.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      features: ["Food & Feed", "Consumer Products", "Cosmetics & Personal Care", "Pharmaceutical"]
    },
    {
      title: "Certification Services",
      description: "Our Certification Services encompass a rigorous verification process for production houses. We ensure adherence to national and international regulations. Our assessments evaluate working conditions, environmental impact, and overall compliance.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      features: ["Food & Feed", "Consumer Products", "Cosmetics & Personal Care", "Pharmaceutical"]
    },
    {
      title: "Audit Services",
      description: "Our audit services provide a systematic and independent examination of your processes and systems. We help you identify areas for improvement, ensure compliance with standards, and enhance your operational efficiency and risk management.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      features: ["Food & Feed", "Consumer Products", "Cosmetics & Personal Care", "Pharmaceutical"]
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-3 sm:mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-neutral-600 max-w-3xl mx-auto">
            Comprehensive laboratory testing services tailored to meet the diverse needs 
            of industries worldwide. From routine testing to specialized analysis.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-primary/10 text-primary rounded-xl mb-4 sm:mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 mb-3 sm:mb-4 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 mb-4 sm:mb-6 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
