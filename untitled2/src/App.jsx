// App.jsx

import React from 'react';
import MorphingGradient from './components/MorphingGradient';
import PortfolioWebsite from './components/PortfolioWebsite';

const App = () => {
    return (
        <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
            {/*<MorphingGradient /> /!* Background effect *!/*/}
            <PortfolioWebsite /> {/* Your main content */}
        </div>
    );
};

export default App;
