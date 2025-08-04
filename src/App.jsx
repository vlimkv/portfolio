import React, { Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import HomePage from './pages/HomePage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import Header from './components/Header';

const AnimatedBackground = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full bg-slate-900">
      <div className="aurora-1 opacity-40"></div>
      <div className="aurora-2 opacity-30"></div>
      <div className="aurora-3 opacity-20"></div>
    </div>
  </div>
);

function App() {
  const location = useLocation();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AnimatedBackground />
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:projectId" element={<ProjectDetailPage />} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
}

export default App;