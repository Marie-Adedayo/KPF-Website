// components/Impact/StatsSummary.tsx
import React from 'react';

type Props = {
  selectedYear: number;
};

const StatsSummary: React.FC<Props> = ({ selectedYear }) => {
  return (
    <section className="bg-black/10 -mt-20 mb-8 z-10 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Repeat this block for each stat */}
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
            <div className="text-3xl font-bold text-white mb-1">65,000+</div>
            <div className="text-orange-300 text-sm">Lives Impacted</div>
            <div className="text-green-300 text-xs mt-2">
              <i className="fas fa-arrow-up mr-1"></i> 35% from {selectedYear - 1}
            </div>
          </div>
          {/* Add other 3 blocks... */}
        </div>
      </div>
    </section>
  );
};

export default StatsSummary;