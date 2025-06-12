// src/components/DonatePopup.tsx
import React from 'react';

interface DonatePopupProps {
  visible: boolean;
  onClose: () => void;
}

const DonatePopup: React.FC<DonatePopupProps> = ({ visible, onClose }) => {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-xl shadow-lg text-left max-w-sm w-full relative">
        <button
          onClick={onClose}
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
  );
};

export default DonatePopup;
