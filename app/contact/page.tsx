'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    phone: '',
    email: '',
    address: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Header Section */}
      <section className="relative bg-gradient-to-r from-primary/90 to-secondary/90 py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Have a question, need more information, or interested in partnering with us? 
              We&apos;d love to hear from you. Use the contact details below or fill out the form, 
              and we&apos;ll get back to you promptly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Email Card */}
            <div className="bg-white rounded-xl p-8 shadow-soft border border-neutral-200">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">Email Address</h3>
                  <p className="text-neutral-600">enquiry.es@euroasiasl.com</p>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-white rounded-xl p-8 shadow-soft border border-neutral-200">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">Location</h3>
                  <p className="text-neutral-600">
                    D-25, Info City - II, Sector - 34, Gurugram, Haryana - 122001
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-900 mb-12 text-center">Send Message</h2>
            
            <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 shadow-soft border border-neutral-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-3 border-0 border-b-2 border-neutral-300 focus:border-primary focus:outline-none transition-colors duration-200"
                      placeholder="Your full name"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-3 border-0 border-b-2 border-neutral-300 focus:border-primary focus:outline-none transition-colors duration-200"
                      placeholder="Your phone number"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-3 border-0 border-b-2 border-neutral-300 focus:border-primary focus:outline-none transition-colors duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                      How we can help? *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-3 py-3 border-0 border-b-2 border-neutral-300 focus:border-primary focus:outline-none transition-colors duration-200 resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* Company Name */}
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-neutral-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-3 border-0 border-b-2 border-neutral-300 focus:border-primary focus:outline-none transition-colors duration-200"
                      placeholder="Your company name"
                    />
                  </div>

                  {/* Address */}
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-neutral-700 mb-2">
                      Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-3 py-3 border-0 border-b-2 border-neutral-300 focus:border-primary focus:outline-none transition-colors duration-200"
                      placeholder="Your address"
                    />
                  </div>

                  {/* Select Service */}
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-2">
                      Select Service
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-3 py-3 border-0 border-b-2 border-neutral-300 focus:border-primary focus:outline-none transition-colors duration-200 bg-white"
                    >
                      <option value="">-</option>
                      <option value="testing">Testing Services</option>
                      <option value="inspection">Inspection Services</option>
                      <option value="certification">Certification Services</option>
                      <option value="audit">Audit Services</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-12 text-center">
                <button
                  type="submit"
                  className="bg-primary text-white px-12 py-4 rounded-lg hover:bg-primary-dark transition-colors duration-200 font-semibold text-lg shadow-medium hover:shadow-large transform hover:-translate-y-1"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
