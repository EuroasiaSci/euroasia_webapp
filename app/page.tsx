import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import OurServices from './components/OurServices';
import IndustriesWeServe from './components/IndustriesWeServe';
import SustainableSupplyChain from './components/SustainableSupplyChain';


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <OurServices />
        <IndustriesWeServe />
        <SustainableSupplyChain />
        {/* <ClientTestimonials /> */}
        
        {/* Bottom CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-neutral-600 mb-8 max-w-3xl mx-auto">
                Join our growing list of satisfied clients who trust EUROASIA for their 
                laboratory testing needs. Contact us today for a free consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary-dark transition-colors duration-200 font-semibold text-lg"
                >
                  Get Free Quote
                </a>
                <a
                  href="/about"
                  className="border-2 border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary hover:text-white transition-all duration-200 font-semibold text-lg"
                >
                  Learn More About Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
