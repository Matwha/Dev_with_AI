import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { store } from './store/store';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Navigation from './Navigation';

function App() {
  return (
    <Router>
      <Navigation /> {/* This will render the navigation links on every page */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;