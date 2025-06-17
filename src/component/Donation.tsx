import React, { useState } from 'react';

const DonationSection: React.FC = () => {
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const togglePopup = (): void => {
    setShowPopup((prev) => !prev);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-purple-900 to-purple-700">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden p-10 text-center">
          <div className='md:flex'>
          <div className="md:w-1/2 p-8 md:p-12 bg-white">
          
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Make a Donation</h2>
          <p className="text-gray-600 mb-8">
            Your contribution helps us continue our mission of empowering communities and transforming lives across Africa.
          </p>

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
                  <strong>Account Number:</strong> 40 9175 7460
                </p>
                <p className="text-sm text-gray-500 mt-4">Please use your name as the payment reference.</p>
              </div>
            </div>
          )}
        </div>
        <div className="md:w-1/2 bg-purple-50 p-8 md:p-12">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Other Items</h3>
          
          <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
          <div className="flex items-start">
          <div className="bg-orange-100 p-3 rounded-full mr-4">
          <i className="fas fa-tint text-orange-500"></i>
          </div>
          <div>
          <h4 className="font-medium text-gray-800">Food items</h4>
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
          <h4 className="font-medium text-gray-800">School Supplies </h4>
          <p className="text-gray-600">School bags, Books, School Uniforms, Writing materials</p>
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
  );
};

export default DonationSection;
