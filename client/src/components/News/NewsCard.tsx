import React from 'react';

interface NewsItem {
  category: string;
  date: string;
  title: string;
  description: string;
  image: string;
}

const NewsCard: React.FC<{ item: NewsItem }> = ({ item }) => {
  const categoryColor = {
    "Event": "bg-purple-100 text-purple-700",
    "Press Release": "bg-green-100 text-green-700",
    "Partnership": "bg-blue-100 text-blue-700"
  }[item.category] || "bg-gray-100 text-gray-700";

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
      <img src={item.image} alt={item.title} className="w-full h-56 object-cover object-top" />
      <div className="p-6 flex flex-col justify-between h-full">
        <div>
          <div className="flex items-center mb-4">
            <span className={`text-xs font-medium px-3 py-1 rounded-full ${categoryColor}`}>
              {item.category}
            </span>
            <span className="text-xs text-gray-500 ml-3">{item.date}</span>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
          <p className="text-gray-600 mb-4">{item.description}</p>
        </div>
        <a href="#" className="text-purple-700 font-medium hover:text-purple-800 transition duration-300 flex items-center cursor-pointer">
          Read More <i className="fas fa-arrow-right ml-2"></i>
        </a>
      </div>
    </div>
  );
};

export default NewsCard;

