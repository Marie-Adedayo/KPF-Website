import React, {useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../component/Header';
import Footer from '../component/Footer';
import background from '../assets/homepage.jpg'
import DonationSection from '../component/Donation';
import OurWorkSection from '../component/OurWork';
import News from '../component/News/News';
import Testimonials from '../component/Testimonials';
import ImpactSection from '../component/ImpactSection';
import  FeaturedStories from '../component/FeaturedStories'

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
   