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
            <div className="bg-white rounded-3xl shadow-large border border-neutral-100 overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 border-b border-neutral-200">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-neutral-900 mb-2">1. Textile & Leather</h3>
                    <p className="text-lg text-neutral-600">
                      EuroAsia textile and Leather industry services helps retailers, brands and manufacturers uphold quality standards while meeting regulatory standards results in consumer confidence and brand loyalty.
                    </p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left Column */}
              <div className="space-y-6">
                    <div className="group p-6 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl border border-blue-200 hover:border-primary transition-colors duration-300">
                      <h4 className="text-xl font-bold text-primary mb-4 flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        Materials & Components
                      </h4>
                  <ul className="space-y-2 text-neutral-700">
                        <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>Raw materials</li>
                        <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>Yarns & Fabric</li>
                        <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>Chemicals and finished products</li>
                        <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>Zippers, buttons, cords</li>
                  </ul>
                </div>
                
                    <div className="group p-6 bg-gradient-to-br from-green-50 to-green-100/50 rounded-2xl border border-green-200 hover:border-primary transition-colors duration-300">
                      <h4 className="text-xl font-bold text-primary mb-4 flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        Apparel & Fashion
                      </h4>
                  <ul className="space-y-2 text-neutral-700">
                        <li className="flex items-center"><span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></span>Adult & children apparel</li>
                        <li className="flex items-center"><span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></span>Sportswear, sleepwear, uniforms and workwear</li>
                        <li className="flex items-center"><span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></span>Baby, nursery and maternity clothing</li>
                        <li className="flex items-center"><span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></span>Fashion accessories, gloves, scarves, jewellery</li>
                        <li className="flex items-center"><span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></span>Costumes</li>
                  </ul>
                </div>
                
                    <div className="group p-6 bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-2xl border border-purple-200 hover:border-primary transition-colors duration-300">
                      <h4 className="text-xl font-bold text-primary mb-4 flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        Leather & Footwear
                      </h4>
                      <div className="space-y-3">
                        <div>
                          <h5 className="font-semibold text-neutral-800 mb-2">Leather:</h5>
                          <ul className="space-y-1 text-neutral-700 text-sm">
                            <li className="flex items-center"><span className="w-1 h-1 bg-purple-500 rounded-full mr-2"></span>Leather</li>
                            <li className="flex items-center"><span className="w-1 h-1 bg-purple-500 rounded-full mr-2"></span>Leather products, bags, belts, wallets</li>
                          </ul>
                        </div>
                <div>
                          <h5 className="font-semibold text-neutral-800 mb-2">Footwear:</h5>
                          <ul className="space-y-1 text-neutral-700 text-sm">
                            <li className="flex items-center"><span className="w-1 h-1 bg-purple-500 rounded-full mr-2"></span>Men, women, children footwear</li>
                            <li className="flex items-center"><span className="w-1 h-1 bg-purple-500 rounded-full mr-2"></span>Sports shoes, sneakers, slippers</li>
                            <li className="flex items-center"><span className="w-1 h-1 bg-purple-500 rounded-full mr-2"></span>Boots, shoes, sandals</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">
                    <div className="group p-6 bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-2xl border border-orange-200 hover:border-primary transition-colors duration-300">
                      <h4 className="text-xl font-bold text-primary mb-4 flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        Home Textiles
                      </h4>
                  <ul className="space-y-2 text-neutral-700">
                        <li className="flex items-center"><span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></span>Upholstery, mattresses, blankets, cushions, pillows</li>
                        <li className="flex items-center"><span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></span>Bed linen, sheets, curtains</li>
                        <li className="flex items-center"><span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></span>Bathroom linen, towels</li>
                        <li className="flex items-center"><span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></span>Home and kitchen, tablecloths, napkins, tea towels, mittens</li>
                        <li className="flex items-center"><span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></span>Carpets, rugs, etc.</li>
                  </ul>
                </div>
                
                    <div className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border border-primary/20">
                      <h4 className="text-xl font-bold text-primary mb-4 flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        Special Testing Services
                      </h4>
                  <ul className="space-y-2 text-neutral-700">
                        <li className="flex items-center"><span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>Cotton GMO testing</li>
                        <li className="flex items-center"><span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>Antifungal and antimicrobial studies (AATCC 100, ATCC 30)</li>
                        <li className="flex items-center"><span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>Water absorption and UPF Factor</li>
                        <li className="flex items-center"><span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>Polymer identification through FTIR</li>
                  </ul>
                </div>
                
                    <div className="p-6 bg-gradient-to-br from-neutral-100 to-neutral-200/50 rounded-2xl border border-neutral-300">
                      <h4 className="text-lg font-bold text-neutral-800 mb-3">Regulatory Coverage</h4>
                      <p className="text-sm text-neutral-600 leading-relaxed">
                        Our service covers both local and international regulations including EU (General Product Safety Directive, REACH), US (CPSIA, California&lsquo;s Proposition 65), Canada (CCPSA), and China&lsquo;s GB standards.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hardgoods & Toy Testing */}
          <div className="mb-16">
            <div className="bg-white rounded-3xl shadow-large border border-neutral-100 overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-secondary/10 to-accent/10 p-8 border-b border-neutral-200">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                <div>
                    <h3 className="text-3xl font-bold text-neutral-900 mb-2">2. Hardgoods & Toy Testing</h3>
                    <p className="text-lg text-neutral-600">
                      Comprehensive testing services for toys, decorative and packaging materials & food contact materials.
                    </p>
                </div>
              </div>
            </div>

              {/* Content */}
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Physical & Mechanical */}
                  <div className="group p-6 bg-gradient-to-br from-red-50 to-red-100/50 rounded-2xl border border-red-200 hover:border-primary transition-colors duration-300">
                    <h4 className="text-xl font-bold text-primary mb-4 flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      Physical & Mechanical Testing
                    </h4>
                    <p className="text-sm text-neutral-600 mb-4">Prevents hazards such as small parts, sharp points and edges, cords, etc.</p>
                  <ul className="space-y-2 text-neutral-700 text-sm">
                      <li className="flex items-center"><span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>EU Toy Safety Directive 2009/48/EC (EN 71-1, EN 71-8)</li>
                      <li className="flex items-center"><span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>ASTM F963 – safety of toys</li>
                      <li className="flex items-center"><span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>CPSIA</li>
                      <li className="flex items-center"><span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>ISO 8124-1 – mechanical properties</li>
                  </ul>
                </div>
                
                  {/* Chemical Testing */}
                  <div className="group p-6 bg-gradient-to-br from-yellow-50 to-yellow-100/50 rounded-2xl border border-yellow-200 hover:border-primary transition-colors duration-300">
                    <h4 className="text-xl font-bold text-primary mb-4 flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      Chemical Testing
                    </h4>
                  <ul className="space-y-2 text-neutral-700 text-sm">
                      <li className="flex items-center"><span className="w-1 h-1 bg-yellow-500 rounded-full mr-2"></span>EU Toy Safety Directive (EN 71-3, EN 71-4, EN 71-5, EN 71-7, EN 71-12)</li>
                      <li className="flex items-center"><span className="w-1 h-1 bg-yellow-500 rounded-full mr-2"></span>ASTM F963 – safety of toys</li>
                      <li className="flex items-center"><span className="w-1 h-1 bg-yellow-500 rounded-full mr-2"></span>CPSIA</li>
                      <li className="flex items-center"><span className="w-1 h-1 bg-yellow-500 rounded-full mr-2"></span>ISO 8124-3 – migration of elements</li>
                      <li className="flex items-center"><span className="w-1 h-1 bg-yellow-500 rounded-full mr-2"></span>REACH and international regulations</li>
                  </ul>
                </div>
                
                  {/* Flammability & Electrical */}
                  <div className="group p-6 bg-gradient-to-br from-indigo-50 to-indigo-100/50 rounded-2xl border border-indigo-200 hover:border-primary transition-colors duration-300">
                    <h4 className="text-xl font-bold text-primary mb-4 flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      Flammability & Electrical
                    </h4>
                    <div className="space-y-4">
                <div>
                        <h5 className="font-semibold text-neutral-800 mb-2">Flammability:</h5>
                        <ul className="space-y-1 text-neutral-700 text-sm">
                          <li className="flex items-center"><span className="w-1 h-1 bg-indigo-500 rounded-full mr-2"></span>EN 71-2, ASTM F963, CPSIA</li>
                          <li className="flex items-center"><span className="w-1 h-1 bg-indigo-500 rounded-full mr-2"></span>ISO 8124-2</li>
                  </ul>
                </div>
                <div>
                        <h5 className="font-semibold text-neutral-800 mb-2">Electrical Safety:</h5>
                        <ul className="space-y-1 text-neutral-700 text-sm">
                          <li className="flex items-center"><span className="w-1 h-1 bg-indigo-500 rounded-full mr-2"></span>IEC 62115</li>
                          <li className="flex items-center"><span className="w-1 h-1 bg-indigo-500 rounded-full mr-2"></span>ANSI/UL 696</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

                {/* Toy Categories */}
                <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl border border-primary/20">
                  <h4 className="text-xl font-bold text-primary mb-4">Comprehensive Toy Categories Covered</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-neutral-700">
                    <div className="space-y-1">
                      <div className="font-semibold text-neutral-800">Toys:</div>
                      <div>• Dolls, plush</div>
                      <div>• Wooden, metal, plastic</div>
                      <div>• Stationary, paints</div>
                    </div>
                    <div className="space-y-1">
                      <div className="font-semibold text-neutral-800">Educational:</div>
                      <div>• Cosmetic toys</div>
                      <div>• Chemical sets</div>
                      <div>• Costumes, disguises</div>
                    </div>
                    <div className="space-y-1">
                      <div className="font-semibold text-neutral-800">Electronic:</div>
                      <div>• Electric toys</div>
                      <div>• Radio controlled</div>
                      <div>• Electronic games</div>
                    </div>
                    <div className="space-y-1">
                      <div className="font-semibold text-neutral-800">Baby Products:</div>
                      <div>• Baby apparel & footwear</div>
                      <div>• Cots, bassinets</div>
                      <div>• Strollers</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Packaging and Food Contact Material */}
          <div>
            <div className="bg-white rounded-3xl shadow-large border border-neutral-100 overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-accent/10 to-primary/10 p-8 border-b border-neutral-200">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-neutral-900 mb-2">3. Packaging & Food Contact Material Testing</h3>
                    <p className="text-lg text-neutral-600">
                      EuroAsia specialized testing services for food contact and packaging materials with cost-effective, bespoke testing plans.
            </p>
          </div>
        </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="p-6 bg-gradient-to-br from-green-50 to-green-100/50 rounded-2xl border border-green-200">
                      <h4 className="text-xl font-bold text-primary mb-4">Testing Services Include:</h4>
                      <ul className="space-y-2 text-neutral-700">
                        <li className="flex items-center"><span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></span>Overall migration</li>
                        <li className="flex items-center"><span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></span>Specific migration</li>
                        <li className="flex items-center"><span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></span>Leachable contents</li>
                        <li className="flex items-center"><span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></span>Heavy metals</li>
                        <li className="flex items-center"><span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></span>REACH testing</li>
                        <li className="flex items-center"><span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></span>NIAS testing</li>
                      </ul>
                    </div>

                    <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl border border-blue-200">
                      <h4 className="text-xl font-bold text-primary mb-4">Standards Coverage:</h4>
                      <p className="text-neutral-700 leading-relaxed">
                        Covering Indian and international standards with comprehensive regulatory compliance for food contact materials and packaging.
                      </p>
                    </div>
          </div>
          
                  <div className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border border-primary/20">
                    <h4 className="text-xl font-bold text-primary mb-4">Bespoke Testing Plans</h4>
                    <p className="text-neutral-700 leading-relaxed mb-4">
                      Cost-effective, bespoke testing plans can be defined for single articles or for complex combinations of raw materials used across a wide product portfolio.
                    </p>
                    <div className="p-4 bg-white rounded-xl border border-neutral-200">
                      <h5 className="font-semibold text-neutral-800 mb-2">Benefits:</h5>
                      <ul className="space-y-1 text-sm text-neutral-600">
                        <li>• Avoid repetitive testing of the same material</li>
                        <li>• Cost-effective solutions</li>
                        <li>• Comprehensive portfolio coverage</li>
                        <li>• Single article or complex combinations</li>
                      </ul>
                    </div>
                  </div>
                </div>
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* Standards & Certifications */}

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
            {/* <Link
              href="/quote"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary transition-colors duration-200 font-semibold"
            >
              Request Information
            </Link> */}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
