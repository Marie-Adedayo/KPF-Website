import React, { useState } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import HeroSection from '..//component/impactFolder/HeroSection';
import StatsSummary from '../component/impactFolder/StatsSummary';
import TabNavigation from '../component/impactFolder/TabNavigation';
import OverviewTab from '../component/impactFolder/OverviewTab';
import EducationTab from '../component/impactFolder/EducationTab';
import HealthcareTab from '../component/impactFolder/HealthcareTab';
import VocationalTab from '../component/impactFolder/VoacationalTab';
import StoriesTab from '../component/impactFolder/StoriesTab';

const Impact: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState(2025);
  const [activeTab, setActiveTab] = useState('overview');

  // All your useEffect logic remains for charts here

  return (
    <div className="min-h-screen font-sans">
      <Header />
      <HeroSection selectedYear={selectedYear} setSelectedYear={setSelectedYear} />
      <StatsSummary selectedYear={selectedYear} />
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === 'overview' && <OverviewTab />}
      {activeTab === 'education' && <EducationTab />}
      {activeTab === 'healthcare' && <HealthcareTab />}
      {activeTab === 'vocational' && <VocationalTab />}
      {activeTab === 'stories' && <StoriesTab />}

      <Footer />
    </div>
  );
};

export default Impact;
