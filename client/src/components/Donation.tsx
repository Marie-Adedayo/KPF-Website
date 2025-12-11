import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// @ts-ignore
import PaystackPop from '@paystack/inline-js';
import { PayPalButtons } from '@paypal/react-paypal-js';
import DonatePopup from './DonatePopup';

type PaymentMethod = 'paypal' | 'paystack' | 'bank' | null;

const DonationSection: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(null);
  const [showItemPopup, setShowItemPopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');
  const [donationMessage, setDonationMessage] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donationAmount, setDonationAmount] = useState('');
  const [currency, setCurrency] = useState('NGN');

  const openPopup = (method: PaymentMethod) => {
    setPaymentMethod(method);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setPaymentMethod(null);
    setDonorEmail('');
    setDonationAmount('');
    setContactInfo('');
  };

  const handleItemClick = (itemName: string) => {
    setSelectedItem(itemName);
    setShowItemPopup(true);
  };

  const handleItemMessageSubmit = async () => {
    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbweSK0WMYXjd8vNQRbzbUxFOOt_66y5FMGvfmuhV1mvOn0YqL8qAHA6BbcLQknu-BgD9A/exec',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({
            item: selectedItem,
            message: donationMessage,
            contact: contactInfo,
          }).toString(),
        }
      );

      if (response.ok) {
        alert('Thank you! Your donation message was sent.');
      } else {
        alert('Failed to send your message. Please try again.');
      }
    } catch (error) {
      console.error(error);
      alert('Error sending message.');
    }

    setShowItemPopup(false);
    setDonationMessage('');
    setContactInfo('');
  };

  const handlePaystackPayment = () => {
    const publicKey =
      (import.meta as any).env?.VITE_PAYSTACK_PUBLIC_KEY || 'pk_test_yourPublicKeyHere';

    const amountNumber = Number(donationAmount);

    if (!publicKey.startsWith('pk_')) {
      alert('Invalid Paystack Public Key.');
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

    (paystack as any).newTransaction({
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

      onSuccess: async (transaction: { reference: string }) => {
        alert(`Thank you for your donation. Reference: ${transaction.reference}`);
        closePopup();

        try {
          const resp = await fetch('/api/verify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              reference: transaction.reference,
              email: donorEmail,
              amount: Number(donationAmount),
              currency,
              contact: contactInfo,
            }),
          });

          const data = await resp.json();

          if (resp.ok && data.verified) {
            window.location.href =
              `${(import.meta as any).env.VITE_SUCCESS_URL || '/payment-success'}?ref=` +
              encodeURIComponent(transaction.reference);
          } else {
            window.location.href =
              `${(import.meta as any).env.VITE_FAIL_URL || '/payment-failed'}?ref=` +
              encodeURIComponent(transaction.reference) +
              '&reason=verification_failed';
          }
        } catch (err) {
          console.error(err);
          window.location.href =
            `${(import.meta as any).env.VITE_FAIL_URL || '/payment-failed'}?ref=` +
            encodeURIComponent(transaction.reference);
        }
      },

      onCancel: () => {
        alert('Payment was cancelled.');
        window.location.href = '/payment-failed';
      },
    });
  };

  return (
    <section className="py-20 bg-purple-900">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden p-10 text-center">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12 bg-white">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Make a Donation</h2>
              <p className="text-gray-600 mb-8">
                Your contribution helps us continue our mission of empowering communities and transforming lives across Africa.
              </p>

                <div className="flex flex-col gap-4 justify-center">
                <button
                  onClick={() => openPopup('paystack')}
                  className="bg-orange-500 text-white py-4 px-8 rounded-button hover:bg-orange-600 transition duration-300 font-medium text-lg"
                >
                  Donate with Paystack
                </button>

               {/*  <button
                  onClick={() => openPopup('paypal')}
                  className="bg-blue-600 text-white py-4 px-8 rounded-button hover:bg-blue-700 transition duration-300 font-medium text-lg"
                >
                  Donate with PayPal
                </button>
 */}
                <button
                  onClick={() => openPopup('bank')}
                  className="bg-green-600 text-white py-4 px-8 rounded-button hover:bg-green-700 transition duration-300 font-medium text-lg"
                >
                  Donate through Local Bank Transfer
                </button>
                </div>

              {showPopup && paymentMethod !== 'bank' && (
                <div className="fixed inset-0 bg-white/10 backdrop-blur-sm flex justify-center items-center z-50">
                  <div className="bg-white p-8 rounded-xl shadow-lg max-w-sm w-full relative max-h-[90vh] overflow-y-auto">
                    <button
                      onClick={closePopup}
                      className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
                    >
                      &times;
                    </button>

                    <h3 className="text-xl font-bold mb-4 text-gray-800">
                      Donate securely via {paymentMethod === 'paypal' ? 'PayPal' : 'Paystack'}
                    </h3>

                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-3">
                        <select
                          className="w-full border border-gray-300 rounded-md p-3 text-gray-700"
                          value={currency}
                          onChange={(e) => setCurrency(e.target.value)}
                        >
                          {paymentMethod === 'paypal' ? (
                            <>
                              <option value="USD">USD</option>
                              <option value="EUR">EUR</option>
                              <option value="GBP">GBP</option>
                            </>
                          ) : (
                            <>
                              <option value="NGN">NGN</option>
                              <option value="GHS">GHS</option>
                              <option value="USD">USD</option>
                              <option value="ZAR">ZAR</option>
                            </>
                          )}
                        </select>

                        <input
                          type="number"
                          className="w-full border border-gray-300 rounded-md p-3 text-gray-700"
                          placeholder={`Amount (${currency})`}
                          value={donationAmount}
                          onChange={(e) => setDonationAmount(e.target.value)}
                        />
                      </div>

                      {paymentMethod === 'paystack' && (
                        <>
                          <input
                            type="email"
                            className="w-full border border-gray-300 rounded-md p-3 text-gray-700"
                            placeholder="Your email"
                            value={donorEmail}
                            onChange={(e) => setDonorEmail(e.target.value)}
                          />

                          <input
                            type="text"
                            className="w-full border border-gray-300 rounded-md p-3 text-gray-700"
                            placeholder="Optional: your name or phone"
                            value={contactInfo}
                            onChange={(e) => setContactInfo(e.target.value)}
                          />

                          <button
                            onClick={handlePaystackPayment}
                            className="w-full bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600"
                          >
                            Pay with Paystack
                          </button>
                        </>
                      )}

                      {paymentMethod === 'paypal' && (
                        <>
                          <input
                            type="text"
                            className="w-full border border-gray-300 rounded-md p-3 text-gray-700"
                            placeholder="Optional: your name or phone"
                            value={contactInfo}
                            onChange={(e) => setContactInfo(e.target.value)}
                          />

                          {donationAmount && Number(donationAmount) > 0 ? (
                            <PayPalButtons
                              forceReRender={[donationAmount, currency]}
                              createOrder={(data, actions) =>
                                actions.order.create({
                                  intent: 'CAPTURE',
                                  purchase_units: [
                                    {
                                      amount: {
                                        value: donationAmount,
                                        currency_code: currency,
                                      },
                                    },
                                  ],
                                })
                              }
                              onApprove={async (_, actions) => {
                                if (!actions.order) return;
                                const details = await actions.order.capture();
                                const payer = details.payer;

                                alert(`Donation completed. Thank you ${payer?.name?.given_name || ''}!`);
                                closePopup();
                              }}
                              onError={() => alert('Payment error. Please try again.')}
                            />
                          ) : (
                            <p className="text-sm text-gray-500 text-center py-4">
                              Please enter an amount to continue.
                            </p>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right side item donation section */}
            <div className="md:w-1/2 bg-purple-50 p-8 md:p-12">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Other Items</h3>

              <div
                onClick={() => handleItemClick('Food items')}
                className="bg-white p-4 rounded-lg shadow-sm mb-6 cursor-pointer hover:bg-gray-50"
              >
                <h4 className="font-medium text-gray-800">Food items</h4>
                <p className="text-gray-600">State the item in your message</p>
              </div>

              <div
                onClick={() => handleItemClick('School Supplies')}
                className="bg-white p-4 rounded-lg shadow-sm mb-6 cursor-pointer hover:bg-gray-50"
              >
                <h4 className="font-medium text-gray-800">School Supplies</h4>
                <p className="text-gray-600">Bags, books, uniforms, writing materials</p>
              </div>

              <div
                onClick={() => handleItemClick('Other items')}
                className="bg-white p-4 rounded-lg shadow-sm mb-6 cursor-pointer hover:bg-gray-50"
              >
                <h4 className="font-medium text-gray-800">Other items</h4>
                <p className="text-gray-600">Any other support not listed</p>
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
                ×
              </button>

              <h3 className="text-lg font-bold text-gray-800 mb-4">Donate: {selectedItem}</h3>

              <textarea
                className="w-full border border-gray-400 rounded-md p-3 text-gray-700 mb-4"
                placeholder="Write your message..."
                rows={4}
                value={donationMessage}
                onChange={(e) => setDonationMessage(e.target.value)}
              />

              <input
                type="text"
                className="w-full border border-gray-400 rounded-md p-3 text-gray-700 mb-4"
                placeholder="Your name, email or phone"
                value={contactInfo}
                onChange={(e) => setContactInfo(e.target.value)}
              />

              <button
                onClick={handleItemMessageSubmit}
                className="w-full bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600"
              >
                Send Message
              </button>
            </div>
          </div>
        )}

        {/* Bank Transfer Popup */}
        <DonatePopup visible={paymentMethod === 'bank'} onClose={closePopup} />
      </div>

      {/* Volunteer Section */}
      <div className="container mx-auto px-6 mt-10">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden p-10 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Join Our Volunteer Team</h2>
          <p className="text-gray-600 mb-8">
            We welcome passionate individuals who want to support our mission.
          </p>

          <a
            href="/volunteer"
            className="bg-orange-500 text-white py-4 px-8 rounded-button hover:bg-orange-600 font-medium text-lg"
          >
            Apply Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
