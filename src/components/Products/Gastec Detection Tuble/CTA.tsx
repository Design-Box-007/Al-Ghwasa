import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="text-white py-16 px-8 rounded-3xl mx-4 lg:mx-8" style={{ backgroundColor: 'rgba(15, 46, 83, 1)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Ready to Improve Your Gas Detection Accuracy?
            </h1>
            <p className="text-lg text-white/90 leading-relaxed">
              From product guidance to pricing — we're just one message away.
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-8 lg:space-y-12">
            <p className="text-lg text-white/90 leading-relaxed">
              Our team is here to help you select the right tubes, pumps, or kits for your environment. 
              Get expert advice, fast delivery, and reliable support.
            </p>
            
            {/* Button full width */}
            <div className="w-full">
              <button className="group bg-white text-gray-800 pl-8 pr-4 py-3 rounded-full font-medium text-base hover:bg-gray-50 transition-all duration-300 flex items-center justify-between w-full shadow-lg hover:shadow-xl">
                Get in Touch
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                  <svg 
                    className="w-5 h-5 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
