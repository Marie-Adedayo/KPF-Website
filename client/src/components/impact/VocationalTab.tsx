import React from 'react';

const VocationalTab: React.FC = () => {
  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Vocational Empowerment Impact</h2>
        <p className="text-gray-600 mb-8">
          Our vocational empowerment programs equip individuals with the necessary skills and training to build sustainable livelihoods, achieve financial independence, and contribute to their communities' growth.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">8,500+</div>
            <p className="text-gray-800 font-medium">People Trained</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">$2.5M</div>
            <p className="text-gray-800 font-medium">Microloans Distributed</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">5,200+</div>
            <p className="text-gray-800 font-medium">Businesses Supported</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Key Vocational Programs</h3>
            <div className="space-y-6">
              {[
                {
                  title: "Women's Microfinance Program",
                  desc: 'Providing microloans and business training to women entrepreneurs to start and grow small businesses.',
                  goal: '1,000 women',
                  progress: '75%'
                },
                {
                  title: 'Sustainable Agriculture Initiative',
                  desc: 'Teaching sustainable farming techniques and providing equipment to improve crop yields and food security.',
                  goal: '1,500 farmers',
                  progress: '60%'
                },
                {
                  title: 'Youth Vocational Training',
                  desc: 'Providing skills training in trades and entrepreneurship to help young people secure employment.',
                  goal: '800 youth',
                  progress: '85%'
                }
              ].map((item) => (
                <div key={item.title} className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold text-green-800 mb-2">{item.title}</h4>
                  <p className="text-gray-700 mb-2">{item.desc}</p>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-gray-600">2025 Goal: {item.goal}</span>
                    <span className="text-green-700">{item.progress} complete</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: item.progress }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Success Highlight</h3>
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="p-4">
                <h4 className="font-bold text-gray-800 mb-2">Women's Microfinance Program, Tanzania</h4>
                <p className="text-gray-600 text-sm mb-3">
                  Our microfinance program has helped 350 women launch businesses ranging from textiles to food 
                  production. Average household income has increased by 65%, and 85% of loans have been repaid, 
                  creating a sustainable revolving fund.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-green-600 text-sm font-medium">Ongoing since 2022</span>
                  <button className="text-green-700 hover:text-green-800 text-sm font-medium cursor-pointer">
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

export default VocationalTab;

