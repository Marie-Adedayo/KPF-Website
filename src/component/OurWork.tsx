import React, { useState, useRef } from 'react';

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
      src: '/Images/edu-1.jpg',
      alt: 'Education Project',
    },
    images: [
      {
        id: 1,
        src: '/Images/Edu.jpeg',
        alt: 'Education Project 1',
      },
      {
        id: 2,
        src: '/Images/edu-2.jpeg',
        alt: 'Education Project 1',
      },
      {
        id: 3,
        src: '/Images/edu-3.jpeg',
        alt: 'Education Project 2',
      },
      
    ], 
  },
  {
    name: 'Healthcare',
    previewImage: {
      id: 1,
      src: '/Images/health-1.jpeg',
      alt: 'Healthcare Project',
    },
    images: [
      {
        id:2,
        src: '/Images/health-2.jpeg',
        alt: 'Healthcare Project 1',
      },
     /*  {
        id: 5,
        src: '/Images/health-2.jpeg',
        alt: 'Healthcare Project 2',
      }, */
      
      
      // add more healthcare images here
    ],
  },
  {
    name: 'Enterprenuership',
    previewImage: {
      id: 3,
      src: '/Images/voc-1.jpeg',
      alt: 'Enterprenuership Project',
    },
    images: [
      {
        id: 2,
        src: '/Images/voc-2.jpeg',
        alt: 'Enterprenuership Project 1',
      },
      {
        id: 3,
        src: '/Images/voc-3.jpeg',
        alt: 'Enterprenuership Project 1',
      },
      {
        id: 4,
        src: '/Images/voc-4.jpeg',
        alt: 'Enterprenuership Project 1',
      },
    ],
  },
  {
    name: 'Zero Hunger',
    previewImage: {
      id: 4,
      src: '/Images/food-22.jpg',
      alt: 'Zero Hunger Project',
    },
    images: [
      {
        id: 4,
        src: '/Images/food-1.jpg',
        alt: 'Zero Hunger Project 1',
      },
      {
        id: 4,
        src: '/Images/food-3.jpg',
        alt: 'Zero Hunger Project 1',
      },
      // add more zero hunger images here
    ],
  },
  // Add other categories similarly...
];

const OurWorkSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Projects');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -150, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 150, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-0">Our Work</h2>

          {/* Mobile arrows + scroll container */}
          <div className="flex items-center w-full md:w-auto">
            {/* Left arrow - visible only on mobile */}
            <button
              onClick={scrollLeft}
              className="md:hidden bg-gray-200 hover:bg-gray-300 rounded p-2 mr-2"
              aria-label="Scroll left"
            >
              <i className="fas fa-chevron-left"></i>
            </button>

            {/* Scrollable buttons container */}
            <div
              ref={scrollContainerRef}
              className="flex space-x-4 overflow-x-auto scrollbar-hide no-scrollbar md:overflow-visible md:space-x-4"
              style={{ scrollBehavior: 'smooth' }}
            >
              <button
                onClick={() => setSelectedCategory('All Projects')}
                className={`flex-shrink-0 px-4 py-2 rounded-button ${
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
                  className={`flex-shrink-0 px-4 py-2 rounded-button ${
                    selectedCategory === category.name
                      ? 'bg-purple-700 text-white'
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                  } transition duration-300 cursor-pointer whitespace-nowrap`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Right arrow - visible only on mobile */}
            <button
              onClick={scrollRight}
              className="md:hidden bg-gray-200 hover:bg-gray-300 rounded p-2 ml-2"
              aria-label="Scroll right"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {selectedCategory === 'All Projects' ? (
            projectsData.flatMap((category) =>
            category.images.map((image) => (
              <div
                key={`${category.name}-${image.id}`}
                className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover object-top transition duration-500 hover:scale-110"
                />
              </div>
            ))
          )

          ) : (
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
          <a href='/project' className="bg-orange-500 text-white px-8 py-3 rounded-button hover:bg-orange-600 transition duration-300 font-medium cursor-pointer whitespace-nowrap">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurWorkSection;
