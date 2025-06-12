import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import NewsCard from '../component/News/NewsCard';

const News: React.FC = () => {
  const newsItems = [
    {
      category: "Event",
      date: "June 4, 2025",
      title: "Kayode Philip Foundation Celebrates 10 Years of Impact",
      description: "Join us for our 10th anniversary celebration as we reflect on a decade of community empowerment and look forward to our ambitious goals for the future.",
      image: "https://readdy.ai/api/search-image?query=African%20community%20celebration%20event%20with%20colorful%20decorations%2C%20people%20gathered%20for%20foundation%20anniversary%2C%20sunset%20with%20orange%20and%20purple%20sky%2C%20festive%20atmosphere%20with%20clean%20simple%20background&width=600&height=400&seq=14&orientation=landscape",
    },
    {
      category: "Press Release",
      date: "May 30, 2025",
      title: "Foundation Secures $2M Grant for Healthcare Initiatives",
      description: "New funding will expand our mobile clinic program to reach 20 additional rural communities.",
      image: "/Images/health-1.jpeg"
    },
    {
      category: "Partnership",
      date: "May 22, 2025",
      title: "New Partnership with Global Tech Company to Boost Digital Education",
      description: "Collaboration will bring computer labs and internet access to 50 schools across the region.",
      image: "/Images/Edu.jpeg"
    }
  ];

  return (
    <div className="min-h-screen font-sans bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-10 bg-gradient-to-r from-purple-900/90 to-yellow-400/60 text-white text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">Latest News & Updates</h1>
          <p className="text-xl">Stay informed about our latest activities, partnerships, and community impacts.</p>
        </div>
      </section>

      {/* News Cards */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {newsItems.map((item, index) => (
              <NewsCard key={index} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Section */}
      <section id='subscribe' className="mt-10 bg-purple-50 rounded-xl p-8 md:p-10 mx-6 md:mx-24 mb-20">
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
                className="flex-grow px-4 py-3 rounded-l-button border-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="bg-purple-700 text-white px-6 py-3 rounded-r-button hover:bg-purple-800 transition duration-300 font-medium cursor-pointer whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;
