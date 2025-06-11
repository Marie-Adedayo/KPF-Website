import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home  from './pages/Home';
import About from './pages/About';
import Impact from './pages/Impact';
import Project from './pages/Project';
import Impat from './pages/Impat';


const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen font-sans">
        <main className="pt-16 md:pt-16 overflow-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/impat" element={<Impat />} />
          </Routes>
        </main>

      </div>
    </Router>
  );
};

export default App;
