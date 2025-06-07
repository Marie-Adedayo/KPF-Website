import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaApplePay
} from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-purple-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Kayode Philip Foundation</h3>
            <p className="text-purple-200 mb-6">
              Empowering communities and transforming lives through sustainable development initiatives across Africa.
            </p>
            <div className="flex space-x-4">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="bg-purple-800 hover:bg-purple-700 w-10 h-10 rounded-full flex items-center justify-center transition duration-300 cursor-pointer"
                  aria-label="Social Media"
                >
                  <Icon className="text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://readdy.ai/home/c23ea3ce-3d5b-4114-80f9-5b95c12ad4aa/0a5a6d29-9cc6-4601-81d7-21e65a1da9c7"
                  data-readdy="true"
                  className="text-purple-200 hover:text-white transition duration-300 cursor-pointer"
                >
                  Home
                </a>
              </li>
              {["About Us", "Our Projects", "News & Updates", "Impact Reports", "Get Involved", "Contact Us"].map(
                (label, index) => (
                  <li key={index}>
                    <a href="#" className="text-purple-200 hover:text-white transition duration-300 cursor-pointer">
                      {label}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-orange-400" />
                <span className="text-purple-200">123 Foundation Street, Lagos, Nigeria</span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="mr-3 text-orange-400" />
                <span className="text-purple-200">+234 123 456 7890</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-orange-400" />
                <span className="text-purple-200">info@kayodephilipfoundation.org</span>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-bold mb-6">Support Us</h4>
            <p className="text-purple-200 mb-4">
              Your donation makes a difference in the lives of communities across Africa.
            </p>
            <a
              href="#"
              className="bg-orange-500 text-white px-6 py-3 rounded-button hover:bg-orange-600 transition duration-300 inline-block font-medium cursor-pointer whitespace-nowrap"
            >
              Donate Now
            </a>
            <div className="mt-6">
              <p className="text-sm text-purple-300 mb-2">Secure Payment Options</p>
              <div className="flex space-x-3 text-gray-300 text-2xl">
                <FaCcVisa />
                <FaCcMastercard />
                <FaCcPaypal />
                <FaApplePay />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-purple-300 text-sm mb-4 md:mb-0">
              © 2025 Kayode Philip Foundation. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((text, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-purple-300 hover:text-white text-sm transition duration-300 cursor-pointer"
                >
                  {text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
