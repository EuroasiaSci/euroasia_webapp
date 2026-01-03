'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import CallToAction from '../components/CallToAction';
import Link from 'next/link';
import Image from 'next/image';

export default function ServicesPage() {
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
      description: "Our Certification Services encompass a rigorous verification process for production houses. We ensure adherence to national and international regulations. Our assessments evaluate working conditions, environmental impact, and overall compliance, empowering businesses to demonstrate their commitment to responsible practices and legal obligations.",
      image: "/images/services/certification_service.jpeg",
      features: ["Food & Feed", "Consumer Products"]
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-primary/90 to-secondary/90 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold">Services</h1>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Services' }]} />
        </div>
      </section>

      {/* Introductory Text Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-neutral-700 leading-relaxed">
            At EuroAsia, our comprehensive suite of services spans testing, inspection, audits, certifications. We are your trusted partner in ensuring safety, quality, and compliance. With a relentless commitment to excellence, our team of experts and cutting-edge technology work in unison to empower your business with the assurance it needs. From pinpointing defects to guiding you through complex regulations, we&apos;re here to enhance your operations, foster trust, and drive success. Discover how we can elevate your business with precision and integrity.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{color: '#48009f'}}>Our Comprehensive Services</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              We offer a full spectrum of laboratory testing, inspection, certification, and audit services 
              designed to meet the diverse needs of modern industries.
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
                  <p className="text-neutral-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  {service.title === "Certification Services" && (
                    <p className="text-sm text-amber-600 font-medium mb-4 italic">
                      Disclaimer : Certification services are currently under development and are not offered at present
                    </p>
                  )}
                  <div className="mt-auto">
                    <h4 className="text-sm font-semibold text-neutral-800 mb-3">Related Industries:</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {service.features.map((feature, i) => {
                        const industrySlug = feature.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-');
                        return (
                          <Link
                            key={i}
                            href={`/industries/${industrySlug}`}
                            className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs hover:bg-primary hover:text-white transition-colors duration-200"
                          >
                            {feature}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          {/* <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center text-white px-8 py-4 rounded-xl transition-all duration-300 font-semibold shadow-medium hover:shadow-large transform hover:-translate-y-1"
              style={{backgroundColor: '#ab21a1'}}
            >
              Request a Consultation
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div> */}
        </div>
      </section>

      <CallToAction />
      <Footer />
    </div>
  );
}
