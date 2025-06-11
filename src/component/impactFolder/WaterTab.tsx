
// components/Impact/WaterTab.tsx
import React from 'react';

const WaterTab: React.FC = () => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <div className="bg-cyan-100 p-3 rounded-full mr-4">
            <i className="fas fa-tint text-2xl text-cyan-600"></i>
          </div>
          <h2 className="text-3xl font-bold text-gray-800">Water Access Impact</h2>
        </div>
        <p className="text-gray-600 mb-12">
          Clean water is fundamental to health, education, and economic development. Our water initiatives focus on 
          installing wells, water purification systems, and rainwater harvesting systems to provide sustainable 
          access to clean water for communities across Africa.
        </p>
        {/* Cards and chart... */}
      </div>
    </div>
  </section>
);

export default WaterTab;