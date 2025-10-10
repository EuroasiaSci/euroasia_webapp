'use client';

import { useState, useEffect } from 'react';

export default function ClientTestimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "Quality Manager",
      company: "TechCorp Industries",
      image: "SJ",
      content: "EUROASIA has been our trusted testing partner for over 5 years. Their attention to detail and quick turnaround times have been instrumental in maintaining our quality standards. Highly recommended!",
      rating: 5
    },
    {
      name: "Michael Chen",
      position: "R&D Director",
      company: "PharmaSolutions",
      image: "MC",
      content: "The expertise of EUROASIA's team is unmatched. They helped us navigate complex regulatory requirements and delivered accurate results that exceeded our expectations. Truly professional service.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      position: "Environmental Compliance Officer",
      company: "GreenEarth Corp",
      image: "ER",
      content: "EUROASIA's environmental testing services have been crucial for our compliance monitoring. Their comprehensive reports and expert consultation have saved us time and resources.",
      rating: 5
    },
    {
      name: "David Thompson",
      position: "Production Manager",
      company: "FoodTech Ltd",
      image: "DT",
      content: "Outstanding food safety testing services! EUROASIA's team understands the food industry's unique challenges and provides solutions that help us maintain the highest safety standards.",
      rating: 5
    },
    {
      name: "Lisa Wang",
      position: "Materials Engineer",
      company: "AutoParts Manufacturing",
      image: "LW",
      content: "The material testing services provided by EUROASIA have been essential for our product development. Their advanced equipment and expert analysis give us confidence in our materials.",
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied clients have to say 
            about our laboratory testing services and commitment to excellence.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-medium">
            {/* Testimonial Content */}
            <div className="text-center mb-8">
              {/* Rating Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl lg:text-2xl text-neutral-700 leading-relaxed mb-8">
                &ldquo;{testimonials[currentTestimonial].content}&rdquo;
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonials[currentTestimonial].image}
                </div>
                <div className="text-left">
                  <div className="font-semibold text-neutral-900 text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-neutral-600">
                    {testimonials[currentTestimonial].position}
                  </div>
                  <div className="text-primary font-medium">
                    {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-neutral-100 hover:bg-primary hover:text-white transition-all duration-200"
                aria-label="Previous testimonial"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentTestimonial
                        ? 'bg-primary scale-125'
                        : 'bg-neutral-300 hover:bg-neutral-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-neutral-100 hover:bg-primary hover:text-white transition-all duration-200"
                aria-label="Next testimonial"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-gradient mb-4">
              Trusted by Industry Leaders
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="text-center">
              <div className="text-2xl font-bold text-neutral-400 mb-2">ISO 17025</div>
              <div className="text-sm text-neutral-500">Certified</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-neutral-400 mb-2">FDA</div>
              <div className="text-sm text-neutral-500">Approved</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-neutral-400 mb-2">CE</div>
              <div className="text-sm text-neutral-500">Marked</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-neutral-400 mb-2">GMP</div>
              <div className="text-sm text-neutral-500">Compliant</div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-medium">
            <h3 className="text-2xl font-bold text-gradient mb-4">
              Ready to Join Our Satisfied Clients?
            </h3>
            <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
              Experience the EUROASIA difference. Contact us today to discuss your 
              testing needs and discover why industry leaders trust us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors duration-200 font-semibold"
              >
                Get Started Today
              </a>
              <a
                href="/about"
                className="border-2 border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-white transition-all duration-200 font-semibold"
              >
                Learn More About Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
