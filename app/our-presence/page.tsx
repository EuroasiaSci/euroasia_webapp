'use client';

import dynamic from "next/dynamic";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import CallToAction from '../components/CallToAction';

const LeafletWorldMap = dynamic(() => import("../components/LeafletWorldMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-96 lg:h-[500px] flex items-center justify-center bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl">
      <div className="text-slate-600 text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-slate-600 mx-auto mb-4"></div>
        <p>Loading interactive world map...</p>
      </div>
    </div>
  )
});


export default function OurPresencePage() {
  const locations = [
    // India locations
    {
      id: 'gurugram',
      name: 'Gurugram',
      country: 'India',
      type: 'headquarters',
      description: 'Headquarters & Main Laboratory'
    },
    {
      id: 'mumbai',
      name: 'Mumbai',
      
      country: 'India',
      type: 'lab',
      description: 'Regional Laboratory'
    },
    {
      id: 'tirupur',
      name: 'Tirupur',
      country: 'India',
      type: 'lab',
      description: 'Textile Testing Center'
    },
    {
      id: 'kolkata',
      name: 'Kolkata',
      country: 'India',
      type: 'lab',
      description: 'Eastern Region Laboratory'
    },
    // International locations
    {
      id: 'france',
      name: 'France',
      country: 'France',
      type: 'service-network',
      description: 'European Partnership'
    },
    {
      id: 'italy',
      name: 'Italy',
      country: 'Italy',
      type: 'service-network',
      description: 'European Partnership'
    },
    {
      id: 'china',
      name: 'China',
      country: 'China',
      type: 'service-network',  
      description: 'Asian Partnership'
    },
    {
      id: 'hong-kong',
      name: 'Hong Kong',
      country: 'Hong Kong',
      type: 'service-network',  
      description: 'Asian Partnership'
    },
    {
      id: 'bangladesh',
      name: 'Bangladesh',
      country: 'Bangladesh',
      type: 'service-network',
      description: 'Regional Partnership'
    },
    {
      id: 'vietnam',
      name: 'Vietnam',
      country: 'Vietnam',
      type: 'service-network',
      description: 'Southeast Asian Partnership'
    },
    {
      id: 'sri-lanka',
      name: 'Sri Lanka',
      country: 'Sri Lanka',
      type: 'service-network',
      description: 'Regional Partnership'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-primary/90 to-secondary/90 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold">Our Global Presence</h1>
          <p className="text-xl mt-4 max-w-2xl mx-auto">
            Expanding quality assurance across India and building partnerships worldwide
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Our Presence' }]} />
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6" style={{color: '#48009f'}}>Building a Global Network of Excellence</h2>
          <p className="text-lg text-neutral-700 leading-relaxed">
            EuroAsia has established a strong presence across India with multiple laboratories and testing centers, 
            while building strategic partnerships worldwide to deliver comprehensive quality assurance services 
            to our global clientele.
          </p>
        </div>
      </section>

      {/* World Map Section */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{color: '#48009f'}}>
              Our Service Network
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              From our headquarters in Gurugram to partnerships across Asia and Europe
            </p>
          </div>

          {/* Map Container */}
          <div className="relative">
            <LeafletWorldMap />

            {/* Map Legend */}
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-slate-200 z-[1000]">
              <h3 className="font-semibold text-slate-800 mb-3">Legend</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <div 
                    className="w-3 h-3 rounded-full shadow-sm"
                    style={{ backgroundColor: '#ab21a1' }}
                  ></div>
                  <span className="text-slate-700 font-medium">Laboratories in India</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div 
                    className="w-3 h-3 rounded-full shadow-sm"
                    style={{ backgroundColor: '#48009f' }}
                  ></div>
                  <span className="text-slate-700 font-medium">Service Networks</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-slate-300 rounded shadow-sm"></div>
                  <span className="text-slate-700 font-medium">Interactive Map - Click markers for details</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Service Networks */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{color: '#48009f'}}>
              Our Service Networks
            </h2>
          </div>

          {/* International Partnerships Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {locations.filter(loc => loc.country !== 'India').map((location) => (
              <div key={location.id} className="group bg-white rounded-xl p-6 border border-neutral-200 hover:border-primary hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center group-hover:bg-secondary transition-all duration-300">
                      <svg className="w-6 h-6 text-secondary group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-neutral-900 group-hover:text-secondary transition-colors duration-300">{location.name}</h4>
                    <p className="text-sm text-neutral-600 mt-1 leading-relaxed">{location.description}</p>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Labs in India */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{color: '#48009f'}}>
              Labs in India
            </h2>
          </div>

          {/* India Locations Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {locations.filter(loc => loc.country === 'India').map((location) => (
              <div key={location.id} className="group bg-white rounded-xl p-6 border border-neutral-200 hover:border-primary hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary transition-all duration-300">
                      <svg className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-neutral-900 group-hover:text-primary transition-colors duration-300">{location.name}</h4>
                    <p className="text-sm text-neutral-600 mt-1 leading-relaxed">{location.description}</p>
                    {location.type === 'headquarters' && (
                      <span className="inline-block mt-3 px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                        Headquarters
                      </span>
                    )}
                    {location.type === 'office' && (
                      <span className="inline-block mt-3 px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                        Office
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      

      <CallToAction />
      <Footer />
    </div>
  );
}
