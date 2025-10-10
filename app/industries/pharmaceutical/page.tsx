'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb';
import CallToAction from '../../components/CallToAction';
import Image from 'next/image';

export default function PharmaceuticalPage() {
  const services = [
    {
      title: "Assay Testing",
      description: "EuroAsia's assay testing services provide accurate and detailed analyses of the active ingredients in pharmaceutical formulations. We help ensure that your products meet label claims and regulatory requirements, providing confidence in the efficacy and quality of your pharmaceuticals.",
      image: "/images/pharma/assay-testing.jpg"
    },
    {
      title: "Stability Testing",
      description: "We conduct stability studies to assess how pharmaceutical products perform over time under various conditions, including temperature and humidity. Our studies ensure that your products maintain their effectiveness and safety throughout their shelf life.",
      image: "/images/pharma/stability-testing.jpg"
    },
    {
      title: "Anti-Microbial Studies",
      description: "Infection control and anti-microbial efficacy are critical in the pharmaceutical industry. EuroAsia's anti-microbial studies assess the effectiveness of products in controlling or eliminating harmful microorganisms, helping to safeguard public health.",
      image: "/images/pharma/antimicrobial.jpg"
    },
    {
      title: "Impurity Analysis",
      description: "We offer comprehensive impurity analysis to identify and quantify impurities and contaminants in pharmaceutical products. Our precise testing ensures that your products meet stringent quality and safety standards.",
      image: "/images/pharma/impurity-testing.jpg"
    },
    {
      title: "Packaging Assessments",
      description: "Packaging plays a vital role in pharmaceutical product safety and integrity. Our packaging assessments ensure that your products are stored, transported, and dispensed in packaging that meets regulatory requirements and maintains product stability.",
      image: "/images/pharma/packaging.jpg"
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
          <h2 className="text-3xl font-bold mb-6" style={{color: '#48009f'}}>Elevate Your Pharmaceutical Products with EuroAsia&apos;s Comprehensive Testing Services</h2>
          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            At EuroAsia, we are dedicated to ensuring the quality, safety, and regulatory compliance of pharmaceutical products. Our extensive range of testing services covers key categories, including assay testing, stability testing, anti-microbial studies, impurity analysis, and packaging assessments. We offer a comprehensive suite of services designed to meet the rigorous demands of the pharmaceutical industry.
          </p>
         
        </div>
      </section>

      {/* Services for Pharmaceutical */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{color: '#48009f'}}>Our Expertise Encompasses a Variety of Pharmaceutical Categories</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Comprehensive testing services across five main pharmaceutical testing categories
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

  

      {/* EuroAsia Partnership Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8" style={{color: '#48009f'}}>EuroAsia: Your Partner in Pharmaceutical Quality and Compliance</h2>
          
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

    
      <CallToAction />
      <Footer />
    </div>
  );
}
