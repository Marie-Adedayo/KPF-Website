// components/Impact/HealthcareTab.tsx
import React from 'react';

const HealthcareTab: React.FC = () => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <div className="bg-red-100 p-3 rounded-full mr-4">
            <i className="fas fa-heartbeat text-2xl text-red-600"></i>
          </div>
          <h2 className="text-3xl font-bold text-gray-800">Healthcare Impact</h2>
        </div>
        <p className="text-gray-600 mb-12">
          Our healthcare initiatives aim to improve access to quality medical services in underserved communities.
          Through mobile clinics, community health worker training, and healthcare facility improvements, we're 
          bringing essential medical care to those who need it most.
        </p>
        {/* Cards and chart... */}
      </div>
    </div>
  </section>
);

export default HealthcareTab;