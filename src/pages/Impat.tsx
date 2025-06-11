import React, { useState } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import HeroSection from '..//component/impactFolder/HeroSection';
import StatsSummary from '../component/impactFolder/StatsSummary';
import TabNavigation from '../component/impactFolder/TabNavigation';
import OverviewTab from '../component/impactFolder/OverviewTab';
import EducationTab from '../component/impactFolder/EducationTab';
import HealthcareTab from '../component/impactFolder/HealthcareTab';
import WaterTab from '../component/impactFolder/WaterTab';
import EconomicTab from '../component/impactFolder/EconomicTab';
import StoriesTab from '../component/impactFolder/StoriesTab';
import DownloadReports from '../component/impactFolder/DownloadReport';
import CallToAction from '../component/impactFolder/CallToAction';

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

      {activeTab === 'overview' && <OverviewTab selectedYear={selectedYear} />}
      {activeTab === 'education' && <EducationTab />}
      {activeTab === 'healthcare' && <HealthcareTab />}
      {activeTab === 'water' && <WaterTab />}
      {activeTab === 'economic' && <EconomicTab />}
      {activeTab === 'stories' && <StoriesTab />}

      <DownloadReports />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Impact;
