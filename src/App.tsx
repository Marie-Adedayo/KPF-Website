import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home  from './pages/Home';
import About from './pages/About';
import Impact from './pages/Impact';
import Project from './pages/Project';


const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen font-sans">

        <main className="pt-24 px-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/impact" element={<Impact />} />
          </Routes>
        </main>

      </div>
    </Router>
  );
};

export default App;
