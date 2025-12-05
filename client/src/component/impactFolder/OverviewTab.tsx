import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const OverviewTab: React.FC = () => {
  useEffect(() => {
    const chartDom = document.getElementById('overview-chart')!;
    const myChart = echarts.init(chartDom);

    const option = {
      animation: false,
      tooltip: { trigger: 'axis' },
      legend: {
        data: ['Lives Impacted', 'Projects Completed', 'Investment (K USD)']
      },
      grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2020', '2021', '2022', '2023', '2024', '2025']
      },
      yAxis: { type: 'value' },
      series: [
        {
          name: 'Lives Impacted',
          type: 'line',
          data: [12000, 18000, 25000, 35000, 48000, 65000],
          color: '#8B5CF6'
        },
        {
          name: 'Projects Completed',
          type: 'line',
          data: [20, 35, 52, 78, 105, 142],
          color: '#F97316'
        },
        {
          name: 'Investment (K USD)',
          type: 'line',
          data: [200, 350, 500, 750, 1200, 1800],
          color: '#10B981'
        }
      ]
    };

    myChart.setOption(option);

    const handleResize = () => myChart.resize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      myChart.dispose();
    };
  }, []);

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Overall Impact Overview</h2>
        <p className="text-gray-600 mb-8">
          Since our foundation's inception, we've been committed to creating measurable, sustainable change across Africa.
          Our holistic approach addresses the interconnected challenges of education, healthcare, water access, and economic empowerment.
          This report highlights our progress and impact for 2025.
        </p>

        <div className="bg-white p-6 rounded-lg shadow-md mb-12">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Growth Trends (2020-2025)</h3>
          <div id="overview-chart" style={{ width: '100%', height: '400px' }}></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Project Distribution</h3>
            <div className="space-y-4">
              {[
                { label: 'Education', value: '35%', color: 'blue-600' },
                { label: 'Healthcare', value: '28%', color: 'red-600' },
                { label: 'Water Access', value: '22%', color: 'cyan-600' },
                { label: 'Economic Empowerment', value: '15%', color: 'green-600' }
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">{item.label}</span>
                    <span className={`text-${item.color} font-medium`}>{item.value}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className={`bg-${item.color} h-2.5 rounded-full`} style={{ width: item.value }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Geographic Reach</h3>
            <div className="space-y-4">
              {[
                { label: 'Nigeria', value: '22%' },
                { label: 'Kenya', value: '18%' },
                { label: 'Ghana', value: '15%' },
                { label: 'Other Countries', value: '45%' }
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">{item.label}</span>
                    <span className="text-purple-600 font-medium">{item.value}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: item.value }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-purple-50 p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-purple-800 mb-6">Key Achievements in 2025</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: 'fa-award',
                title: 'Expanded to 2 New Countries',
                desc: 'Launched operations in Zambia and Mozambique, bringing our total country presence to 12 nations across Africa.'
              },
              {
                icon: 'fa-handshake',
                title: '10 New Strategic Partnerships',
                desc: 'Formed alliances with international NGOs, corporations and local governments to expand our reach and impact.'
              },
              {
                icon: 'fa-chart-line',
                title: '50% Funding Increase',
                desc: 'Secured additional funding allowing us to scale our most successful programs and launch new initiatives.'
              }
            ].map((item) => (
              <div key={item.title} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-purple-700 mb-4">
                  <i className={`fas ${item.icon} text-3xl`}></i>
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewTab;
