'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb';
import Link from 'next/link';

export default function ConsumerProductsPage() {
  const services = [
    {
      title: "Textiles",
      description: "Our textile testing services encompass fabric composition analysis, colorfastness, durability, and flammability testing, ensuring comfort, performance, and safety criteria are met for all textile products.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    },
    {
      title: "Leather and Footwear",
      description: "We provide comprehensive testing for leather and footwear products, including evaluations for quality, safety, and durability, ensuring material integrity and compliance with all aspects of these products.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
        </svg>
      )
    },
    {
      title: "Toys",
      description: "We specialize in toy industry standards, conducting rigorous tests to ensure toys comply with international safety standards, including checks for small parts, chemical control, and mechanical hazards.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Home Furnishing",
      description: "Our services for home furnishing include textiles and upholstery testing, assessing the safety and durability of products to meet regulatory requirements and consumer expectations.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
        </svg>
      )
    },
    {
      title: "Decorating Items",
      description: "We provide services for decorating items like paints, coatings, and wall coverings, including checks for lead content, durability, and compliance with environmental regulations.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
        </svg>
      )
    },
    {
      title: "Packaging Materials",
      description: "Packaging plays a crucial role in product protection and sustainability. Our testing services evaluate packaging materials for strength, barrier properties, and environmental impact, aiding informed decisions for product packaging.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    }
  ];

  const standards = [
    "REACH (EU) - Registration, Evaluation, Authorization and Restriction of Chemicals",
    "CPSCIA (US) - Consumer Product Safety Improvement Act",
    "California Proposition 65 - Safe Drinking Water and Toxic Enforcement Act",
    "CCPSA (Canada) - Consumer Product Safety Act",
    "China GB Standards - National Standards of China",
    "ASTM F963 - Safety of Toys",
    "EN 71 Series - European Toy Safety Standards",
    "ISO 8124 - Safety of Toys International Standards"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-primary/90 to-secondary/90 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold">Elevate Quality Assurance with EuroAsia&apos;s Consumer Product Testing Services</h1>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">Your Trusted Partner in Consumer Product Testing</h2>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                At EuroAsia, we are committed to ensuring the quality and compliance of consumer products across various categories, including textiles, leather, footwear, toys, home furnishing, decorating items, and packaging materials. We provide comprehensive testing services that meet the highest industry standards and regulatory/consumer expectations for safety, quality, and performance.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-neutral-700">50+ Consumer Product Clients</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-neutral-700">Global Standards Compliance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-neutral-700">Fast Track Testing Available</span>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-large from-primary/10 to-secondary/10 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-16 h-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">Consumer Products</h3>
                <p className="text-neutral-600">Quality & Safety Testing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services for Consumer Products */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Our Consumer Product Services</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Specialized testing and certification services for consumer products
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

      {/* Our Expertise Covers a Range of Consumer Product Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Our Expertise Covers a Range of Consumer Product Categories</h2>
            <p className="text-lg text-neutral-600">
              Comprehensive testing services across multiple consumer product categories
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Textile & Leather */}
            <div className="bg-neutral-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">1. Textile & Leather</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-3">Materials & Components:</h4>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• Raw materials</li>
                    <li>• Yarns & Fabric</li>
                    <li>• Chemicals and finished products</li>
                    <li>• Zippers, buttons, cords</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-3">Apparel & Fashion:</h4>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• Adult & children apparel</li>
                    <li>• Sportswear, sleepwear, uniforms and workwear</li>
                    <li>• Baby nursery and maternity clothing</li>
                    <li>• Fashion accessories, gloves, scarves, jewellery</li>
                    <li>• Lingeries</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-3">Leather:</h4>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• Leather</li>
                    <li>• Leather products, bags, belts, wallets</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-3">Footwear:</h4>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• Men, women, children footwear</li>
                    <li>• Sports shoes, sneakers, slippers</li>
                    <li>• Boots, shoes, sandals</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-3">Home Textiles:</h4>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• Upholstery, mattresses, blankets, cushions, pillows</li>
                    <li>• Bed linen, sheets, curtains</li>
                    <li>• Bathroom linen, towels</li>
                    <li>• House and kitchen, tablecloths, napkins, tea towels, mittens</li>
                    <li>• Carpets, rugs, etc.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Toy Testing Services */}
            <div className="bg-neutral-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">2. Toy Testing Services</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-3">Physical and Mechanical Testing:</h4>
                  <p className="text-neutral-700 mb-3">Aims to prevent hazards such as small parts, sharp points, edges, cords, etc.</p>
                  <ul className="space-y-2 text-neutral-700 text-sm">
                    <li>• EU Toy Safety Directive 2009/48/EC (EN 71-1, EN 71-8)</li>
                    <li>• ASTM F963 – safety of toys</li>
                    <li>• CPSCIA</li>
                    <li>• ISO 8124-1 – mechanical and physical properties of toys</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-3">Chemical Testing:</h4>
                  <ul className="space-y-2 text-neutral-700 text-sm">
                    <li>• EU Toy Safety Directive 2009/48/EC (EN 71-3, EN 71-4, EN 71-5, EN 71-7, EN 71-12)</li>
                    <li>• ASTM F963 – safety of toys</li>
                    <li>• CPSCIA</li>
                    <li>• REACH – migration of certain elements</li>
                    <li>• REACH and other international chemical regulations testing</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-3">Flammability:</h4>
                  <ul className="space-y-2 text-neutral-700 text-sm">
                    <li>• EN 71-2 – flammability</li>
                    <li>• ASTM F963 – the safety of toys</li>
                    <li>• CPSCIA</li>
                    <li>• ISO 8124-2 – flammability</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-3">Electrical and Electronics Safety:</h4>
                  <ul className="space-y-2 text-neutral-700 text-sm">
                    <li>• IEC 62115</li>
                    <li>• ANSI/UL 696</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Packaging and Food Contact Material Testing */}
          <div className="mt-12 bg-neutral-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">3. Packaging and Food Contact Material Testing</h3>
            <p className="text-lg text-neutral-700 leading-relaxed">
              Specialized testing services for food contact and packaging materials, including overall migration, specific migration, leachable contents, heavy metals, REACH, RoHS testing, covering Indian and international standards (e.g., CentreFIsh). We also develop testing plans for single articles or complex combinations of raw materials across a wide product portfolio to avoid repetitive testing.
            </p>
          </div>
        </div>
      </section>

      {/* Standards & Certifications */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Standards & Certifications</h2>
            <p className="text-lg text-neutral-600">
              We help you comply with the most important consumer product standards
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {standards.map((standard, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-soft">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-neutral-900">{standard}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Concluding Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-neutral-700 leading-relaxed mb-8">
            At EuroAsia, we are committed to delivering accurate and reliable results, emphasizing our role as a trusted partner for quality and compliance standards. We provide insights that help manufacturers, retailers, and regulatory agencies make informed decisions, positioning EuroAsia as your partner for consumer product testing. Partner with EuroAsia to elevate the quality and safety of your products in the marketplace.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Elevate Your Product Quality?</h2>
          <p className="text-xl text-white/90 mb-8">
            Partner with EuroAsia to ensure your consumer products meet the highest safety and quality standards
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
