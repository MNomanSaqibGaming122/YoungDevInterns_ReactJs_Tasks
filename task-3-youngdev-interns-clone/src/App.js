import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../src/components/HomePage';
import Footer from './components/Footer';
import FloatingActionButton from './components/FloatingActionButton';
import InternshipDomainsPage from './pages/InternshipDomainsPage';
import ApplyNowPage from './pages/ApplyNowPage';
import PortalLoginPage from './pages/PortalLoginPage';

function App() {
  return (
    <Router>
      <FloatingActionButton />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/internship-domains" element={<InternshipDomainsPage />} /> 
        <Route path="/apply-now" element={<ApplyNowPage />}/>
        <Route path="/internee-portal" element={<PortalLoginPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;