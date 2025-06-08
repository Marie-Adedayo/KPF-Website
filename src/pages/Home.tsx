import React, { useState } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import background from '../assets/homepage.jpg'

const Home: React.FC = () => {
  const [donationAmount, setDonationAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState('');
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  


  const handleDonationAmountChange = (amount: number) => {
    setDonationAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setDonationAmount(0);
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
        <div className="container mx-auto px-6 relative z-10 flex items-center h-full" style={{ minHeight: '80vh' }}>
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">Empowering Communities, Transforming Lives</h1>
            <p className="text-xl mb-8">The Kayode Philip Foundation is dedicated to sustainable development, education, and healthcare initiatives across Africa. Join us in making a difference.</p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-orange-500 text-white px-8 py-3 rounded-button hover:bg-orange-600 transition duration-300 font-medium text-lg cursor-pointer whitespace-nowrap">
                Donate Now
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-button hover:bg-white/10 transition duration-300 font-medium text-lg cursor-pointer whitespace-nowrap">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
              <div className="inline-block p-4 rounded-full bg-purple-100 mb-6">
                <i className="fas fa-hands-helping text-3xl text-purple-700"></i>
              </div>
              <h3 className="text-4xl font-bold text-purple-700 mb-2">120+</h3>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
              <div className="inline-block p-4 rounded-full bg-purple-100 mb-6">
                <i className="fas fa-users text-3xl text-purple-700"></i>
              </div>
              <h3 className="text-4xl font-bold text-purple-700 mb-2">50,000+</h3>
              <p className="text-gray-600">Lives Impacted</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
              <div className="inline-block p-4 rounded-full bg-purple-100 mb-6">
                <i className="fas fa-globe-africa text-3xl text-purple-700"></i>
              </div>
              <h3 className="text-4xl font-bold text-purple-700 mb-2">12</h3>
              <p className="text-gray-600">Countries Served</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
              <div className="inline-block p-4 rounded-full bg-purple-100 mb-6">
                <i className="fas fa-school text-3xl text-purple-700"></i>
              </div>
              <h3 className="text-4xl font-bold text-purple-700 mb-2">75</h3>
              <p className="text-gray-600">Schools Built</p>
            </div>
          </div>
        </div>
      </section>
      {/* Our Work Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-0">Our Work</h2>
            <div className="flex space-x-4">
              <button className="px-4 py-2 rounded-button bg-purple-700 text-white hover:bg-purple-800 transition duration-300 cursor-pointer whitespace-nowrap">All Projects</button>
              <button className="px-4 py-2 rounded-button bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 transition duration-300 cursor-pointer whitespace-nowrap">Education</button>
              <button className="px-4 py-2 rounded-button bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 transition duration-300 cursor-pointer whitespace-nowrap">Healthcare</button>
              <button className="px-4 py-2 rounded-button bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 transition duration-300 cursor-pointer whitespace-nowrap">Water</button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition duration-300 cursor-pointer">
              <img
                src="https://readdy.ai/api/search-image?query=African%20children%20in%20a%20newly%20built%20classroom%20with%20bright%20smiles%20and%20colorful%20school%20supplies%2C%20natural%20lighting%20through%20windows%2C%20purple%20accents%20in%20the%20classroom%20decor%2C%20modern%20educational%20setting%20with%20clean%20simple%20background&width=600&height=400&seq=5&orientation=landscape"
                alt="Education Project"
                className="w-full h-64 object-cover object-top transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">New School in Mombasa</h3>
                  <p className="text-white/90 mb-4">Providing quality education to 500+ children in rural communities.</p>
                  <span className="text-orange-300 flex items-center">
                    Learn more <i className="fas fa-arrow-right ml-2"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition duration-300 cursor-pointer">
              <img
                src="https://readdy.ai/api/search-image?query=clean%20water%20well%20installation%20in%20rural%20African%20village%20with%20community%20members%20gathering%20around%2C%20sunset%20with%20orange%20and%20purple%20sky%2C%20people%20celebrating%20access%20to%20clean%20water%2C%20modern%20water%20pump%20with%20simple%20clean%20background&width=600&height=400&seq=6&orientation=landscape"
                alt="Water Project"
                className="w-full h-64 object-cover object-top transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Clean Water Initiative</h3>
                  <p className="text-white/90 mb-4">Bringing sustainable clean water solutions to remote villages.</p>
                  <span className="text-orange-300 flex items-center">
                    Learn more <i className="fas fa-arrow-right ml-2"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition duration-300 cursor-pointer">
              <img
                src="https://readdy.ai/api/search-image?query=modern%20healthcare%20clinic%20in%20African%20community%20with%20medical%20staff%20helping%20patients%2C%20medical%20equipment%20visible%2C%20warm%20lighting%20with%20purple%20and%20orange%20color%20accents%2C%20professional%20healthcare%20setting%20with%20clean%20simple%20background&width=600&height=400&seq=7&orientation=landscape"
                alt="Healthcare Project"
                className="w-full h-64 object-cover object-top transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Healthcare Outreach</h3>
                  <p className="text-white/90 mb-4">Mobile clinics providing essential healthcare services.</p>
                  <span className="text-orange-300 flex items-center">
                    Learn more <i className="fas fa-arrow-right ml-2"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition duration-300 cursor-pointer">
              <img
                src="https://readdy.ai/api/search-image?query=agricultural%20training%20program%20in%20rural%20Africa%20with%20farmers%20learning%20sustainable%20farming%20techniques%2C%20lush%20crops%20visible%2C%20sunset%20with%20orange%20and%20purple%20sky%2C%20modern%20farming%20equipment%20with%20clean%20simple%20background&width=600&height=400&seq=8&orientation=landscape"
                alt="Agriculture Project"
                className="w-full h-64 object-cover object-top transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Sustainable Farming</h3>
                  <p className="text-white/90 mb-4">Teaching modern agricultural techniques to local farmers.</p>
                  <span className="text-orange-300 flex items-center">
                    Learn more <i className="fas fa-arrow-right ml-2"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition duration-300 cursor-pointer">
              <img
                src="https://readdy.ai/api/search-image?query=women%20entrepreneurs%20in%20African%20marketplace%20learning%20business%20skills%2C%20colorful%20market%20stalls%2C%20women%20using%20technology%2C%20sunset%20with%20orange%20and%20purple%20sky%2C%20professional%20business%20training%20with%20clean%20simple%20background&width=600&height=400&seq=9&orientation=landscape"
                alt="Entrepreneurship Project"
                className="w-full h-64 object-cover object-top transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Women Entrepreneurs</h3>
                  <p className="text-white/90 mb-4">Empowering women with business skills and microloans.</p>
                  <span className="text-orange-300 flex items-center">
                    Learn more <i className="fas fa-arrow-right ml-2"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition duration-300 cursor-pointer">
              <img
                src="https://readdy.ai/api/search-image?query=solar%20panel%20installation%20on%20African%20community%20building%20with%20technicians%20working%2C%20sustainable%20energy%20project%2C%20sunset%20with%20orange%20and%20purple%20sky%2C%20modern%20renewable%20energy%20technology%20with%20clean%20simple%20background&width=600&height=400&seq=10&orientation=landscape"
                alt="Renewable Energy Project"
                className="w-full h-64 object-cover object-top transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Renewable Energy</h3>
                  <p className="text-white/90 mb-4">Solar power installations for schools and community centers.</p>
                  <span className="text-orange-300 flex items-center">
                    Learn more <i className="fas fa-arrow-right ml-2"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <button className="bg-orange-500 text-white px-8 py-3 rounded-button hover:bg-orange-600 transition duration-300 font-medium cursor-pointer whitespace-nowrap">
              View All Projects
            </button>
          </div>
        </div>
      </section>
      {/* Featured Stories */}
    <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">Featured Stories</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
    <img
    src="https://readdy.ai/api/search-image?query=African%20children%20smiling%20in%20new%20classroom%20with%20books%20and%20educational%20materials%2C%20bright%20natural%20lighting%2C%20purple%20school%20uniforms%2C%20modern%20educational%20setting%20with%20clean%20simple%20background&width=600&height=400&seq=11&orientation=landscape"
    alt="Education Story"
    className="w-full h-48 object-cover object-top"
    />
    <div className="p-6">
    <div className="flex items-center mb-4">
    <span className="text-xs font-medium bg-purple-100 text-purple-700 px-3 py-1 rounded-full">Education</span>
    <span className="text-xs text-gray-500 ml-3">June 1, 2025</span>
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-3">New School Opens Doors to 500 Children in Rural Kenya</h3>
    <p className="text-gray-600 mb-4">Our latest educational initiative brings quality education to children who previously had to walk miles to attend school.</p>
    <a href="#" className="text-purple-700 font-medium hover:text-purple-800 transition duration-300 flex items-center cursor-pointer">
    Read More <i className="fas fa-arrow-right ml-2"></i>
    </a>
    </div>
    </div>
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
    <img
    src="https://readdy.ai/api/search-image?query=clean%20water%20well%20with%20African%20community%20members%20collecting%20water%2C%20children%20drinking%20clean%20water%2C%20sunset%20with%20orange%20and%20purple%20sky%2C%20modern%20water%20infrastructure%20with%20clean%20simple%20background&width=600&height=400&seq=12&orientation=landscape"
    alt="Water Story"
    className="w-full h-48 object-cover object-top"
    />
    <div className="p-6">
    <div className="flex items-center mb-4">
    <span className="text-xs font-medium bg-blue-100 text-blue-700 px-3 py-1 rounded-full">Water</span>
    <span className="text-xs text-gray-500 ml-3">May 15, 2025</span>
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-3">Clean Water Initiative Transforms Village Health Outcomes</h3>
    <p className="text-gray-600 mb-4">After installing clean water wells, local health clinic reports 70% reduction in waterborne diseases.</p>
    <a href="#" className="text-purple-700 font-medium hover:text-purple-800 transition duration-300 flex items-center cursor-pointer">
    Read More <i className="fas fa-arrow-right ml-2"></i>
    </a>
    </div>
    </div>
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
    <img
    src="https://readdy.ai/api/search-image?query=African%20woman%20entrepreneur%20in%20her%20shop%20with%20products%20displayed%2C%20using%20digital%20tablet%20for%20business%2C%20sunset%20light%20with%20orange%20and%20purple%20tones%20through%20window%2C%20modern%20small%20business%20with%20clean%20simple%20background&width=600&height=400&seq=13&orientation=landscape"
    alt="Entrepreneurship Story"
    className="w-full h-48 object-cover object-top"
    />
    <div className="p-6">
    <div className="flex items-center mb-4">
    <span className="text-xs font-medium bg-green-100 text-green-700 px-3 py-1 rounded-full">Entrepreneurship</span>
    <span className="text-xs text-gray-500 ml-3">May 28, 2025</span>
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-3">Women's Cooperative Expands Business to International Markets</h3>
    <p className="text-gray-600 mb-4">The cooperative we helped establish three years ago now exports handcrafted goods to Europe and North America.</p>
    <a href="#" className="text-purple-700 font-medium hover:text-purple-800 transition duration-300 flex items-center cursor-pointer">
    Read More <i className="fas fa-arrow-right ml-2"></i>
    </a>
    </div>
    </div>
    </div>
    </div>
    </section>
    {/* Donation Section */}
    <section className="py-20 bg-gradient-to-r from-purple-900 to-purple-700">
    <div className="container mx-auto px-6">
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
    <div className="md:flex">
    <div className="md:w-1/2 p-8 md:p-12 bg-white">
    <h2 className="text-3xl font-bold text-gray-800 mb-6">Make a Donation</h2>
    <p className="text-gray-600 mb-8">Your contribution helps us continue our mission of empowering communities and transforming lives across Africa.</p>
    <div className="mb-6">
    <p className="text-gray-700 font-medium mb-3">Select Amount</p>
    <div className="grid grid-cols-3 gap-3">
    <button
    onClick={() => handleDonationAmountChange(25)}
    className={`py-3 rounded-button font-medium cursor-pointer whitespace-nowrap ${donationAmount === 25 ? 'bg-purple-700 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
    >
    $25
    </button>
    <button
    onClick={() => handleDonationAmountChange(50)}
    className={`py-3 rounded-button font-medium cursor-pointer whitespace-nowrap ${donationAmount === 50 ? 'bg-purple-700 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
    >
    $50
    </button>
    <button
    onClick={() => handleDonationAmountChange(100)}
    className={`py-3 rounded-button font-medium cursor-pointer whitespace-nowrap ${donationAmount === 100 ? 'bg-purple-700 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
    >
    $100
    </button>
    <button
    onClick={() => handleDonationAmountChange(250)}
    className={`py-3 rounded-button font-medium cursor-pointer whitespace-nowrap ${donationAmount === 250 ? 'bg-purple-700 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
    >
    $250
    </button>
    <button
    onClick={() => handleDonationAmountChange(500)}
    className={`py-3 rounded-button font-medium cursor-pointer whitespace-nowrap ${donationAmount === 500 ? 'bg-purple-700 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
    >
    $500
    </button>
    <button
    onClick={() => handleDonationAmountChange(1000)}
    className={`py-3 rounded-button font-medium cursor-pointer whitespace-nowrap ${donationAmount === 1000 ? 'bg-purple-700 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
    >
    $1000
    </button>
    </div>
    </div>
    <div className="mb-6">
    <label htmlFor="customAmount" className="text-gray-700 font-medium mb-2 block">Custom Amount</label>
    <div className="relative">
    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
    <input
    type="text"
    id="customAmount"
    value={customAmount}
    onChange={handleCustomAmountChange}
    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
    placeholder="Enter amount"
    />
    </div>
    </div>
    <div className="mb-8">
    <p className="text-gray-700 font-medium mb-3">Payment Method</p>
    <div className="flex space-x-4">
    <button className="p-3 border border-gray-300 rounded-button hover:bg-gray-50 cursor-pointer whitespace-nowrap">
    <i className="fab fa-cc-visa text-blue-700 text-2xl"></i>
    </button>
    <button className="p-3 border border-gray-300 rounded-button hover:bg-gray-50 cursor-pointer whitespace-nowrap">
    <i className="fab fa-cc-mastercard text-red-600 text-2xl"></i>
    </button>
    <button className="p-3 border border-gray-300 rounded-button hover:bg-gray-50 cursor-pointer whitespace-nowrap">
    <i className="fab fa-cc-paypal text-blue-500 text-2xl"></i>
    </button>
    <button className="p-3 border border-gray-300 rounded-button hover:bg-gray-50 cursor-pointer whitespace-nowrap">
    <i className="fab fa-apple-pay text-black text-2xl"></i>
    </button>
    </div>
    </div>
    <button className="w-full bg-orange-500 text-white py-4 rounded-button hover:bg-orange-600 transition duration-300 font-medium text-lg cursor-pointer whitespace-nowrap">
    Donate Now
    </button>
    <div className="mt-4 flex items-center justify-center">
    <i className="fas fa-lock text-gray-400 mr-2"></i>
    <span className="text-sm text-gray-500">Secure Payment</span>
    </div>
    </div>
    <div className="md:w-1/2 bg-purple-50 p-8 md:p-12">
    <h3 className="text-xl font-bold text-gray-800 mb-4">Your Impact</h3>
    <div className="mb-6">
    <div className="flex justify-between mb-2">
    <span className="font-medium text-gray-700">Current Campaign: Clean Water</span>
    <span className="font-medium text-purple-700">75%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5">
    <div className="bg-purple-700 h-2.5 rounded-full" style={{ width: '75%' }}></div>
    </div>
    <div className="flex justify-between mt-2 text-sm text-gray-600">
    <span>$75,000 raised</span>
    <span>$100,000 goal</span>
    </div>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
    <div className="flex items-start">
    <div className="bg-orange-100 p-3 rounded-full mr-4">
    <i className="fas fa-tint text-orange-500"></i>
    </div>
    <div>
    <h4 className="font-medium text-gray-800">$25 provides</h4>
    <p className="text-gray-600">Clean water for a family for one month</p>
    </div>
    </div>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
    <div className="flex items-start">
    <div className="bg-orange-100 p-3 rounded-full mr-4">
    <i className="fas fa-book text-orange-500"></i>
    </div>
    <div>
    <h4 className="font-medium text-gray-800">$50 provides</h4>
    <p className="text-gray-600">School supplies for a child for one year</p>
    </div>
    </div>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-sm">
    <div className="flex items-start">
    <div className="bg-orange-100 p-3 rounded-full mr-4">
    <i className="fas fa-heartbeat text-orange-500"></i>
    </div>
    <div>
    <h4 className="font-medium text-gray-800">$100 provides</h4>
    <p className="text-gray-600">Healthcare for a village for one week</p>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
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
    <div className="mt-12 bg-purple-50 rounded-xl p-8 md:p-10">
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
    className="flex-grow px-4 py-3 rounded-l-button border-none focus:outline-none focus:ring-2 focus:ring-purple-500"
    />
    <button className="bg-purple-700 text-white px-6 py-3 rounded-r-button hover:bg-purple-800 transition duration-300 font-medium cursor-pointer whitespace-nowrap">
    Subscribe
    </button>
    </div>
    </div>
    </div>
    </div>
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
   