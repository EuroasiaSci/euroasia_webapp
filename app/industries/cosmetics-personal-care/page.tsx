'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb';
import CallToAction from '../../components/CallToAction';
import Image from 'next/image';

export default function CosmeticsPersonalCarePage() {
  const services = [
    {
      title: "Haircare",
      description: "Our haircare testing services include evaluations for product efficacy, safety, and compliance, assessing factors like product stability, ingredient analysis, and performance to meet consumer expectations.",
      image: "/images/cosmetics/haircare.jpg"
    },
    {
      title: "Skincare",
      description: "We provide a range of tests for skincare products, ensuring they are safe, effective, and compliant with industry regulations, covering aspects such as skin compatibility, ingredient analysis, and stability.",
      image: "/images/cosmetics/skincare.jpg"
    },
    {
      title: "Home Care Products",
      description: "Our testing services for home care products (from detergents to cleaning agents) ensure they meet safety, environmental, and performance standards, assessing factors like chemical content, biodegradability, and efficacy.",
      image: "/images/cosmetics/home_care_products.png"
    },
    {
      title: "Makeup",
      description: "We highlight the importance of safety in the makeup industry, detailing rigorous tests for makeup products, including assessments for ingredient safety, allergens, and performance to guarantee products are both beautiful and safe.",
      image: "/images/cosmetics/makeup.jpeg"
    },
    {
      title: "Perfumes",
      description: "Our testing for perfumes includes fragrance composition, longevity, and safety, ensuring they meet the highest standards for quality, performance, and compliance.",
      image: "/images/cosmetics/perfume.jpg"
    },
    {
      title: "Toiletries",
      description: "We conduct tests for toiletry products to ensure they are safe, effective, and compliant with industry regulations, covering aspects like skin compatibility, ingredient analysis, and stability.",
      image: "/images/cosmetics/toiletries.jpg"
    }
  ];


  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-primary/90 to-secondary/90 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold">Cosmetics and Personal Care</h1>
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
          <h2 className="text-3xl font-bold mb-6" style={{color: '#48009f'}}>Elevate Your Cosmetics with EuroAsia&apos;s Comprehensive Testing Services</h2>
          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            EuroAsia is your trusted partner in ensuring the safety, quality, and compliance of cosmetics across a diverse range of categories. We offer a comprehensive suite of testing services tailored to the unique needs of the cosmetics industry. Our expertise covers haircare, skincare, home care products, makeup, perfumes, and toiletries, ensuring that your products meet the highest industry standards.
          </p>
        </div>
      </section>

      {/* Services for Cosmetics & Personal Care */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{color: '#48009f'}}>Our Expertise Encompasses a Variety of Cosmetic Categories</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Comprehensive testing services across six main cosmetic product categories
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

      {/* Regulations & Standards */}
     

      {/* EuroAsia Partnership Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8" style={{color: '#48009f'}}>EuroAsia: Your Partner in Quality and Compliance</h2>
          
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
     

      <CallToAction />
      <Footer />
    </div>
  );
}
