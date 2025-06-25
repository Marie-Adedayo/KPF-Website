import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home  from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import News from './pages/News';
import Subscribe from './pages/News';
import VolunteerPage from './pages/VolunteerPage'; 


const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen font-sans">

        <main className="pt-16 md:pt-16 overflow-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/volunteer" element={<VolunteerPage />} /> 
            <Route path="/news" element={<News />} />
            <Route path='id=:subscribeId' element={<Subscribe />} />
          </Routes>
        </main>

      </div>
    </Router>
  );
};

export default App;
