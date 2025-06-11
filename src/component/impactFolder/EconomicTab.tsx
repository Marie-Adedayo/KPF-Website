// components/Impact/EconomicTab.tsx
import React from 'react';

const EconomicTab: React.FC = () => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <div className="bg-green-100 p-3 rounded-full mr-4">
            <i className="fas fa-seedling text-2xl text-green-600"></i>
          </div>
          <h2 className="text-3xl font-bold text-gray-800">Economic Empowerment Impact</h2>
        </div>
        <p className="text-gray-600 mb-12">
          Our economic empowerment initiatives focus on providing skills training, microloans, and business development 
          support to help individuals and communities achieve financial independence and build sustainable livelihoods.
        </p>
        {/* Cards and chart... */}
      </div>
    </div>
  </section>
);

export default EconomicTab;