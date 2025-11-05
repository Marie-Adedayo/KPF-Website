import React, { useState } from 'react';
import PaystackPop from '@paystack/inline-js';


const DonationSection: React.FC = () => {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [showItemPopup, setShowItemPopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string>("");
  const [donationMessage, setDonationMessage] = useState<string>("");
  const [contactInfo, setContactInfo] = useState<string>("");
  const [donorEmail, setDonorEmail] = useState<string>("");
  const [donationAmount, setDonationAmount] = useState<string>("");
  const [currency, setCurrency] = useState<string>('NGN');


  const togglePopup = (): void => {
    setShowPopup((prev) => !prev);
  };

  const handleItemClick = (itemName: string) => {
    setSelectedItem(itemName);
    setShowItemPopup(true);
  };

  const handleItemMessageSubmit = async () => {
    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbweSK0WMYXjd8vNQRbzbUxFOOt_66y5FMGvfmuhV1mvOn0YqL8qAHA6BbcLQknu-BgD9A/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          item: selectedItem,
          message: donationMessage,
          contact: contactInfo,
        }).toString(),
      });

      if (response.ok) {
        alert("Thank you! Your donation message was sent.");
      } else {
        alert("Failed to send your message. Please try again.");
      }
    } catch (error) {
      alert("Error sending message.");
      console.error(error);
    }

    setShowItemPopup(false);
    setDonationMessage("");
    setContactInfo("");
  };


  const handlePaystackPayment = (): void => {
    const publicKey = (import.meta as any).env?.VITE_PAYSTACK_PUBLIC_KEY || '';
    const amountNumber = Number(donationAmount);

    if (!publicKey) {
      alert('Payment unavailable: PAYSTACK public key is not configured.');
      return;
    }
    if (!donorEmail || !donorEmail.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }
    if (!amountNumber || amountNumber <= 0) {
      alert('Please enter a valid donation amount.');
      return;
    }

    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: publicKey,
      email: donorEmail,
      amount: Math.round(amountNumber * 100),
      currency,
      metadata: {
        custom_fields: [
          {
            display_name: 'Contact Info',
            variable_name: 'contact_info',
            value: contactInfo,
          },
        ],
      },
      onSuccess: (transaction: { reference: string }) => {
        alert(`Thank you for your donation!\nReference: ${transaction.reference}`);
        setShowPopup(false);
        setDonorEmail("");
        setDonationAmount("");
      },
      onCancel: () => {
        alert('Payment was cancelled.');
      },
    });
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
                    <h3 className="text-xl font-bold mb-4 text-gray-800">Donate Securely</h3>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-3">
                        <select
                          className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:ring-1 focus:ring-orange-500 focus:outline-none focus:border-orange-500"
                          value={currency}
                          onChange={(e) => setCurrency(e.target.value)}
                        >
                          <option value="NGN">NGN (₦)</option>
                          <option value="GHS">GHS (₵)</option>
                          <option value="USD">USD ($)</option>
                          <option value="ZAR">ZAR (R)</option>
                        </select>
                        <input
                          type="number"
                          className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:ring-1 focus:ring-orange-500 focus:outline-none focus:border-orange-500"
                          placeholder={`Amount (${currency})`}
                          min="0"
                          value={donationAmount}
                          onChange={(e) => setDonationAmount(e.target.value)}
                        />
                      </div>
                      <input
                        type="email"
                        className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:ring-1 focus:ring-orange-500 focus:outline-none focus:border-orange-500"
                        placeholder="Your email"
                        value={donorEmail}
                        onChange={(e) => setDonorEmail(e.target.value)}
                      />
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:ring-1 focus:ring-orange-500 focus:outline-none focus:border-orange-500"
                        placeholder="Optional: your name / phone"
                        value={contactInfo}
                        onChange={(e) => setContactInfo(e.target.value)}
                      />
                      <button
                        onClick={handlePaystackPayment}
                        className="w-full bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 transition"
                      >
                        Pay with Paystack
                      </button>
                     
                      <p className="text-xs text-gray-500">Powered by Paystack • NGN payments supported</p>
                    </div>
                  </div>
                </div>
              )}

            </div>
            <div className="md:w-1/2 bg-purple-50 p-8 md:p-12">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Other Items</h3>
              <div
                onClick={() => handleItemClick("Food items")}
                className="bg-white p-4 rounded-lg shadow-sm mb-6 cursor-pointer hover:bg-gray-50 transition"
              >
                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <i className="fas fa-tint text-orange-500"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Food items</h4>
                    <p className="text-gray-600 justify-items-start">State the item in your message</p>
                  </div>
                </div>
              </div>
              <div
                onClick={() => handleItemClick("School Supplies")}
                className="bg-white p-4 rounded-lg shadow-sm mb-6 cursor-pointer hover:bg-gray-50 transition"
              >
                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <i className="fas fa-book text-orange-500"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">School Supplies </h4>
                    <p className="text-gray-600 justify-items-start">School bags, Books, School Uniforms, Writing materials</p>
                  </div>
                </div>
              </div>
              <div
                onClick={() => handleItemClick("Other items")}
                className="bg-white p-4 rounded-lg shadow-sm mb-6 cursor-pointer hover:bg-gray-50 transition"
              >
                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <i className="fas fa-heartbeat text-orange-500"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Other items</h4>
                    <p className="text-gray-600 justify-items-start">Any other items that are not listed above </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {showItemPopup && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full relative">
              <button
                onClick={() => setShowItemPopup(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl"
              >
                &times;
              </button>
              <h3 className="text-lg font-bold text-gray-800 mb-4">Donate: {selectedItem}</h3>
              <textarea
                className="w-full border border-gray-400 rounded-md p-3 text-gray-700 mb-4 focus:ring-1 focus:ring-orange-500 focus:outline-none focus:border-orange-500"
                placeholder="Write your message here..."
                rows={4}
                value={donationMessage}
                onChange={(e) => setDonationMessage(e.target.value)}
              />

              <input
                type="text"
                className="w-full border border-gray-400 rounded-md p-3 text-gray-700 mb-4 focus:ring-1 focus:ring-orange-500 focus:outline-none focus:border-orange-500"
                placeholder="Your name, email or phone number..."
                value={contactInfo}
                onChange={(e) => setContactInfo(e.target.value)}
              />


              <button
                onClick={handleItemMessageSubmit}
                className="mt-4 w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition"
              >
                Send Message
              </button>
            </div>
          </div>
        )}


      </div>
      <div className="container mx-auto px-6 mt-10">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden p-10 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Join Our Volunteer Team</h2>
          <p className="text-gray-600 mb-8">
            We are always looking for passionate individuals to join our team and help us make a difference.
          </p>
          <a
            href="/volunteer"
            className="bg-orange-500 text-white py-4 px-8 rounded-button hover:bg-orange-600 transition duration-300 font-medium text-lg"
          >
            Apply Now
          </a>
        </div>
      </div>

    </section>
  );
};

export default DonationSection;
