import React from 'react';

type Props = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

const tabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'education', label: 'Education' },
  { id: 'healthcare', label: 'Healthcare' },
  { id: 'vocational', label: 'Vocational Empowerment' },
  { id: 'stories', label: 'Success Stories' },
];

const TabNavigation: React.FC<Props> = ({ activeTab, setActiveTab }) => {
  return (
    <section className="bg-white border-b">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-4 font-medium text-gray-700 hover:text-purple-700 border-b-2 transition-colors duration-200 cursor-pointer whitespace-nowrap !rounded-button ${
                activeTab === tab.id ? 'border-purple-700 text-purple-700' : 'border-transparent'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TabNavigation;

