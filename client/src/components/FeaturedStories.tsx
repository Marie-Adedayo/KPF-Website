import React from "react";


const FeaturedStories: React.FC = () => {
    
    return (

         <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">Featured Stories</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* Education */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                    <img
                    src="/Images/Edu.jpeg"
                    alt="Education Story"
                    className="w-full h-48 object-cover object-top"
                    />
                    <div className="p-6">
                    <div className="flex items-center mb-4">
                        <span className="text-xs font-medium bg-purple-100 text-purple-700 px-3 py-1 rounded-full">Education</span>
                        <span className="text-xs text-gray-500 ml-3">June 1, 2025</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Bright Futures Ahead: School Bags & Supplies for 1,000 Students</h3>
                    <p className="text-gray-600 mb-4">
                        Empowering young learners with brand new school bags and essential supplies to fuel their dreams and brighten their classroom experience.
                    </p>
                    {/* <a href="#" className="text-purple-700 font-medium hover:text-purple-800 transition duration-300 flex items-center cursor-pointer">
                        Read More <i className="fas fa-arrow-right ml-2"></i>
                    </a> */}
                    </div>
                </div>
                
                {/* Health */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                    <img
                    src="/Images/health-1.jpeg"
                    alt="Health Story"
                    className="w-full h-48 object-cover object-top"
                    />
                    <div className="p-6">
                    <div className="flex items-center mb-4">
                        <span className="text-xs font-medium bg-blue-100 text-blue-700 px-3 py-1 rounded-full">Health</span>
                        <span className="text-xs text-gray-500 ml-3"></span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Free Health Tests: Bringing Care Closer to Communities</h3>
                    <p className="text-gray-600 mb-4">
                        Offering free health screenings to catch illnesses early and ensure wellness, because everyone deserves accessible healthcare.
                    </p>
                    {/* <a href="#" className="text-purple-700 font-medium hover:text-purple-800 transition duration-300 flex items-center cursor-pointer">
                        Read More <i className="fas fa-arrow-right ml-2"></i>
                    </a> */}
                    </div>
                </div>
                
                {/* Entrepreneurship */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                    <img
                    src="/Images/food-2.jpeg"
                    alt="Entrepreneurship Story"
                    className="w-full h-48 object-cover object-top"
                    />
                    <div className="p-6">
                    <div className="flex items-center mb-4">
                        <span className="text-xs font-medium bg-green-100 text-green-700 px-3 py-1 rounded-full">Entrepreneurship</span>
                        <span className="text-xs text-gray-500 ml-3">May 28, 2025</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Unlocking Potential: Free Skill Training for Aspiring Entrepreneurs</h3>
                    <p className="text-gray-600 mb-4">
                        Providing free skill acquisition programs that equip individuals with tools and confidence to build thriving businesses.
                    </p>
                    {/* <a href="#" className="text-purple-700 font-medium hover:text-purple-800 transition duration-300 flex items-center cursor-pointer">
                        Read More <i className="fas fa-arrow-right ml-2"></i>
                    </a> */}
                    </div>
                </div>

                </div>
            </div>
        </section>

    )
}
export default FeaturedStories;