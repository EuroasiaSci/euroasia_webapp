'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb';
import CallToAction from '../../components/CallToAction';
import Image from 'next/image';

export default function ConsumerProductsPage() {
  const services = [
    {
      title: "Textiles",
      description: "Our textile testing services encompass fabric composition analysis, colorfastness, durability, and flammability testing, ensuring comfort, performance, and safety criteria are met for all textile products.",
      image: "/images/consumer_products/textile.png"
    },
    {
      title: "Leather and Footwear",
      description: "We provide comprehensive testing for leather and footwear products, including evaluations for quality, safety, and durability, ensuring material integrity and compliance with all aspects of these products.",
      image: "/images/consumer_products/leather-footwear.jpg"
    },
    {
      title: "Toys",
      description: "We specialize in toy industry standards, conducting rigorous tests to ensure toys comply with international safety standards, including checks for small parts, chemical control, and mechanical hazards.",
      image: "/images/consumer_products/toys.jpg"
    },
    {
      title: "Home Furnishing",
      description: "Our services for home furnishing include textiles and upholstery testing, assessing the safety and durability of products to meet regulatory requirements and consumer expectations.",
      image: "/images/consumer_products/homefurnishing.jpg"
    },
    {
      title: "Decorating Items",
      description: "We provide services for decorating items like paints, coatings, and wall coverings, including checks for lead content, durability, and compliance with environmental regulations.",
      image: "/images/consumer_products/decorating-items.jpg"
    },
    {
      title: "Packaging Materials",
      description: "Packaging plays a crucial role in product protection and sustainability. Our testing services evaluate packaging materials for strength, barrier properties, and environmental impact, aiding informed decisions for product packaging.",
      image: "/images/consumer_products/packaging-material2.jpg"
    }
  ];


  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-primary/90 to-secondary/90 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold">Consumer Products</h1>
          <p className="text-xl mt-4 max-w-2xl mx-auto">
            Comprehensive testing solutions ensuring safety, quality, and compliance across all consumer product categories
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[
            { label: 'Services', href: '/services' },
            { label: 'Consumer Products' }
          ]} />
        </div>
      </section>

      {/* Industry Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6" style={{color: '#48009f'}}>Elevate Quality Assurance with EuroAsia&apos;s Consumer Product Testing Services</h2>
          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            At EuroAsia, we are committed to ensuring the quality, and compliance of consumer products across a wide spectrum of categories. With a focus on textiles, leather and footwear, toys, home furnishing, decorating items, and packaging materials, we offer an array of comprehensive testing services designed to help businesses and manufacturers deliver products that meet the highest industry standards.
          </p>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            We understand the unique requirements of each product category and tailor our testing protocols to meet your specific needs. Our commitment is to assist you in delivering consumer products that not only meet industry standards but also exceed consumer expectations for safety, quality, and performance.
          </p>
        </div>
      </section>

      {/* Services for Consumer Products */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{color: '#48009f'}}>Our Consumer Product Services</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Specialized testing and certification services for consumer products
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <div className="p-8 flex flex-col items-center text-center">
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

      {/* Our Expertise Covers a Range of Consumer Product Categories */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-6">Our Expertise Covers a Range of Consumer Product Categories</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Comprehensive testing services across multiple consumer product categories with specialized expertise
            </p>
          </div>
          
            {/* Textile & Leather */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4" style={{color: '#48009f'}}>1. Textile & Leather</h3>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                      EuroAsia textile and Leather industry services helps retailers, brands and manufacturers uphold quality standards while meeting regulatory standards results in consumer confidence and brand loyalty.
                    </p>
                  </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {/* Materials & Components */}
              <div className="group relative bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 border border-neutral-200 hover:border-primary hover:shadow-medium transition-all duration-300 hover:-translate-y-1 overflow-hidden min-h-[320px] flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <svg className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h4 className="text-base sm:text-lg md:text-xl font-semibold text-neutral-900 mb-4 group-hover:text-primary transition-colors duration-300 leading-tight">
                        Materials & Components
                      </h4>
                <ul className="space-y-2 text-left">
                  <li className="flex items-start">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm text-neutral-600 leading-relaxed">Raw materials</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm text-neutral-600 leading-relaxed">Yarns & Fabric</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm text-neutral-600 leading-relaxed">Chemicals and finished products</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm text-neutral-600 leading-relaxed">Zippers, buttons, cords</span>
                  </li>
                  </ul>
                </div>
                
              {/* Home Textiles */}
              <div className="group relative bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 border border-neutral-200 hover:border-primary hover:shadow-medium transition-all duration-300 hover:-translate-y-1 overflow-hidden min-h-[320px] flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <svg className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 21v-5a2 2 0 012-2h4a2 2 0 012 2v5" />
                  </svg>
                </div>
                <h4 className="text-base sm:text-lg md:text-xl font-semibold text-neutral-900 mb-4 group-hover:text-primary transition-colors duration-300 leading-tight">
                  Home Textiles
                      </h4>
                <ul className="space-y-2 text-left">
                  <li className="flex items-start">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm text-neutral-600 leading-relaxed">Upholstery, mattresses, blankets</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm text-neutral-600 leading-relaxed">Bed linen, sheets, curtains</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm text-neutral-600 leading-relaxed">Bathroom linen, towels</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm text-neutral-600 leading-relaxed">Carpets, rugs, etc.</span>
                  </li>
                          </ul>
                        </div>

              {/* Apparel & Fashion */}
              <div className="group relative bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 border border-neutral-200 hover:border-primary hover:shadow-medium transition-all duration-300 hover:-translate-y-1 overflow-hidden min-h-[320px] flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <svg className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                        </div>
                <h4 className="text-base sm:text-lg md:text-xl font-semibold text-neutral-900 mb-4 group-hover:text-primary transition-colors duration-300 leading-tight">
                  Apparel & Fashion
                      </h4>
                <ul className="space-y-2 text-left">
                  <li className="flex items-start">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm text-neutral-600 leading-relaxed">Adult & children apparel</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm text-neutral-600 leading-relaxed">Sportswear, sleepwear, uniforms</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm text-neutral-600 leading-relaxed">Baby, nursery and maternity clothing</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm text-neutral-600 leading-relaxed">Fashion accessories, costumes</span>
                  </li>
                  </ul>
                </div>
                
              {/* Special Testing Services */}
              <div className="group relative bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 border border-neutral-200 hover:border-primary hover:shadow-medium transition-all duration-300 hover:-translate-y-1 overflow-hidden min-h-[320px] flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <svg className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="text-base sm:text-lg md:text-xl font-semibold text-neutral-900 mb-4 group-hover:text-primary transition-colors duration-300 leading-tight">
                        Special Testing Services
                      </h4>
                <ul className="space-y-2 text-left">
                  <li className="flex items-start">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm text-neutral-600 leading-relaxed">Cotton GMO testing</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm text-neutral-600 leading-relaxed">Antifungal and antimicrobial studies</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm text-neutral-600 leading-relaxed">Water absorption and UPF Factor</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm text-neutral-600 leading-relaxed">Polymer identification through FTIR</span>
                  </li>
                  </ul>
                </div>
                
              {/* Leather & Footwear */}
              <div className="group relative bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 border border-neutral-200 hover:border-primary hover:shadow-medium transition-all duration-300 hover:-translate-y-1 overflow-hidden min-h-[320px] flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <svg className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h4 className="text-base sm:text-lg md:text-xl font-semibold text-neutral-900 mb-4 group-hover:text-primary transition-colors duration-300 leading-tight">
                  Leather & Footwear
                </h4>
                <ul className="space-y-2 text-left">
                  <li className="flex items-start">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm text-neutral-600 leading-relaxed">Leather products, bags, belts</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm text-neutral-600 leading-relaxed">Men, women, children footwear</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm text-neutral-600 leading-relaxed">Sports shoes, sneakers, slippers</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm text-neutral-600 leading-relaxed">Boots, shoes, sandals</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Hardgoods & Toy Testing */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4" style={{color: '#48009f'}}>2. Hardgoods & Toy Testing</h3>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                      Comprehensive testing services for toys, decorative and packaging materials & food contact materials.
                    </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {/* Physical & Mechanical Testing */}
              <div className="group relative bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 border border-neutral-200 hover:border-primary hover:shadow-medium transition-all duration-300 hover:-translate-y-1 overflow-hidden min-h-[320px] flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <svg className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-base sm:text-lg md:text-xl font-semibold text-neutral-900 mb-4 group-hover:text-primary transition-colors duration-300 leading-tight">
                      Physical & Mechanical Testing
                    </h4>
                <ul className="space-y-2 text-left">
                  <li className="flex items-start">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm text-neutral-600 leading-relaxed">EU Toy Safety Directive 2009/48/EC</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm text-neutral-600 leading-relaxed">ASTM F963 – safety of toys</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm text-neutral-600 leading-relaxed">CPSIA compliance</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm text-neutral-600 leading-relaxed">ISO 8124-1 mechanical properties</span>
                  </li>
                  </ul>
                </div>
                
                  {/* Chemical Testing */}
              <div className="group relative bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 border border-neutral-200 hover:border-primary hover:shadow-medium transition-all duration-300 hover:-translate-y-1 overflow-hidden min-h-[320px] flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <svg className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h4 className="text-base sm:text-lg md:text-xl font-semibold text-neutral-900 mb-4 group-hover:text-primary transition-colors duration-300 leading-tight">
                      Chemical Testing
                    </h4>
                <ul className="space-y-2 text-left">
                  <li className="flex items-start">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm text-neutral-600 leading-relaxed">EU Toy Safety Directive EN 71-3</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm text-neutral-600 leading-relaxed">ASTM F963 chemical safety</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm text-neutral-600 leading-relaxed">ISO 8124-3 migration testing</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm text-neutral-600 leading-relaxed">REACH compliance testing</span>
                  </li>
                  </ul>
                </div>
                
              {/* Flammability Testing */}
              <div className="group relative bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 border border-neutral-200 hover:border-primary hover:shadow-medium transition-all duration-300 hover:-translate-y-1 overflow-hidden min-h-[320px] flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <svg className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                  </svg>
                </div>
                <h4 className="text-base sm:text-lg md:text-xl font-semibold text-neutral-900 mb-4 group-hover:text-primary transition-colors duration-300 leading-tight">
                  Flammability Testing
                </h4>
                <ul className="space-y-2 text-left">
                  <li className="flex items-start">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm text-neutral-600 leading-relaxed">EN 71-2 flammability testing</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm text-neutral-600 leading-relaxed">ASTM F963 flammability</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm text-neutral-600 leading-relaxed">ISO 8124-2 flammability</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm text-neutral-600 leading-relaxed">CPSIA flammability standards</span>
                  </li>
                  </ul>
              </div>

              {/* Electrical Safety */}
              <div className="group relative bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 border border-neutral-200 hover:border-primary hover:shadow-medium transition-all duration-300 hover:-translate-y-1 overflow-hidden min-h-[320px] flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <svg className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                  </svg>
            </div>
                <h4 className="text-base sm:text-lg md:text-xl font-semibold text-neutral-900 mb-4 group-hover:text-primary transition-colors duration-300 leading-tight">
                  Electrical Safety
                </h4>
                <ul className="space-y-2 text-left">
                  <li className="flex items-start">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm text-neutral-600 leading-relaxed">IEC 62115 electrical toys</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm text-neutral-600 leading-relaxed">ANSI/UL 696 electric toys</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm text-neutral-600 leading-relaxed">Electronic toy safety</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm text-neutral-600 leading-relaxed">Radio controlled toys</span>
                  </li>
                </ul>
          </div>

                {/* Toy Categories */}
              <div className="group relative bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 border border-neutral-200 hover:border-primary hover:shadow-medium transition-all duration-300 hover:-translate-y-1 overflow-hidden min-h-[320px] flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <svg className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-base sm:text-lg md:text-xl font-semibold text-neutral-900 mb-4 group-hover:text-primary transition-colors duration-300 leading-tight">
                  Toy Categories
                </h4>
                <ul className="space-y-2 text-left">
                  <li className="flex items-start">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm text-neutral-600 leading-relaxed">Dolls, plush toys</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm text-neutral-600 leading-relaxed">Wooden, metal, plastic toys</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm text-neutral-600 leading-relaxed">Electronic games & toys</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm text-neutral-600 leading-relaxed">Baby products & strollers</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Packaging and Food Contact Material */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4" style={{color: '#48009f'}}>3. Packaging & Food Contact Material Testing</h3>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                      EuroAsia specialized testing services for food contact and packaging materials with cost-effective, bespoke testing plans.
            </p>
          </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {/* Testing Services */}
              <div className="group relative bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 border border-neutral-200 hover:border-primary hover:shadow-medium transition-all duration-300 hover:-translate-y-1 overflow-hidden min-h-[320px] flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <svg className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
        </div>
                <h4 className="text-base sm:text-lg md:text-xl font-semibold text-neutral-900 mb-4 group-hover:text-primary transition-colors duration-300 leading-tight">
                  Testing Services
                </h4>
                <ul className="space-y-2 text-left">
                  <li className="flex items-start">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm text-neutral-600 leading-relaxed">Overall migration testing</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm text-neutral-600 leading-relaxed">Specific migration analysis</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm text-neutral-600 leading-relaxed">Leachable contents testing</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm text-neutral-600 leading-relaxed">Heavy metals analysis</span>
                  </li>
                </ul>
              </div>

              {/* REACH & NIAS Testing */}
              <div className="group relative bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 border border-neutral-200 hover:border-primary hover:shadow-medium transition-all duration-300 hover:-translate-y-1 overflow-hidden min-h-[320px] flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <svg className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h4 className="text-base sm:text-lg md:text-xl font-semibold text-neutral-900 mb-4 group-hover:text-primary transition-colors duration-300 leading-tight">
                  REACH & NIAS Testing
                </h4>
                <ul className="space-y-2 text-left">
                  <li className="flex items-start">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm text-neutral-600 leading-relaxed">REACH compliance testing</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm text-neutral-600 leading-relaxed">NIAS testing (Non-Intentionally Added Substances)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm text-neutral-600 leading-relaxed">Chemical safety assessment</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm text-neutral-600 leading-relaxed">Regulatory compliance</span>
                  </li>
                      </ul>
                    </div>

              {/* Standards Coverage */}
              <div className="group relative bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 border border-neutral-200 hover:border-primary hover:shadow-medium transition-all duration-300 hover:-translate-y-1 overflow-hidden min-h-[320px] flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <svg className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                    </div>
                <h4 className="text-base sm:text-lg md:text-xl font-semibold text-neutral-900 mb-4 group-hover:text-primary transition-colors duration-300 leading-tight">
                  Standards Coverage
                </h4>
                <ul className="space-y-2 text-left">
                  <li className="flex items-start">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm text-neutral-600 leading-relaxed">Indian standards compliance</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm text-neutral-600 leading-relaxed">International standards</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm text-neutral-600 leading-relaxed">Food contact material regulations</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm text-neutral-600 leading-relaxed">Packaging safety standards</span>
                  </li>
                </ul>
          </div>
          
              {/* Bespoke Testing Plans */}
              <div className="group relative bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 border border-neutral-200 hover:border-primary hover:shadow-medium transition-all duration-300 hover:-translate-y-1 overflow-hidden min-h-[320px] flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <svg className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="text-base sm:text-lg md:text-xl font-semibold text-neutral-900 mb-4 group-hover:text-primary transition-colors duration-300 leading-tight">
                  Bespoke Testing Plans
                </h4>
                <ul className="space-y-2 text-left">
                  <li className="flex items-start">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm text-neutral-600 leading-relaxed">Cost-effective solutions</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm text-neutral-600 leading-relaxed">Single article testing</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm text-neutral-600 leading-relaxed">Complex material combinations</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm text-neutral-600 leading-relaxed">Comprehensive portfolio coverage</span>
                  </li>
                      </ul>
                    </div>

              {/* Benefits */}
              <div className="group relative bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 border border-neutral-200 hover:border-primary hover:shadow-medium transition-all duration-300 hover:-translate-y-1 overflow-hidden min-h-[320px] flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <svg className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h4 className="text-base sm:text-lg md:text-xl font-semibold text-neutral-900 mb-4 group-hover:text-primary transition-colors duration-300 leading-tight">
                  Key Benefits
                </h4>
                <ul className="space-y-2 text-left">
                  <li className="flex items-start">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm text-neutral-600 leading-relaxed">Avoid repetitive testing</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm text-neutral-600 leading-relaxed">Streamlined testing process</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm text-neutral-600 leading-relaxed">Faster time to market</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm text-neutral-600 leading-relaxed">Expert consultation</span>
                  </li>
                </ul>
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* Standards & Certifications */}

      {/* Concluding Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-neutral-700 leading-relaxed mb-8">
            At EuroAsia, we are committed to delivering accurate and reliable results, emphasizing our role as a trusted partner for quality and compliance standards. We provide insights that help manufacturers, retailers, and regulatory agencies make informed decisions, positioning EuroAsia as your partner for consumer product testing. Partner with EuroAsia to elevate the quality and safety of your products.
          </p>
        </div>
      </section>

    

      <CallToAction />
      <Footer />
    </div>
  );
}
