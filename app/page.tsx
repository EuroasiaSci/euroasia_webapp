import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import OurServices from './components/OurServices';
import IndustriesWeServe from './components/IndustriesWeServe';
import SustainableSupplyChain from './components/SustainableSupplyChain';
import CallToAction from './components/CallToAction';


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
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
