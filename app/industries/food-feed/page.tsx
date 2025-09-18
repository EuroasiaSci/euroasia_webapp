'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb';
import Link from 'next/link';

export default function FoodFeedPage() {
  const services = [
    {
      title: "Chemical Analysis",
      description: "Comprehensive chemical testing to identify and quantify various chemical components in food and feed products, ensuring safety and quality standards.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: "Microbiological Testing",
      description: "Advanced microbiological analysis to detect harmful bacteria, viruses, and other microorganisms that could pose health risks in food and feed products.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "Allergen Testing",
      description: "Specialized testing to identify and quantify common food allergens, ensuring proper labeling and protecting consumers with food allergies.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      )
    },
    {
      title: "Nutritional Labeling",
      description: "Accurate nutritional analysis and labeling services to ensure compliance with regulatory requirements and provide consumers with reliable nutritional information.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Quality and Authenticity Testing",
      description: "Comprehensive quality assessment and authenticity verification to ensure products meet specified standards and are free from adulteration or mislabeling.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "GMO Testing",
      description: "Advanced genetic testing to detect and quantify genetically modified organisms in food and feed products, ensuring compliance with labeling regulations.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: "Feed Analysis",
      description: "Comprehensive analysis of animal feed ingredients and finished products to ensure nutritional adequacy, safety, and compliance with feed regulations.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
        </svg>
      )
    },
    {
      title: "Regulatory Compliance",
      description: "Expert guidance and testing services to ensure full compliance with national and international food and feed safety regulations and standards.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Pesticide Residue Testing",
      description: "Precise detection and quantification of pesticide residues in food and feed products to ensure compliance with maximum residue limits and safety standards.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    }
  ];

  const certifications = [
    "ISO 22000 - Food Safety Management",
    "HACCP - Hazard Analysis Critical Control Points",
    "BRC - British Retail Consortium",
    "SQF - Safe Quality Food",
    "FSSC 22000 - Food Safety System Certification"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-64 sm:h-80 lg:h-96 bg-gradient-to-r from-primary/90 to-secondary/90 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center text-white px-3 sm:px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Discovering Quality Through Food and Feed Testing</h1>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-neutral-900 mb-4 sm:mb-6">Your Trusted Partner in Food and Feed Testing</h2>
              <p className="text-sm sm:text-base lg:text-lg text-neutral-700 leading-relaxed mb-4 sm:mb-6">
                At EuroAsia, we are committed to ensuring the highest standards of quality and safety in food and feed testing. Our state-of-the-art laboratories are equipped with cutting-edge technology and staffed by highly skilled professionals who are dedicated to delivering accurate, reliable, and timely results.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-neutral-700 leading-relaxed mb-4 sm:mb-6">
                We understand the critical importance of food safety in today&apos;s global marketplace. Our comprehensive testing services help businesses maintain compliance with national and international regulations while protecting consumer health and building brand trust. From routine testing to specialized analysis, we provide the expertise and support you need to ensure your products meet the highest standards.
              </p>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-neutral-700">20+ Food Safety Projects Completed</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-neutral-700">ISO 22000 Certified Laboratory</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-neutral-700">Rapid Turnaround Times</span>
                </div>
              </div>
            </div>
            <div className="relative h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden shadow-large from-primary/10 to-secondary/10 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <svg className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary mb-2">Food & Feed</h3>
                <p className="text-sm sm:text-base text-neutral-600">Quality & Safety Testing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services for Food & Feed */}
      <section className="py-8 sm:py-12 lg:py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-neutral-900 mb-3 sm:mb-4">Our Food & Feed Services</h2>
            <p className="text-sm sm:text-base lg:text-lg text-neutral-600 max-w-2xl mx-auto">
              Specialized testing and certification services tailored for the food and feed industry
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-4 sm:p-6 shadow-soft border border-neutral-200 hover:shadow-medium transition-shadow duration-300">
                <div className="p-2 sm:p-3 bg-primary/10 rounded-full w-fit mb-3 sm:mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mb-2 sm:mb-3">{service.title}</h3>
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
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
      </section>

      {/* Concluding Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-neutral-700 leading-relaxed mb-8">
            At EuroAsia, we are your trusted partner in food and feed testing, committed to delivering accurate, reliable, and timely results that help you maintain the highest standards of quality and safety. Our team of experts works closely with food manufacturers, feed producers, retailers, and regulatory bodies to ensure compliance with national and international standards. With our state-of-the-art facilities and cutting-edge technology, we provide comprehensive testing solutions that give you the confidence to bring safe, high-quality products to market.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Ensure Food Safety?</h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us today to discuss your food and feed testing requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary px-8 py-4 rounded-lg hover:bg-neutral-100 transition-colors duration-200 font-semibold"
            >
              Get Quote
            </Link>
            <Link
              href="/quote"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary transition-colors duration-200 font-semibold"
            >
              Request Information
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
