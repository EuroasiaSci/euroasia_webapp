import Link from 'next/link';

export default function Hero() {
  return (
    <>
      {/* Hero Section with Background Pattern */}
      <section className="relative bg-gradient-to-br from-primary/5 via-white to-secondary/5 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 lg:space-y-10">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-soft border border-primary/10">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-neutral-700">ISO 17025 Certified Laboratory</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-neutral-900">Elevating Excellence</span>
                  <br />
                  <span className="text-gradient">Through Rigorous Testing</span>
                </h1>
                
                <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed max-w-xl">
                  Your trusted partner in quality assurance. We deliver comprehensive testing, 
                  inspection, and certification solutions with unmatched precision.
                </p>
              </div>

              {/* Key Features Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-soft border border-neutral-100 hover:shadow-medium transition-shadow duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">99.9%</div>
                      <div className="text-xs text-neutral-600">Accuracy Rate</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl shadow-soft border border-neutral-100 hover:shadow-medium transition-shadow duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-secondary">50+</div>
                      <div className="text-xs text-neutral-600">Satisfied Clients</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl shadow-soft border border-neutral-100 hover:shadow-medium transition-shadow duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent">24/7</div>
                      <div className="text-xs text-neutral-600">Support</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl shadow-soft border border-neutral-100 hover:shadow-medium transition-shadow duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">Fast</div>
                      <div className="text-xs text-neutral-600">Turnaround</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/contact"
                  className="group bg-primary text-white px-8 py-4 rounded-xl hover:bg-primary-dark transition-all duration-300 font-semibold text-center shadow-medium hover:shadow-large transform hover:-translate-y-1 flex items-center justify-center space-x-2"
                >
                  <span>Get Free Quote</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/services"
                  className="group bg-white text-primary border-2 border-primary px-8 py-4 rounded-xl hover:bg-primary hover:text-white transition-all duration-300 font-semibold text-center shadow-soft hover:shadow-medium flex items-center justify-center space-x-2"
                >
                  <span>Explore Services</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-neutral-200">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm text-neutral-600 font-medium">Certified Excellence</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-neutral-600 font-medium">Trusted by Industry Leaders</span>
                </div>
              </div>
            </div>

            {/* Right Visual Content */}
            <div className="relative">
              {/* Main Card */}
              <div className="bg-white rounded-3xl shadow-large p-8 space-y-6 border border-neutral-100">
                <div className="text-center space-y-2 pb-6 border-b border-neutral-100">
                  <h3 className="text-2xl font-bold text-neutral-900">Industries We Serve</h3>
                  <p className="text-sm text-neutral-600">Comprehensive testing solutions across sectors</p>
                </div>

                {/* Industries Grid */}
                <div className="grid grid-cols-2 gap-6">
                  <Link href="/industries/food-feed" className="group bg-gradient-to-br from-blue-50 to-blue-100/50 p-6 rounded-2xl hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1">
                    <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-neutral-900 text-center mb-1">Food & Feed</h4>
                    <p className="text-xs text-neutral-600 text-center">Quality Testing</p>
                  </Link>

                  <Link href="/industries/consumer-products" className="group bg-gradient-to-br from-green-50 to-green-100/50 p-6 rounded-2xl hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1">
                    <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-neutral-900 text-center mb-1">Consumer Products</h4>
                    <p className="text-xs text-neutral-600 text-center">Safety Standards</p>
                  </Link>

                  <Link href="/industries/cosmetics-personal-care" className="group bg-gradient-to-br from-pink-50 to-pink-100/50 p-6 rounded-2xl hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1">
                    <div className="w-14 h-14 bg-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-neutral-900 text-center mb-1">Cosmetics</h4>
                    <p className="text-xs text-neutral-600 text-center">Quality Assurance</p>
                  </Link>

                  <Link href="/industries/pharmaceutical" className="group bg-gradient-to-br from-purple-50 to-purple-100/50 p-6 rounded-2xl hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1 no-underline">
                    <div className="w-14 h-14 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-neutral-900 text-center mb-1">Pharmaceutical</h4>
                    <p className="text-xs text-neutral-600 text-center">Safety & Efficacy</p>
                  </Link>
                </div>

                {/* Bottom Stats */}
                <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-6 space-y-3">
                  <div className="flex items-center justify-center space-x-2 text-sm text-neutral-600">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">Certified & Accredited Testing Facility</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center pt-2">
                    <div>
                      <div className="text-2xl font-bold text-primary">2+</div>
                      <div className="text-xs text-neutral-600">Years Experience</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-secondary">100%</div>
                      <div className="text-xs text-neutral-600">Confidential</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent">Fast</div>
                      <div className="text-xs text-neutral-600">Results</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badges */}
              <div className="hidden lg:block absolute -top-6 -left-6 bg-white rounded-2xl shadow-large p-4 border border-neutral-100 animate-bounce">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-neutral-500">Certified</div>
                    <div className="text-sm font-bold text-neutral-900">ISO 17025</div>
                  </div>
                </div>
              </div>

              <div className="hidden lg:block absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-large p-4 border border-neutral-100">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-neutral-500">Response</div>
                    <div className="text-sm font-bold text-neutral-900">Quick Results</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
