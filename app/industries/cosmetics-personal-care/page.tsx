'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb';
import Link from 'next/link';

export default function CosmeticsPersonalCarePage() {
  const services = [
    {
      title: "Haircare",
      description: "Our haircare testing services include evaluations for product efficacy, safety, and compliance, assessing factors like product stability, ingredient analysis, and performance to meet consumer expectations.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
        </svg>
      )
    },
    {
      title: "Skincare",
      description: "We provide a range of tests for skincare products, ensuring they are safe, effective, and compliant with industry regulations, covering aspects such as skin compatibility, ingredient analysis, and stability.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: "Home Care Products",
      description: "Our testing services for home care products (from detergents to cleaning agents) ensure they meet safety, environmental, and performance standards, assessing factors like chemical content, biodegradability, and efficacy.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
        </svg>
      )
    },
    {
      title: "Makeup",
      description: "We highlight the importance of safety in the makeup industry, detailing rigorous tests for makeup products, including assessments for ingredient safety, allergens, and performance to guarantee products are both beautiful and safe.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    {
      title: "Perfumes",
      description: "Our testing for perfumes includes fragrance composition, longevity, and safety, ensuring they meet the highest standards for quality, performance, and compliance.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: "Toiletries",
      description: "We conduct tests for toiletry products to ensure they are safe, effective, and compliant with industry regulations, covering aspects like skin compatibility, ingredient analysis, and stability.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  const regulations = [
    "EU Cosmetics Regulation 1223/2009",
    "FDA Cosmetic Regulations",
    "ISO 22716 - Cosmetics GMP",
    "CPNP - Cosmetic Products Notification Portal",
    "SCCS - Scientific Committee on Consumer Safety"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-primary/90 to-secondary/90 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold">Elevate Your Cosmetics with EuroAsia Comprehensive Testing Services</h1>
          <p className="text-xl mt-4 max-w-2xl mx-auto">
            Comprehensive testing solutions ensuring safety, quality, and compliance across all cosmetic categories
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[
            { label: 'Services', href: '/services' },
            { label: 'Cosmetics & Personal Care' }
          ]} />
        </div>
      </section>

      {/* Industry Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">Your Trusted Partner in Cosmetics Testing</h2>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                At EuroAsia, we are a trusted partner in ensuring the safety, quality, and compliance of cosmetics across diverse categories. We offer comprehensive testing services tailored to the unique needs of the cosmetic industry, covering haircare, skincare, home care products, makeup, perfumes, and toiletries, to ensure products meet the highest industry standards.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-neutral-700">30+ Tests Per Month</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-neutral-700">Global Regulatory Compliance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-neutral-700">Advanced Analytical Methods</span>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-large from-primary/10 to-secondary/10 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-16 h-16 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">Cosmetics & Personal Care</h3>
                <p className="text-neutral-600">Beauty & Safety Testing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services for Cosmetics & Personal Care */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Our Expertise Encompasses a Variety of Cosmetic Categories</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Comprehensive testing services across six main cosmetic product categories
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-soft border border-neutral-200 hover:shadow-medium transition-shadow duration-300">
                <div className="p-3 bg-primary/10 rounded-full w-fit mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">{service.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulations & Standards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Regulations & Standards</h2>
            <p className="text-lg text-neutral-600">
              We help you comply with the most important cosmetics regulations worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regulations.map((regulation, index) => (
              <div key={index} className="bg-neutral-50 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-neutral-900">{regulation}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EuroAsia Partnership Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8">EuroAsia: Your Partner in Quality and Compliance</h2>
          
          <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
            <p>
              At EuroAsia, we are your dedicated partner in ensuring the highest standards of quality and safety in the cosmetics industry. Our experienced teams and state-of-the-art laboratories are committed to delivering accurate and reliable results that help you maintain compliance with international regulations.
            </p>
            
            <p>
              Our comprehensive testing solutions provide valuable insights for manufacturers, retailers, and regulatory agencies, enabling informed decision-making throughout the product development and marketing process. We understand the unique challenges of the cosmetics industry and tailor our testing protocols to meet the specific requirements of each product category.
            </p>
            
            <p>
              We work closely with our clients to exceed consumer expectations and ensure that every product meets the highest standards of safety, efficacy, and quality. Our expertise spans across all major cosmetic categories, from personal care essentials to luxury beauty products.
            </p>
            
            <p>
              Choosing EuroAsia means choosing a partner who is committed to your success. We support you every step of the way, from initial product development to market launch, ensuring that your cosmetics not only meet but exceed industry standards for quality and safety in the marketplace.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Elevate Your Cosmetics Quality?</h2>
          <p className="text-xl text-white/90 mb-8">
            Partner with EuroAsia to ensure your cosmetic products meet the highest safety and quality standards
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
