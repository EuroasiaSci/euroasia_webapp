'use client';

import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Elevating Excellence
        </h2>
        <p className="text-xl sm:text-2xl text-white mb-8">
          Through Rigorous Testing
        </p>
        <Link 
          href="/contact"
          className="inline-block px-8 py-4 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
          style={{backgroundColor: '#ab21a1', border: 'none'}}
        >
          Reach us now
        </Link>
      </div>
    </section>
  );
}
