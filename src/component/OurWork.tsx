import React, { useState } from 'react';

interface ProjectImage {
  id: number;
  src: string;
  alt: string;
}

interface ProjectCategory {
  name: string;
  images: ProjectImage[];
  previewImage: ProjectImage; // one picture for "All Projects"
}

const projectsData: ProjectCategory[] = [
  {
    name: 'Education',
    previewImage: {
      id: 1,
      src: '/Images/SCHOLARSHIP.jpg',
      alt: 'Education Project',
    },
    images: [
      {
        id: 1,
        src: '/Images/SCHOLARSHIP 2.jpeg',
        alt: 'Education Project 1',
      },
      // add more education images here if you want
    ],
  },
  {
    name: 'Healthcare',
    previewImage: {
      id: 2,
      src: '/Images/health-1.jpeg',
      alt: 'Healthcare Project',
    },
    images: [
      {
        id: 2,
        src: '/Images/Health-2.jpeg',
        alt: 'Healthcare Project 1',
      },
      // add more healthcare images here
    ],
  },
  {
    name: 'Enterprenuership',
    previewImage: {
      id: 3,
      src: '/Images/TRAINING.jpeg',
      alt: 'Enterprenuership Project',
    },
    images: [
      {
        id: 3,
        src: '/Images/TRAINEE HAIRDRESSING.jpeg',
        alt: 'Enterprenuership Project 1',
      },
      // add more water images here
    ],
  },
  {
    name: 'Zero Hunger',
    previewImage: {
      id: 4,
      src: '/Images/FEED ONE SAVE ONE 2.jpg',
      alt: 'Enterprenuership Project',
    },
    images: [
      {
        id: 4,
        src: '/Images/FEED ONE SAVE ONE.jpg',
        alt: 'Enterprenuership Project 1',
      },
      // add more water images here
    ],
  },
  // Add other categories similarly...
];

const OurWorkSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Projects');

  // When "All Projects" is selected, show one preview image per category
  // When a specific category is selected, show all images for that category (no overlay text)

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-0">Our Work</h2>
          <div className="flex space-x-4 flex-wrap">
            <button
              onClick={() => setSelectedCategory('All Projects')}
              className={`px-4 py-2 rounded-button ${
                selectedCategory === 'All Projects'
                  ? 'bg-purple-700 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              } transition duration-300 cursor-pointer whitespace-nowrap`}
            >
              All Projects
            </button>
            {projectsData.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-4 py-2 rounded-button ${
                  selectedCategory === category.name
                    ? 'bg-purple-700 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                } transition duration-300 cursor-pointer whitespace-nowrap`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {selectedCategory === 'All Projects' ? (
            // Show one preview image per project category WITH overlay text
            projectsData.map((category) => (
              <div
                key={category.name}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
              >
                <img
                  src={category.previewImage.src}
                  alt={category.previewImage.alt}
                  className="w-full h-64 object-cover object-top transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{category.name} Project</h3>
                    <span className="text-orange-300 flex items-center">
                      Learn more <i className="fas fa-arrow-right ml-2"></i>
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            // Show ALL images for the selected category, WITHOUT overlay text
            projectsData
              .find((cat) => cat.name === selectedCategory)
              ?.images.map((image) => (
                <div
                  key={image.id}
                  className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover object-top transition duration-500 hover:scale-110"
                  />
                </div>
              ))
          )}
        </div>

        <div className="text-center mt-12">
          <button className="bg-orange-500 text-white px-8 py-3 rounded-button hover:bg-orange-600 transition duration-300 font-medium cursor-pointer whitespace-nowrap">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurWorkSection;
