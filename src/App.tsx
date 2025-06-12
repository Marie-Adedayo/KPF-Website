import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home  from './pages/Home';
import About from './pages/About';
import Impact from './pages/Impact';
import Project from './pages/Project';
import Impat from './pages/Impat';
import News from './pages/News';
import Subscribe from './pages/News';


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
            <Route path="/news" element={<News />} />
            <Route path='id=:subscribeId' element={<Subscribe />} />
          </Routes>
        </main>

      </div>
    </Router>
  );
};

export default App;
