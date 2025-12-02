import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const EducationTab: React.FC = () => {
  useEffect(() => {
    const chartDom = document.getElementById('education-chart')!;
    const myChart = echarts.init(chartDom);

    const option = {
      animation: false,
      tooltip: { trigger: 'axis' },
      grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
      xAxis: { type: 'category', data: ['2020', '2021', '2022', '2023', '2024', '2025'] },
      yAxis: { type: 'value' },
      series: [{ data: [3000, 5000, 7500, 10000, 13500, 18000], type: 'bar', color: '#3B82F6' }]
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
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Education Impact</h2>
        <p className="text-gray-600 mb-8">
          Our education initiatives focus on improving access to quality education, enhancing learning environments, 
          and providing technology resources to prepare students for the future. From building schools to training teachers 
          and providing scholarships, we're creating pathways to opportunity for thousands of children across Africa.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">18,000+</div>
            <p className="text-gray-800 font-medium">Students Enrolled</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">35</div>
            <p className="text-gray-800 font-medium">Schools Built/Renovated</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">450+</div>
            <p className="text-gray-800 font-medium">Teachers Trained</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-12">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Education Impact Growth</h3>
          <div id="education-chart" style={{ width: '100%', height: '300px' }}></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Key Programs</h3>
            <div className="space-y-6">
              {[
                {
                  title: 'Bright Future Schools',
                  desc: 'Building and equipping modern schools with technology labs in underserved communities.',
                  goal: '10 new schools',
                  progress: '80%'
                },
                {
                  title: 'Teacher Development Program',
                  desc: 'Providing professional development and training for teachers to improve educational quality.',
                  goal: '200 teachers',
                  progress: '65%'
                },
                {
                  title: 'Digital Literacy Initiative',
                  desc: 'Equipping schools with computers and internet access, and training students in digital skills.',
                  goal: '25 computer labs',
                  progress: '70%'
                }
              ].map((item) => (
                <div key={item.title} className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-blue-800 mb-2">{item.title}</h4>
                  <p className="text-gray-700 mb-2">{item.desc}</p>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-gray-600">2025 Goal: {item.goal}</span>
                    <span className="text-blue-700">{item.progress} complete</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: item.progress }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Success Highlight</h3>
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="p-4">
                <h4 className="font-bold text-gray-800 mb-2">Bright Future Academy, Nigeria</h4>
                <p className="text-gray-600 text-sm mb-3">
                  Transformed a dilapidated school building into a modern learning facility with technology labs, 
                  library, and trained teachers. Student enrollment increased by 85% and test scores improved by 40% 
                  within the first year.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 text-sm font-medium">Completed in 2025</span>
                  <button className="text-blue-700 hover:text-blue-800 text-sm font-medium cursor-pointer">
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

export default EducationTab;
