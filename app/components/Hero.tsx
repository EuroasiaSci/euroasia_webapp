import Link from 'next/link';

export default function Hero() {
  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative bg-cover bg-center bg-no-repeat overflow-hidden min-h-[75vh] flex items-center" style={{backgroundImage: 'url(/images/Euroasia_hero_image.jpg)'}}>
        {/* Overlay with gradient mask to match brand colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-secondary/60 to-primary/90"></div>
        
        {/* Additional overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28 z-10">
          <div className="text-center space-y-8 lg:space-y-12">
            
            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
                Elevating Excellence
                <br />
                Through Rigorous Testing
              </h1>
              
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-4xl mx-auto">
                Your trusted partner in quality assurance. We deliver comprehensive testing, 
                inspection, and certification solutions with unmatched precision.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link
                href="/contact"
                className="group px-8 py-4 rounded-xl hover:opacity-90 transition-all duration-300 font-semibold text-center shadow-medium hover:shadow-large transform hover:-translate-y-1 flex items-center justify-center space-x-2 text-white"
                style={{backgroundColor: '#ab21a1'}}
              >
                <span>Get Free Quote</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="group bg-white px-8 py-4 rounded-xl hover:opacity-90 transition-all duration-300 font-semibold text-center shadow-soft hover:shadow-medium flex items-center justify-center space-x-2 border-2"
                style={{color: '#ab21a1', borderColor: '#ab21a1'}}
              >
                <span>Explore Services</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-8 border-t border-white/30">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm text-white/90 font-medium">ISO 17025 certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-white/90 font-medium">Trusted by Industry Leaders</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Announcement Banner */}
      <section className="relative -mt-16 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-6 lg:p-8 shadow-large">
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
              <div className="text-center lg:text-left">
                
                <p className="text-white/90 text-sm lg:text-base max-w-2xl">
                  At EuroAsia, we are dedicated to providing a wide array of scientific services to meet the unique needs of our clients. We specialize in an extensive range of areas, including Textiles, Footwear, Toys, Food, and Cosmetic product&apos;s testing & inspection. We take immense pride in our leadership as an independent market player, particularly in the field of Consumer Products quality assurance.
                </p>
              </div>
              <Link
                href="/about"
                className="bg-white text-primary px-6 py-3 rounded-xl hover:bg-neutral-100 transition-colors duration-200 font-semibold flex items-center space-x-2"
              >
                <span>Learn More</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
         

          {/* Values Grid - Clean Vertical Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-x divide-gray-200">
            {/* Quality */}
            <div className="px-8 py-12 text-center flex flex-col items-center">
              <div className="flex justify-center mb-6">
                <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4 text-center">
                Quality
              </h3>
              <p className="text-gray-600 leading-relaxed text-center">
                Uncompromising commitment to excellence in every test, inspection, and certification service we provide.
              </p>
            </div>

            {/* Trust */}
            <div className="px-8 py-12 text-center flex flex-col items-center">
              <div className="flex justify-center mb-6">
                <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4 text-center">
                Trust
              </h3>
              <p className="text-gray-600 leading-relaxed text-center">
                Building lasting relationships through reliable, accurate, and transparent testing and certification processes.
              </p>
            </div>

            {/* Certified */}
            <div className="px-8 py-12 text-center flex flex-col items-center">
              <div className="flex justify-center mb-6">
                <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4 text-center">
                Certified
              </h3>
              <p className="text-gray-600 leading-relaxed text-center">
                ISO 17025 certified laboratory ensuring international standards compliance and professional excellence.
              </p>
            </div>

            {/* Sustainability */}
            <div className="px-8 py-12 text-center flex flex-col items-center">
              <div className="flex justify-center mb-6">
                <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4 text-center">
                Sustainability
              </h3>
              <p className="text-gray-600 leading-relaxed text-center">
                Committed to environmentally responsible practices and sustainable solutions for a better future.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
