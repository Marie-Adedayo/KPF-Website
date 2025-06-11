
// components/Impact/EducationTab.tsx
import React from 'react';

const EducationTab: React.FC = () => (
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
                src="https://readdy.ai/api/search-image?query=before%2520and%2520after%2520comparison%2520of%2520rural%2520African%2520school%2520transformation%2520showing%2520dilapidated%2520classroom%2520on%2520left%2520and%2520modern%2520bright%2520classroom%2520with%2520computers%2520and%2520happy%2520students%2520on%2520right%2520with%2520clean%2520simple%2520background&width=600&height=400&seq=302&orientation=landscape" 
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
);

export default EducationTab;