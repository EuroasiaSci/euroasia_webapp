import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Quality Policy', href: '/quality-policy' },
      { name: 'Impartiality Policy', href: '/euroasiarsj-impartiality-policy' },
      { name: 'Company Brochure', href: '/files/Broucher.docx', external: true },
    ],
    services: [
      { name: 'Testing Services', href: '/services' },
      { name: 'Inspection Services', href: '/services' },
      { name: 'Certification Services', href: '/services' },
      { name: 'Audit Services', href: '/services' },
    ],
    industries: [
      { name: 'Food & Feed', href: '/industries/food-feed' },
      { name: 'Consumer Products', href: '/industries/consumer-products' },
      { name: 'Cosmetics & Personal Care', href: '/industries/cosmetics-personal-care' },
      { name: 'Pharmaceutical', href: '/industries/pharmaceutical' },
    ],
    support: [
      { name: 'Contact Us', href: '/contact' },
      { name: 'Support Center', href: '/support' },
      { name: 'Documentation', href: '/docs' },
      { name: 'FAQ', href: '/faq' },
    ],
  };

  return (
    <footer className="bg-white border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center mb-3 sm:mb-4">
              <Image
                src="/images/euroasia_logo-removebg.png"
                alt="EUROASIA Lab Testing"
                width={180}
                height={50}
                className="h-8 sm:h-10 lg:h-12 w-auto"
              />
            </div>
            <p className="text-neutral-600 mb-4 sm:mb-6 max-w-md text-sm sm:text-base">
            We exist to create experiences where passion and purpose come together.
            </p>
            
            {/* Contact Information */}
            <div className="mb-4 sm:mb-6 space-y-3">
              <div className="flex items-start space-x-3">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="text-neutral-600 text-xs sm:text-sm">
                  <p className="font-medium text-neutral-900">Address:</p>
                  <p>D-25, 1st Floor, Info City-2,</p>
                  <p>Sector - 33, Gurugram, Haryana - 122001, India</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div className="text-neutral-600 text-xs sm:text-sm">
                  <p className="font-medium text-neutral-900 mb-1">Email:</p>
                  <div className="space-y-1">
                    <div>
                      <span className="text-neutral-700 font-medium">Lab Testing: </span>
                      <a href="mailto:enquiry.esi@euroasiasci.com" className="hover:text-primary transition-colors duration-200">
                        enquiry.esi@euroasiasci.com
                      </a>
                    </div>
                    <div>
                      <span className="text-neutral-700 font-medium">Inspection: </span>
                      <a href="mailto:inspection.esi@euroasiasci.com" className="hover:text-primary transition-colors duration-200">
                        inspection.esi@euroasiasci.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/euroasiasci/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-primary transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-neutral-900">Company</h3>
            <ul className="space-y-1 sm:space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-600 hover:text-primary transition-colors duration-200 text-sm sm:text-base"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-neutral-600 hover:text-primary transition-colors duration-200 text-sm sm:text-base"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-neutral-900">Services</h3>
            <ul className="space-y-1 sm:space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-600 hover:text-primary transition-colors duration-200 text-sm sm:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-neutral-900">Industries</h3>
            <ul className="space-y-1 sm:space-y-2">
              {footerLinks.industries.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-600 hover:text-primary transition-colors duration-200 text-sm sm:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-neutral-200 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <div className="text-neutral-500 text-xs sm:text-sm text-center sm:text-left">
              © {currentYear} Euroasia Scientific India Pvt. Ltd. All rights reserved.
            </div>
            <div className="flex space-x-4 sm:space-x-6">
              <Link
                href="/privacy"
                className="text-neutral-500 hover:text-primary text-xs sm:text-sm transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              {/* <Link
                href="/terms"
                className="text-neutral-400 hover:text-white text-xs sm:text-sm transition-colors duration-200"
              >
                Terms of Service
              </Link> */}
              {/* <Link
                href="/cookies"
                className="text-neutral-400 hover:text-white text-xs sm:text-sm transition-colors duration-200"
              >
                Cookie Policy
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
