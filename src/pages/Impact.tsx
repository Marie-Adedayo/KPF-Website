/* import React, { useState, useEffect } from 'react';
import * as echarts from 'echarts';
import Footer from '../component/Footer';
import Header from '../component/Header';

const Impact: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState(2025);
  const [activeTab, setActiveTab] = useState('overview');


  useEffect(() => {
    const overviewChart = echarts.init(document.getElementById('overview-chart'));
    const educationChart = echarts.init(document.getElementById('education-chart'));
    const healthcareChart = echarts.init(document.getElementById('healthcare-chart'));
    const waterChart = echarts.init(document.getElementById('water-chart'));
    const economicChart = echarts.init(document.getElementById('economic-chart'));

    const overviewOption = {
      animation: false,
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: ['Lives Impacted', 'Projects Completed', 'Investment (K USD)']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2020', '2021', '2022', '2023', '2024', '2025']
      },
      yAxis: {
        type: 'value'
      },
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

    const educationOption = {
      animation: false,
      tooltip: {
        trigger: 'axis',
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: ['2020', '2021', '2022', '2023', '2024', '2025']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [3000, 5000, 7500, 10000, 13500, 18000],
          type: 'bar',
          color: '#3B82F6'
        }
      ]
    };

    const healthcareOption = {
      animation: false,
      tooltip: {
        trigger: 'axis',
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: ['2020', '2021', '2022', '2023', '2024', '2025']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [4000, 6500, 9000, 12500, 16000, 22500],
          type: 'bar',
          color: '#EF4444'
        }
      ]
    };

    const waterOption = {
      animation: false,
      tooltip: {
        trigger: 'axis',
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: ['2020', '2021', '2022', '2023', '2024', '2025']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [5000, 8500, 12000, 18000, 25000, 32000],
          type: 'bar',
          color: '#06B6D4'
        }
      ]
    };

    const economicOption = {
      animation: false,
      tooltip: {
        trigger: 'axis',
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: ['2020', '2021', '2022', '2023', '2024', '2025']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [800, 1500, 2300, 3200, 4100, 5200],
          type: 'bar',
          color: '#10B981'
        }
      ]
    };

    overviewChart.setOption(overviewOption);
    educationChart.setOption(educationOption);
    healthcareChart.setOption(healthcareOption);
    waterChart.setOption(waterOption);
    economicChart.setOption(economicOption);

    const handleResize = () => {
      overviewChart.resize();
      educationChart.resize();
      healthcareChart.resize();
      waterChart.resize();
      economicChart.resize();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      overviewChart.dispose();
      educationChart.dispose();
      healthcareChart.dispose();
      waterChart.dispose();
      economicChart.dispose();
    };
  }, []);

  return (
    <div className="min-h-screen font-sans">
        <Header />
      
      <section className="relative pt-24 overflow-hidden" style={{ minHeight: '70vh' }}>
        <div className="absolute inset-0 z-0">
          <img
            src="#"
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

      {/* Report Navigation 
      <section className="bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap">
            <button 
              onClick={() => setActiveTab('overview')} 
              className={`px-6 py-4 font-medium text-gray-700 hover:text-purple-700 border-b-2 transition-colors duration-200 cursor-pointer whitespace-nowrap !rounded-button ${activeTab === 'overview' ? 'border-purple-700 text-purple-700' : 'border-transparent'}`}
            >
              Overview
            </button>
            <button 
              onClick={() => setActiveTab('education')} 
              className={`px-6 py-4 font-medium text-gray-700 hover:text-purple-700 border-b-2 transition-colors duration-200 cursor-pointer whitespace-nowrap !rounded-button ${activeTab === 'education' ? 'border-purple-700 text-purple-700' : 'border-transparent'}`}
            >
              Education
            </button>
            <button 
              onClick={() => setActiveTab('healthcare')} 
              className={`px-6 py-4 font-medium text-gray-700 hover:text-purple-700 border-b-2 transition-colors duration-200 cursor-pointer whitespace-nowrap !rounded-button ${activeTab === 'healthcare' ? 'border-purple-700 text-purple-700' : 'border-transparent'}`}
            >
              Healthcare
            </button>
            <button 
              onClick={() => setActiveTab('water')} 
              className={`px-6 py-4 font-medium text-gray-700 hover:text-purple-700 border-b-2 transition-colors duration-200 cursor-pointer whitespace-nowrap !rounded-button ${activeTab === 'water' ? 'border-purple-700 text-purple-700' : 'border-transparent'}`}
            >
              Water Access
            </button>
            <button 
              onClick={() => setActiveTab('economic')} 
              className={`px-6 py-4 font-medium text-gray-700 hover:text-purple-700 border-b-2 transition-colors duration-200 cursor-pointer whitespace-nowrap !rounded-button ${activeTab === 'economic' ? 'border-purple-700 text-purple-700' : 'border-transparent'}`}
            >
              Economic Empowerment
            </button>
            <button 
              onClick={() => setActiveTab('stories')} 
              className={`px-6 py-4 font-medium text-gray-700 hover:text-purple-700 border-b-2 transition-colors duration-200 cursor-pointer whitespace-nowrap !rounded-button ${activeTab === 'stories' ? 'border-purple-700 text-purple-700' : 'border-transparent'}`}
            >
              Success Stories
            </button>
          </div>
        </div>
      </section>

      {/* Overview Tab *
      {activeTab === 'overview' && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Overall Impact Overview</h2>
              <p className="text-gray-600 mb-8">
                Since our foundation's inception, we've been committed to creating measurable, sustainable change across Africa. 
                Our holistic approach addresses the interconnected challenges of education, healthcare, water access, and economic empowerment.
                This report highlights our progress and impact for {selectedYear}.
              </p>
              
              <div className="bg-white p-6 rounded-lg shadow-md mb-12">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Growth Trends (2020-2025)</h3>
                <div id="overview-chart" style={{ width: '100%', height: '400px' }}></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Project Distribution</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700">Education</span>
                        <span className="text-blue-600 font-medium">35%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '35%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700">Healthcare</span>
                        <span className="text-red-600 font-medium">28%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-red-600 h-2.5 rounded-full" style={{ width: '28%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700">Water Access</span>
                        <span className="text-cyan-600 font-medium">22%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-cyan-600 h-2.5 rounded-full" style={{ width: '22%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700">Economic Empowerment</span>
                        <span className="text-green-600 font-medium">15%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '15%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Geographic Reach</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700">Nigeria</span>
                        <span className="text-purple-600 font-medium">22%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '22%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700">Kenya</span>
                        <span className="text-purple-600 font-medium">18%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '18%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700">Ghana</span>
                        <span className="text-purple-600 font-medium">15%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '15%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700">Other Countries</span>
                        <span className="text-purple-600 font-medium">45%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '45%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-50 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-purple-800 mb-6">Key Achievements in {selectedYear}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-purple-700 mb-4">
                    <i className="fas fa-award text-3xl"></i>
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">Expanded to 2 New Countries</h4>
                  <p className="text-gray-600">Launched operations in Zambia and Mozambique, bringing our total country presence to 12 nations across Africa.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-purple-700 mb-4">
                    <i className="fas fa-handshake text-3xl"></i>
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">10 New Strategic Partnerships</h4>
                  <p className="text-gray-600">Formed alliances with international NGOs, corporations and local governments to expand our reach and impact.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-purple-700 mb-4">
                    <i className="fas fa-chart-line text-3xl"></i>
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">50% Funding Increase</h4>
                  <p className="text-gray-600">Secured additional funding allowing us to scale our most successful programs and launch new initiatives.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Education Tab 
      {activeTab === 'education' && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-8">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <i className="fas fa-graduation-cap text-2xl text-blue-600"></i>
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Education Impact</h2>
              </div>
              
              <p className="text-gray-600 mb-12">
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
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-bold text-blue-800 mb-2">Bright Future Schools</h4>
                      <p className="text-gray-700 mb-2">Building and equipping modern schools with technology labs in underserved communities.</p>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium text-gray-600">2025 Goal: 10 new schools</span>
                        <span className="text-blue-700">80% complete</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-bold text-blue-800 mb-2">Teacher Development Program</h4>
                      <p className="text-gray-700 mb-2">Providing professional development and training for teachers to improve educational quality.</p>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium text-gray-600">2025 Goal: 200 teachers</span>
                        <span className="text-blue-700">65% complete</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-bold text-blue-800 mb-2">Digital Literacy Initiative</h4>
                      <p className="text-gray-700 mb-2">Equipping schools with computers and internet access, and training students in digital skills.</p>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium text-gray-600">2025 Goal: 25 computer labs</span>
                        <span className="text-blue-700">70% complete</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '70%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Success Highlight</h3>
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                    <img 
                      src="#" 
                      alt="School Transformation" 
                      className="w-full h-48 object-cover object-top"
                    />
                    <div className="p-4">
                      <h4 className="font-bold text-gray-800 mb-2">Bright Future Academy, Nigeria</h4>
                      <p className="text-gray-600 text-sm mb-3">
                        Transformed a dilapidated school building into a modern learning facility with technology labs, 
                        library, and trained teachers. Student enrollment increased by 85% and test scores improved by 40% 
                        within the first year.
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-blue-600 text-sm font-medium">Completed in 2025</span>
                        <button className="text-blue-700 hover:text-blue-800 text-sm font-medium cursor-pointer whitespace-nowrap !rounded-button">
                          Read Full Story <i className="fas fa-arrow-right ml-1"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Healthcare Tab 
      {activeTab === 'healthcare' && (
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
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-bold text-red-800 mb-2">Mobile Health Clinics</h4>
                      <p className="text-gray-700 mb-2">Deploying mobile clinics to provide essential medical services to remote villages.</p>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium text-gray-600">2025 Goal: 5 new mobile clinics</span>
                        <span className="text-red-700">85% complete</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-red-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                    
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-bold text-red-800 mb-2">Community Health Worker Training</h4>
                      <p className="text-gray-700 mb-2">Training local community members as health workers to provide basic healthcare and education.</p>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium text-gray-600">2025 Goal: 100 new health workers</span>
                        <span className="text-red-700">75% complete</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-red-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                    
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-bold text-red-800 mb-2">Maternal & Child Health</h4>
                      <p className="text-gray-700 mb-2">Providing prenatal care, safe delivery services, and infant healthcare in rural communities.</p>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium text-gray-600">2025 Goal: 2,000 mothers & children</span>
                        <span className="text-red-700">60% complete</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-red-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Success Highlight</h3>
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                    <img 
                      src="#" 
                      alt="Mobile Health Clinic" 
                      className="w-full h-48 object-cover object-top"
                    />
                    <div className="p-4">
                      <h4 className="font-bold text-gray-800 mb-2">Mobile Health Clinics, Ghana</h4>
                      <p className="text-gray-600 text-sm mb-3">
                        Our mobile clinics have reached 15 remote villages that previously had no access to healthcare. 
                        Over 8,500 patients received treatment, and we've seen a 45% reduction in preventable diseases 
                        in these communities.
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-red-600 text-sm font-medium">Ongoing since 2023</span>
                        <button className="text-red-700 hover:text-red-800 text-sm font-medium cursor-pointer whitespace-nowrap !rounded-button">
                          Read Full Story <i className="fas fa-arrow-right ml-1"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Water Access 
      {activeTab === 'water' && (
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
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="text-4xl font-bold text-cyan-600 mb-2">32,000+</div>
                  <p className="text-gray-800 font-medium">People with Clean Water</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="text-4xl font-bold text-cyan-600 mb-2">85</div>
                  <p className="text-gray-800 font-medium">Wells & Water Systems</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="text-4xl font-bold text-cyan-600 mb-2">65%</div>
                  <p className="text-gray-800 font-medium">Reduction in Water-borne Illness</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md mb-12">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Water Access Impact Growth</h3>
                <div id="water-chart" style={{ width: '100%', height: '300px' }}></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Key Programs</h3>
                  <div className="space-y-6">
                    <div className="bg-cyan-50 p-4 rounded-lg">
                      <h4 className="font-bold text-cyan-800 mb-2">Clean Water Initiative</h4>
                      <p className="text-gray-700 mb-2">Installing water purification systems and wells to provide clean drinking water to rural communities.</p>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium text-gray-600">2025 Goal: 20 new water systems</span>
                        <span className="text-cyan-700">70% complete</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-cyan-600 h-2 rounded-full" style={{ width: '70%' }}></div>
                      </div>
                    </div>
                    
                    <div className="bg-cyan-50 p-4 rounded-lg">
                      <h4 className="font-bold text-cyan-800 mb-2">Rainwater Harvesting Systems</h4>
                      <p className="text-gray-700 mb-2">Installing rainwater collection systems for domestic use and small-scale agriculture.</p>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium text-gray-600">2025 Goal: 15 village systems</span>
                        <span className="text-cyan-700">45% complete</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-cyan-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                      </div>
                    </div>
                    
                    <div className="bg-cyan-50 p-4 rounded-lg">
                      <h4 className="font-bold text-cyan-800 mb-2">Water Management Training</h4>
                      <p className="text-gray-700 mb-2">Training community members in water system maintenance and sustainable water management.</p>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium text-gray-600">2025 Goal: 200 community members</span>
                        <span className="text-cyan-700">80% complete</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-cyan-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Success Highlight</h3>
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                    <img 
                      src="#" 
                      alt="Water Access Transformation" 
                      className="w-full h-48 object-cover object-top"
                    />
                    <div className="p-4">
                      <h4 className="font-bold text-gray-800 mb-2">Clean Water Initiative, Kenya</h4>
                      <p className="text-gray-600 text-sm mb-3">
                        In the Makueni region, we installed 12 water purification systems serving 8 villages. 
                        Women and children now save 3+ hours daily previously spent collecting water, school attendance 
                        has increased 35%, and water-borne diseases have decreased by 70%.
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-cyan-600 text-sm font-medium">Completed in 2024</span>
                        <button className="text-cyan-700 hover:text-cyan-800 text-sm font-medium cursor-pointer whitespace-nowrap !rounded-button">
                          Read Full Story <i className="fas fa-arrow-right ml-1"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Economic Empowerment Tab *
      {activeTab === 'economic' && (
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
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">5,200+</div>
                  <p className="text-gray-800 font-medium">Businesses Supported</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">$2.5M</div>
                  <p className="text-gray-800 font-medium">Microloans Distributed</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">8,500+</div>
                  <p className="text-gray-800 font-medium">People Trained</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md mb-12">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Economic Impact Growth</h3>
                <div id="economic-chart" style={{ width: '100%', height: '300px' }}></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Key Programs</h3>
                  <div className="space-y-6">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-bold text-green-800 mb-2">Women's Microfinance Program</h4>
                      <p className="text-gray-700 mb-2">Providing microloans and business training to women entrepreneurs to start and grow small businesses.</p>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium text-gray-600">2025 Goal: 1,000 women</span>
                        <span className="text-green-700">75% complete</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-bold text-green-800 mb-2">Sustainable Agriculture Initiative</h4>
                      <p className="text-gray-700 mb-2">Teaching sustainable farming techniques and providing equipment to improve crop yields and food security.</p>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium text-gray-600">2025 Goal: 1,500 farmers</span>
                        <span className="text-green-700">60% complete</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-bold text-green-800 mb-2">Youth Vocational Training</h4>
                      <p className="text-gray-700 mb-2">Providing skills training in trades and entrepreneurship to help young people secure employment.</p>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium text-gray-600">2025 Goal: 800 youth</span>
                        <span className="text-green-700">85% complete</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Success Highlight</h3>
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                    <img 
                      src="#" 
                      alt="Women Entrepreneurs" 
                      className="w-full h-48 object-cover object-top"
                    />
                    <div className="p-4">
                      <h4 className="font-bold text-gray-800 mb-2">Women's Microfinance Program, Tanzania</h4>
                      <p className="text-gray-600 text-sm mb-3">
                        Our microfinance program has helped 350 women launch businesses ranging from textiles to food 
                        production. Average household income has increased by 65%, and 85% of loans have been repaid, 
                        creating a sustainable revolving fund.
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-green-600 text-sm font-medium">Ongoing since 2022</span>
                        <button className="text-green-700 hover:text-green-800 text-sm font-medium cursor-pointer whitespace-nowrap !rounded-button">
                          Read Full Story <i className="fas fa-arrow-right ml-1"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Success Stories Tab */}
      {activeTab === 'stories' && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Success Stories</h2>
              <p className="text-gray-600 mb-12 text-center">
                Behind every statistic is a human story. These testimonials and success stories highlight the real impact 
                our work has on individuals and communities across Africa.
              </p>
              
              <div className="bg-white p-8 rounded-lg shadow-md mb-12">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Featured Story</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <img 
                      src="#" 
                      alt="Teacher Success Story" 
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-purple-800 mb-2">Grace Okafor: From Student to Teacher</h4>
                    <p className="text-gray-700 mb-4">
                      "I was one of the first students at Bright Future Academy when it opened in my village in 2020. 
                      The foundation provided me with a scholarship to complete my education and then supported my 
                      teacher training. Now, I'm teaching at the same school, inspiring the next generation of students."
                    </p>
                    <p className="text-gray-700 mb-4">
                      "The technology skills I learned have opened so many doors. I'm now teaching computer literacy to 
                      my students, giving them the same opportunities I received. This foundation didn't just build a 
                      school—they built a future for our entire community."
                    </p>
                    <div className="text-sm text-gray-600 mb-6">
                      <div><strong>Location:</strong> Lagos, Nigeria</div>
                      <div><strong>Program:</strong> Education</div>
                      <div><strong>Impact:</strong> One of 450+ teachers trained who now impacts 120+ students annually</div>
                    </div>
                    <button className="bg-purple-700 text-white px-6 py-2 !rounded-button hover:bg-purple-800 transition duration-300 cursor-pointer whitespace-nowrap">
                      Watch Video Testimonial <i className="fas fa-play-circle ml-2"></i>
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img 
                    src="#" 
                    alt="Entrepreneur Success" 
                    className="w-full h-48 object-cover object-top"
                  />
                  <div className="p-4">
                    <div className="inline-block px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full mb-2">
                      Economic Empowerment
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">Amina's Textile Business</h4>
                    <p className="text-gray-600 text-sm mb-3">
                      "With a $500 microloan, I started my textile business. Now I employ 5 women from my village and can pay for my children's education."
                    </p>
                    <button className="text-purple-700 hover:text-purple-800 text-sm font-medium cursor-pointer whitespace-nowrap !rounded-button">
                      Read Full Story <i className="fas fa-arrow-right ml-1"></i>
                    </button>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img 
                    src="#" 
                    alt="Water Access Success" 
                    className="w-full h-48 object-cover object-top"
                  />
                  <div className="p-4">
                    <div className="inline-block px-2 py-1 bg-cyan-100 text-cyan-800 text-xs font-medium rounded-full mb-2">
                      Water Access
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">Transforming Mbele Village</h4>
                    <p className="text-gray-600 text-sm mb-3">
                      "Our village used to suffer from water-borne diseases. The new well has changed everything - our children are healthier and attending school regularly."
                    </p>
                    <button className="text-purple-700 hover:text-purple-800 text-sm font-medium cursor-pointer whitespace-nowrap !rounded-button">
                      Read Full Story <i className="fas fa-arrow-right ml-1"></i>
                    </button>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img 
                    src="#" 
                    alt="Healthcare Success" 
                    className="w-full h-48 object-cover object-top"
                  />
                  <div className="p-4">
                    <div className="inline-block px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full mb-2">
                      Healthcare
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">From Patient to Provider</h4>
                    <p className="text-gray-600 text-sm mb-3">
                      "After receiving treatment at a mobile clinic, I was inspired to become a community health worker. Now I help provide care to my own community."
                    </p>
                    <button className="text-purple-700 hover:text-purple-800 text-sm font-medium cursor-pointer whitespace-nowrap !rounded-button">
                      Read Full Story <i className="fas fa-arrow-right ml-1"></i>
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="bg-purple-50 p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Video Testimonials</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                    <div className="relative">
                      <img 
                        src="#" 
                        alt="Education Video" 
                        className="w-full h-auto"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-purple-700/80 rounded-full w-12 h-12 flex items-center justify-center cursor-pointer">
                          <i className="fas fa-play text-white"></i>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold text-gray-800 mb-1">Transforming Education</h4>
                      <p className="text-gray-600 text-sm">Teachers and students share their stories</p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                    <div className="relative">
                      <img 
                        src="#" 
                        alt="Water Access Video" 
                        className="w-full h-auto"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-purple-700/80 rounded-full w-12 h-12 flex items-center justify-center cursor-pointer">
                          <i className="fas fa-play text-white"></i>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold text-gray-800 mb-1">Clean Water, New Life</h4>
                      <p className="text-gray-600 text-sm">Communities celebrate access to clean water</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Download Reports Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Download Impact Reports</h2>
            <p className="text-gray-600 mb-12">Access our detailed impact reports and share our work with others.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
                <div className="text-purple-700 mb-4">
                  <i className="far fa-file-pdf text-4xl"></i>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Full Impact Report</h3>
                <p className="text-gray-600 text-sm mb-4">Comprehensive analysis of all our programs and impact metrics.</p>
                <button className="bg-purple-700 text-white px-4 py-2 !rounded-button hover:bg-purple-800 transition duration-300 w-full cursor-pointer whitespace-nowrap">
                  <i className="fas fa-download mr-2"></i> Download PDF
                </button>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
                <div className="text-purple-700 mb-4">
                  <i className="far fa-file-alt text-4xl"></i>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Executive Summary</h3>
                <p className="text-gray-600 text-sm mb-4">Key highlights and achievements from our impact work.</p>
                <button className="bg-purple-700 text-white px-4 py-2 !rounded-button hover:bg-purple-800 transition duration-300 w-full cursor-pointer whitespace-nowrap">
                  <i className="fas fa-download mr-2"></i> Download PDF
                </button>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
                <div className="text-purple-700 mb-4">
                  <i className="far fa-file-excel text-4xl"></i>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Financial Statement</h3>
                <p className="text-gray-600 text-sm mb-4">Detailed breakdown of our funding allocation and expenses.</p>
                <button className="bg-purple-700 text-white px-4 py-2 !rounded-button hover:bg-purple-800 transition duration-300 w-full cursor-pointer whitespace-nowrap">
                  <i className="fas fa-download mr-2"></i> Download PDF
                </button>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
                <div className="text-purple-700 mb-4">
                  <i className="far fa-images text-4xl"></i>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Project Details</h3>
                <p className="text-gray-600 text-sm mb-4">In-depth look at our projects with case studies and photos.</p>
                <button className="bg-purple-700 text-white px-4 py-2 !rounded-button hover:bg-purple-800 transition duration-300 w-full cursor-pointer whitespace-nowrap">
                  <i className="fas fa-download mr-2"></i> Download PDF
                </button>
              </div>
            </div>
            
            <div className="bg-purple-50 p-8 rounded-lg shadow-md max-w-xl mx-auto">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Stay Updated</h3>
              <p className="text-gray-600 mb-6">Subscribe to receive our quarterly impact reports and updates on our work.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-2 rounded-lg border-none focus:ring-2 focus:ring-purple-500"
                />
                <button className="bg-purple-700 text-white px-6 py-2 !rounded-button hover:bg-purple-800 transition duration-300 cursor-pointer whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-purple-900 to-purple-700 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Support Our Work</h2>
            <p className="text-lg mb-12 text-purple-100">
              Join us in creating sustainable change across Africa. Your support makes our impact possible.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <div className="text-orange-300 mb-4">
                  <i className="fas fa-hand-holding-heart text-4xl"></i>
                </div>
                <h3 className="text-xl font-bold mb-4">Donate</h3>
                <p className="text-purple-100 mb-6">Your financial support directly funds our projects and helps communities thrive.</p>
                <button className="bg-orange-500 text-white px-6 py-2 !rounded-button hover:bg-orange-600 transition duration-300 w-full cursor-pointer whitespace-nowrap">
                  Make a Donation
                </button>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <div className="text-orange-300 mb-4">
                  <i className="fas fa-users text-4xl"></i>
                </div>
                <h3 className="text-xl font-bold mb-4">Volunteer</h3>
                <p className="text-purple-100 mb-6">Share your skills and time to help implement our projects on the ground.</p>
                <button className="bg-white text-purple-700 px-6 py-2 !rounded-button hover:bg-gray-100 transition duration-300 w-full cursor-pointer whitespace-nowrap">
                  Join Our Team
                </button>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <div className="text-orange-300 mb-4">
                  <i className="fas fa-building text-4xl"></i>
                </div>
                <h3 className="text-xl font-bold mb-4">Partner With Us</h3>
                <p className="text-purple-100 mb-6">Explore corporate partnerships and collaborative opportunities.</p>
                <button className="bg-white text-purple-700 px-6 py-2 !rounded-button hover:bg-gray-100 transition duration-300 w-full cursor-pointer whitespace-nowrap">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Impact;
// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useEffect } from 'react';
const App: React.FC = () => {
const [isScrolled, setIsScrolled] = useState(false);
const [donationAmount, setDonationAmount] = useState(50);
const [customAmount, setCustomAmount] = useState('');
const [activeTestimonial, setActiveTestimonial] = useState(0);
useEffect(() => {
const handleScroll = () => {
if (window.scrollY > 50) {
setIsScrolled(true);
} else {
setIsScrolled(false);
}
};
window.addEventListener('scroll', handleScroll);
return () => window.removeEventListener('scroll', handleScroll);
}, []);
const handleDonationAmountChange = (amount: number) => {
setDonationAmount(amount);
setCustomAmount('');
};
const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
setCustomAmount(e.target.value);
setDonationAmount(0);
};
const testimonials = [
{
quote: "The Kayode Philip Foundation transformed our community with clean water access. Their dedication to sustainable solutions has improved countless lives.",
name: "Sarah Johnson",
location: "Nairobi, Kenya",
image: "https://readdy.ai/api/search-image?query=professional%20portrait%20of%20an%20African%20woman%20in%20her%2030s%20with%20short%20hair%20and%20a%20warm%20smile%20wearing%20professional%20attire%20against%20a%20neutral%20background%20with%20soft%20lighting%20and%20natural%20expression&width=100&height=100&seq=1&orientation=squarish"
},
{
quote: "Thanks to the educational programs provided by the Foundation, my children now have access to quality education and resources they never had before.",
name: "Michael Okafor",
location: "Lagos, Nigeria",
image: "https://readdy.ai/api/search-image?query=professional%20portrait%20of%20an%20African%20man%20in%20his%2040s%20with%20glasses%20and%20a%20friendly%20smile%20wearing%20a%20casual%20button-up%20shirt%20against%20a%20neutral%20background%20with%20soft%20lighting%20and%20authentic%20expression&width=100&height=100&seq=2&orientation=squarish"
},
{
quote: "The healthcare initiative launched in our village has saved lives. The Foundation's commitment to sustainable development is truly inspiring.",
name: "Amina Diallo",
location: "Accra, Ghana",
image: "https://readdy.ai/api/search-image?query=professional%20portrait%20of%20a%20young%20African%20woman%20with%20braided%20hair%20and%20a%20bright%20smile%20wearing%20colorful%20traditional%20clothing%20against%20a%20neutral%20background%20with%20soft%20lighting%20and%20genuine%20expression&width=100&height=100&seq=3&orientation=squarish"
}
];
const nextTestimonial = () => {
setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
};
const prevTestimonial = () => {
setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
};
return (
<div className="min-h-screen font-sans">
{/* Header */}
<header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
<div className="container mx-auto px-6">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="text-2xl font-bold text-purple-700">
<span className="text-orange-500">Kayode</span> Philip Foundation
</div>
</div>
<nav className="hidden md:flex space-x-8">
<a href="#" className="text-gray-800 hover:text-purple-700 font-medium cursor-pointer">Home</a>
<a href="https://readdy.ai/home/c23ea3ce-3d5b-4114-80f9-5b95c12ad4aa/c406457b-dec5-4f86-9dba-711b93911c5d" data-readdy="true" className="text-gray-800 hover:text-purple-700 font-medium cursor-pointer">About Us</a>
<a href="#" className="text-gray-800 hover:text-purple-700 font-medium cursor-pointer">Projects</a>
<a href="#" className="text-gray-800 hover:text-purple-700 font-medium cursor-pointer">News</a>
<a href="#" className="text-gray-800 hover:text-purple-700 font-medium cursor-pointer">Impact</a>
<a href="#" className="bg-orange-500 text-white px-4 py-2 rounded-button hover:bg-orange-600 transition duration-300 font-medium cursor-pointer whitespace-nowrap">Donate</a>
</nav>
<div className="md:hidden">
<button className="text-gray-800 focus:outline-none cursor-pointer whitespace-nowrap !rounded-button">
<i className="fas fa-bars text-xl"></i>
</button>
</div>
</div>
</div>
</header>
{/* Hero Section */}
<section className="relative pt-24 overflow-hidden" style={{ minHeight: '90vh' }}>
<div className="absolute inset-0 z-0">
<img
src="https://readdy.ai/api/search-image?query=beautiful%20panoramic%20view%20of%20African%20community%20development%20project%20with%20people%20working%20together%20on%20sustainable%20initiatives%20with%20purple%20and%20orange%20sunset%20sky%20in%20background%20creating%20a%20gradient%20effect%20with%20space%20for%20text%20on%20left%20side&width=1440&height=800&seq=4&orientation=landscape"
alt="Community Impact"
className="w-full h-full object-cover object-top"
/>
<div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-yellow-500/60"></div>
</div>
<div className="container mx-auto px-6 relative z-10 flex items-center h-full" style={{ minHeight: '80vh' }}>
<div className="max-w-2xl text-white">
<h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">Empowering Communities, Transforming Lives</h1>
<p className="text-xl mb-8">The Kayode Philip Foundation is dedicated to sustainable development, education, and healthcare initiatives across Africa. Join us in making a difference.</p>
<div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
<button className="bg-orange-500 text-white px-8 py-3 rounded-button hover:bg-orange-600 transition duration-300 font-medium text-lg cursor-pointer whitespace-nowrap">
Donate Now
</button>
<button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-button hover:bg-white/10 transition duration-300 font-medium text-lg cursor-pointer whitespace-nowrap">
Learn More
</button>
</div>
</div>
</div>
</section>
{/* Impact Metrics */}
<section className="py-20 bg-gray-50">
<div className="container mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">Our Impact</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
<div className="inline-block p-4 rounded-full bg-purple-100 mb-6">
<i className="fas fa-hands-helping text-3xl text-purple-700"></i>
</div>
<h3 className="text-4xl font-bold text-purple-700 mb-2">120+</h3>
<p className="text-gray-600">Projects Completed</p>
</div>
<div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
<div className="inline-block p-4 rounded-full bg-purple-100 mb-6">
<i className="fas fa-users text-3xl text-purple-700"></i>
</div>
<h3 className="text-4xl font-bold text-purple-700 mb-2">50,000+</h3>
<p className="text-gray-600">Lives Impacted</p>
</div>
<div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
<div className="inline-block p-4 rounded-full bg-purple-100 mb-6">
<i className="fas fa-globe-africa text-3xl text-purple-700"></i>
</div>
<h3 className="text-4xl font-bold text-purple-700 mb-2">12</h3>
<p className="text-gray-600">Countries Served</p>
</div>
<div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
<div className="inline-block p-4 rounded-full bg-purple-100 mb-6">
<i className="fas fa-school text-3xl text-purple-700"></i>
</div>
<h3 className="text-4xl font-bold text-purple-700 mb-2">75</h3>
<p className="text-gray-600">Schools Built</p>
</div>
</div>
</div>
</section>
{/* Our Work Section */}
<section className="py-20">
<div className="container mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center mb-12">
<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-0">Our Work</h2>
<div className="flex space-x-4">
<button className="px-4 py-2 rounded-button bg-purple-700 text-white hover:bg-purple-800 transition duration-300 cursor-pointer whitespace-nowrap">All Projects</button>
<button className="px-4 py-2 rounded-button bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 transition duration-300 cursor-pointer whitespace-nowrap">Education</button>
<button className="px-4 py-2 rounded-button bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 transition duration-300 cursor-pointer whitespace-nowrap">Healthcare</button>
<button className="px-4 py-2 rounded-button bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 transition duration-300 cursor-pointer whitespace-nowrap">Water</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition duration-300 cursor-pointer">
<img
src="https://readdy.ai/api/search-image?query=African%20children%20in%20a%20newly%20built%20classroom%20with%20bright%20smiles%20and%20colorful%20school%20supplies%2C%20natural%20lighting%20through%20windows%2C%20purple%20accents%20in%20the%20classroom%20decor%2C%20modern%20educational%20setting%20with%20clean%20simple%20background&width=600&height=400&seq=5&orientation=landscape"
alt="Education Project"
className="w-full h-64 object-cover object-top transition duration-500 group-hover:scale-110"
/>
<div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
<div className="p-6">
<h3 className="text-xl font-bold text-white mb-2">New School in Mombasa</h3>
<p className="text-white/90 mb-4">Providing quality education to 500+ children in rural communities.</p>
<span className="text-orange-300 flex items-center">
Learn more <i className="fas fa-arrow-right ml-2"></i>
</span>
</div>
</div>
</div>
<div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition duration-300 cursor-pointer">
<img
src="https://readdy.ai/api/search-image?query=clean%20water%20well%20installation%20in%20rural%20African%20village%20with%20community%20members%20gathering%20around%2C%20sunset%20with%20orange%20and%20purple%20sky%2C%20people%20celebrating%20access%20to%20clean%20water%2C%20modern%20water%20pump%20with%20simple%20clean%20background&width=600&height=400&seq=6&orientation=landscape"
alt="Water Project"
className="w-full h-64 object-cover object-top transition duration-500 group-hover:scale-110"
/>
<div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
<div className="p-6">
<h3 className="text-xl font-bold text-white mb-2">Clean Water Initiative</h3>
<p className="text-white/90 mb-4">Bringing sustainable clean water solutions to remote villages.</p>
<span className="text-orange-300 flex items-center">
Learn more <i className="fas fa-arrow-right ml-2"></i>
</span>
</div>
</div>
</div>
<div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition duration-300 cursor-pointer">
<img
src="https://readdy.ai/api/search-image?query=modern%20healthcare%20clinic%20in%20African%20community%20with%20medical%20staff%20helping%20patients%2C%20medical%20equipment%20visible%2C%20warm%20lighting%20with%20purple%20and%20orange%20color%20accents%2C%20professional%20healthcare%20setting%20with%20clean%20simple%20background&width=600&height=400&seq=7&orientation=landscape"
alt="Healthcare Project"
className="w-full h-64 object-cover object-top transition duration-500 group-hover:scale-110"
/>
<div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
<div className="p-6">
<h3 className="text-xl font-bold text-white mb-2">Healthcare Outreach</h3>
<p className="text-white/90 mb-4">Mobile clinics providing essential healthcare services.</p>
<span className="text-orange-300 flex items-center">
Learn more <i className="fas fa-arrow-right ml-2"></i>
</span>
</div>
</div>
</div>
<div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition duration-300 cursor-pointer">
<img
src="https://readdy.ai/api/search-image?query=agricultural%20training%20program%20in%20rural%20Africa%20with%20farmers%20learning%20sustainable%20farming%20techniques%2C%20lush%20crops%20visible%2C%20sunset%20with%20orange%20and%20purple%20sky%2C%20modern%20farming%20equipment%20with%20clean%20simple%20background&width=600&height=400&seq=8&orientation=landscape"
alt="Agriculture Project"
className="w-full h-64 object-cover object-top transition duration-500 group-hover:scale-110"
/>
<div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
<div className="p-6">
<h3 className="text-xl font-bold text-white mb-2">Sustainable Farming</h3>
<p className="text-white/90 mb-4">Teaching modern agricultural techniques to local farmers.</p>
<span className="text-orange-300 flex items-center">
Learn more <i className="fas fa-arrow-right ml-2"></i>
</span>
</div>
</div>
</div>
<div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition duration-300 cursor-pointer">
<img
src="https://readdy.ai/api/search-image?query=women%20entrepreneurs%20in%20African%20marketplace%20learning%20business%20skills%2C%20colorful%20market%20stalls%2C%20women%20using%20technology%2C%20sunset%20with%20orange%20and%20purple%20sky%2C%20professional%20business%20training%20with%20clean%20simple%20background&width=600&height=400&seq=9&orientation=landscape"
alt="Entrepreneurship Project"
className="w-full h-64 object-cover object-top transition duration-500 group-hover:scale-110"
/>
<div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
<div className="p-6">
<h3 className="text-xl font-bold text-white mb-2">Women Entrepreneurs</h3>
<p className="text-white/90 mb-4">Empowering women with business skills and microloans.</p>
<span className="text-orange-300 flex items-center">
Learn more <i className="fas fa-arrow-right ml-2"></i>
</span>
</div>
</div>
</div>
<div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition duration-300 cursor-pointer">
<img
src="https://readdy.ai/api/search-image?query=solar%20panel%20installation%20on%20African%20community%20building%20with%20technicians%20working%2C%20sustainable%20energy%20project%2C%20sunset%20with%20orange%20and%20purple%20sky%2C%20modern%20renewable%20energy%20technology%20with%20clean%20simple%20background&width=600&height=400&seq=10&orientation=landscape"
alt="Renewable Energy Project"
className="w-full h-64 object-cover object-top transition duration-500 group-hover:scale-110"
/>
<div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
<div className="p-6">
<h3 className="text-xl font-bold text-white mb-2">Renewable Energy</h3>
<p className="text-white/90 mb-4">Solar power installations for schools and community centers.</p>
<span className="text-orange-300 flex items-center">
Learn more <i className="fas fa-arrow-right ml-2"></i>
</span>
</div>
</div>
</div>
</div>
<div className="text-center mt-12">
<button className="bg-orange-500 text-white px-8 py-3 rounded-button hover:bg-orange-600 transition duration-300 font-medium cursor-pointer whitespace-nowrap">
View All Projects
</button>
</div>
</div>
</section>
{/* Featured Stories */}
<section className="py-20 bg-gray-50">
<div className="container mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">Featured Stories</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
<img
src="https://readdy.ai/api/search-image?query=African%20children%20smiling%20in%20new%20classroom%20with%20books%20and%20educational%20materials%2C%20bright%20natural%20lighting%2C%20purple%20school%20uniforms%2C%20modern%20educational%20setting%20with%20clean%20simple%20background&width=600&height=400&seq=11&orientation=landscape"
alt="Education Story"
className="w-full h-48 object-cover object-top"
/>
<div className="p-6">
<div className="flex items-center mb-4">
<span className="text-xs font-medium bg-purple-100 text-purple-700 px-3 py-1 rounded-full">Education</span>
<span className="text-xs text-gray-500 ml-3">June 1, 2025</span>
</div>
<h3 className="text-xl font-bold text-gray-800 mb-3">New School Opens Doors to 500 Children in Rural Kenya</h3>
<p className="text-gray-600 mb-4">Our latest educational initiative brings quality education to children who previously had to walk miles to attend school.</p>
<a href="#" className="text-purple-700 font-medium hover:text-purple-800 transition duration-300 flex items-center cursor-pointer">
Read More <i className="fas fa-arrow-right ml-2"></i>
</a>
</div>
</div>
<div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
<img
src="https://readdy.ai/api/search-image?query=clean%20water%20well%20with%20African%20community%20members%20collecting%20water%2C%20children%20drinking%20clean%20water%2C%20sunset%20with%20orange%20and%20purple%20sky%2C%20modern%20water%20infrastructure%20with%20clean%20simple%20background&width=600&height=400&seq=12&orientation=landscape"
alt="Water Story"
className="w-full h-48 object-cover object-top"
/>
<div className="p-6">
<div className="flex items-center mb-4">
<span className="text-xs font-medium bg-blue-100 text-blue-700 px-3 py-1 rounded-full">Water</span>
<span className="text-xs text-gray-500 ml-3">May 15, 2025</span>
</div>
<h3 className="text-xl font-bold text-gray-800 mb-3">Clean Water Initiative Transforms Village Health Outcomes</h3>
<p className="text-gray-600 mb-4">After installing clean water wells, local health clinic reports 70% reduction in waterborne diseases.</p>
<a href="#" className="text-purple-700 font-medium hover:text-purple-800 transition duration-300 flex items-center cursor-pointer">
Read More <i className="fas fa-arrow-right ml-2"></i>
</a>
</div>
</div>
<div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
<img
src="https://readdy.ai/api/search-image?query=African%20woman%20entrepreneur%20in%20her%20shop%20with%20products%20displayed%2C%20using%20digital%20tablet%20for%20business%2C%20sunset%20light%20with%20orange%20and%20purple%20tones%20through%20window%2C%20modern%20small%20business%20with%20clean%20simple%20background&width=600&height=400&seq=13&orientation=landscape"
alt="Entrepreneurship Story"
className="w-full h-48 object-cover object-top"
/>
<div className="p-6">
<div className="flex items-center mb-4">
<span className="text-xs font-medium bg-green-100 text-green-700 px-3 py-1 rounded-full">Entrepreneurship</span>
<span className="text-xs text-gray-500 ml-3">May 28, 2025</span>
</div>
<h3 className="text-xl font-bold text-gray-800 mb-3">Women's Cooperative Expands Business to International Markets</h3>
<p className="text-gray-600 mb-4">The cooperative we helped establish three years ago now exports handcrafted goods to Europe and North America.</p>
<a href="#" className="text-purple-700 font-medium hover:text-purple-800 transition duration-300 flex items-center cursor-pointer">
Read More <i className="fas fa-arrow-right ml-2"></i>
</a>
</div>
</div>
</div>
</div>
</section>
{/* Donation Section */}
<section className="py-20 bg-gradient-to-r from-purple-900 to-purple-700">
<div className="container mx-auto px-6">
<div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
<div className="md:flex">
<div className="md:w-1/2 p-8 md:p-12 bg-white">
<h2 className="text-3xl font-bold text-gray-800 mb-6">Make a Donation</h2>
<p className="text-gray-600 mb-8">Your contribution helps us continue our mission of empowering communities and transforming lives across Africa.</p>
<div className="mb-6">
<p className="text-gray-700 font-medium mb-3">Select Amount</p>
<div className="grid grid-cols-3 gap-3">
<button
onClick={() => handleDonationAmountChange(25)}
className={`py-3 rounded-button font-medium cursor-pointer whitespace-nowrap ${donationAmount === 25 ? 'bg-purple-700 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
>
$25
</button>
<button
onClick={() => handleDonationAmountChange(50)}
className={`py-3 rounded-button font-medium cursor-pointer whitespace-nowrap ${donationAmount === 50 ? 'bg-purple-700 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
>
$50
</button>
<button
onClick={() => handleDonationAmountChange(100)}
className={`py-3 rounded-button font-medium cursor-pointer whitespace-nowrap ${donationAmount === 100 ? 'bg-purple-700 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
>
$100
</button>
<button
onClick={() => handleDonationAmountChange(250)}
className={`py-3 rounded-button font-medium cursor-pointer whitespace-nowrap ${donationAmount === 250 ? 'bg-purple-700 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
>
$250
</button>
<button
onClick={() => handleDonationAmountChange(500)}
className={`py-3 rounded-button font-medium cursor-pointer whitespace-nowrap ${donationAmount === 500 ? 'bg-purple-700 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
>
$500
</button>
<button
onClick={() => handleDonationAmountChange(1000)}
className={`py-3 rounded-button font-medium cursor-pointer whitespace-nowrap ${donationAmount === 1000 ? 'bg-purple-700 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
>
$1000
</button>
</div>
</div>
<div className="mb-6">
<label htmlFor="customAmount" className="text-gray-700 font-medium mb-2 block">Custom Amount</label>
<div className="relative">
<span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
<input
type="text"
id="customAmount"
value={customAmount}
onChange={handleCustomAmountChange}
className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
placeholder="Enter amount"
/>
</div>
</div>
<div className="mb-8">
<p className="text-gray-700 font-medium mb-3">Payment Method</p>
<div className="flex space-x-4">
<button className="p-3 border border-gray-300 rounded-button hover:bg-gray-50 cursor-pointer whitespace-nowrap">
<i className="fab fa-cc-visa text-blue-700 text-2xl"></i>
</button>
<button className="p-3 border border-gray-300 rounded-button hover:bg-gray-50 cursor-pointer whitespace-nowrap">
<i className="fab fa-cc-mastercard text-red-600 text-2xl"></i>
</button>
<button className="p-3 border border-gray-300 rounded-button hover:bg-gray-50 cursor-pointer whitespace-nowrap">
<i className="fab fa-cc-paypal text-blue-500 text-2xl"></i>
</button>
<button className="p-3 border border-gray-300 rounded-button hover:bg-gray-50 cursor-pointer whitespace-nowrap">
<i className="fab fa-apple-pay text-black text-2xl"></i>
</button>
</div>
</div>
<button className="w-full bg-orange-500 text-white py-4 rounded-button hover:bg-orange-600 transition duration-300 font-medium text-lg cursor-pointer whitespace-nowrap">
Donate Now
</button>
<div className="mt-4 flex items-center justify-center">
<i className="fas fa-lock text-gray-400 mr-2"></i>
<span className="text-sm text-gray-500">Secure Payment</span>
</div>
</div>
<div className="md:w-1/2 bg-purple-50 p-8 md:p-12">
<h3 className="text-xl font-bold text-gray-800 mb-4">Your Impact</h3>
<div className="mb-6">
<div className="flex justify-between mb-2">
<span className="font-medium text-gray-700">Current Campaign: Clean Water</span>
<span className="font-medium text-purple-700">75%</span>
</div>
<div className="w-full bg-gray-200 rounded-full h-2.5">
<div className="bg-purple-700 h-2.5 rounded-full" style={{ width: '75%' }}></div>
</div>
<div className="flex justify-between mt-2 text-sm text-gray-600">
<span>$75,000 raised</span>
<span>$100,000 goal</span>
</div>
</div>
<div className="bg-white p-4 rounded-lg shadow-sm mb-6">
<div className="flex items-start">
<div className="bg-orange-100 p-3 rounded-full mr-4">
<i className="fas fa-tint text-orange-500"></i>
</div>
<div>
<h4 className="font-medium text-gray-800">$25 provides</h4>
<p className="text-gray-600">Clean water for a family for one month</p>
</div>
</div>
</div>
<div className="bg-white p-4 rounded-lg shadow-sm mb-6">
<div className="flex items-start">
<div className="bg-orange-100 p-3 rounded-full mr-4">
<i className="fas fa-book text-orange-500"></i>
</div>
<div>
<h4 className="font-medium text-gray-800">$50 provides</h4>
<p className="text-gray-600">School supplies for a child for one year</p>
</div>
</div>
</div>
<div className="bg-white p-4 rounded-lg shadow-sm">
<div className="flex items-start">
<div className="bg-orange-100 p-3 rounded-full mr-4">
<i className="fas fa-heartbeat text-orange-500"></i>
</div>
<div>
<h4 className="font-medium text-gray-800">$100 provides</h4>
<p className="text-gray-600">Healthcare for a village for one week</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/* News & Updates */}
<section className="py-20">
<div className="container mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center mb-12">
<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-0">News & Updates</h2>
<a href="#" className="text-purple-700 font-medium hover:text-purple-800 transition duration-300 flex items-center cursor-pointer">
View All News <i className="fas fa-arrow-right ml-2"></i>
</a>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
<div className="lg:col-span-2 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
<div className="md:flex h-full">
<div className="md:w-1/2">
<img
src="https://readdy.ai/api/search-image?query=African%20community%20celebration%20event%20with%20colorful%20decorations%2C%20people%20gathered%20for%20foundation%20anniversary%2C%20sunset%20with%20orange%20and%20purple%20sky%2C%20festive%20atmosphere%20with%20clean%20simple%20background&width=600&height=400&seq=14&orientation=landscape"
alt="Foundation Anniversary"
className="w-full h-full object-cover object-top"
/>
</div>
<div className="md:w-1/2 p-6 md:p-8">
<div className="flex items-center mb-4">
<span className="text-xs font-medium bg-purple-100 text-purple-700 px-3 py-1 rounded-full">Event</span>
<span className="text-xs text-gray-500 ml-3">June 4, 2025</span>
</div>
<h3 className="text-2xl font-bold text-gray-800 mb-4">Kayode Philip Foundation Celebrates 10 Years of Impact</h3>
<p className="text-gray-600 mb-6">Join us for our 10th anniversary celebration as we reflect on a decade of community empowerment and look forward to our ambitious goals for the future.</p>
<a href="#" className="text-purple-700 font-medium hover:text-purple-800 transition duration-300 flex items-center cursor-pointer">
Read Full Story <i className="fas fa-arrow-right ml-2"></i>
</a>
</div>
</div>
</div>
<div className="space-y-8">
<div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
<div className="flex items-center mb-3">
<span className="text-xs font-medium bg-green-100 text-green-700 px-3 py-1 rounded-full">Press Release</span>
<span className="text-xs text-gray-500 ml-3">May 30, 2025</span>
</div>
<h3 className="text-xl font-bold text-gray-800 mb-3">Foundation Secures $2M Grant for Healthcare Initiatives</h3>
<p className="text-gray-600 mb-4">New funding will expand our mobile clinic program to reach 20 additional rural communities.</p>
<a href="#" className="text-purple-700 font-medium hover:text-purple-800 transition duration-300 flex items-center cursor-pointer">
Read More <i className="fas fa-arrow-right ml-2"></i>
</a>
</div>
<div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
<div className="flex items-center mb-3">
<span className="text-xs font-medium bg-blue-100 text-blue-700 px-3 py-1 rounded-full">Partnership</span>
<span className="text-xs text-gray-500 ml-3">May 22, 2025</span>
</div>
<h3 className="text-xl font-bold text-gray-800 mb-3">New Partnership with Global Tech Company to Boost Digital Education</h3>
<p className="text-gray-600 mb-4">Collaboration will bring computer labs and internet access to 50 schools across the region.</p>
<a href="#" className="text-purple-700 font-medium hover:text-purple-800 transition duration-300 flex items-center cursor-pointer">
Read More <i className="fas fa-arrow-right ml-2"></i>
</a>
</div>
</div>
</div>
<div className="mt-12 bg-purple-50 rounded-xl p-8 md:p-10">
<div className="md:flex items-center justify-between">
<div className="md:w-1/2 mb-6 md:mb-0">
<h3 className="text-2xl font-bold text-gray-800 mb-3">Subscribe to Our Newsletter</h3>
<p className="text-gray-600">Stay updated with our latest projects, events, and impact stories.</p>
</div>
<div className="md:w-1/2">
<div className="flex">
<input
type="email"
placeholder="Your email address"
className="flex-grow px-4 py-3 rounded-l-button border-none focus:outline-none focus:ring-2 focus:ring-purple-500"
/>
<button className="bg-purple-700 text-white px-6 py-3 rounded-r-button hover:bg-purple-800 transition duration-300 font-medium cursor-pointer whitespace-nowrap">
Subscribe
</button>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Testimonials */}
<section className="py-20 bg-gradient-to-r from-yellow-400/20 to-orange-300/20">
<div className="container mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">Voices of Impact</h2>
<div className="max-w-4xl mx-auto relative">
<div className="bg-white rounded-xl shadow-lg p-8 md:p-10 relative z-10">
<div className="absolute top-0 left-10 transform -translate-y-1/2">
<div className="bg-purple-700 rounded-full p-4 shadow-lg">
<i className="fas fa-quote-right text-white text-xl"></i>
</div>
</div>
<div className="pt-6">
<p className="text-xl text-gray-700 italic mb-8">{testimonials[activeTestimonial].quote}</p>
<div className="flex items-center">
<img
src={testimonials[activeTestimonial].image}
alt={testimonials[activeTestimonial].name}
className="w-16 h-16 rounded-full object-cover mr-4"
/>
<div>
<h4 className="font-bold text-gray-800">{testimonials[activeTestimonial].name}</h4>
<p className="text-gray-600">{testimonials[activeTestimonial].location}</p>
</div>
</div>
</div>
</div>
<div className="flex justify-center mt-8">
<button
onClick={prevTestimonial}
className="mx-2 bg-white text-purple-700 w-10 h-10 rounded-full flex items-center justify-center shadow hover:bg-purple-50 transition duration-300 cursor-pointer whitespace-nowrap !rounded-button"
>
<i className="fas fa-chevron-left"></i>
</button>
{testimonials.map((_, index) => (
<button
key={index}
onClick={() => setActiveTestimonial(index)}
className={`mx-1 w-3 h-3 rounded-full ${activeTestimonial === index ? 'bg-purple-700' : 'bg-gray-300'} cursor-pointer whitespace-nowrap !rounded-button`}
></button>
))}
<button
onClick={nextTestimonial}
className="mx-2 bg-white text-purple-700 w-10 h-10 rounded-full flex items-center justify-center shadow hover:bg-purple-50 transition duration-300 cursor-pointer whitespace-nowrap !rounded-button"
>
<i className="fas fa-chevron-right"></i>
</button>
</div>
</div>
</div>
</section>
{/* Footer */}
<footer className="bg-purple-900 text-white pt-16 pb-8">
<div className="container mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
<div>
<h3 className="text-2xl font-bold mb-6">Kayode Philip Foundation</h3>
<p className="text-purple-200 mb-6">Empowering communities and transforming lives through sustainable development initiatives across Africa.</p>
<div className="flex space-x-4">
<a href="#" className="bg-purple-800 hover:bg-purple-700 w-10 h-10 rounded-full flex items-center justify-center transition duration-300 cursor-pointer">
<i className="fab fa-facebook-f"></i>
</a>
<a href="#" className="bg-purple-800 hover:bg-purple-700 w-10 h-10 rounded-full flex items-center justify-center transition duration-300 cursor-pointer">
<i className="fab fa-twitter"></i>
</a>
<a href="#" className="bg-purple-800 hover:bg-purple-700 w-10 h-10 rounded-full flex items-center justify-center transition duration-300 cursor-pointer">
<i className="fab fa-instagram"></i>
</a>
<a href="#" className="bg-purple-800 hover:bg-purple-700 w-10 h-10 rounded-full flex items-center justify-center transition duration-300 cursor-pointer">
<i className="fab fa-linkedin-in"></i>
</a>
</div>
</div>
<div>
<h4 className="text-lg font-bold mb-6">Quick Links</h4>
<ul className="space-y-3">
<li><a href="#" className="text-purple-200 hover:text-white transition duration-300 cursor-pointer">About Us</a></li>
<li><a href="#" className="text-purple-200 hover:text-white transition duration-300 cursor-pointer">Our Projects</a></li>
<li><a href="#" className="text-purple-200 hover:text-white transition duration-300 cursor-pointer">News & Updates</a></li>
<li><a href="#" className="text-purple-200 hover:text-white transition duration-300 cursor-pointer">Impact Reports</a></li>
<li><a href="#" className="text-purple-200 hover:text-white transition duration-300 cursor-pointer">Get Involved</a></li>
<li><a href="#" className="text-purple-200 hover:text-white transition duration-300 cursor-pointer">Contact Us</a></li>
</ul>
</div>
<div>
<h4 className="text-lg font-bold mb-6">Contact</h4>
<ul className="space-y-3">
<li className="flex items-start">
<i className="fas fa-map-marker-alt mt-1 mr-3 text-orange-400"></i>
<span className="text-purple-200">123 Foundation Street, Lagos, Nigeria</span>
</li>
<li className="flex items-center">
<i className="fas fa-phone-alt mr-3 text-orange-400"></i>
<span className="text-purple-200">+234 123 456 7890</span>
</li>
<li className="flex items-center">
<i className="fas fa-envelope mr-3 text-orange-400"></i>
<span className="text-purple-200">info@kayodephilipfoundation.org</span>
</li>
</ul>
</div>
<div>
<h4 className="text-lg font-bold mb-6">Support Us</h4>
<p className="text-purple-200 mb-4">Your donation makes a difference in the lives of communities across Africa.</p>
<a href="#" className="bg-orange-500 text-white px-6 py-3 rounded-button hover:bg-orange-600 transition duration-300 inline-block font-medium cursor-pointer whitespace-nowrap">
Donate Now
</a>
<div className="mt-6">
<p className="text-sm text-purple-300 mb-2">Secure Payment Options</p>
<div className="flex space-x-3">
<i className="fab fa-cc-visa text-2xl text-gray-300"></i>
<i className="fab fa-cc-mastercard text-2xl text-gray-300"></i>
<i className="fab fa-cc-paypal text-2xl text-gray-300"></i>
<i className="fab fa-cc-apple-pay text-2xl text-gray-300"></i>
</div>
</div>
</div>
</div>
<div className="border-t border-purple-800 mt-12 pt-8">
<div className="flex flex-col md:flex-row justify-between items-center">
<p className="text-purple-300 text-sm mb-4 md:mb-0">© 2025 Kayode Philip Foundation. All rights reserved.</p>
<div className="flex space-x-6">
<a href="#" className="text-purple-300 hover:text-white text-sm transition duration-300 cursor-pointer">Privacy Policy</a>
<a href="#" className="text-purple-300 hover:text-white text-sm transition duration-300 cursor-pointer">Terms of Service</a>
<a href="#" className="text-purple-300 hover:text-white text-sm transition duration-300 cursor-pointer">Cookie Policy</a>
</div>
</div>
</div>
</div>
</footer>
</div>
);
};
export default App */