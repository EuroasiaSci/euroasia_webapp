'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import { useState } from 'react';

export default function AboutUs() {
  const [activeCard, setActiveCard] = useState('what-we-do');
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-primary/90 to-secondary/90 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold">About Us</h1>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'About Us' }]} />
        </div>
      </section>

      {/* Inspirational Quote */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Quote Icon */}
            <div className="absolute -top-4 -left-4 text-primary/20">
              <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            
            <div className="relative bg-white rounded-2xl shadow-large p-8 sm:p-12 border border-neutral-100">
              <blockquote className="text-center">
                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-6 leading-tight">
                &quot;We exist to create experiences where passion and purpose come together.&quot;
                </p>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
              </blockquote>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -right-4 text-secondary/20">
              <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.57-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-neutral-700 leading-relaxed">
          At EuroAsia, we are dedicated to providing a wide array of scientific services to meet the unique needs of our clients. We specialize in an extensive range of areas, including Textiles, Footwear, Toys, Food, and Cosmetic product’s testing &amp; inspection. We take immense pride in our leadership as an independent market player, particularly in the field of Consumer Products quality assurance.</p>
        </div>
      </section>

      {/* Excellence Section */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-neutral-900 mb-6">Unparalleled Excellence in Scientific Services</h2>
          <p className="text-lg text-neutral-700 leading-relaxed">
            At EuroAsia, we believe that excellence is not just a goal but a commitment. We continuously invest in new developments, utilizing the latest advancements in analytical chemistry. This approach allows us to provide our clients with unique analytical solutions and the most comprehensive range of testing methods available in the industry.
          </p>
        </div>
      </section>

      {/* Quality Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-neutral-900 mb-6">Dedicated to Quality</h2>
          <p className="text-lg text-neutral-700 leading-relaxed">
            Our dedication to quality is the cornerstone of our services. We commit to providing our clients with accurate, reliable and reproducible results within the specified timeframes. Our highly qualified staff is on hand to offer expert guidance, ensuring that our clients can make informed decisions. Our data is not only reliable but also instrumental in helping our clients meet increasingly stringent quality and safety standards, as well as the evolving requirements of regulatory authorities worldwide.
          </p>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-neutral-900 mb-6">Innovation and Unmatched Support</h2>
          <p className="text-lg text-neutral-700 leading-relaxed">
            EuroAsia is synonymous with innovation and market leadership. We invest heavily in cutting-edge technology, information technology (IT), and the processing of large sample volumes to maintain the highest standards of quality that is affordable at the same time. Few testing laboratories can match the level of expertise, technological leadership, and commitment to quality that have made EuroAsia a leader in the fields in which we operate. Your success is our priority, and we are here to support your needs every step of the way.
          </p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="group bg-white rounded-xl p-8 border border-neutral-200 hover:border-primary hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-primary/10 text-primary mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-neutral-900">Our Mission</h3>
              </div>
              <p className="text-neutral-600 leading-relaxed">
              Our mission is to empower consumers and
businesses with accurate, unbiased, and
comprehensive testing &amp; Inspection services. We
are committed to providing transparent and
objective assessments of products and services,
ensuring informed decision-making and fostering
trust in the marketplace.</p>
            </div>

            {/* Vision Card */}
            <div className="group bg-white rounded-xl p-8 border border-neutral-200 hover:border-primary hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-primary/10 text-primary mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-neutral-900">Our Vision</h3>
              </div>
              <p className="text-neutral-600 leading-relaxed">
              Our vision is to be the global leader in testing &amp;
inspection services, recognized for our unwavering
dedication to quality, integrity, and innovation. We
strive to create a world where individuals and
organizations make confident choices based on reliable
testing &amp; inspection information, contributing to safer,
more reliable, and higher-quality products and services across industries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Buttons */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setActiveCard('what-we-do')}
              className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeCard === 'what-we-do' 
                  ? 'bg-primary text-white shadow-medium' 
                  : 'bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white'
              }`}
            >
              What We Do
            </button>
            <button 
              onClick={() => setActiveCard('our-goal')}
              className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeCard === 'our-goal' 
                  ? 'bg-primary text-white shadow-medium' 
                  : 'bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white'
              }`}
            >
              Our Goal
            </button>
          </div>
        </div>
      </section>

      {/* What We Do and Our Goal Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Lab Image */}
            <div className="relative">
              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-16 h-16 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-2">Laboratory Excellence</h3>
                    <p className="text-neutral-600">Professional Testing Environment</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dynamic Content Based on Active Card */}
            <div className="space-y-8">
              {activeCard === 'what-we-do' && (
                <div className="group bg-white rounded-xl p-8 border border-neutral-200 hover:border-primary hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-6">What We Do</h3>
                  <p className="text-neutral-600 mb-6">
                    We offer a comprehensive range of services, including but not limited to:
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-primary mb-1">Testing</h4>
                        <p className="text-neutral-600 text-sm">Rigorous testing of products and materials to ensure quality, safety, and compliance with industry standards.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-primary mb-1">Inspection</h4>
                        <p className="text-neutral-600 text-sm">Precise and thorough inspections to verify the integrity and reliability of your assets, facilities, and processes.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-primary mb-1">Audit</h4>
                        <p className="text-neutral-600 text-sm">Independent and unbiased audits to assess and validate your adherence to regulatory requirements and best practices.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-primary mb-1">Certification</h4>
                        <p className="text-neutral-600 text-sm">Accredited certification services to demonstrate compliance and build confidence in your stakeholders.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeCard === 'our-goal' && (
                <div className="group bg-white rounded-xl p-8 border border-neutral-200 hover:border-primary hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-6">Our Goal</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    At EuroAsia, our goal is crystal clear: to be the catalyst for your success. We are dedicated to providing the highest quality testing, inspection, audit, and certification services, backed by unwavering integrity and expertise. Our aim is to empower businesses, large and small, to excel in their industries by ensuring compliance, safety, and innovation. Through our relentless pursuit of excellence, we aspire to be the trusted partner that helps you achieve your objectives and secure a sustainable future.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
