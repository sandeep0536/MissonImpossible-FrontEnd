import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Crossmint from '../pages/CrossMint';
import SuccessPage from '../pages/Success';
import NotFound from '../pages/NotFound';
import FailurePage from '../pages/Failure';
import Collectiofaqs from '../pages/Collectionfaqs';
import WhiteListChecker from '../pages/WhiteListChecker';
import Terms from '../pages/terms';
import Policy from '../pages/privacy-policy';
const MainRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path='/wpkrj-checkout' element={<Crossmint />} />
                <Route path='/success' element={<SuccessPage />} />
                <Route path='/failure' element={<FailurePage />} />
                <Route path='/collectionFAQs' element={<Collectiofaqs />} />
                <Route path='/whitelistchecker' element={<WhiteListChecker />} />
                <Route path='/terms' element={<Terms />} />
                <Route path='/policy' element={<Policy />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default MainRoutes;
