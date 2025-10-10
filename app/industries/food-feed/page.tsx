'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb';
import CallToAction from '../../components/CallToAction';
import Image from 'next/image';

export default function FoodFeedPage() {
  const services = [
    {
      title: "Chemical Analysis",
      description: "Comprehensive chemical testing to identify and quantify various chemical components in food and feed products, ensuring safety and quality standards.",
      image: "/images/food_and_feed/chemical-analysis.jpg"
    },
    {
      title: "Microbiological Testing",
      description: "Advanced microbiological analysis to detect harmful bacteria, viruses, and other microorganisms that could pose health risks in food and feed products.",
      image: "/images/food_and_feed/microbiological_testing.jpg"
    },
    {
      title: "Allergen Testing",
      description: "Specialized testing to identify and quantify common food allergens, ensuring proper labeling and protecting consumers with food allergies.",
      image: "/images/food_and_feed/allergen_testing.jpg"
    },
    {
      title: "Nutritional Labeling",
      description: "Accurate nutritional analysis and labeling services to ensure compliance with regulatory requirements and provide consumers with reliable nutritional information.",
      image: "/images/food_and_feed/nutritional-labelling.jpg"
    },
    {
      title: "Quality and Authenticity Testing",
      description: "Comprehensive quality assessment and authenticity verification to ensure products meet specified standards and are free from adulteration or mislabeling.",
      image: "/images/food_and_feed/quality_and_authenticity_testing.jpg"
    },
    {
      title: "GMO Testing",
      description: "Advanced genetic testing to detect and quantify genetically modified organisms in food and feed products, ensuring compliance with labeling regulations.",
      image: "/images/food_and_feed/gmo-testing.jpg"
    },
    {
      title: "Feed Analysis",
      description: "Comprehensive analysis of animal feed ingredients and finished products to ensure nutritional adequacy, safety, and compliance with feed regulations.",
      image: "/images/food_and_feed/feed-analysis.png"
    },
    {
      title: "Regulatory Compliance",
      description: "Expert guidance and testing services to ensure full compliance with national and international food and feed safety regulations and standards.",
      image: "/images/food_and_feed/regulatory_compliance.jpg"
    }
  ];


  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-64 sm:h-80 lg:h-96 bg-gradient-to-r from-primary/90 to-secondary/90 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center text-white px-3 sm:px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Food and Feed</h1>
          <p className="text-sm sm:text-base lg:text-xl mt-3 sm:mt-4 max-w-2xl mx-auto">
            Comprehensive testing solutions ensuring safety, quality, and compliance in food and feed products
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="py-4 sm:py-6 lg:py-8 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <Breadcrumb items={[
            { label: 'Services', href: '/services' },
            { label: 'Food & Feed' }
          ]} />
        </div>
      </section>

      {/* Industry Overview */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6" style={{color: '#48009f'}}>Discovering Quality Through Food and Feed Testing</h2>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-700 leading-relaxed mb-4 sm:mb-6">
            At EuroAsia, we understand that the quality and safety of food and feed products are paramount. That&apos;s why we offer a comprehensive suite of food and feed testing services to ensure that the products you consume or distribute meet the highest standards of quality, compliance, and safety.
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-700 leading-relaxed mb-4 sm:mb-6">
            Our state-of-the-art laboratories and experienced scientists are dedicated to providing you with accurate and reliable testing results.
          </p>
        </div>
      </section>

      {/* Services for Food & Feed */}
      <section className="py-8 sm:py-12 lg:py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4" style={{color: '#48009f'}}>Our Food & Feed Services</h2>
            <p className="text-sm sm:text-base lg:text-lg text-neutral-600 max-w-2xl mx-auto">
              Specialized testing and certification services tailored for the food and feed industry
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div key={index} className="group rounded-xl border border-neutral-200 hover:border-primary hover:shadow-medium transition-all duration-300 hover:-translate-y-1 overflow-hidden">
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
                <div className="p-6 flex flex-col items-center text-center">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-4 group-hover:text-primary transition-colors duration-300 text-center">
                    {service.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed text-center">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Industry Certifications</h2>
            <p className="text-lg text-neutral-600">
              We help you achieve and maintain the most important food safety certifications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-neutral-50 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-neutral-900">{cert}</h3>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Concluding Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-neutral-700 leading-relaxed mb-8">
            At EuroAsia, we are your trusted partner in food and feed testing, committed to delivering accurate, reliable, and timely results that help you maintain the highest standards of quality and safety. Our team of experts works closely with food manufacturers, feed producers, retailers, and regulatory bodies to ensure compliance with national and international standards. With our state-of-the-art facilities and cutting-edge technology, we provide comprehensive testing solutions that give you the confidence to bring safe, high-quality products to market.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6" style={{color: '#48009f'}}>Ready to Ensure Food Safety?</h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us today to discuss your food and feed testing requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="text-white px-8 py-4 rounded-lg transition-colors duration-200 font-semibold"
              style={{backgroundColor: '#ab21a1'}}
            >
              Get Quote
            </Link>
           
          </div>
        </div>
      </section> */}

      <CallToAction />
      <Footer />
    </div>
  );
}
