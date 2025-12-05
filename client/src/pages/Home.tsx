import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
// @ts-ignore: image module without type declarations
import background from '../assets/homepage.jpg';
import DonationSection from '../components/Donation';
import OurWorkSection from '../components/OurWork';
import News from '../components/News/News';
import Testimonials from '../components/Testimonials';
import ImpactSection from '../components/ImpactSection';
import  FeaturedStories from '../components/FeaturedStories'

const Home: React.FC = () => {
 const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
}, [location]);
  
const [showPopup, setShowPopup] = useState(true);

return (
  <div className="min-h-screen font-sans">
    <Header />
{/* Popup modal shown on page load - edit content as needed */}
{showPopup && (
  <div className="fixed inset-0 z-50 flex items-center justify-center">
    <div
      className="absolute inset-0 bg-black/60"
      onClick={() => setShowPopup(false)}
    />

    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="popup-title"
      onClick={(e) => e.stopPropagation()}
      className="relative bg-white rounded-lg shadow-xl max-w-md w-full mx-2 p-4 text-left"
    >
      <button
        aria-label="Close"
        onClick={() => setShowPopup(false)}
        className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
      >
        ✕
      </button>

      <div className="flex justify-center items-center my-6">
        <img src="/Images/foso.jpeg" alt="foso" className="w-[80%] max-w-md h-auto object-cover" />
      </div>

      <div className="flex justify-end gap-3">
        <a
          href="/fodo2026"
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
        >
          Learn more
        </a>
        <button
          onClick={() => setShowPopup(false)}
          className="px-4 py-2 border rounded"
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}
{/* Hero Section */}
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
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 text-center">
              <a
                href='#donate'
                className="bg-orange-500 text-white py-4 px-8 rounded-button hover:bg-orange-600 transition duration-300 font-medium text-lg"
              >
                Donate Now
              </a>

              <a href='/about' className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-button hover:bg-white/10 transition duration-300 font-medium text-lg cursor-pointer whitespace-nowrap">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <ImpactSection />
      {/* Our Work Section */}
      <OurWorkSection />
      {/* Featured Stories */}
      < FeaturedStories/>
      {/* Donation Section */}
      <section id='donate' >
        <DonationSection />
      </section>     
      {/* News & Updates */}
      < News />
      {/* Testimonials */}
      < Testimonials />
   
    <Footer />

    </div>
  );
};
export default Home
   