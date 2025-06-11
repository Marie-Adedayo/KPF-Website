// components/Impact/HeroSection.tsx
import React from 'react';

type Props = {
  selectedYear: number;
  setSelectedYear: (year: number) => void;
};

const HeroSection: React.FC<Props> = ({ selectedYear, setSelectedYear }) => (
  <section className="relative pt-24 overflow-hidden" style={{ minHeight: '70vh' }}>
    <div className="absolute inset-0 z-0">
      <img
        src="https://readdy.ai/api/search-image?query=impact%2520report%2520visualization%2520with%2520charts%2520graphs%2520and%2520statistics%2520showing%2520community%2520development%2520in%2520Africa%2520with%2520purple%2520and%2520orange%2520gradient%2520overlay%2520creating%2520a%2520modern%2520professional%2520look%2520with%2520space%2520for%2520text%2520on%2520left%2520side%2520with%2520clean%2520simple%2520background&width=1440&height=600&seq=301&orientation=landscape"
        alt="Impact Report"
        className="w-full h-full object-cover object-top"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-yellow-500/60"></div>
    </div>
    <div className="container mx-auto px-6 relative z-10 flex items-center h-full" style={{ minHeight: '60vh' }}>
      <div className="max-w-2xl text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">Impact Report</h1>
        <p className="text-xl mb-8">Discover the measurable difference our foundation is making across Africa through data-driven insights and success stories.</p>
        
        <div className="flex items-center space-x-4 mb-10">
          <span className="text-white font-medium">Select Year:</span>
          <div className="relative">
            <select 
              value={selectedYear} 
              onChange={(e) => setSelectedYear(parseInt(e.target.value))}
              className="bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-lg px-4 py-2 appearance-none pr-10 focus:outline-none focus:ring-2 focus:ring-white/50 cursor-pointer !rounded-button"
            >
              <option value={2025}>2025</option>
              <option value={2024}>2024</option>
              <option value={2023}>2023</option>
              <option value={2022}>2022</option>
              <option value={2021}>2021</option>
              <option value={2020}>2020</option>
            </select>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <i className="fas fa-chevron-down text-white"></i>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
            <div className="text-3xl font-bold text-white mb-1">65,000+</div>
            <div className="text-orange-300 text-sm">Lives Impacted</div>
            <div className="text-green-300 text-xs mt-2">
              <i className="fas fa-arrow-up mr-1"></i> 35% from 2024
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
            <div className="text-3xl font-bold text-white mb-1">12</div>
            <div className="text-orange-300 text-sm">Countries</div>
            <div className="text-green-300 text-xs mt-2">
              <i className="fas fa-arrow-up mr-1"></i> 20% from 2024
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
            <div className="text-3xl font-bold text-white mb-1">142</div>
            <div className="text-orange-300 text-sm">Active Projects</div>
            <div className="text-green-300 text-xs mt-2">
              <i className="fas fa-arrow-up mr-1"></i> 35% from 2024
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
            <div className="text-3xl font-bold text-white mb-1">$1.8M</div>
            <div className="text-orange-300 text-sm">Total Investment</div>
            <div className="text-green-300 text-xs mt-2">
              <i className="fas fa-arrow-up mr-1"></i> 50% from 2024
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;