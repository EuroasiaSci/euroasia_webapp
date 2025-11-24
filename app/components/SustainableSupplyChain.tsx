export default function SustainableSupplyChain() {
  const stages = [
    {
      id: 1,
      title: "Product Concept",
      icon: (
        <svg className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      points: [
        "Quick Scan on Prototype",
        "Collection Review",
        "Risk assessment",
        "Product Concept Assessment"
      ]
    },
    {
      id: 2,
      title: "Vendor Assessment",
      icon: (
        <svg className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      points: [
        "Supplier Verification (SV)",
        "Factory Assessment (FA)",
        "Technical Audit (TA)",
        "Social Compliance Audit (SCA)",
        "Environment Audit (EA)"
      ]
    },
    {
      id: 3,
      title: "Product Validation",
      icon: (
        <svg className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      points: [
        "Testing",
        "Benchmark Product Assessment (BPA)"
      ]
    },
    {
      id: 4,
      title: "Mass Production",
      icon: (
        <svg className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      points: [
        "Fabric Inspection (FAB)",
        "Initial Production Inspection (IPI)",
        "During Production Inspection (DPI)",
        "Sample Picking (SAP)"
      ]
    },
    {
      id: 5,
      title: "Delivery & Expedition",
      icon: (
        <svg className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      points: [
        "Final Random Inspection (FRI)",
        "Complete Assurance Program (100% Inspection)" ,
        "Packing Compliance Inspection (PCI)",
        "Container Loading Supervision (CLS)"
      ]
    }
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 lg:mb-4 px-4" style={{color: '#48009f'}}>
            Sustainable Supply Chain
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-neutral-600 max-w-3xl mx-auto px-4 leading-relaxed">
            Our comprehensive supply chain management ensures quality, compliance, and sustainability 
            at every stage of your product journey.
          </p>
        </div>

        {/* Stages Grid with Connection Lines */}
        <div className="relative">
          {/* Connection Lines - Hidden on mobile, visible on larger screens */}
          <div className="hidden xl:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 z-0"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16 relative z-10">
            {stages.map((stage) => (
              <div key={stage.id} className="group relative bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 border border-neutral-200 hover:border-primary hover:shadow-medium transition-all duration-300 hover:-translate-y-1 overflow-hidden min-h-[320px] flex flex-col items-center text-center">
                {/* Icon with hover effect similar to WhyChooseUs */}
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {stage.icon}
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-neutral-900 mb-4 group-hover:text-primary transition-colors duration-300 leading-tight">
                  {stage.title}
                </h3>

                {/* Points List */}
                <ul className="space-y-2 text-left">
                  {stage.points.map((point, pointIndex) => {
                    const pointText = typeof point === 'string' ? point : point.text;
                    const isHighlighted = typeof point === 'object' && point.highlight;
                    return (
                      <li key={pointIndex} className="flex items-start">
                        <svg className={`w-3 h-3 sm:w-4 sm:h-4 mt-0.5 mr-2 flex-shrink-0 ${isHighlighted ? 'text-blue-600' : 'text-primary'}`} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className={`text-xs sm:text-sm leading-relaxed ${isHighlighted ? 'text-black font-semibold' : 'text-black'}`}>
                          {pointText}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

       
      </div>
    </section>
  );
}