import React, { useState } from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
 /*  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaApplePay */
} from 'react-icons/fa';

const Footer: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <footer className="bg-purple-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Kayode Philip Foundation</h3>
            <p className="text-purple-200 mb-6">
              Empowering communities and transforming lives through sustainable development initiatives across Nigeria and beyond.
            </p>
          

            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-800 hover:bg-purple-700 w-10 h-10 rounded-full flex items-center justify-center transition duration-300"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-white" />
              </a>

              <a
                href="https://www.twitter.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-800 hover:bg-purple-700 w-10 h-10 rounded-full flex items-center justify-center transition duration-300"
                aria-label="Twitter"
              >
                <FaTwitter className="text-white" />
              </a>

              <a
                href="https://www.instagram.com/kayodephilipfoundation/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-800 hover:bg-purple-700 w-10 h-10 rounded-full flex items-center justify-center transition duration-300"
                aria-label="Instagram"
              >
                <FaInstagram className="text-white" />
              </a>

              <a
                href="https://www.linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-800 hover:bg-purple-700 w-10 h-10 rounded-full flex items-center justify-center transition duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="text-white" />
              </a>
            </div>

          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/" className="text-purple-200 hover:text-white transition duration-300 cursor-pointer">Home</a></li>
              <li><a href="/about" className="text-purple-200 hover:text-white transition duration-300 cursor-pointer">About Us</a></li>
              <li><a href="/project" className="text-purple-200 hover:text-white transition duration-300 cursor-pointer">Our Project</a></li>
              <li><a href="/news" className="text-purple-200 hover:text-white transition duration-300 cursor-pointer">News & Updates</a></li>
              <li><a href="/impact" className="text-purple-200 hover:text-white transition duration-300 cursor-pointer">Impact Reports</a></li>
              <li><a href="#subscribe" className="text-purple-200 hover:text-white transition duration-300 cursor-pointer">Get Involved</a></li>
              <li><a href="/contact" className="text-purple-200 hover:text-white transition duration-300 cursor-pointer">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-orange-400" />
                <span className="text-purple-200">Ogunmokun way, Iroko Town, Ogun state. Nigeria </span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="mr-3 text-orange-400" />
                <span className="text-purple-200">+234 7011 242 595</span>
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
              Your donation makes a difference in the lives of communities across Nigeria and beyond.
            </p>
            <button
              onClick={togglePopup}
              className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition font-medium"
            >
              Donate
            </button>
{/*             <div className="mt-6">
              <p className="text-sm text-purple-300 mb-2">Secure Payment Options</p>
              <div className="flex space-x-3 text-gray-300 text-2xl">
                <FaCcVisa />
                <FaCcMastercard />
                <FaCcPaypal />
                <FaApplePay />
              </div>
            </div> */}
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
                <a key={index} href="#" className="text-purple-300 hover:text-white text-sm transition duration-300 cursor-pointer">
                  {text}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Popup */}
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
              <p className="text-gray-700 mb-2"><strong>Bank:</strong> Zenith Bank</p>
              <p className="text-gray-700 mb-2"><strong>Account Name:</strong> Kayode Philip Foundation</p>
              <p className="text-gray-700 mb-2"><strong>Account Number:</strong> 1234567890</p>
              <p className="text-sm text-gray-500 mt-4">Please use your name as the payment reference.</p>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
