'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';

export default function QualityPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-primary/90 to-secondary/90 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold">Quality Policy</h1>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Quality Policy' }]} />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary/5 via-white to-secondary/5 rounded-2xl p-8 sm:p-12 shadow-large border border-neutral-100">
            
            {/* Introduction */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                Our Commitment to Quality
              </h2>
              <p className="text-lg text-neutral-700 leading-relaxed">
                At Euroasia Scientific India Pvt. Ltd. We are committed to delivering independent, impartial, and reliable inspection services that consistently meet client requirements and comply with applicable regulations and international standards.
              </p>
            </div>

            {/* Policy Commitments */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6 text-center">
                To Uphold This Commitment, The Management Ensures That:
              </h3>
              
              <div className="space-y-6">
                {/* Commitment 1 */}
                <div className="bg-white rounded-xl p-6 shadow-medium border border-neutral-200 hover:border-primary transition-all duration-300">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-neutral-900 mb-3">Integrity & Objectivity</h4>
                      <p className="text-neutral-700 leading-relaxed">
                        All inspection activities are carried out with integrity, objectivity, and without any conflict of interest.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Commitment 2 */}
                <div className="bg-white rounded-xl p-6 shadow-medium border border-neutral-200 hover:border-primary transition-all duration-300">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-neutral-900 mb-3">Highest Standards</h4>
                      <p className="text-neutral-700 leading-relaxed">
                        We maintain the highest standards of impartiality, confidentiality, transparency, and ethical conduct in every aspect of our work.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Commitment 3 */}
                <div className="bg-white rounded-xl p-6 shadow-medium border border-neutral-200 hover:border-primary transition-all duration-300">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-neutral-900 mb-3">Clear & Unbiased Reports</h4>
                      <p className="text-neutral-700 leading-relaxed">
                        We provide clear, precise, and unbiased inspection reports, enabling clients to make informed decisions with confidence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quality Assurance Section */}
            <div className="bg-white rounded-xl p-8 shadow-large border-2 border-primary/20 mb-8">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6 text-center">Quality Assurance</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-neutral-700">Compliance with international standards</p>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-neutral-700">Regular training and competency development</p>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-neutral-700">Continuous improvement processes</p>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-neutral-700">State-of-the-art equipment and methodologies</p>
                </div>
              </div>
            </div>

            {/* Download Section */}
            <div className="pt-8 border-t border-neutral-200">
              <div className="text-center">
                <p className="text-neutral-700 mb-6">
                  For the complete Quality Policy document, please download below:
                </p>
                <a
                  href="/files/Quality Policy.docx"
                  download
                  className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary-dark transition-all duration-200 font-semibold shadow-medium hover:shadow-large"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Quality Policy (DOCX)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              Questions About Our Quality Standards?
            </h2>
            <p className="text-xl text-neutral-600 mb-8 max-w-3xl mx-auto">
              If you have any questions about our quality policy or our commitment to excellence, 
              please don&apos;t hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary-dark transition-colors duration-200 font-semibold text-lg"
              >
                Contact Us
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

      <Footer />
    </div>
  );
}
