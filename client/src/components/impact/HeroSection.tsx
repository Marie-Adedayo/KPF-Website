import React from 'react';

type Props = {
  selectedYear: number;
  setSelectedYear: (year: number) => void;
};

const HeroSection: React.FC<Props> = ({ selectedYear, setSelectedYear }) => {
  const metrics = [
    {
      value: "65,000+",
      label: "Lives Impacted",
      growth: "35% from 2024"
    },
    {
      value: "12",
      label: "Countries",
      growth: "20% from 2024"
    },
    {
      value: "142",
      label: "Active Projects",
      growth: "35% from 2024"
    },
    {
      value: "$1.8M",
      label: "Total Investment",
      growth: "50% from 2024"
    }
  ];

  return (
    <section className="relative pt-24 overflow-hidden" style={{ minHeight: '70vh' }}>
      <div className="absolute inset-0 z-0">
        <img
          src="/Images/project.jpg"
          alt="Kayode Philip Foundation Projects"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-yellow-500/60"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex items-center h-full" style={{ minHeight: '60vh' }}>
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">Impact Report</h1>
          <p className="text-xl mb-8">
            Discover the measurable difference our foundation is making across Africa through data-driven insights and success stories.
          </p>

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
            {metrics.map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-3xl font-bold text-white mb-1">{item.value}</div>
                <div className="text-orange-300 text-sm">{item.label}</div>
                <div className="text-green-300 text-xs mt-2">
                  <i className="fas fa-arrow-up mr-1"></i> {item.growth}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

