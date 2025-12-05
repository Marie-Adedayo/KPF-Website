import React from 'react';

const StoriesTab: React.FC = () => {
  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Success Stories</h2>
        <p className="text-gray-600 mb-12 text-center">
          Behind every statistic is a human story. These testimonials and success stories highlight the real impact 
          our work has on individuals and communities across Africa.
        </p>

        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Featured Story</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 h-64 flex items-center justify-center rounded-lg">Image Placeholder</div>
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
              <button className="bg-purple-700 text-white px-6 py-2 rounded-lg hover:bg-purple-800 transition duration-300 cursor-pointer">
                Watch Video Testimonial <i className="fas fa-play-circle ml-2"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              category: 'Economic Empowerment',
              color: 'green',
              title: "Amina's Textile Business",
              desc: "With a $500 microloan, I started my textile business. Now I employ 5 women from my village and can pay for my children's education."
            },
            {
              category: 'Water Access',
              color: 'cyan',
              title: 'Transforming Mbele Village',
              desc: 'Our village used to suffer from water-borne diseases. The new well has changed everything - our children are healthier and attending school regularly.'
            },
            {
              category: 'Healthcare',
              color: 'red',
              title: 'From Patient to Provider',
              desc: 'After receiving treatment at a mobile clinic, I was inspired to become a community health worker. Now I help provide care to my own community.'
            }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-100 h-48 flex items-center justify-center">Image Placeholder</div>
              <div className="p-4">
                <div className={`inline-block px-2 py-1 bg-${item.color}-100 text-${item.color}-800 text-xs font-medium rounded-full mb-2`}>
                  {item.category}
                </div>
                <h4 className="font-bold text-gray-800 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm mb-3">{item.desc}</p>
                <button className="text-purple-700 hover:text-purple-800 text-sm font-medium cursor-pointer">
                  Read Full Story <i className="fas fa-arrow-right ml-1"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoriesTab;
