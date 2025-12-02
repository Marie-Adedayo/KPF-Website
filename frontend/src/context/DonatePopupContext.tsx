// src/context/DonatePopupContext.tsx
import React, { createContext, useState, useContext } from 'react';
import DonatePopup from '../components/DonatePopup';

interface DonatePopupContextType {
  openPopup: () => void;
}

const DonatePopupContext = createContext<DonatePopupContextType | undefined>(undefined);

export const DonatePopupProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const openPopup = () => setIsVisible(true);
  const closePopup = () => setIsVisible(false);

  return (
    <DonatePopupContext.Provider value={{ openPopup }}>
      {children}
      <DonatePopup visible={isVisible} onClose={closePopup} />
    </DonatePopupContext.Provider>
  );
};

export const useDonatePopup = () => {
  const context = useContext(DonatePopupContext);
  if (!context) throw new Error('useDonatePopup must be used within DonatePopupProvider');
  return context;
};
