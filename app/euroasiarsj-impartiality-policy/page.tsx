'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import Image from 'next/image';

export default function ImpartialityPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-primary/90 to-secondary/90 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold">Policy to Safeguard Impartiality</h1>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Impartiality Policy' }]} />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary/5 via-white to-secondary/5 rounded-2xl p-8 sm:p-12 shadow-large border border-neutral-100">
            
            {/* Introduction */}
            <div className="mb-12">
              <div className="flex items-start mb-6">
                <svg className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-neutral-700 leading-relaxed text-lg">
                  Euroasia Scientific India Pvt. Ltd. understands the importance of impartiality and objectivity in carrying out inspection activities and is committed to safeguard the impartiality, independence and conflict of Interest. Maintaining and demonstrating the highest levels of professional integrity.
                </p>
              </div>
            </div>

            {/* Policy Points */}
            <div className="space-y-5">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-neutral-700 leading-relaxed">
                  The organization ensures that its inspection services are conducted independently and are not influenced by any internal or external pressures, including those from laboratory activities under ISO/IEC 17025.
                </p>
              </div>

              <div className="flex items-start">
                <svg className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-neutral-700 leading-relaxed">
                  Inspection activities are organizationally and functionally independent from testing or any other services that may present a potential conflict of interest.
                </p>
              </div>

              <div className="flex items-start">
                <svg className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-neutral-700 leading-relaxed">
                  The ownership, governance, management, personnel, shared resources, finances, contracts, training, marketing, payment of sales commission, or other inducement for referral of new clients do not compromise independency and impartiality of the services.
                </p>
              </div>

              <div className="flex items-start">
                <svg className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-neutral-700 leading-relaxed">
                  Euroasia not providing the inspection service at any facility where its owners, managers, Inspectors are involved in design, manufacture, supply, installation, use or maintenance of the items it inspected.
                </p>
              </div>

              <div className="flex items-start">
                <svg className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-neutral-700 leading-relaxed">
                  Euroasia does not use any inspectors who has involved in providing above activity of the inspected item.
                </p>
              </div>

              <div className="flex items-start">
                <svg className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-neutral-700 leading-relaxed">
                  Adhering to good governance, being honest & trustworthy and implement adequate measures to ensure to uphold these principles.
                </p>
              </div>

              <div className="flex items-start">
                <svg className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-neutral-700 leading-relaxed">
                  Remuneration of inspectors and other employees is independent and not influenced in any way to Inspection service results / findings.
                </p>
              </div>

              <div className="flex items-start">
                <svg className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-neutral-700 leading-relaxed">
                  The management has conducted a risk assessment to identify potential conflicts of interest between the laboratory and inspection activities and has implemented appropriate segregation of functions.
                </p>
              </div>

              <div className="flex items-start">
                <svg className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-neutral-700 leading-relaxed">
                  All inspection personnel shall declare any existing or potential conflicts of interest and must refrain from performing inspections where impartiality could be compromised.
                </p>
              </div>

              <div className="flex items-start">
                <svg className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-neutral-700 leading-relaxed">
                  The organization does not engage in any activities that may compromise the impartiality of inspections, such as consultancy for the clients being inspected.
                </p>
              </div>

              <div className="flex items-start">
                <svg className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-neutral-700 leading-relaxed">
                  A designated Impartiality Committee or equivalent oversight body reviews all risks related to impartiality, and regularly monitors the integrity of inspection services.
                </p>
              </div>

              <div className="flex items-start">
                <svg className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-neutral-700 leading-relaxed">
                  Euroasia ensures that commercial, financial, or other pressures do not influence the outcomes of inspection work.
                </p>
              </div>
            </div>

           

            {/* Download Section */}
            <div className="mt-8 pt-8 border-t border-neutral-200">
              <div className="text-center">
                <p className="text-neutral-700 mb-6">
                  For the complete Policy to Safeguard Impartiality, please download the document below:
                </p>
                <a
                  href="/files/Policy to Safeguard Impartiality.pdf"
                  download
                  className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary-dark transition-all duration-200 font-semibold shadow-medium hover:shadow-large"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Impartiality Policy (PDF)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Documents Images */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">Policy Documents</h2>
          <div className="space-y-8">
            {/* Policy to Safeguard Impartiality */}
            <div className="bg-white rounded-xl shadow-large p-6 border border-neutral-200">
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">Policy to Safeguard Impartiality</h3>
              <div className="relative w-full overflow-hidden rounded-lg border border-neutral-200">
                <Image
                  src="/images/policy_to_safaguard_impartiality.PNG"
                  alt="Policy to Safeguard Impartiality"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Confidentiality Policy */}
            <div className="bg-white rounded-xl shadow-large p-6 border border-neutral-200">
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">Confidentiality Policy</h3>
              <div className="relative w-full overflow-hidden rounded-lg border border-neutral-200">
                <Image
                  src="/images/confidentiality_policy.PNG"
                  alt="Confidentiality Policy"
                  className="w-full h-auto"
                />
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
              Questions About Our Policies?
            </h2>
            <p className="text-xl text-neutral-600 mb-8 max-w-3xl mx-auto">
              If you have any questions about our impartiality policy or any other policies, 
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