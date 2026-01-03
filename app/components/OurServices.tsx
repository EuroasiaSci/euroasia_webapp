
import Image from 'next/image';

export default function OurServices() {
  const services = [
    {
      title: "Testing Services",
      description: "Our advanced testing services ensure that your products and processes meet the highest quality and national and international standards. From material testing to product performance evaluation, we provide reproducible and reliable results to help you make informed decisions.",
      image: "/images/services/testing_service.jpeg",
      features: ["Food & Feed", "Consumer Products", "Cosmetics & Personal Care", "Pharmaceutical"]
    },
    {
      title: "Inspection Services",
      description: "Our Inspection Services meticulously identify defects that can pose risks to consumers, impact product performance, and diminish customer satisfaction. We conduct meticulous examinations to ensure your products meet the highest quality standards, providing assurance to both businesses and consumers.",
      image: "/images/services/inspection_service.jpeg",
      features: ["Food & Feed", "Consumer Products", "Cosmetics & Personal Care", "Pharmaceutical"]
    },
    {
      title: "Certification Services",
      description: "Our Certification Services encompass a rigorous verification process for production houses. We ensure adherence to national and international regulations. Our assessments evaluate working conditions, environmental impact, and overall compliance.",
      image: "/images/services/certification_service.jpeg",
      features: ["Food & Feed", "Consumer Products", "Cosmetics & Personal Care", "Pharmaceutical"]
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4" style={{color: '#48009f'}}>
            Our Services
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
              className="bg-white rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 group min-h-[500px] overflow-hidden"
            >
              {/* Image Section */}
              <div className="h-48 relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Text Section */}
              <div className="p-6 flex flex-col items-center justify-center text-center flex-1">
                <h3 className="text-xl font-bold text-neutral-900 mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {service.description}
                </p>
                {service.title === "Certification Services" && (
                  <p className="text-sm text-amber-600 font-medium mt-4 italic">
                    Disclaimer : Certification services are currently under development and are not offered at present
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
