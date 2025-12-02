import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/impact/HeroSection';
import StatsSummary from '../components/impact/StatsSummary';
import TabNavigation from '../components/impact/TabNavigation';
import OverviewTab from '../components/impact/OverviewTab';
import EducationTab from '../components/impact/EducationTab';
import HealthcareTab from '../components/impact/HealthcareTab';
import VocationalTab from '../components/impact/VocationalTab';
import StoriesTab from '../components/impact/StoriesTab';

const Impact: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState(2025);
  const [activeTab, setActiveTab] = useState('overview');

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

