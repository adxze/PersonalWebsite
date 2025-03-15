// App.jsx

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import PortfolioWebsite from './components/PortfolioWebsite';
import AboutPage from './components/AboutPage';

// Wrapper component to apply different styles based on route and screen size
const AppContent = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const [isMobile, setIsMobile] = useState(false);

    // Check if we're on mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // Initial check
        checkMobile();

        // Set up listener for resize
        window.addEventListener('resize', checkMobile);

        // Clean up
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Apply overflow:hidden only on the home page AND when NOT on mobile
    const containerStyle = {
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: isHomePage && !isMobile ? 'hidden' : 'auto'
    };

    return (
        <div style={containerStyle}>
            <Routes>
                <Route path="/" element={<PortfolioWebsite />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </div>
    );
};

const App = () => {
    return (
        <Router>
            <AppContent />
        </Router>
    );
};

export default App;