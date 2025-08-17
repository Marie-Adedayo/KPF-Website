import React from 'react';

const News: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-0">News & Updates</h2>
          <a
            href="/news"
            className="text-purple-700 font-medium hover:text-purple-800 transition duration-300 flex items-center cursor-pointer"
          >
            View All News <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* News Card 1 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
            <img
              src="/src/assets/logo.png"
              alt="Foundation Anniversary"
              className="w-full h-52 object-cover object-top"
            />
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="text-xs font-medium bg-purple-100 text-purple-700 px-3 py-1 rounded-full">Event</span>
                <span className="text-xs text-gray-500 ml-3">June 4, 2025</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Kayode Philip Foundation Celebrates 5 Years of Impact
              </h3>
              <p className="text-gray-600 mb-4">
                Join us for our 5th anniversary celebration as we reflect on years of community empowerment and look forward to our ambitious goals for the future.
              </p>
              <a
                href="#"
                className="text-purple-700 font-medium hover:text-purple-800 transition duration-300 flex items-center cursor-pointer"
              >
                Read Full Story <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>

          {/* News Card 2 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
            <img
              src="/Images/health-1.jpeg"
              alt="Healthcare Outreach"
              className="w-full  object-cover object-top"
            />
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="text-xs font-medium bg-green-100 text-green-700 px-3 py-1 rounded-full">Press Release</span>
                <span className="text-xs text-gray-500 ml-3">April, 2025</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Foundation Gave Free Healthcare to People in Iroko Town
              </h3>
              <p className="text-gray-600 mb-4">
                Over 200 residents received free medical checkups, consultations, and essential medicines during our outreach program.
              </p>
              <a
                href="#"
                className="text-purple-700 font-medium hover:text-purple-800 transition duration-300 flex items-center cursor-pointer"
              >
                Read More <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>

          {/* News Card 3 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
            <img
              src="/Images/edu-2.jpeg"
              alt="Education Outreach"
              className="w-full object-fill object-top"
            />
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="text-xs font-medium bg-blue-100 text-blue-700 px-3 py-1 rounded-full">Partnership</span>
                <span className="text-xs text-gray-500 ml-3">May 22, 2025</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Education: Free School Items Distributed
              </h3>
              <p className="text-gray-600 mb-4">
                Hundreds of students benefited from our recent distribution of free school supplies, supporting education in the communities.
              </p>
              <a
                href="#"
                className="text-purple-700 font-medium hover:text-purple-800 transition duration-300 flex items-center cursor-pointer"
              >
                Read More <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <form
          action="https://kayodephilipfoundation.us10.list-manage.com/subscribe/post?u=618ffcf0cba44816287c3a243&amp;id=8f695fd776&amp;f_id=0000c1e3f0"
          method="post"
          target="_blank"
          noValidate
          className="mt-12 bg-purple-50 rounded-xl p-8 md:p-10"
        >
          <div className="md:flex items-center justify-between">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Subscribe to Our Newsletter</h3>
              <p className="text-gray-600">Stay updated with our latest projects, events, and impact stories.</p>
            </div>
            <div className="md:w-1/2">
              <div className="flex">
                <input
                  type="email"
                  name="EMAIL"
                  placeholder="Your email address"
                  required
                  className="flex-grow px-4 py-3 rounded-l-button border-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button
                  type="submit"
                  className="bg-purple-700 text-white px-6 py-3 rounded-r-button hover:bg-purple-800 transition duration-300 font-medium cursor-pointer whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          {/* Anti-bot hidden input */}
          <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
            <input type="text" name="b_618ffcf0cba44816287c3a243_8f695fd776" defaultValue="" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default News;
