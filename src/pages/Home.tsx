import React, { useState } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import background from '../assets/homepage.jpg'
import DonationSection from '../component/Donation';
import OurWorkSection from '../component/OurWork';

const Home: React.FC = () => {
  
    const [activeTestimonial, setActiveTestimonial] = useState(0);
  
    const [showPopup, setShowPopup] = useState<boolean>(false);

    const togglePopup = (): void => {
      setShowPopup((prev) => !prev);
    };
    
  
  const testimonials = [
    {
      quote: "The Kayode Philip Foundation transformed our community with clean water access. Their dedication to sustainable solutions has improved countless lives.",
      name: "Sarah Johnson",
      location: "Nairobi, Kenya",
      image: "https://readdy.ai/api/search-image?query=professional%20portrait%20of%20an%20African%20woman%20in%20her%2030s%20with%20short%20hair%20and%20a%20warm%20smile%20wearing%20professional%20attire%20against%20a%20neutral%20background%20with%20soft%20lighting%20and%20natural%20expression&width=100&height=100&seq=1&orientation=squarish"
    },
    {
      quote: "Thanks to the educational programs provided by the Foundation, my children now have access to quality education and resources they never had before.",
      name: "Michael Okafor",
      location: "Lagos, Nigeria",
      image: "https://readdy.ai/api/search-image?query=professional%20portrait%20of%20an%20African%20man%20in%20his%2040s%20with%20glasses%20and%20a%20friendly%20smile%20wearing%20a%20casual%20button-up%20shirt%20against%20a%20neutral%20background%20with%20soft%20lighting%20and%20authentic%20expression&width=100&height=100&seq=2&orientation=squarish"
    },
    {
      quote: "The healthcare initiative launched in our village has saved lives. The Foundation's commitment to sustainable development is truly inspiring.",
      name: "Amina Diallo",
      location: "Accra, Ghana",
      image: "https://readdy.ai/api/search-image?query=professional%20portrait%20of%20a%20young%20African%20woman%20with%20braided%20hair%20and%20a%20bright%20smile%20wearing%20colorful%20traditional%20clothing%20against%20a%20neutral%20background%20with%20soft%20lighting%20and%20genuine%20expression&width=100&height=100&seq=3&orientation=squarish"
    }
  ];
  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <div className="min-h-screen font-sans">
      <Header />
      {/* Hero Section */}
      <section className="relative pt-24 overflow-hidden" style={{ minHeight: '90vh' }}>
        <div className="absolute inset-0 z-0">
          <img
            src={background}
            alt="Community Impact"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-yellow-500/60"></div>
        </div>
        <div
          className="container mx-auto px-6 relative z-10 flex items-center h-full"
          style={{ minHeight: '80vh' }}
        >
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Empowering Communities, Transforming Lives
            </h1>
            <p className="text-xl mb-8">
              The Kayode Philip Foundation is dedicated to sustainable development, education, and
              healthcare initiatives across Africa. Join us in making a difference.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={togglePopup}
                className="bg-orange-500 text-white py-4 px-8 rounded-button hover:bg-orange-600 transition duration-300 font-medium text-lg"
              >
                Donate Now
              </button>

              {showPopup && (
                <div className="fixed inset-0 bg-white/10 backdrop-blur-sm flex justify-center items-center z-50">
                  <div className="bg-white p-8 rounded-xl shadow-lg text-left max-w-sm w-full relative">
                    <button
                      onClick={togglePopup}
                      className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
                      aria-label="Close"
                    >
                      &times;
                    </button>
                    <h3 className="text-xl font-bold mb-4 text-gray-800">Bank Account Details</h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Bank:</strong> Polaris Bank
                    </p>
                    <p className="text-gray-700 mb-2">
                      <strong>Account Name:</strong> Kayode Philip Foundation
                    </p>
                    <p className="text-gray-700 mb-2">
                      <strong>Account Number:</strong>40 9175 7460
                    </p>
                    <p className="text-sm text-gray-500 mt-4">
                      Please use your name as the payment reference.
                    </p>
                  </div>
                </div>
              )}

              <a href='/about' className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-button hover:bg-white/10 transition duration-300 font-medium text-lg cursor-pointer whitespace-nowrap">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
              <div className="inline-block p-4 rounded-full bg-purple-100 mb-6">
                <i className="fas fa-hands-helping text-3xl text-purple-700"></i>
              </div>
              <h3 className="text-4xl font-bold text-purple-700 mb-2">10+</h3>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
              <div className="inline-block p-4 rounded-full bg-purple-100 mb-6">
                <i className="fas fa-users text-3xl text-purple-700"></i>
              </div>
              <h3 className="text-4xl font-bold text-purple-700 mb-2">15,000+</h3>
              <p className="text-gray-600">Lives Impacted</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
              <div className="inline-block p-4 rounded-full bg-purple-100 mb-6">
                <i className="fas fa-globe-africa text-3xl text-purple-700"></i>
              </div>
              <h3 className="text-4xl font-bold text-purple-700 mb-2">11+</h3>
              <p className="text-gray-600">Communities Served</p>
            </div>
{/*             <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
              <div className="inline-block p-4 rounded-full bg-purple-100 mb-6">
                <i className="fas fa-school text-3xl text-purple-700"></i>
              </div>
              <h3 className="text-4xl font-bold text-purple-700 mb-2">75</h3>
              <p className="text-gray-600">Schools Built</p>
            </div> */}
          </div>
        </div>
      </section>
      {/* Our Work Section */}
      <OurWorkSection />
     {/* Featured Stories */}
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
                    <a href="#" className="text-purple-700 font-medium hover:text-purple-800 transition duration-300 flex items-center cursor-pointer">
                        Read More <i className="fas fa-arrow-right ml-2"></i>
                    </a>
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
                    <a href="#" className="text-purple-700 font-medium hover:text-purple-800 transition duration-300 flex items-center cursor-pointer">
                        Read More <i className="fas fa-arrow-right ml-2"></i>
                    </a>
                    </div>
                </div>
                
                {/* Entrepreneurship */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                    <img
                    src="/Images/FEED1 SAVE 1.jpg"
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
                    <a href="#" className="text-purple-700 font-medium hover:text-purple-800 transition duration-300 flex items-center cursor-pointer">
                        Read More <i className="fas fa-arrow-right ml-2"></i>
                    </a>
                    </div>
                </div>

                </div>
            </div>
        </section>

        {/* Donation Section */}
        <DonationSection />
        
        {/* News & Updates */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-0">News & Updates</h2>
              <a href="#" className="text-purple-700 font-medium hover:text-purple-800 transition duration-300 flex items-center cursor-pointer">
              View All News <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                <div className="md:flex h-full">
                  <div className="md:w-1/2">
                    <img
                      src="https://readdy.ai/api/search-image?query=African%20community%20celebration%20event%20with%20colorful%20decorations%2C%20people%20gathered%20for%20foundation%20anniversary%2C%20sunset%20with%20orange%20and%20purple%20sky%2C%20festive%20atmosphere%20with%20clean%20simple%20background&width=600&height=400&seq=14&orientation=landscape"
                      alt="Foundation Anniversary"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="md:w-1/2 p-6 md:p-8">
                    <div className="flex items-center mb-4">
                      <span className="text-xs font-medium bg-purple-100 text-purple-700 px-3 py-1 rounded-full">Event</span>
                      <span className="text-xs text-gray-500 ml-3">June 4, 2025</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Kayode Philip Foundation Celebrates 10 Years of Impact</h3>
                    <p className="text-gray-600 mb-6">Join us for our 10th anniversary celebration as we reflect on a decade of community empowerment and look forward to our ambitious goals for the future.</p>
                    <a href="#" className="text-purple-700 font-medium hover:text-purple-800 transition duration-300 flex items-center cursor-pointer">
                      Read Full Story <i className="fas fa-arrow-right ml-2"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
                  <div className="flex items-center mb-3">
                    <span className="text-xs font-medium bg-green-100 text-green-700 px-3 py-1 rounded-full">Press Release</span>
                    <span className="text-xs text-gray-500 ml-3">May 30, 2025</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Foundation Secures $2M Grant for Healthcare Initiatives</h3>
                  <p className="text-gray-600 mb-4">New funding will expand our mobile clinic program to reach 20 additional rural communities.</p>
                  <a href="#" className="text-purple-700 font-medium hover:text-purple-800 transition duration-300 flex items-center cursor-pointer">
                    Read More <i className="fas fa-arrow-right ml-2"></i>
                  </a>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
                  <div className="flex items-center mb-3">
                    <span className="text-xs font-medium bg-blue-100 text-blue-700 px-3 py-1 rounded-full">Partnership</span>
                    <span className="text-xs text-gray-500 ml-3">May 22, 2025</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">New Partnership with Global Tech Company to Boost Digital Education</h3>
                  <p className="text-gray-600 mb-4">Collaboration will bring computer labs and internet access to 50 schools across the region.</p>
                  <a href="#" className="text-purple-700 font-medium hover:text-purple-800 transition duration-300 flex items-center cursor-pointer">
                    Read More <i className="fas fa-arrow-right ml-2"></i>
                  </a>
                </div>
              </div>
            </div>
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
                      name="EMAIL" // Required by Mailchimp
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
                <input
                  type="text"
                  name="b_618ffcf0cba44816287c3a243_8f695fd776"
                  defaultValue=""
                />
              </div>
            </form>

          </div>
        </section>
    {/* Testimonials */}
    <section className="py-20 bg-gradient-to-r from-yellow-400/20 to-orange-300/20">
    <div className="container mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">Voices of Impact</h2>
    <div className="max-w-4xl mx-auto relative">
    <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 relative z-10">
    <div className="absolute top-0 left-10 transform -translate-y-1/2">
    <div className="bg-purple-700 rounded-full p-4 shadow-lg">
    <i className="fas fa-quote-right text-white text-xl"></i>
    </div>
    </div>
    <div className="pt-6">
    <p className="text-xl text-gray-700 italic mb-8">{testimonials[activeTestimonial].quote}</p>
    <div className="flex items-center">
    <img
    src={testimonials[activeTestimonial].image}
    alt={testimonials[activeTestimonial].name}
    className="w-16 h-16 rounded-full object-cover mr-4"
    />
    <div>
    <h4 className="font-bold text-gray-800">{testimonials[activeTestimonial].name}</h4>
    <p className="text-gray-600">{testimonials[activeTestimonial].location}</p>
    </div>
    </div>
    </div>
    </div>
    <div className="flex justify-center mt-8">
    <button
    onClick={prevTestimonial}
    className="mx-2 bg-white text-purple-700 w-10 h-10 rounded-full flex items-center justify-center shadow hover:bg-purple-50 transition duration-300 cursor-pointer whitespace-nowrap !rounded-button"
    >
    <i className="fas fa-chevron-left"></i>
    </button>
    {testimonials.map((_, index) => (
    <button
    key={index}
    onClick={() => setActiveTestimonial(index)}
    className={`mx-1 w-3 h-3 rounded-full ${activeTestimonial === index ? 'bg-purple-700' : 'bg-gray-300'} cursor-pointer whitespace-nowrap !rounded-button`}
    ></button>
    ))}
    <button
    onClick={nextTestimonial}
    className="mx-2 bg-white text-purple-700 w-10 h-10 rounded-full flex items-center justify-center shadow hover:bg-purple-50 transition duration-300 cursor-pointer whitespace-nowrap !rounded-button"
    >
    <i className="fas fa-chevron-right"></i>
    </button>
    </div>
    </div>
    </div>
    </section>
    <Footer />

    </div>
  );
};
export default Home
   