
import React, { useState } from 'react';

interface LeadershipCardProps {
  name: string;
  title: string;
  image: string;
  summary: string;
  fullText: string;
  socials?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

const LeadershipCard: React.FC<LeadershipCardProps> = ({ name, title, image, summary, fullText, socials }) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 group text-center p-6">
        <img
          src={image}
          alt={name}
          className="w-40 h-40 object-cover object-top mx-auto rounded-full mb-4"
        />
        <h3 className="text-xl font-bold text-gray-800 mb-1">{name}</h3>
        <p className="text-purple-700 font-medium mb-2">{title}</p>
        <p className="text-gray-600 text-sm mb-4">{summary}</p>
        <button
          onClick={() => setShowPopup(true)}
          className="text-purple-600 font-medium underline hover:text-purple-800"
        >
          Read More
        </button>
        <div className="flex justify-center space-x-3 mt-4">
          {socials?.linkedin && (
            <a href={socials.linkedin} className="text-gray-400 hover:text-purple-700 transition duration-300">
              <i className="fab fa-linkedin-in"></i>
            </a>
          )}
          {socials?.twitter && (
            <a href={socials.twitter} className="text-gray-400 hover:text-purple-700 transition duration-300">
              <i className="fab fa-twitter"></i>
            </a>
          )}
          {socials?.email && (
            <a href={`mailto:${socials.email}`} className="text-gray-400 hover:text-purple-700 transition duration-300">
              <i className="fas fa-envelope"></i>
            </a>
          )}
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-2xl w-full relative text-left overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl"
            >
              &times;
            </button>
            <img
              src={image}
              alt={name}
              className="w-32 h-32 object-cover object-top mx-auto rounded-full mb-4"
            />
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-1">{name}</h3>
            <p className="text-center text-purple-700 font-medium mb-4">{title}</p>
            <p className="text-gray-700 text-sm leading-relaxed text-justify whitespace-pre-line">{fullText}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default LeadershipCard;
