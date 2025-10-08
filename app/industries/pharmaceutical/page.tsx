'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb';
import Link from 'next/link';

export default function PharmaceuticalPage() {
  const services = [
    {
      title: "Assay Testing",
      description: "EuroAsia's assay testing services provide accurate and detailed analyses of the active ingredients in pharmaceutical formulations. We help ensure that your products meet label claims and regulatory requirements, providing confidence in the efficacy and quality of your pharmaceuticals.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: "Stability Testing",
      description: "We conduct stability studies to assess how pharmaceutical products perform over time under various conditions, including temperature and humidity. Our studies ensure that your products maintain their effectiveness and safety throughout their shelf life.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Anti-Microbial Studies",
      description: "Infection control and anti-microbial efficacy are critical in the pharmaceutical industry. EuroAsia's anti-microbial studies assess the effectiveness of products in controlling or eliminating harmful microorganisms, helping to safeguard public health.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "Impurity Analysis",
      description: "We offer comprehensive impurity analysis to identify and quantify impurities and contaminants in pharmaceutical products. Our precise testing ensures that your products meet stringent quality and safety standards.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      title: "Packaging Assessments",
      description: "Packaging plays a vital role in pharmaceutical product safety and integrity. Our packaging assessments ensure that your products are stored, transported, and dispensed in packaging that meets regulatory requirements and maintains product stability.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
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
          <h1 className="text-5xl font-bold">Pharmaceutical</h1>
          <p className="text-xl mt-4 max-w-2xl mx-auto">
            Comprehensive testing solutions ensuring quality, safety, and regulatory compliance for pharmaceutical products
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[
            { label: 'Services', href: '/services' },
            { label: 'Pharmaceutical' }
          ]} />
        </div>
      </section>

      {/* Industry Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">Your Trusted Partner in Pharmaceutical Testing</h2>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                At EuroAsia, we are dedicated to ensuring the quality, safety, and regulatory compliance of pharmaceutical products. Our extensive range of testing services covers key categories including assay testing, stability testing, anti-microbial studies, impurity analysis, and packaging assessments. We offer a comprehensive suite of services designed to meet the rigorous demands of the pharmaceutical industry.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-neutral-700">10+ Pharmaceutical Products Tested</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-neutral-700">FDA & ICH Compliant Laboratory</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-neutral-700">Rapid Turnaround for Critical Tests</span>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-large y/10 to-secondary/10 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-16 h-16 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">Pharmaceutical</h3>
                <p className="text-neutral-600">Safety & Efficacy Testing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services for Pharmaceutical */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Our Expertise Encompasses a Variety of Pharmaceutical Categories</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Comprehensive testing services across five main pharmaceutical testing categories
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group p-8 rounded-xl border border-neutral-200 hover:border-primary hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-xl mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

  

      {/* EuroAsia Partnership Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8">EuroAsia: Your Partner in Pharmaceutical Quality and Compliance</h2>
          
          <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
            <p>
              With EuroAsia&apos;s pharmaceutical testing services, you gain a dedicated partner committed to delivering accurate and reliable results. Our experienced team of scientists and state-of-the-art laboratories ensure that your pharmaceutical products adhere to the highest quality, safety, and compliance standards.
            </p>
            
            <p>
              Our testing solutions provide insights that help pharmaceutical manufacturers, regulators, and distributors make informed decisions. Whether you are looking to verify compliance, enhance product quality, or address safety concerns, EuroAsia is your trusted partner for pharmaceutical testing.
            </p>
            
            <p>
              We understand the unique requirements of each pharmaceutical category and tailor our testing protocols to meet your specific needs. Our commitment is to assist you in delivering pharmaceutical products that not only meet industry standards but also exceed expectations for efficacy, quality, and safety.
            </p>
            
            <p>
              Choose EuroAsia as your partner in pharmaceutical testing and elevate the quality and safety of your pharmaceutical products in the marketplace. Your success is our priority, and we are here to support your needs every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Elevate Your Pharmaceutical Quality?</h2>
          <p className="text-xl text-white/90 mb-8">
            Partner with EuroAsia to ensure your pharmaceutical products meet the highest safety and quality standards
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary px-8 py-4 rounded-lg hover:bg-neutral-100 transition-colors duration-200 font-semibold"
            >
              Get Quote
            </Link>
            
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
