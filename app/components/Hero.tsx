import Link from 'next/link';
import TypewriterText from './TypewriterText';

export default function Hero() {
  return (
    <>
      {/* Top Heading */}
      <section className="bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] min-h-[4rem] sm:min-h-[6rem] lg:min-h-[8rem] flex items-center justify-center">
            <TypewriterText
              texts={[
                "Elevating Excellence Through Rigorous Testing"
              ]}
              speed={80}
              deleteSpeed={40}
              pauseTime={3000}
              className="text-[#410798]"
            />
          </h1>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-neutral-50 to-white py-12 sm:py-16 lg:py-20 xl:py-32">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div className="space-y-6 sm:space-y-8 lg:space-y-10">
              <div className="space-y-4 sm:space-y-6">
              
              {/* Enhanced subheading */}
              <div className="space-y-3 sm:space-y-4">
                <p className="text-lg sm:text-xl lg:text-2xl text-primary font-bold">
                  Your trusted partner in quality assurance
                </p>
                
                {/* Trust indicators */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm text-neutral-600">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></div>
                    <span>ISO 17025 Certified</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></div>
                    <span>2+ Years Experience</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Concise, engaging content */}
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg lg:text-xl text-neutral-700 leading-relaxed">
                We provide comprehensive testing, inspection, audit, and certification solutions 
                that ensure the highest standards of <strong className="text-primary">safety</strong> and 
                <strong className="text-secondary"> sustainability</strong>.
              </p>
              
              {/* <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-l-4 border-primary p-4 sm:p-6 rounded-r-lg">
                <p className="text-sm sm:text-base lg:text-lg text-neutral-800 font-medium">
                  Trusted by 50+ companies for accurate, reliable, and certified results.
                </p>
              </div> */}
            </div>

            {/* Enhanced Key Features */}
            {/* <div className="bg-white rounded-xl p-6 shadow-soft border border-neutral-200">
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">Why Choose EuroAsia?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-secondary rounded-full flex-shrink-0"></div>
                  <span className="text-neutral-700 font-medium">Safety First Approach</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-secondary rounded-full flex-shrink-0"></div>
                  <span className="text-neutral-700 font-medium">Sustainability Focus</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-secondary rounded-full flex-shrink-0"></div>
                  <span className="text-neutral-700 font-medium">Uncompromising Quality</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-secondary rounded-full flex-shrink-0"></div>
                  <span className="text-neutral-700 font-medium">Comprehensive Solutions</span>
                </div>
              </div>
            </div> */}

            {/* Trust Indicators */}
            <div className="pt-6 sm:pt-8 border-t border-neutral-200">
              <p className="text-xs sm:text-sm text-neutral-500 mb-3 sm:mb-4">Trusted by leading companies</p>
              <div className="grid grid-cols-3 gap-4 sm:flex sm:items-center sm:space-x-4 lg:space-x-8 opacity-60">
                <div className="text-center sm:text-left">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-neutral-400">50+</div>
                  <div className="text-xs sm:text-sm text-neutral-500">Clients</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-neutral-400">99.9%</div>
                  <div className="text-xs sm:text-sm text-neutral-500">Accuracy</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-neutral-400">2+</div>
                  <div className="text-xs sm:text-sm text-neutral-500">Years</div>
                </div>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6 sm:pt-8">
              <Link
                href="/contact"
                className="group bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-primary-dark transition-all duration-300 font-semibold text-center shadow-medium hover:shadow-large transform hover:-translate-y-1 flex items-center justify-center space-x-2 text-sm sm:text-base"
              >
                <span>Get Free Quote</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="group border-2 border-primary text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-primary hover:text-white transition-all duration-300 font-semibold text-center flex items-center justify-center space-x-2 text-sm sm:text-base"
              >
                <span>View Services</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Industries We Serve Visual */}
          <div className="relative mt-8 sm:mt-12 lg:mt-16">
            {/* Main Industries Card */}
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-large transform hover:scale-105 transition-transform duration-300">
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8">
                {/* Industries Icons */}
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  <div className="text-center space-y-2 sm:space-y-3">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                      <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-neutral-900 text-sm sm:text-base">Food & Feed</h4>
                    <p className="text-xs sm:text-sm text-neutral-600">Quality & Safety</p>
                  </div>
                  
                  <div className="text-center space-y-2 sm:space-y-3">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                      <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-neutral-900 text-sm sm:text-base">Consumer Products</h4>
                    <p className="text-xs sm:text-sm text-neutral-600">Market Compliance</p>
                  </div>
                  
                  <div className="text-center space-y-2 sm:space-y-3">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto">
                      <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-neutral-900 text-sm sm:text-base">Cosmetics & Personal Care</h4>
                    <p className="text-xs sm:text-sm text-neutral-600">Quality Assurance</p>
                  </div>
                  
                  <div className="text-center space-y-2 sm:space-y-3">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                      <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-neutral-900 text-sm sm:text-base">Pharmaceutical</h4>
                    <p className="text-xs sm:text-sm text-neutral-600">Safety & Efficacy</p>
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg sm:rounded-xl p-4 sm:p-6 text-center">
                  <h3 className="text-base sm:text-lg font-bold text-neutral-900 mb-3 sm:mb-2">Trusted Excellence</h3>
                  <div className="grid grid-cols-3 gap-4 sm:flex sm:justify-center sm:space-x-6 lg:space-x-8 text-xs sm:text-sm text-neutral-600">
                    <div>
                      <div className="text-lg sm:text-xl lg:text-2xl font-bold text-primary">99.9%</div>
                      <div>Accuracy</div>
                    </div>
                    <div>
                      <div className="text-lg sm:text-xl lg:text-2xl font-bold text-primary">50+</div>
                      <div>Clients</div>
                    </div>
                    <div>
                      <div className="text-lg sm:text-xl lg:text-2xl font-bold text-primary">2+</div>
                      <div>Years</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-10 h-10 bg-accent rounded-full flex items-center justify-center shadow-large animate-bounce">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-secondary rounded-full flex items-center justify-center shadow-large">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
