'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      title: "Testing Services",
      description: "Our advanced testing services ensure that your products and processes meet the highest quality and national and international standards. From material testing to product performance evaluation, we provide reproducible and reliable results to help you make informed decisions.",
      industries: ["Food & Feed", "Consumer Products", "Cosmetics & Personal Care", "Pharmaceutical"],
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: "Inspection Services",
      description: "Our Inspection Services meticulously identify defects that can pose risks to consumers, impact product performance, and diminish customer satisfaction. We conduct meticulous examinations to ensure your products meet the highest quality standards, providing assurance to both businesses and consumers.",
      industries: ["Food & Feed", "Consumer Products", "Cosmetics & Personal Care", "Pharmaceutical"],
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      title: "Certification Services",
      description: "Our Certification Services encompass a rigorous verification process for production houses. We ensure adherence to national and international regulations. Our assessments evaluate working conditions, environmental impact, and overall compliance, empowering businesses to demonstrate their commitment to responsible practices and legal obligations.",
      industries: ["Food & Feed", "Consumer Products"],
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Audit Services",
      description: "Our audit services provide a systematic and independent examination of your processes and systems. We help you identify areas for improvement, ensure compliance with standards, and enhance your operational efficiency and risk management.",
      industries: ["Food & Feed", "Consumer Products", "Cosmetics & Personal Care", "Pharmaceutical"],
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    }
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Our Comprehensive Services</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              We offer a full spectrum of laboratory testing, inspection, certification, and audit services 
              designed to meet the diverse needs of modern industries.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-8 border border-neutral-200 hover:border-primary hover:shadow-medium transition-all duration-300 hover:-translate-y-1 flex flex-col items-start"
              >
                <div className="p-3 rounded-full bg-primary/10 text-primary mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-neutral-800 mb-3">Related Industries:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.industries.map((industry, i) => {
                      const industrySlug = industry.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-');
                      return (
                        <Link
                          key={i}
                          href={`/industries/${industrySlug}`}
                          className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs hover:bg-primary hover:text-white transition-colors duration-200"
                        >
                          {industry}
                        </Link>
                      );
                    })}
                  </div>
                </div>
                <div className="mt-auto">
                  {/* <Link
                    href={service.href}
                    className="inline-flex items-center text-primary hover:text-primary-dark font-semibold transition-colors duration-200"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link> */}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-xl hover:bg-primary-dark transition-all duration-300 font-semibold shadow-medium hover:shadow-large transform hover:-translate-y-1"
            >
              Request a Consultation
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
