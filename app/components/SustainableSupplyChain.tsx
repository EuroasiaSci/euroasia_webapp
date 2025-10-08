export default function SustainableSupplyChain() {
  const stages = [
    {
      id: 1,
      title: "Product Concept",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      points: [
        "Testing",
        "Quick Scan on Prototype",
        "Collection Review",
        "Risk Assessment",
        "Product Concept Assessment"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "Vendor Assessment",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      points: [
        "Factory Assessment",
        "COC (Certificate of Conformity)",
        "Environment Audit",
        "Technical Audit"
      ],
      color: "from-green-500 to-green-600"
    },
    {
      id: 3,
      title: "Product Validation",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      points: [
        "Testing",
        "Pre-Production Assessment",
        "Performance Evaluation",
        "Construction Check",
        "Compliance Testing",
        "Performance Benchmarking Check"
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 4,
      title: "Mass Production",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      points: [
        "Initial Product Inspection",
        "During Production Inspection",
        "Picking (Pre-Shipment Inspection)",
        "Control Plans"
      ],
      color: "from-orange-500 to-orange-600"
    },
    {
      id: 5,
      title: "Delivery & Expedition",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      points: [
        "Final Random Inspection",
        "Sample Picking",
        "Loading Supervision"
      ],
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 mb-2 sm:mb-3 lg:mb-4 px-4">
            Sustainable <span className="text-gradient">Supply Chain</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-neutral-600 max-w-3xl mx-auto px-4 leading-relaxed">
            Our comprehensive supply chain management ensures quality, compliance, and sustainability 
            at every stage of your product journey.
          </p>
        </div>

        {/* Stages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
          {stages.map((stage, index) => (
            <div key={stage.id} className="group relative bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 border border-neutral-200 hover:border-primary hover:shadow-medium transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stage.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${stage.color} text-white rounded-lg sm:rounded-xl mb-3 sm:mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {stage.icon}
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-neutral-900 mb-2 sm:mb-3 lg:mb-4 group-hover:text-primary transition-colors duration-300 leading-tight">
                  {stage.title}
                </h3>

                {/* Points List */}
                <ul className="space-y-1 sm:space-y-2">
                  {stage.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs sm:text-sm text-neutral-600 leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section - Matching Industries We Serve */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 text-center">
            <div className="p-2 sm:p-3">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-primary mb-1 sm:mb-2">5</div>
              <div className="text-xs sm:text-sm md:text-base text-neutral-600 leading-tight">Supply Chain Stages</div>
            </div>
            <div className="p-2 sm:p-3">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-primary mb-1 sm:mb-2">100%</div>
              <div className="text-xs sm:text-sm md:text-base text-neutral-600 leading-tight">Quality Assurance</div>
            </div>
            <div className="p-2 sm:p-3">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-primary mb-1 sm:mb-2">24/7</div>
              <div className="text-xs sm:text-sm md:text-base text-neutral-600 leading-tight">Monitoring</div>
            </div>
            <div className="p-2 sm:p-3">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-primary mb-1 sm:mb-2">ISO</div>
              <div className="text-xs sm:text-sm md:text-base text-neutral-600 leading-tight">Certified</div>
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
}