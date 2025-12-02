import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const HealthcareTab: React.FC = () => {
  useEffect(() => {
    const chartDom = document.getElementById('healthcare-chart')!;
    const myChart = echarts.init(chartDom);

    const option = {
      animation: false,
      tooltip: { trigger: 'axis' },
      grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
      xAxis: { type: 'category', data: ['2020', '2021', '2022', '2023', '2024', '2025'] },
      yAxis: { type: 'value' },
      series: [{ data: [4000, 6500, 9000, 12500, 16000, 22500], type: 'bar', color: '#EF4444' }]
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
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Healthcare Impact</h2>
        <p className="text-gray-600 mb-8">
          Our healthcare initiatives aim to improve access to quality medical services in underserved communities.
          Through mobile clinics, community health worker training, and healthcare facility improvements, we're 
          bringing essential medical care to those who need it most.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-red-600 mb-2">22,500+</div>
            <p className="text-gray-800 font-medium">Patients Treated</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-red-600 mb-2">18</div>
            <p className="text-gray-800 font-medium">Mobile Clinics Deployed</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-red-600 mb-2">320+</div>
            <p className="text-gray-800 font-medium">Health Workers Trained</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-12">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Healthcare Impact Growth</h3>
          <div id="healthcare-chart" style={{ width: '100%', height: '300px' }}></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Key Programs</h3>
            <div className="space-y-6">
              {[
                {
                  title: 'Mobile Health Clinics',
                  desc: 'Deploying mobile clinics to provide essential medical services to remote villages.',
                  goal: '5 new mobile clinics',
                  progress: '85%'
                },
                {
                  title: 'Community Health Worker Training',
                  desc: 'Training local community members as health workers to provide basic healthcare and education.',
                  goal: '100 new health workers',
                  progress: '75%'
                },
                {
                  title: 'Maternal & Child Health',
                  desc: 'Providing prenatal care, safe delivery services, and infant healthcare in rural communities.',
                  goal: '2,000 mothers & children',
                  progress: '60%'
                }
              ].map((item) => (
                <div key={item.title} className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-bold text-red-800 mb-2">{item.title}</h4>
                  <p className="text-gray-700 mb-2">{item.desc}</p>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-gray-600">2025 Goal: {item.goal}</span>
                    <span className="text-red-700">{item.progress} complete</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-red-600 h-2 rounded-full" style={{ width: item.progress }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Success Highlight</h3>
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="p-4">
                <h4 className="font-bold text-gray-800 mb-2">Mobile Health Clinics, Ghana</h4>
                <p className="text-gray-600 text-sm mb-3">
                  Our mobile clinics have reached 15 remote villages that previously had no access to healthcare. 
                  Over 8,500 patients received treatment, and we've seen a 45% reduction in preventable diseases 
                  in these communities.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-red-600 text-sm font-medium">Ongoing since 2023</span>
                  <button className="text-red-700 hover:text-red-800 text-sm font-medium cursor-pointer">
                    Read Full Story <i className="fas fa-arrow-right ml-1"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthcareTab;

